import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>João Silva — Designer & Desenvolvedor Web | Portfolio</title>
        <meta 
          name="description" 
          content="Portfolio de João Silva, designer e desenvolvedor web baseado em Lisboa. Especializado em criar experiências digitais memoráveis com design elegante e código limpo." 
        />
        <meta name="keywords" content="web designer, desenvolvedor web, UI/UX, React, Lisboa, Portugal, portfolio" />
        <link rel="canonical" href="https://joaosilva.pt" />
        
        {/* Open Graph */}
        <meta property="og:title" content="João Silva — Designer & Desenvolvedor Web" />
        <meta property="og:description" content="Transformo ideias em experiências digitais memoráveis, combinando design elegante com código limpo e funcional." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_PT" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="João Silva — Designer & Desenvolvedor Web" />
        <meta name="twitter:description" content="Portfolio de designer e desenvolvedor web baseado em Lisboa." />
      </Helmet>

      <main className="overflow-hidden">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
