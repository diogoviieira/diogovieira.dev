import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-8">
            Vamos <span className="text-gradient italic">trabalhar</span> juntos?
          </h2>
          <p className="font-body text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-12">
            Estou sempre aberto a novos projetos e colaborações interessantes. 
            Se tens uma ideia ou projeto em mente, adoraria ouvir de ti.
          </p>

          {/* Email CTA */}
          <a 
            href="mailto:joao@exemplo.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-full transition-all duration-300 hover:shadow-gold hover:scale-105 mb-16"
          >
            <Mail className="w-5 h-5" />
            joao@exemplo.com
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="font-body text-sm">Lisboa, Portugal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
