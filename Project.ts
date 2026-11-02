export interface ProjectProps {
  name: string;
  tech: string;
  desc: string;
  site_preview?: string;
  github_code: string;
  image: string;
  category: "fullstack" | "enterprise" | "tools";
  techPills: string[];
  stats?: { label: string; val: string }[];
  challenge?: string;
  solution?: string;
}

export const Project: ProjectProps[] = [
  {
    name: "Wedding Apps Online",
    tech: "Next.js / Express / MongoDB",
    desc: "Aplikasi undangan pernikahan online dengan 2 role (client & editor). Client dapat memilih template, editor mendesain template HTML/CSS/JS. Data tersimpan di MongoDB dengan sistem desain yang animatif dan user-friendly.",
    site_preview: "https://wedding-appss.netlify.app/",
    github_code: "https://github.com/AhasEkoSeptianto/wedding-apps",
    image: "/images-project/wedding-apps.png",
    category: "fullstack",
    techPills: ["Next.js", "Express", "MongoDB", "Antigravity"],
    stats: [
      { label: "Roles", val: "2 Auth" },
      { label: "Templates", val: "Dynamic" },
      { label: "Stack", val: "MERN" },
    ],
    challenge:
      "Membangun sistem multi-role dimana editor dapat mendesain template HTML/CSS/JS secara dinamis dan client dapat memilih serta mengkustomisasi template tersebut.",
    solution:
      "Mengimplementasikan arsitektur role-based dengan Next.js frontend, Express REST API, dan MongoDB untuk menyimpan template serta data user secara terstruktur.",
  },
  {
    name: "Social Media Prism",
    tech: "Next.js / Express / MongoDB",
    desc: "Aplikasi media sosial dengan fitur feed dan chat, dibangun dengan arsitektur clean code, OAuth2, verifikasi token, dan penerapan CI/CD dengan React Testing, GitHub Actions, dan Docker deployment.",
    site_preview: "https://sosial-mediaa.netlify.app/",
    github_code: "https://github.com/AhasEkoSeptianto/social-media-monorepo",
    image: "/images-project/social-media-image.png",
    category: "fullstack",
    techPills: ["Next.js", "Express", "MongoDB", "Docker"],
    stats: [
      { label: "Auth", val: "OAuth2" },
      { label: "CI/CD", val: "GitHub Actions" },
      { label: "Deploy", val: "Docker" },
    ],
    challenge:
      "Membuat platform sosial media dengan real-time chat, feed system, dan pipeline CI/CD yang robust untuk deployment otomatis.",
    solution:
      "Menerapkan OAuth2 authentication, token verification, monorepo architecture, dan CI/CD pipeline menggunakan GitHub Actions dengan Docker containerization.",
  },
  {
    name: "Website Stikom CKI",
    tech: "React.js / Express / MongoDB",
    desc: "Website universitas dengan fitur boarding informasi dan pencatatan kemahasiswaan, fitur login sebagai admin yang juga dapat mendata dosen dan pengelola kampus.",
    site_preview: "https://website-stikomckid-v2.netlify.app/",
    github_code: "https://github.com/AhasEkoSeptianto/website-stikomckiv2-react",
    image: "/images-project/web_stikomcki.png",
    category: "enterprise",
    techPills: ["React.js", "Express", "MongoDB"],
    stats: [
      { label: "Users", val: "Multi-Role" },
      { label: "Features", val: "CRUD Admin" },
      { label: "Type", val: "Enterprise" },
    ],
    challenge:
      "Membangun sistem informasi kampus yang dapat mengelola data mahasiswa, dosen, dan pengelola kampus dengan dashboard admin.",
    solution:
      "Menggunakan React.js dengan Express backend dan MongoDB database untuk sistem CRUD yang efisien dengan role-based access control.",
  },
  {
    name: "Website Keanggotaan UMKM",
    tech: "React / Express / MongoDB",
    desc: "Website pendataan UMKM dengan fitur menampilkan kartu keanggotaan digital. Dibangun sebagai project ujian KKP.",
    site_preview: "https://keanggotaan-umkm-paguyuban.netlify.app/",
    github_code: "https://github.com/AhasEkoSeptianto/kkp_pendataananggotaumkm.git",
    image: "/images-project/umkm_paguyuban.jpeg",
    category: "enterprise",
    techPills: ["React", "Express", "MongoDB"],
    stats: [
      { label: "Fitur", val: "Kartu Digital" },
      { label: "Data", val: "UMKM Member" },
      { label: "Type", val: "Enterprise" },
    ],
  },
  {
    name: "E-Commerce Es Cenyot",
    tech: "Laravel",
    desc: "Aplikasi e-commerce untuk brand ayah, terdapat fitur ganti menu gambar dan jenisnya dari sisi administrasi.",
    github_code: "https://github.com/AhasEkoSeptianto/webapp_escendol",
    image: "/images-project/escendolapp.png",
    category: "fullstack",
    techPills: ["Laravel", "PHP", "MySQL"],
    stats: [
      { label: "Admin", val: "Full CMS" },
      { label: "Catalog", val: "Dynamic" },
      { label: "Framework", val: "Laravel" },
    ],
  },
  {
    name: "Desktop App SPP",
    tech: "Electron",
    desc: "Aplikasi desktop pencatatan SPP murid, dibangun dengan Electron untuk kebutuhan administrasi pembayaran sekolah.",
    github_code: "https://github.com/AhasEkoSeptianto/aplikasi-spp-mahasiswa",
    image: "/images-project/app-sppMahasiswa.png",
    category: "tools",
    techPills: ["Electron", "JavaScript", "Desktop"],
    stats: [
      { label: "Platform", val: "Desktop" },
      { label: "Fitur", val: "SPP Tracker" },
      { label: "Runtime", val: "Electron" },
    ],
  },
];
