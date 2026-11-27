const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto text-center overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 bg-dark-card border-dark-border px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-accent mb-8 shadow-inner"></div>
    </section>
  );
};

export default Hero;
