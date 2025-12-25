import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EducationCertificates from "@/components/EducationCertificates";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const CertificatesPage = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t("Certificates — Diogo Vieira", "Certificados — Diogo Vieira")}</title>
        <meta
          name="description"
          content={t(
            "Education and certificates of Diogo Vieira, Software Engineer.",
            "Educação e certificados de Diogo Vieira, Engenheiro de Software."
          )}
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="pt-8 pb-4 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("Back", "Voltar")}
            </Link>
            <LanguageToggle />
          </div>
        </div>

        <EducationCertificates showAllCertificates />
        <Footer />
      </main>
    </>
  );
};

export default CertificatesPage;
