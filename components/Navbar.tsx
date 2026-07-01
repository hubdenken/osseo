import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown, Users, Activity, CreditCard, Phone, HelpCircle, Home, Check } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const currentLanguage = i18n.language.startsWith('en') ? 'English' : 'Português';

  const getLinkClasses = (path: string) => {
    // Check for exact match of pathname and hash (handles both /path and /path#hash)
    const currentPath = location.pathname + location.hash;
    const isMatch = currentPath === path || (path === '/' && location.pathname === '/' && location.hash === '');

    // Base classes
    const base = "flex items-center transition-colors duration-200 py-1 whitespace-nowrap";

    // Exact match for most links
    if (isMatch) {
      return `${base} text-primary border-b-2 border-primary font-bold text-sm`;
    }

    return `${base} text-sm font-medium text-gray-600 hover:text-primary`;
  };

  const navLinks = [
    { name: t('common.home'), path: "/", icon: Home },
    { name: t('common.about_us'), path: "/about", icon: Users },
    { name: t('common.services'), path: "/services", icon: Activity },
    { name: t('common.plans'), path: "/plans", icon: CreditCard },
    { name: t('common.performance'), path: "/atletas", icon: Activity },
    { name: t('common.contact'), path: "/contact", icon: Phone },
    { name: t('common.faq'), path: "/faq", icon: HelpCircle },
  ];

  const handleMobileNavClick = (path: string) => {
    setIsOpen(false);

    // If it's a hash link on the current page (specifically home section links)
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      // Check if we are already on the target page (ignoring the hash) or if it's the home page root
      const isSamePage = location.pathname === pathname || (pathname === '/' && location.pathname === '/');

      if (isSamePage) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const headerOffset = 90; // Approx navbar height + buffer
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }, 100);
        }
      }
    } else if (path === location.pathname) {
      // Scroll to top if clicking current page link
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="/assets/1_CORES.png"
                alt="ÓSSEO+"
                className="h-14 w-auto group-hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-4 xl:space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={getLinkClasses(link.path)}
              >
                <link.icon className="w-4 h-4 mr-1.5" strokeWidth={2} />
                {link.name}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-haspopup="true"
                aria-expanded={isLangOpen}
                aria-label={t('common.language_selector')}
                className="flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium border-l border-gray-200 pl-6 ml-2 focus:outline-none"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span>{currentLanguage === 'English' ? 'English' : 'Português'}</span>
                <ChevronDown className={`w-3 h-3 ml-0.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 py-2 animate-fade-in z-50">
                  <button
                    onClick={() => changeLanguage('pt')}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${i18n.language.startsWith('pt') ? 'text-primary font-bold bg-primary/5' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    Português
                    {i18n.language.startsWith('pt') && <Check size={14} />}
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${i18n.language.startsWith('en') ? 'text-primary font-bold bg-primary/5' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    English
                    {i18n.language.startsWith('en') && <Check size={14} />}
                  </button>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-4 xl:px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              {t('common.contact_us')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => changeLanguage(i18n.language.startsWith('pt') ? 'en' : 'pt')}
              aria-label={t('common.switch_language')}
              className="flex items-center text-gray-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider bg-gray-50 px-3 py-1.5 rounded-full"
            >
              <Globe className="w-3 h-3 mr-1.5" />
              {i18n.language.startsWith('pt') ? 'EN' : 'PT'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-500 hover:text-primary focus:outline-none transition-all duration-300 transform ${isOpen ? 'rotate-90 scale-110 text-primary' : ''}`}
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen md:h-auto overflow-y-auto pb-20 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isLinkActive = (location.pathname + location.hash) === link.path || (link.path === '/' && location.pathname === '/' && !location.hash);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleMobileNavClick(link.path)}
                  className={`flex items-center px-4 py-4 rounded-xl text-base transition-colors ${isLinkActive ? 'bg-primary/10 text-primary font-bold' : 'font-medium text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                >
                  <link.icon className={`w-5 h-5 mr-3 ${isLinkActive ? 'text-primary' : 'text-gray-400'}`} />
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-6 px-3 border-t border-gray-100 pt-6">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center bg-primary text-white px-6 py-4 rounded-xl text-base font-bold shadow-lg"
              >
                {t('common.contact_us')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;