import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { Activity, Zap, Shield, CheckCircle, Check, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import YouTubeBackground from '../components/YouTubeBackground';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const AnimatedCheck = () => (
    <div className="relative w-5 h-5 mr-3 flex-shrink-0">
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

const Services: React.FC = () => {
    const { t } = useTranslation();

    const articleData = {
        headline: t('services.hero.title_base'),
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
        image: `https://osseo.pt${IMAGES.SERVICE_HERO}`,
        datePublished: '2024-01-01T00:00:00Z',
        dateModified: new Date().toISOString()
    };

    return (
        <div className="w-full">
            <SEO 
                title={t('services.hero.badge')} 
                description={t('services.hero.description')} 
                type="article"
                author="Ósseo+"
                publishedTime={articleData.datePublished}
                modifiedTime={articleData.dateModified}
            />
            <StructuredData type="Article" data={articleData} />
            {/* Hero */}
            {/* Hero */}
            <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center px-5 py-10 md:p-16 lg:p-24 bg-surface-light">
                    <div className="max-w-xl space-y-8 animate-fade-in">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm bg-primary/10 px-3 py-1 rounded-full">
                            {t('services.hero.badge')}
                        </span>
                        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-gray-900 leading-tight">
                            {t('services.hero.title_base')}<span className="text-primary">{t('services.hero.title_highlight')}</span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-600 leading-relaxed border-l-4 border-primary pl-4 md:pl-6">
                            {t('services.hero.description')}
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto overflow-hidden">
                    <img src={IMAGES.SERVICE_HERO} alt="Tecnologia Ósseo+" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            </section>

            {/* Deep Dive Pillars */}
            <section className="py-14 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* Pillar 1 */}
                        <RevealOnScroll delay={100}>
                            <div className="group space-y-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transform group-hover:rotate-6 transition-transform">
                                    <Activity size={32} />
                                </div>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">{t('services.pillars.p1.title')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('services.pillars.p1.desc')}
                                </p>
                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center text-gray-700 font-medium group/item">
                                        <AnimatedCheck />
                                        {t('services.pillars.p1.list1')}
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium group/item">
                                        <AnimatedCheck />
                                        {t('services.pillars.p1.list2')}
                                    </li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                        {/* Pillar 2 */}
                        <RevealOnScroll delay={300}>
                            <div className="group space-y-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transform group-hover:rotate-6 transition-transform">
                                    <Zap size={32} />
                                </div>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">{t('services.pillars.p2.title')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('services.pillars.p2.desc')}
                                </p>
                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center text-gray-700 font-medium group/item">
                                        <AnimatedCheck />
                                        {t('services.pillars.p2.list1')}
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium group/item">
                                        <AnimatedCheck />
                                        {t('services.pillars.p2.list2')}
                                    </li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                        {/* Pillar 3 */}
                        <RevealOnScroll delay={500}>
                            <div className="group space-y-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transform group-hover:rotate-6 transition-transform">
                                    <Shield size={32} />
                                </div>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">{t('services.pillars.p3.title')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('services.pillars.p3.desc')}
                                </p>
                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center text-gray-700 font-medium group/item">
                                        <AnimatedCheck />
                                        {t('services.pillars.p3.list1')}
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium group/item">
                                        <AnimatedCheck />
                                        {t('services.pillars.p3.list2')}
                                    </li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                    </div>
                </div>
            </section>

            {/* Science Section */}
            <section className="py-14 md:py-24 bg-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#fff_1px,transparent_1px)] bg-[length:40px_40px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs bg-primary/20 px-3 py-1 rounded-full">{t('services.science.title')}</span>
                            <h2 className="font-display font-bold text-2xl md:text-4xl mt-4 mb-6">{t('services.science.subtitle')}</h2>
                            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <RevealOnScroll delay={100}>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full">
                                <h4 className="font-display font-bold text-xl text-primary mb-4">{t('services.science.wolff_law.title')}</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('services.science.wolff_law.desc')}
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={300}>
                            <div className="p-8 rounded-3xl bg-primary text-white shadow-2xl h-full transform lg:-translate-y-4">
                                <h4 className="font-display font-bold text-xl mb-4">{t('services.science.osteogenic.title')}</h4>
                                <p className="leading-relaxed opacity-90">
                                    {t('services.science.osteogenic.desc')}
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={500}>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full">
                                <h4 className="font-display font-bold text-xl text-primary mb-4">{t('services.science.longevity.title')}</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('services.science.longevity.desc')}
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Tech Feature */}
            <section className="py-14 md:py-24 bg-surface-light relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                        <div className="w-full lg:w-1/2">
                            <RevealOnScroll direction="left">
                                <div className="space-y-8">
                                    <div>
                                        <span className="text-primary font-bold tracking-widest uppercase text-sm">{t('services.tech.badge')}</span>
                                        <h2 className="font-display font-bold text-2xl md:text-4xl text-gray-900 mt-2">{t('services.tech.title')}</h2>
                                        <p className="text-gray-600 mt-4 text-lg">
                                            {t('services.tech.subtitle')}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <h4 className="font-bold text-gray-900 mb-2">{t('services.tech.item1_title')}</h4>
                                            <p className="text-sm text-gray-500">{t('services.tech.item1_desc')}</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <h4 className="font-bold text-gray-900 mb-2">{t('services.tech.item2_title')}</h4>
                                            <p className="text-sm text-gray-500">{t('services.tech.item2_desc')}</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <h4 className="font-bold text-gray-900 mb-2">{t('services.tech.item3_title')}</h4>
                                            <p className="text-sm text-gray-500">{t('services.tech.item3_desc')}</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <h4 className="font-bold text-gray-900 mb-2">{t('services.tech.item4_title')}</h4>
                                            <p className="text-sm text-gray-500">{t('services.tech.item4_desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <RevealOnScroll direction="right">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img src={IMAGES.TECH_MONITOR} loading="lazy" alt="Monitorização Biomecânica" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>

                                    {/* Floating Tech Card */}
                                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 animate-float">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                                                <Activity size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-primary uppercase tracking-tighter">{t('services.tech.monitor_badge')}</p>
                                                <h4 className="font-display font-bold text-lg text-gray-900">{t('services.tech.monitor_title')}</h4>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-3">
                                            {t('services.tech.monitor_desc')}
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>

            {/* Athlete Performance Promo */}
            <section className="py-14 md:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-secondary rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden relative group">
                        <YouTubeBackground 
                            videoId="c9TjWlGlgcE" 
                            start={5} 
                            end={18} 
                            opacity={0.7} 
                            className="group-hover:opacity-85 transition-opacity duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent z-10"></div>
                        
                        <div className="relative z-20 max-w-2xl space-y-8">
                            <RevealOnScroll direction="left">
                                <div className="space-y-6">
                                    <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-xs px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                                        {t('services.athletes_promo.badge')}
                                    </span>
                                    <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
                                        {t('services.athletes_promo.title')}
                                    </h2>
                                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                        {t('services.athletes_promo.description')}
                                    </p>
                                    <div className="pt-4">
                                        <Link 
                                            to="/atletas" 
                                            className="group/link inline-flex items-center gap-4 bg-primary hover:bg-white text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-primary/20 hover:shadow-white/20 transform hover:-translate-y-1"
                                        >
                                            {t('services.athletes_promo.cta')}
                                            <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>

                        {/* Floating Tech Indices */}
                        <div className="absolute top-10 right-10 hidden lg:block text-white/5 font-mono text-9xl font-black select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-700">
                            ATHL
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-14 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <RevealOnScroll>
                        <h2 className="font-display font-bold text-2xl md:text-4xl text-gray-900 mb-6 md:mb-8">{t('home.cta.title')}</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all transform hover:-translate-y-1">
                                {t('common.contact_us')}
                            </Link>
                            <Link to="/plans" className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                {t('common.see_plans')} <ArrowRight size={20} />
                            </Link>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
};

export default Services;