"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-3">
      <div className="max-w-[1240px] mx-auto h-16 bg-surface-container-low/75 backdrop-blur-xl rounded-full px-5 sm:px-6 flex items-center justify-between border border-outline-variant/50 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-2.5 group" href="#">
            <span className="font-headline font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
              EKO
            </span>
            <span className="font-mono text-[11px] text-outline uppercase tracking-wider hidden sm:inline-block">
              // Frontend Dev
            </span>
          </a>
          <div className="hidden md:flex items-center gap-2 pl-3 py-1 pr-3 rounded-full bg-surface-container-lowest/80 border border-emerald-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
              Available
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-container-lowest/70 border border-outline-variant/40">
          <a
            className="px-4 py-1.5 rounded-full font-mono text-xs font-semibold text-white bg-surface-container-high transition-all"
            href="#"
          >
            About
          </a>
          <a
            className="px-4 py-1.5 rounded-full font-mono text-xs text-on-surface-variant hover:text-white hover:bg-surface-container transition-all"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="px-4 py-1.5 rounded-full font-mono text-xs text-on-surface-variant hover:text-white hover:bg-surface-container transition-all"
            href="#projects"
          >
            Works
          </a>
          <a
            className="px-4 py-1.5 rounded-full font-mono text-xs text-on-surface-variant hover:text-white hover:bg-surface-container transition-all"
            href="#story"
          >
            Story
          </a>
          <a
            className="px-4 py-1.5 rounded-full font-mono text-xs text-on-surface-variant hover:text-white hover:bg-surface-container transition-all"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <a
            className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-tertiary text-surface font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(129,140,248,0.4)] hover:shadow-[0_0_26px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 flex items-center gap-1.5"
            href="/CV_Ahas_Eko_Septianto.pdf"
            download="CV_Ahas_Eko_Septianto.pdf"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            Resume
          </a>
          <div className="w-9 h-9 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shadow-inner">
            <span className="material-symbols-outlined text-[20px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

