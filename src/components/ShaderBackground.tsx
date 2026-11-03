"use client";

import { useEffect, useRef, useState } from "react";

const VS_SOURCE = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FS_SOURCE = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

// Cybernetic plasma & interactive neon flow for Obsidian Cyber palette
void main() {
    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_mouse.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    // Mouse attraction / warp effect
    float mouseDist = length(st - mouse);
    st += normalize(st - mouse) * (0.08 / (mouseDist + 0.3));

    float t = u_time * 0.35;
    
    // Layered sine wave distortion & grid warp
    float v1 = sin(st.x * 2.5 + t);
    float v2 = sin(st.y * 3.0 + t * 1.2);
    float v3 = sin((st.x + st.y) * 2.0 + t * 0.8);
    float v4 = sin(length(st) * 4.0 - t * 1.5);
    
    float field = (v1 + v2 + v3 + v4) * 0.25;
    
    // Cyber color palette: obsidian dark (#090d16), electric indigo (#6366f1), cyan glow (#06b6d4), violet (#a855f7)
    vec3 colDark = vec3(0.04, 0.06, 0.10);
    vec3 colIndigo = vec3(0.39, 0.40, 0.95);
    vec3 colCyan = vec3(0.02, 0.71, 0.83);
    vec3 colViolet = vec3(0.66, 0.33, 0.97);
    
    // Wave contours & neon ridges
    float ridge = abs(sin(field * 6.28318));
    ridge = pow(0.04 / (ridge + 0.02), 1.3);
    
    vec3 color = colDark;
    color = mix(color, colIndigo, smoothstep(-0.6, 0.4, field) * 0.6);
    color = mix(color, colCyan, smoothstep(0.1, 0.9, field) * 0.7);
    color += colViolet * ridge * 0.35;
    
    // Subtle mouse glow
    float mouseGlow = exp(-mouseDist * 3.5);
    color += colCyan * mouseGlow * 0.4;
    
    // Ambient vignette & bottom falloff to integrate into dark page
    float vig = 1.0 - smoothstep(0.5, 1.8, length(st));
    color *= vig * 0.85;

    gl_FragColor = vec4(color, 0.92);
}
`;

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable WebGL on desktop devices with hover & wide viewport for best performance
    const isDesktop =
      window.innerWidth >= 768 &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isDesktop);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    function compileShader(
      glCtx: WebGLRenderingContext,
      type: number,
      source: string
    ) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(gl, gl.VERTEX_SHADER, VS_SOURCE);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let animId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const syncSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const ro = new ResizeObserver(syncSize);
    ro.observe(canvas);
    syncSize();

    const render = (t: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      ro.disconnect();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      style={{ display: "block" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
