import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

// Mappa delle lingue supportate con i relativi codici paese per le bandiere
const LANGUAGES = [
  { code: 'en', name: 'English', flag: 'gb' },
  { code: 'it', name: 'Italiano', flag: 'it' },
  // Aggiungi altre lingue qui
];

const FlagIcon = ({ countryCode }: { countryCode: string }) => (
  <span 
    className={`fi fi-${countryCode.toLowerCase()} w-5 h-5 rounded-full mr-2`} 
    style={{ 
      boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
      fontSize: '1rem',
      lineHeight: '1rem',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  />
);

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => 
    LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0]
  );

  const changeLanguage = async (languageCode: string) => {
    await i18n.changeLanguage(languageCode);
    const lang = LANGUAGES.find(lang => lang.code === languageCode) || LANGUAGES[0];
    setCurrentLanguage(lang);
    setIsOpen(false);
  };

  // Chiudi il menu quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative language-selector">
      <button
        type="button"
        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <FlagIcon countryCode={currentLanguage.flag} />
        <span className="hidden sm:inline-block mr-1">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                  currentLanguage.code === language.code
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                role="menuitem"
              >
                <FlagIcon countryCode={language.flag} />
                <span className="ml-2">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
