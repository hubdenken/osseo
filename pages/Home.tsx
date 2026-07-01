import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Check, Play, X, Activity, Cpu, Timer, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { IMAGES, CONTACT_INFO } from '../constants';

// ID do Vídeo do YouTube
const YOUTUBE_VIDEO_ID = "R_bPSqu-TIM";

const AnimatedCheck = () => (
  <div className="relative w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
    <div className="absolute inset-0 transition-[opacity,transform] duration-500 ease-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75">
      <CheckCircle className="w-5 h-5 text-primary" />
    </div>
    <div className="absolute inset-0 transition-[opacity,transform] duration-500 ease-out opacity-0 -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100">
      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-md">
        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const localBusinessData = {
    name: 'Ósseo+',
    image: `https://osseo.pt${IMAGES.HERO_GRANDPARENT}`,
    '@id': 'https://osseo.pt',
    url: 'https://osseo.pt',
    telephone: CONTACT_INFO.PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Cidade de Goa 24',
      addressLocality: 'Sacavém',
      postalCode: '2685-039',
      addressCountry: 'PT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.791472,
      longitude: -9.1034427
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '07:00',
        closes: '14:00'
      }
    ],
    sameAs: [
      CONTACT_INFO.SOCIAL.INSTAGRAM,
      CONTACT_INFO.SOCIAL.FACEBOOK,
      CONTACT_INFO.SOCIAL.LINKEDIN
    ]
  };

  const webSiteData = {
    name: 'Ósseo+',
    url: 'https://osseo.pt',
    description: t('home.hero.description'),
    inLanguage: 'pt-PT'
  };

  return (
    <div className="w-full">
      <SEO 
        title={t('common.home')} 
        description={t('home.hero.description')} 
        type="website"
        publishedTime="2024-01-01T00:00:00Z"
        modifiedTime={new Date().toISOString()}
      />
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      <StructuredData type="WebSite" data={webSiteData} />
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center px-5 py-10 md:p-16 lg:p-24 bg-surface-light">
          <div className="max-w-xl space-y-8 animate-fade-in">
            <span className="text-primary font-bold tracking-widest uppercase text-sm bg-primary/10 px-3 py-1 rounded-full">
              {t('home.hero.badge')}
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
              {t('home.hero.title_base')}<span className="text-primary relative">
                {t('home.hero.title_highlight')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>{t('home.hero.title_suffix')}
            </h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed border-l-4 border-primary pl-4 md:pl-6">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 flex-wrap">
              <Link to="/plans" className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base">
                {t('home.hero.cta_start')}
              </Link>
              <Link to="/contact" className="flex items-center justify-center bg-secondary hover:bg-gray-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base">
                {t('home.hero.cta_appointment')}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto overflow-hidden group bg-black">
          {/* YouTube Background Loop */}
          <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&playsinline=1`}
              className="absolute top-1/2 left-1/2 w-[180%] h-[180%] md:w-[200%] md:h-[200%] -translate-x-1/2 -translate-y-1/2 object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Background Video"
              tabIndex={-1}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-l md:from-transparent md:to-black/10"></div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="relative group/btn flex items-center justify-center"
              aria-label="Ver vídeo de apresentação"
            >
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping w-20 h-20"></div>
              <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 transition-all duration-300 group-hover/btn:bg-white/30 group-hover/btn:scale-110">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal - Full Screen */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md transition-opacity duration-500 animate-fade-in">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsVideoOpen(false)}></div>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden border border-white/10 transform transition-transform duration-300 scale-100">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 md:top-6 md:right-6 z-20 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark hover:scale-110 transition-all duration-300 flex items-center justify-center group"
              aria-label="Fechar vídeo"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
              title="Apresentação Ósseo+"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Longevity Quote Section */}
      <section className="py-12 md:py-20 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
          <RevealOnScroll>
            <div className="space-y-8">
              <span className="inline-block p-3 bg-primary/10 rounded-2xl text-primary transform rotate-12">
                <Activity size={32} />
              </span>
              <blockquote className="relative">
                <p className="font-display font-bold text-xl sm:text-2xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.2] italic tracking-tight">
                  "{t('home.quote.text')}"
                </p>
                <footer className="mt-8 text-primary font-bold tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-primary/30"></div>
                  {t('home.quote.author')}
                  <div className="w-12 h-px bg-primary/30"></div>
                </footer>
              </blockquote>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900">{t('home.pillars.title')}</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
              <p className="mt-4 text-gray-600">{t('home.pillars.subtitle')}</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            {/* Balance */}
            <RevealOnScroll delay={100} className="h-full">
              <div className="group h-full flex flex-col">
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] mb-8 cursor-pointer">
                  <img src={IMAGES.PILLAR_BALANCE} loading="lazy" alt={t('home.pillars.balance.title')} className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">{t('home.pillars.balance.title')}</h3>
                </div>
                <ul className="space-y-3 px-2 flex-grow">
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.balance.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.balance.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.balance.item3')}</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Strength */}
            <RevealOnScroll delay={300} className="h-full">
              <div className="group h-full flex flex-col">
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] mb-8 cursor-pointer">
                  <img src={IMAGES.OLD_COUPLE_HAPPY} loading="lazy" alt={t('home.pillars.strength.title')} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">{t('home.pillars.strength.title')}</h3>
                </div>
                <ul className="space-y-3 px-2 flex-grow">
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.strength.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.strength.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.strength.item3')}</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Bone Health */}
            <RevealOnScroll delay={500} className="h-full">
              <div className="group h-full flex flex-col">
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] mb-8 cursor-pointer">
                  <img src={IMAGES.BONES_LEG} loading="lazy" alt={t('home.pillars.bone_health.title')} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">{t('home.pillars.bone_health.title')}</h3>
                </div>
                <ul className="space-y-3 px-2 flex-grow">
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.bone_health.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.bone_health.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <AnimatedCheck />
                    <span className="text-gray-600">{t('home.pillars.bone_health.item3')}</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="benefits" className="py-14 md:py-24 bg-surface-light relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-4xl mx-auto mb-10 md:mb-20">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-4 md:mb-6">{t('home.features.title')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('home.features.description_base')}<span className="font-bold text-primary">{t('home.features.description_rev')}</span>{t('home.features.description_comp')}<span className="font-bold text-gray-900">{t('home.features.description_bone')}</span>{t('home.features.description_strength')}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <RevealOnScroll delay={100} className="h-full">
              <div className="flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-6 text-primary bg-primary/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{t('home.features.item1_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500">{t('home.features.item1_desc')}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="h-full">
              <div className="flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-6 text-primary bg-primary/10 rounded-full flex items-center justify-center">
                  <Cpu className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{t('home.features.item2_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500">{t('home.features.item2_desc')}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300} className="h-full">
              <div className="flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-6 text-primary bg-primary/10 rounded-full flex items-center justify-center">
                  <Timer className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{t('home.features.item3_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500">{t('home.features.item3_desc')}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400} className="h-full">
              <div className="flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-6 text-primary bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{t('home.features.item4_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500">{t('home.features.item4_desc')}</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Did You Know? Statistics Section */}
      <section className="py-14 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <RevealOnScroll direction="left">
                <div className="space-y-4">
                  <span className="text-primary font-bold tracking-widest uppercase text-sm">{t('home.did_you_know.title')}</span>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                    {t('home.did_you_know.highlight')}
                  </h2>
                </div>
              </RevealOnScroll>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              <RevealOnScroll delay={200}>
                <div className="p-5 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-lg leading-relaxed">{t('home.did_you_know.stat1')}</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={400}>
                <div className="p-5 md:p-8 rounded-3xl bg-primary text-white shadow-xl transform hover:-translate-y-2 transition-all">
                  <p className="text-2xl font-display font-bold mb-4">8.9M</p>
                  <p className="text-lg leading-relaxed font-medium">{t('home.did_you_know.stat2')}</p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll delay={100}>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-6 md:mb-8">{t('home.cta.title')}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full text-base font-bold transition-all shadow-lg transform hover:-translate-y-1">
                {t('common.contact_us')}
              </Link>
              <Link to="/plans" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-base font-bold transition-all">
                {t('common.see_plans')}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;