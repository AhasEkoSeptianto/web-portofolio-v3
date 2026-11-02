export interface SkillProps {
  name: string;
  image: string;
  category: "frontend" | "backend" | "database" | "tools" | "design";
  proficiency: number; // 0-100
  label?: string;
}

export const Skill: SkillProps[] = [
  { name: "HTML5", image: "/html-5.svg", category: "frontend", proficiency: 95, label: "Markup" },
  { name: "CSS3", image: "/css.svg", category: "frontend", proficiency: 92, label: "Styling" },
  { name: "JavaScript", image: "/javascript.svg", category: "frontend", proficiency: 90, label: "Core Lang" },
  { name: "Python", image: "/python.svg", category: "backend", proficiency: 70, label: "Scripting" },
  { name: "PHP", image: "/php.svg", category: "backend", proficiency: 75, label: "Server" },
  { name: "MySQL", image: "/mysql.svg", category: "database", proficiency: 80, label: "RDBMS" },
  { name: "MongoDB", image: "/mongodb.svg", category: "database", proficiency: 85, label: "NoSQL" },
  { name: "Node.js", image: "/nodejs.svg", category: "backend", proficiency: 88, label: "Runtime" },
  { name: "Bootstrap", image: "/bootstrap.svg", category: "frontend", proficiency: 85, label: "UI Kit" },
  { name: "Material UI", image: "/materialui.svg", category: "frontend", proficiency: 82, label: "Components" },
  { name: "Tailwind CSS", image: "/tailwindcss.svg", category: "frontend", proficiency: 90, label: "Utility CSS" },
  { name: "Express.js", image: "/expressjs.svg", category: "backend", proficiency: 88, label: "API" },
  { name: "React", image: "/react.svg", category: "frontend", proficiency: 92, label: "UI Library" },
  { name: "Next.js", image: "/nextjs.svg", category: "frontend", proficiency: 88, label: "Framework" },
  { name: "Django", image: "/django.svg", category: "backend", proficiency: 65, label: "Framework" },
  { name: "Laravel", image: "/laravel.svg", category: "backend", proficiency: 75, label: "Framework" },
  { name: "Linux", image: "/linux.svg", category: "tools", proficiency: 70, label: "OS" },
  { name: "Alight Motion", image: "/alightmotion.svg", category: "design", proficiency: 80, label: "Motion" },
  { name: "Figma", image: "/figma.svg", category: "design", proficiency: 78, label: "UI Design" },
  { name: "Photoshop", image: "/photoshop.svg", category: "design", proficiency: 75, label: "Graphics" },
];
