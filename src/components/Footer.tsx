const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} João Silva. Todos os direitos reservados.
          </p>
          <nav className="flex gap-6">
            <a 
              href="#about" 
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a 
              href="#experience" 
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Experiência
            </a>
            <a 
              href="#skills" 
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
