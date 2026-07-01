import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PageLoaderProps {
  onFinish: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onFinish }) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15; // Random speed
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Start fade out animation
      setTimeout(() => {
        setIsFadingOut(true);
        // Trigger finish callback after fade out completes
        setTimeout(onFinish, 600);
      }, 500);
    }
  }, [progress, onFinish]);

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative mb-12">
        {/* Logo Container */}
        <div className="flex items-center justify-center animate-fade-in">
          <img
            src="/assets/1_CORES.png"
            alt="ÓSSEO+"
            className="h-20 md:h-24 w-auto transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Pulse Effect behind image */}
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-150 animate-pulse -z-10"></div>
      </div>

      {/* Loading Text */}
      <div className="h-6 mb-4">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-[0.2em] animate-pulse">
          {progress < 100 ? t('loader.loading') : t('loader.welcome')}
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
        {/* Progress Bar Fill */}
        <div
          className="absolute top-0 left-0 h-full bg-primary transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(14,122,139,0.5)]"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Shine effect on progress bar */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
      </div>

      {/* Percentage (Optional, subtle) */}
      <span className="mt-2 text-xs text-gray-300 font-mono">
        {Math.round(progress)}%
      </span>
    </div>
  );
};

export default PageLoader;