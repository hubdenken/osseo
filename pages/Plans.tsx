import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { Check, CheckCircle, Info, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import YouTubeBackground from '../components/YouTubeBackground';
import Modal from '../components/Modal';
import SEO from '../components/SEO';

const Plans: React.FC = () => {
    const { t } = useTranslation();
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

    const plans = [
        { id: 1, key: 'p1', img: IMAGES.STEP_1_EVAL },
        { id: 2, key: 'p2', img: IMAGES.PILLAR_BALANCE },
        { id: 3, key: 'p3', img: IMAGES.STEP_3_GYM }
    ];

    return (
        <div className="w-full bg-surface-light min-h-[90vh]">
            <SEO 
                title={t('common.plans')} 
                description={t('plans.hero_subtitle')} 
            />
            {/* Hero */}
            {/* Hero */}
            <section className="bg-white py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <RevealOnScroll>
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t('common.plans')}</span>
                        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-7xl text-gray-900 leading-tight mb-4 md:mb-8">
                            {t('plans.hero_title')}
                        </h1>
                        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 leading-relaxed">
                            {t('plans.hero_subtitle')}
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-14 md:py-24 -mt-8 md:-mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-stretch">
                        {plans.map((plan) => (
                            <RevealOnScroll key={plan.id} delay={plan.id * 200} className="h-full">
                                <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 group border border-gray-100/50">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={plan.img}
                                            alt={t(`plans.${plan.key}.title`)}
                                            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ${plan.id === 1 ? 'object-top' : 'object-center'}`}
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 pb-8 md:pb-10 flex flex-col items-center text-center flex-grow">
                                        <h3 className="font-display font-bold text-xl md:text-3xl text-gray-900 mb-3 tracking-tight">
                                            {t(`plans.${plan.key}.title`)}
                                        </h3>
                                        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">
                                            {t(`plans.${plan.key}.subtitle`)}
                                        </p>

                                        <button
                                            onClick={() => setSelectedPlan(plan.id)}
                                            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group/btn mt-auto"
                                        >
                                            <Info size={20} className="group-hover/btn:scale-110 transition-transform" />
                                            {t('plans.saiba_mais')}
                                        </button>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Athlete Performance Promo Section */}
            <section className="py-24 bg-surface-light relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                            
                            <div className="w-full lg:w-3/5 space-y-8 relative z-10">
                                <div>
                                    <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">
                                        {t('performance.hero.badge')}
                                    </span>
                                    <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 leading-tight">
                                        {t('plans.athletes_promo.title')}
                                    </h2>
                                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                                        {t('plans.athletes_promo.subtitle')}
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <Link 
                                        to="/atletas" 
                                        className="group/btn inline-flex items-center gap-6 bg-primary text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-500 hover:bg-black hover:text-white shadow-xl shadow-primary/20"
                                    >
                                        {t('plans.athletes_promo.cta')}
                                        <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="w-full lg:w-2/5 relative">
                                <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-2xl transform group-hover:scale-105 transition-transform duration-1000 bg-black">
                                    <YouTubeBackground 
                                        videoId="Jnitf8W8iIU" 
                                        start={0} 
                                        end={27} 
                                        opacity={0.9} 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Details Modal */}
            <Modal
                isOpen={selectedPlan !== null}
                onClose={() => setSelectedPlan(null)}
                title={selectedPlan ? t(`plans.p${selectedPlan}.title`) : ''}
            >
                {selectedPlan && (
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {t(`plans.p${selectedPlan}.desc`)}
                            </p>

                            {selectedPlan === 1 ? (
                                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                    <p className="text-primary-dark font-semibold text-base italic leading-relaxed">
                                        {t('plans.p1.price_info')}
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-4">
                                    {[1, 2].map((num) => (
                                        <div key={num} className="flex items-center gap-4 p-4 bg-surface-light rounded-2xl border border-gray-100">
                                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-100 shrink-0">
                                                <Check size={18} className="text-white" strokeWidth={3} />
                                            </div>
                                            <span className="font-bold text-gray-800">
                                                {t(`plans.p${selectedPlan}.pack${num}`)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <p className="text-gray-500 italic text-sm text-center">
                                {t(`plans.p${selectedPlan}.footer`)}
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="w-full py-4 md:py-5 px-8 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all duration-300 text-center flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-xl shadow-primary/20 text-sm md:text-base"
                        >
                            {t('plans.agendar')}
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Plans;