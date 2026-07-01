import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('osseo_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('osseo_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('osseo_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-6 animate-slide-up">
            <div className="max-w-5xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-8 flex flex-col md:flex-row items-center gap-3 md:gap-8">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-xl text-primary hidden md:block">
                    <Cookie size={32} />
                </div>

                <div className="flex-grow text-center md:text-left">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base flex items-center justify-center md:justify-start gap-2">
                        <Cookie size={18} className="md:hidden text-primary" />
                        {t('cookies.title')}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        {t('cookies.description')}{' '}
                        <Link to="/privacy" className="text-primary hover:underline font-medium">
                            {t('cookies.privacy_link')}
                        </Link>
                    </p>
                </div>

                <div className="flex flex-row gap-2 md:gap-3 flex-shrink-0 w-full md:w-auto">
                    <button
                        onClick={handleDecline}
                        className="flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium text-xs md:text-sm transition-colors"
                    >
                        {t('cookies.decline')}
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-full bg-primary text-white hover:bg-primary-dark font-bold text-xs md:text-sm transition-colors shadow-lg shadow-primary/20"
                    >
                        {t('cookies.accept')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
