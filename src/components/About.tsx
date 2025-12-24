import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
          {t("About Me", "Sobre Mim")}
        </h2>

        <div className="space-y-4 text-secondary-foreground/90 leading-relaxed">
          <p>
            {t(
              "I'm a software engineer with a focus on backend development, cloud-native systems, and software quality. I work primarily with .NET, C#, and AWS, building scalable microservices and reliable APIs.",
              "Sou engenheiro de software com foco em desenvolvimento backend, sistemas cloud-native e qualidade de software. Trabalho principalmente com .NET, C# e AWS, construindo microserviços escaláveis e APIs fiáveis."
            )}
          </p>

          <p>
            {t(
              "My experience spans from safety-critical systems in aerospace and railway domains to modern cloud infrastructure. I value clean architecture, thorough testing, and code that's built to last.",
              "A minha experiência abrange desde sistemas safety-critical em domínios aeroespaciais e ferroviários até infraestrutura cloud moderna. Valorizo arquitetura limpa, testes rigorosos e código construído para durar."
            )}
          </p>

          <p>
            {t(
              "Currently at Openvia, I design and implement backend services that power mobility solutions, with a strong emphasis on reliability and scalability.",
              "Atualmente na Openvia, desenho e implemento serviços backend que alimentam soluções de mobilidade, com forte ênfase em fiabilidade e escalabilidade."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
