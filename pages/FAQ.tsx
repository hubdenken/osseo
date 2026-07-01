import React from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
          {question}
        </span>
        <ChevronDown className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={24} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed bg-surface-light p-6 rounded-2xl border border-gray-50">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const faqSchemaData = {
    mainEntity: [
      {
        '@type': 'Question',
        name: t('faq.q1'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.a1')
        }
      },
      {
        '@type': 'Question',
        name: t('faq.q2'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.a2')
        }
      },
      {
        '@type': 'Question',
        name: t('faq.q3'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.a3')
        }
      },
      {
        '@type': 'Question',
        name: t('faq.q4'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.a4')
        }
      }
    ]
  };

  return (
    <div className="w-full bg-white min-h-[90vh]">
      <SEO 
        title={t('common.faq')} 
        description={t('faq.subtitle')} 
      />
      <StructuredData type="FAQPage" data={faqSchemaData} />
      {/* Hero */}
      {/* Hero */}
      <section className="bg-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <HelpCircle size={20} />
              <span className="font-bold tracking-widest uppercase text-xs">{t('common.faq')}</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-7xl text-gray-900 leading-tight mb-4 md:mb-8">
              {t('faq.title')}
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed font-light">
              {t('faq.subtitle')}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="space-y-2">
              <FAQItem
                question={t('faq.q1')}
                answer={t('faq.a1')}
              />
              <FAQItem
                question={t('faq.q2')}
                answer={t('faq.a2')}
              />
              <FAQItem
                question={t('faq.q3')}
                answer={t('faq.a3')}
              />
              <FAQItem
                question={t('faq.q4')}
                answer={t('faq.a4')}
              />
            </div>
          </RevealOnScroll>

          {/* Support CTA */}
          <div className="mt-24 p-10 bg-gray-900 rounded-[2.5rem] text-center relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-6 text-white">{t('faq.cta_title')}</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">A nossa equipa está disponível para o ajudar com qualquer questão adicional.</p>
              <a
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP.replace(/\s/g, '')}?text=${encodeURIComponent(t('common.whatsapp_message'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
              >
                Falar no WhatsApp <MessageCircle size={20} />
              </a >
            </div >
            <HelpCircle size={150} className="absolute -bottom-10 -right-10 text-white/5 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
          </div >
        </div >
      </section >
    </div >
  );
};

export default FAQ;