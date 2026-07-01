import React from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants';
import { Share2, Link as LinkIcon } from 'lucide-react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const About: React.FC = () => {
  const { t } = useTranslation();

  const personData = {
    name: t('about.team.specialist.name'),
    jobTitle: t('about.team.specialist.role'),
    worksFor: {
      '@type': 'Organization',
      name: 'Ósseo+'
    },
    image: `https://osseo.pt${IMAGES.DR_ANDREW_HATCH}`,
    url: 'https://osseo.pt/about',
  };

  const articleData = {
    headline: t('about.hero.title_base'),
    author: {
      '@type': 'Organization',
      name: 'Ósseo+'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ósseo+',
      logo: {
        '@type': 'ImageObject',
        url: 'https://osseo.pt/osseo-mais-imagens1.png'
      }
    },
    image: `https://osseo.pt${IMAGES.STEP_1_EVAL}`,
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: new Date().toISOString()
  };

  return (
    <div className="w-full">
      <SEO 
        title={t('about.hero.badge')} 
        description={t('about.hero.description')} 
        type="article"
        author="Ósseo+"
        publishedTime={articleData.datePublished}
        modifiedTime={articleData.dateModified}
      />
      <StructuredData type="Person" data={personData} />
      <StructuredData type="Article" data={articleData} />
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center px-5 py-10 md:p-16 lg:p-24 bg-white">
          <div className="max-w-xl space-y-8 animate-fade-in">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t('about.hero.badge')}</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-gray-900 leading-tight">
              {t('about.hero.title_base')} <br />{t('about.hero.title_suffix')}<span className="text-primary">{t('about.hero.title_highlight')}</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed border-l-4 border-primary pl-4 md:pl-6">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto overflow-hidden">
          <img src={IMAGES.STEP_1_EVAL} alt="Equipa Ósseo+" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </section>



      {/* Team / Specialist */}
      <section className="py-14 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t('about.team.badge')}</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-gray-900 mt-2">{t('about.team.title')}</h2>
          </div>

          <div className="bg-surface-light rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="lg:w-2/5 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
                <img
                  src={IMAGES.DR_ANDREW_HATCH}
                  loading="lazy"
                  alt={t('about.team.specialist.name')}
                  className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="lg:w-3/5 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                      {t('about.team.specialist.name')}
                    </h3>
                    <p className="text-primary font-bold text-lg inline-flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-primary"></span>
                      {t('about.team.specialist.role')}
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg italic font-light">
                    <p>"{t('about.team.specialist.bio_p1')}"</p>
                    <p>"{t('about.team.specialist.bio_p2')}"</p>

                    <p>"{t('about.team.specialist.bio_p4')}"</p>
                  </div>

                  <div className="pt-6 md:pt-8 flex flex-wrap gap-4 md:gap-6 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-gray-900">20,000+</span>
                      <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold">Pacientes Tratados</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-gray-900">30+</span>
                      <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold">Anos de Experiência</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-gray-900">A+</span>
                      <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold">Cuidados Clínicos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;