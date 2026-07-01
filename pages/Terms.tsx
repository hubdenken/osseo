import React from 'react';
import { useTranslation } from 'react-i18next';
import RevealOnScroll from '../components/RevealOnScroll';
import { FileText } from 'lucide-react';

const Terms: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full pt-20">
            <section className="bg-surface-light py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <div className="text-center mb-12">
                            <div className="inline-block p-4 bg-white rounded-2xl shadow-sm mb-6 text-primary">
                                <FileText size={40} />
                            </div>
                            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">{t('terms.title')}</h1>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                                {t('terms.subtitle')}
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-lg max-w-none text-gray-600">
                            <h3>1. {t('terms.acceptance.title')}</h3>
                            <p>{t('terms.acceptance.content')}</p>

                            <h3>2. {t('terms.services.title')}</h3>
                            <p>{t('terms.services.content')}</p>

                            <h3>3. {t('terms.medical.title')}</h3>
                            <p className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg font-medium">
                                {t('terms.medical.content')}
                            </p>

                            <h3>4. {t('terms.User_responsibilities.title')}</h3>
                            <p>{t('terms.User_responsibilities.content')}</p>

                            <h3>5. {t('terms.intellectual_property.title')}</h3>
                            <p>{t('terms.intellectual_property.content')}</p>

                            <h3>6. {t('terms.changes.title')}</h3>
                            <p>{t('terms.changes.content')}</p>

                            <h3>7. {t('terms.contact.title')}</h3>
                            <p>{t('terms.contact.content')}</p>
                        </div>
                    </RevealOnScroll>

                    <div className="mt-12 text-center text-sm text-gray-400">
                        {t('terms.last_updated')}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
