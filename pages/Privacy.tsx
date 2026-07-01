import React from 'react';
import { useTranslation } from 'react-i18next';
import RevealOnScroll from '../components/RevealOnScroll';
import { ShieldCheck } from 'lucide-react';

const Privacy: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full pt-20">
            <section className="bg-surface-light py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <div className="text-center mb-12">
                            <div className="inline-block p-4 bg-white rounded-2xl shadow-sm mb-6 text-primary">
                                <ShieldCheck size={40} />
                            </div>
                            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">{t('privacy.title')}</h1>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                                {t('privacy.subtitle')}
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-lg max-w-none text-gray-600">
                            <h3>1. {t('privacy.collection.title')}</h3>
                            <p>{t('privacy.collection.content')}</p>

                            <h3>2. {t('privacy.usage.title')}</h3>
                            <p>{t('privacy.usage.content')}</p>

                            <h3>3. {t('privacy.cookies.title')}</h3>
                            <p>{t('privacy.cookies.content')}</p>

                            <h3>4. {t('privacy.sharing.title')}</h3>
                            <p>{t('privacy.sharing.content')}</p>

                            <h3>5. {t('privacy.security.title')}</h3>
                            <p>{t('privacy.security.content')}</p>

                            <h3>6. {t('privacy.rights.title')}</h3>
                            <p>{t('privacy.rights.content')}</p>

                            <h3>7. {t('privacy.contact.title')}</h3>
                            <p>{t('privacy.contact.content')}</p>
                        </div>
                    </RevealOnScroll>

                    <div className="mt-12 text-center text-sm text-gray-400">
                        {t('privacy.last_updated')}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
