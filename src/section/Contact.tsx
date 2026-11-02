"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";

export default function ContactSection() {
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [waFeedback, setWaFeedback] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);
  const [waStarterText, setWaStarterText] = useState(
    "Halo Eko, ada tawaran project menarik"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setCharCount(0);
      setTimeout(() => setSubmitted(false), 3500);
    }, 700);
  }

  function selectStarter(text: string) {
    setWaStarterText(text);
    setWaFeedback("Starter prefilled!");
    setTimeout(() => setWaFeedback(""), 2500);
  }

  function copyWhatsAppNumber() {
    navigator.clipboard.writeText("+6281234567890").then(() => {
      setWaFeedback("Phone number copied: +62 812-3456-7890");
      setTimeout(() => setWaFeedback(""), 2500);
    });
  }

  function copyEmail() {
    navigator.clipboard.writeText("ahasekoseptianto@gmail.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    });
  }

  return (
    <section
      className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 py-16"
      id="contact"
    >
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-tertiary uppercase tracking-widest font-bold">
            04 // Contact Me
          </span>
          <div className="h-px w-12 bg-tertiary/40" />
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Let&apos;s Build Something Together
        </h2>
        <p className="text-on-surface-variant text-sm sm:text-base max-w-xl">
          Open for frontend developer roles, freelance projects, or collaboration
          opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Direct Channels (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* WhatsApp Card */}
          <div className="spotlight-card relative p-6 rounded-3xl bg-gradient-to-br from-emerald-950/30 via-surface-container-low to-surface-container-low border border-emerald-500/30 shadow-[0_4px_30px_rgba(16,185,129,0.08)] hover:shadow-[0_8px_36px_rgba(16,185,129,0.18)] transition-all duration-300">
            <div className="relative flex flex-col gap-4">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.175.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.302-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.245-.586-.494-.506-.677-.516-.176-.009-.376-.011-.577-.011s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.512s1.079 2.914 1.23 3.115c.15.2 2.124 3.243 5.145 4.548.718.311 1.279.497 1.716.636.722.23 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.884.52 3.654 1.42 5.184L2 22l4.98-1.45a9.88 9.88 0 0 0 5.06 1.41h.004c5.5 0 9.96-4.46 9.96-9.96.002-5.5-4.458-10-9.964-10zm0 18.19h-.003a8.16 8.16 0 0 1-4.16-1.144l-.298-.177-3.09.9.92-3.01-.194-.31a8.17 8.17 0 0 1-1.258-4.5c0-4.522 3.68-8.2 8.2-8.2 2.19 0 4.25.855 5.8 2.404a8.14 8.14 0 0 1 2.4 5.8c0 4.522-3.68 8.197-8.195 8.197z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                      Direct Line
                    </span>
                    <h3 className="font-headline font-bold text-base text-white">
                      WhatsApp Chat
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                    Online
                  </span>
                </div>
              </div>

              <p className="text-xs text-on-surface-variant leading-relaxed">
                Fastest way to reach me for project inquiries or collaboration.
              </p>

              {/* Conversation Starters */}
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
                  Quick starters
                </span>
                <div className="flex flex-col gap-1.5">
                  {[
                    "👋 Halo Eko, ada tawaran project menarik",
                    "💼 Hi Eko, interested in Frontend Developer role",
                    "⚡ Halo Eko, butuh developer untuk project web",
                  ].map((text) => (
                    <button
                      key={text}
                      className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 hover:border-emerald-400/50 text-left font-mono text-[11px] text-on-surface hover:text-emerald-300 transition-all"
                      onClick={() => selectStarter(text)}
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Row */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-surface font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_28px_rgba(16,185,129,0.5)]"
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(waStarterText)}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Chat via WhatsApp</span>
                  <span className="material-symbols-outlined text-[16px]">
                    send
                  </span>
                </a>
                <button
                  className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high border border-emerald-500/20 text-emerald-400 transition-all flex items-center justify-center shrink-0"
                  onClick={copyWhatsAppNumber}
                  title="Copy Phone Number"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {waFeedback.includes("copied") ? "check" : "content_copy"}
                  </span>
                </button>
              </div>
              <div
                className={`h-4 font-mono text-[11px] text-emerald-400 transition-opacity duration-200 text-center ${waFeedback ? "opacity-100" : "opacity-0"}`}
              >
                {waFeedback}
              </div>
            </div>
          </div>

          {/* GitHub, Email & Resume Cards */}
          <div className="grid grid-cols-3 gap-3">
            <a
              className="spotlight-card p-4 bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 hover:border-primary/50 rounded-2xl flex flex-col gap-1 transition-all group"
              href="https://github.com/AhasEkoSeptianto"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center justify-between text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  code
                </span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  north_east
                </span>
              </div>
              <span className="font-headline font-bold text-sm text-white mt-1">
                GitHub
              </span>
              <span className="font-mono text-[11px] text-outline">
                @AhasEkoSeptianto
              </span>
            </a>
            <div
              className="spotlight-card cursor-pointer p-4 bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 hover:border-tertiary/50 rounded-2xl flex flex-col gap-1 transition-all group"
              onClick={copyEmail}
            >
              <div className="flex items-center justify-between text-tertiary">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
                <span className="material-symbols-outlined text-[14px]">
                  {emailCopied ? "check" : "content_copy"}
                </span>
              </div>
              <span className="font-headline font-bold text-sm text-white mt-1">
                Email
              </span>
              <span className="font-mono text-[11px] text-outline truncate">
                ahasekoseptianto@gmail.com
              </span>
              <span
                className={`font-mono text-[10px] text-tertiary transition-opacity ${emailCopied ? "opacity-100" : "opacity-0"}`}
              >
                Copied!
              </span>
            </div>
            <a
              className="spotlight-card p-4 bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 hover:border-secondary/50 rounded-2xl flex flex-col gap-1 transition-all group"
              href="/CV_Ahas_Eko_Septianto.pdf"
              download="CV_Ahas_Eko_Septianto.pdf"
            >
              <div className="flex items-center justify-between text-secondary">
                <span className="material-symbols-outlined text-[20px]">
                  description
                </span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-y-0.5 transition-transform">
                  download
                </span>
              </div>
              <span className="font-headline font-bold text-sm text-white mt-1">
                Resume
              </span>
              <span className="font-mono text-[11px] text-outline">
                Download PDF
              </span>
            </a>
          </div>
        </div>

        {/* Contact Form (7 Cols) */}
        <motion.div
          className="spotlight-card lg:col-span-7 bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  className="w-full bg-surface-container px-4 py-2.5 rounded-xl text-white font-body text-sm placeholder:text-outline/40 border border-outline-variant/40 focus:border-tertiary focus:bg-surface-container-high focus:outline-none focus:ring-1 focus:ring-tertiary transition-all"
                  placeholder="Your name"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  className="w-full bg-surface-container px-4 py-2.5 rounded-xl text-white font-body text-sm placeholder:text-outline/40 border border-outline-variant/40 focus:border-tertiary focus:bg-surface-container-high focus:outline-none focus:ring-1 focus:ring-tertiary transition-all"
                  placeholder="you@company.com"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                  Message
                </label>
                <span className="font-mono text-[11px] text-outline">
                  {charCount} / 500
                </span>
              </div>
              <textarea
                className="w-full bg-surface-container px-4 py-3 rounded-xl text-white font-body text-sm placeholder:text-outline/40 border border-outline-variant/40 focus:border-tertiary focus:bg-surface-container-high focus:outline-none focus:ring-1 focus:ring-tertiary transition-all resize-none"
                maxLength={500}
                onInput={(e) =>
                  setCharCount((e.target as HTMLTextAreaElement).value.length)
                }
                placeholder="Tell me about your project or opportunity..."
                required
                rows={4}
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <div
                className={`transition-opacity duration-300 font-mono text-xs text-emerald-400 flex items-center gap-1.5 ${submitted ? "opacity-100" : "opacity-0"}`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
                <span>Message sent! I will reply shortly.</span>
              </div>
              <button
                className="px-7 py-3 rounded-full bg-primary text-surface font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(129,140,248,0.3)] hover:shadow-[0_0_30px_rgba(129,140,248,0.5)] hover:-translate-y-0.5 flex items-center gap-2 ml-auto disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={sending}
              >
                <span>{sending ? "Sending..." : submitted ? "Sent" : "Send Message"}</span>
                <span className="material-symbols-outlined text-[18px]">
                  {sending ? "sync" : submitted ? "done_all" : "send"}
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
