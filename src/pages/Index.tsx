import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import EducationCertificates from "@/components/EducationCertificates";
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
            "Drinking coffee while keeping systems running (most of the time)",
            "Tomando café enquanto mantenho os sistemas a funcionar (na maior parte do tempo)"
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
        <Hero />
        <TechStack />
        <Experience />
        <EducationCertificates />
        <Footer />
      </main>
    </>
  );
};

export default Index;
