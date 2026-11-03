export default function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[350px] sm:h-[500px] bg-primary/15 blur-[80px] sm:blur-[160px] rounded-full" />
      <div className="absolute top-[35%] -left-32 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-tertiary/10 blur-[80px] sm:blur-[150px] rounded-full" />
      <div className="absolute top-[65%] -right-32 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-secondary/10 blur-[80px] sm:blur-[150px] rounded-full" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40 sm:opacity-60" />
    </div>
  );
}
