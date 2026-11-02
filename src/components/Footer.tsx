export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-8 border-t border-outline-variant/40 relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-headline font-bold text-base text-white tracking-tight">
              EKO
            </span>
            <span className="font-mono text-[10px] text-tertiary px-2 py-0.5 rounded bg-surface-container-low border border-tertiary/20">
              SYSTEM ACTIVE
            </span>
          </div>
          <p className="font-mono text-xs text-outline">
            © 2025 Eko. Engineered with precision & code.
          </p>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-on-surface-variant">
          <a
            className="hover:text-white transition-colors"
            href="https://github.com/AhasEkoSeptianto"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a className="hover:text-white transition-colors" href="#skills">
            Skills
          </a>
          <a className="hover:text-white transition-colors" href="#story">
            Story
          </a>
          <a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

