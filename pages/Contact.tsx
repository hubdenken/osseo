import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Smartphone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import emailjs from '@emailjs/browser';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;

    try {
      // NOTA: Estes IDs devem ser configurados no dashboard do EmailJS (emailjs.com)
      // Substituindo pelos IDs reais assim que o usuário os fornecer
      const result = await emailjs.sendForm(
        'service_fwqrzkj', // Service ID
        'template_gxm24y6', // Template ID
        form,
        'wvt7nn7qxi5mdWMyL' // Public Key
      );

      if (result.status === 200) {
        setStatus('success');
        form.reset();
      } else {
        console.error("EmailJS Error:", result.text);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title={t('common.contact')} 
        description={t('contact.subtitle')} 
      />
      {/* Hero */}
      {/* Hero */}
      <section className="bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t('common.contact')}</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-7xl text-gray-900 leading-tight mb-4 md:mb-8">
              {t('contact.title')}
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed font-light">
              {t('contact.subtitle')}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-16 md:py-32 bg-surface-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Contact Form */}
            <RevealOnScroll direction="left" className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="mb-10">
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">{t('contact.form_title')}</h3>
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                </div>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-100 p-10 rounded-2xl text-center space-y-6 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-200">
                      <CheckCircle size={40} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-2xl text-green-900">Mensagem Enviada!</h4>
                      <p className="text-green-700 text-lg">Obrigado pelo seu contacto. Responderemos o mais breve possível.</p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group"
                    >
                      Enviar outra mensagem
                      <Send size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        Ocorreu um erro ao enviar. Por favor, tente novamente mais tarde.
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group space-y-2">
                        <label className="text-sm font-bold text-gray-800 ml-1 transition-colors group-focus-within:text-primary">{t('contact.name')}</label>
                        <input
                          name="name"
                          required
                          type="text"
                          className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-4 md:px-6 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-400"
                          placeholder={t('contact.form.name_placeholder')}
                        />
                      </div>
                      <div className="group space-y-2">
                        <label className="text-sm font-bold text-gray-800 ml-1 transition-colors group-focus-within:text-primary">{t('contact.email')}</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-4 md:px-6 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-400"
                          placeholder={t('contact.form.email_placeholder')}
                        />
                      </div>
                    </div>
                    <div className="group space-y-2">
                      <label className="text-sm font-bold text-gray-800 ml-1 transition-colors group-focus-within:text-primary">{t('contact.subject')}</label>
                      <input
                        name="subject"
                        required
                        type="text"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-4 md:px-6 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900"
                      />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-sm font-bold text-gray-800 ml-1 transition-colors group-focus-within:text-primary">{t('contact.message')}</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-4 md:px-6 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none resize-none text-gray-900 placeholder-gray-400"
                        placeholder={t('contact.form.message_placeholder')}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full md:w-auto min-w-[200px] bg-primary hover:bg-primary-dark text-white py-4 md:py-5 px-10 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 group active:scale-95"
                    >
                      {status === 'sending' ? 'A enviar...' : t('contact.send')}
                      <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>

            {/* Info */}
            <RevealOnScroll direction="right" className="lg:col-span-5">
              <div className="space-y-10">
                <div className="space-y-8">
                  <div className="mb-2">
                    <h3 className="font-display font-bold text-3xl text-gray-900 mb-6">{t('contact.info_title')}</h3>
                  </div>

                  <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={28} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-2">{t('contact.address_label')}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                          {CONTACT_INFO.ADDRESS}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Smartphone size={28} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-2">{t('contact.phone_label')}</h4>
                        <a href={`tel:${CONTACT_INFO.PHONE.replace(/\s/g, '')}`} className="text-gray-600 hover:text-primary transition-colors text-xl font-bold">
                          {CONTACT_INFO.PHONE}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Mail size={28} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-2">{t('contact.email_label')}</h4>
                        <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-gray-600 hover:text-primary transition-colors text-xl font-bold">
                          {CONTACT_INFO.EMAIL}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Clock size={28} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-2">{t('contact.hours_label')}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed font-bold">
                          {CONTACT_INFO.HOURS}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Link Card */}
                <div className="p-8 md:p-10 bg-gray-900 rounded-3xl text-white relative overflow-hidden group shadow-2xl shadow-primary/10">
                  <div className="relative z-10">
                    <h4 className="font-display font-bold text-2xl mb-3">{t('contact.location')}</h4>
                    <p className="text-gray-400 text-base mb-8 max-w-sm">Venha visitar o nosso espaço e conhecer os nossos especialistas em longevidade.</p>
                    <a
                      href={CONTACT_INFO.MAP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all transform hover:translate-y-[-2px] shadow-lg shadow-black/20"
                    >
                      Abrir no Google Maps <MapPin size={20} />
                    </a>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-colors duration-500 group-hover:bg-primary/20"></div>
                  <MapPin size={140} className="absolute -bottom-6 -right-6 text-white/5 transform rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-[450px] w-full bg-gray-100 border-t border-gray-200">
        <iframe
          src={CONTACT_INFO.MAP_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Ósseo+"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;