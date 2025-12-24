import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>Diogo Vieira — Software Engineer</title>
        <meta
          name="description"
          content={t(
            "Backend & cloud-focused software engineer. Building scalable microservices and reliable APIs with .NET, C#, and AWS.",
            "Engenheiro de software focado em backend e cloud. Construindo microserviços escaláveis e APIs fiáveis com .NET, C# e AWS."
          )}
        />
        <meta
          name="keywords"
          content="software engineer, backend developer, .NET, C#, AWS, microservices, cloud, Portugal"
        />
        <link rel="canonical" href="https://diogovieira.dev" />

        {/* Open Graph */}
        <meta property="og:title" content="Diogo Vieira — Software Engineer" />
        <meta
          property="og:description"
          content={t(
            "Backend & cloud-focused software engineer.",
            "Engenheiro de software focado em backend e cloud."
          )}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === "en" ? "en_US" : "pt_PT"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Diogo Vieira — Software Engineer" />
        <meta
          name="twitter:description"
          content={t(
            "Backend & cloud-focused software engineer.",
            "Engenheiro de software focado em backend e cloud."
          )}
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Certificates />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
