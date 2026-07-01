import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 pt-12 md:pt-20 pb-8 md:pb-10 text-white overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src="/assets/1_BRANCO.png"
                loading="lazy"
                alt="ÓSSEO+"
                className="h-16 w-auto group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed text-sm max-w-xs font-light">
              {t('footer.about_desc')}
            </p>
            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.SOCIAL.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CONTACT_INFO.SOCIAL.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Facebook size={18} />
              </a>
              <a
                href={CONTACT_INFO.SOCIAL.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-display font-bold text-sm md:text-lg mb-4 md:mb-8 uppercase tracking-widest text-primary">{t('footer.quick_links')}</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                  {t('common.about_us')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                  {t('common.services')}
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                  {t('common.plans')}
                </Link>
              </li>
              <li>
                <Link to="/atletas" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                  {t('common.performance')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                  {t('common.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-sm md:text-lg mb-4 md:mb-8 uppercase tracking-widest text-primary">{t('common.contact')}</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-200 text-sm font-medium">{CONTACT_INFO.ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href={`tel:${CONTACT_INFO.PHONE}`} className="text-gray-200 text-sm hover:text-white transition-colors font-medium">{CONTACT_INFO.PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-gray-200 text-sm hover:text-white transition-colors font-medium">{CONTACT_INFO.EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter/WhatsApp CTA */}
          <div>
            <h4 className="font-display font-bold text-sm md:text-lg mb-4 md:mb-8 uppercase tracking-widest text-primary">{t('footer.connect')}</h4>
            <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 space-y-3 md:space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed font-medium">
                Contacte-nos agora para agendar a sua avaliação biomecânica inicial.
              </p>
              <a
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP.replace(/\s/g, '')}?text=${t('common.whatsapp_message')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-primary/10 text-sm group"
              >
                {t('footer.whatsapp_btn')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-20 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-gray-300 text-sm font-medium">
              © {new Date().getFullYear()} Ósseo+. {t('common.all_rights_reserved')}
            </p>
            <span className="hidden md:inline text-white/10">|</span>
            <p className="text-gray-400 text-xs md:text-sm font-medium">
              {t('footer.developed_by')}{' '}
              <a 
                href="https://denkenhub.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-white transition-colors underline decoration-primary/30 underline-offset-4"
              >
                Denken Hub
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-300 font-medium">
            <Link to="/terms" className="hover:text-white transition-colors">{t('common.terms')}</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">{t('common.privacy')}</Link>
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t('common.complaints_book')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;