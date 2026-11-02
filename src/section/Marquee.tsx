export default function MarqueeSection() {
  const items = [
    { text: "⚡ OPEN TO WORK — FRONTEND DEVELOPER", color: "text-tertiary", bold: true, dot: true },
    { text: "🚀 REACT & NEXT.JS", color: "text-primary" },
    { text: "🌐 FULL-STACK MERN", color: "text-secondary" },
    { text: "💡 CLEAN ARCHITECTURE", color: "text-white" },
    { text: "⚡ CI/CD & DOCKER", color: "text-emerald-400" },
    { text: "🏆 PRODUCTION READY", color: "text-tertiary", bold: true },
    { text: "🤝 READY TO COLLABORATE", color: "text-white" },
  ];

  const renderItems = () => (
    <div className="flex items-center gap-8 px-6 font-mono text-xs tracking-wider uppercase text-on-surface-variant whitespace-nowrap">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="text-outline/40 mr-8">•</span>}
          <span
            className={`${item.color} ${item.bold ? "font-bold" : "font-semibold"} ${item.dot ? "inline-flex items-center gap-2" : ""}`}
          >
            {item.dot && (
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#38bdf8]" />
            )}
            {item.text}
          </span>
        </span>
      ))}
      <span className="text-outline/40">•</span>
    </div>
  );

  return (
    <section className="w-full overflow-hidden border-y border-outline-variant/40 bg-surface-container-lowest/90 backdrop-blur-xl py-3.5 my-4 relative z-20 marquee-container">
      <div className="animate-marquee flex items-center w-max cursor-default select-none">
        {renderItems()}
        {renderItems()}
      </div>
    </section>
  );
}

