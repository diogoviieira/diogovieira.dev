import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const flagSrc = (lang: 'en' | 'pt') => (lang === 'en' ? '/flags/gb.svg' : '/flags/pt.svg');

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Language"
          className="w-9 h-9 rounded-full border border-border bg-secondary overflow-hidden flex items-center justify-center hover:border-primary/50"
        >
          <img src={flagSrc(language)} alt={language === 'en' ? 'English' : 'Português'} className="w-full h-full object-cover" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          <img src="/flags/gb.svg" alt="English" className="w-4 h-4 rounded-sm mr-2 border border-border" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('pt')}>
          <img src="/flags/pt.svg" alt="Português" className="w-4 h-4 rounded-sm mr-2 border border-border" />
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
