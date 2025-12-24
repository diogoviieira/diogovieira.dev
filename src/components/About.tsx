const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image/Visual */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-card rounded-2xl overflow-hidden shadow-elegant">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-gold rounded-full opacity-80" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/20 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/10 rounded-2xl" />
            </div>

            {/* Right side - Content */}
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Sobre Mim
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 text-foreground">
                Criando experiências digitais com <span className="text-gradient italic">paixão</span>
              </h2>
              <div className="space-y-6 text-secondary-foreground/80 font-body text-lg leading-relaxed">
                <p>
                  Com mais de 8 anos de experiência em design e desenvolvimento web, 
                  dedico-me a criar soluções digitais que não só parecem bonitas, 
                  mas que também funcionam de forma impecável.
                </p>
                <p>
                  A minha abordagem combina estética minimalista com funcionalidade 
                  robusta, sempre mantendo o utilizador no centro de cada decisão de design.
                </p>
                <p>
                  Baseado em Lisboa, trabalho com clientes de todo o mundo, 
                  desde startups inovadoras a marcas estabelecidas.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
                <div>
                  <p className="font-display text-4xl font-semibold text-gradient">8+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Anos de Experiência</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-semibold text-gradient">50+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Projetos Concluídos</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-semibold text-gradient">30+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
