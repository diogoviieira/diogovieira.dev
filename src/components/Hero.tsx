import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small intro text */}
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8 opacity-0 animate-fade-up">
            Portfolio & Currículo
          </p>

          {/* Main name */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="text-gradient">João</span>{" "}
            <span className="text-foreground">Silva</span>
          </h1>

          {/* Title/Role */}
          <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-muted-foreground mb-12 opacity-0 animate-fade-up animation-delay-200">
            Designer & Desenvolvedor Web
          </p>

          {/* Brief tagline */}
          <p className="font-body text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-16 opacity-0 animate-fade-up animation-delay-300">
            Transformo ideias em experiências digitais memoráveis, 
            combinando design elegante com código limpo e funcional.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up animation-delay-400">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-gold hover:scale-105"
            >
              <span className="relative z-10">Entrar em Contacto</span>
            </a>
            <a 
              href="#experience" 
              className="px-8 py-4 border border-border text-foreground font-body font-medium rounded-full transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Ver Trabalhos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-float"
        aria-label="Scroll para baixo"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
