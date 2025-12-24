import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-mono">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          language === 'en'
            ? 'text-primary'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLanguage('pt')}
        className={`px-2 py-1 rounded transition-colors ${
          language === 'pt'
            ? 'text-primary'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageToggle;
