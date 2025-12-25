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
        <title>{t("Education — Diogo Vieira", "Educação — Diogo Vieira")}</title>
        <meta
          name="description"
          content={t(
            "Education background of Diogo Vieira, Software Engineer.",
            "Formação académica de Diogo Vieira, Engenheiro de Software."
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

        <EducationCertificates />
        <Footer />
      </main>
    </>
  );
};

export default CertificatesPage;
