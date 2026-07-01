import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IMAGES, CONTACT_INFO } from '../constants';
import performance1 from '../athletes/osseo-performance-1.jpeg';
import performance2 from '../athletes/osseo-performance-2.jpeg';
import { 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  BarChart3,
  Dna
} from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import YouTubeBackground from '../components/YouTubeBackground';
import VerticalPageNav from '../components/VerticalPageNav';
import SEO from '../components/SEO';


const AthletesSection: React.FC = () => {
  const { t } = useTranslation();

  const carouselImages = [performance1, performance2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const assessmentMoves = [
    t('performance.get.assessment.move1'),
    t('performance.get.assessment.move2'),
    t('performance.get.assessment.move3'),
    t('performance.get.assessment.move4'),
    t('performance.get.assessment.move5'),
    t('performance.get.assessment.move6'),
  ];

  const whyItems = [
    { text: t('performance.why.item1'), icon: Zap },
    { text: t('performance.why.item2'), icon: Target },
    { text: t('performance.why.item3'), icon: ShieldCheck },
    { text: t('performance.why.item4'), icon: Dna },
    { text: t('performance.why.item5'), icon: BarChart3 },
  ];

  const sections = [
    { id: 'hero', label: t('performance.nav.hero') },
    { id: 'precision', label: t('performance.nav.precision') },
    { id: 'assessment', label: t('performance.nav.assessment') },
    { id: 'advantages', label: t('performance.nav.advantages') },
    { id: 'report', label: t('performance.nav.report') },
    { id: 'expert', label: t('performance.nav.expert') },
    { id: 'cta', label: t('performance.nav.cta') },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEO 
        title={t('performance.nav.hero')} 
        description={t('performance.hero.description')} 
      />
      <VerticalPageNav sections={sections} />
      {/* High-Impact Hero Section */}
      <section id="hero" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-black">
        <YouTubeBackground 
          videoId="c9TjWlGlgcE" 
          start={5} 
          end={18} 
          opacity={0.85} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl pt-20">
            <RevealOnScroll direction="left">
              <div className="flex items-center gap-3 mb-8 group">
                <div className="w-10 h-px bg-primary/50 group-hover:w-16 transition-all duration-500"></div>
                <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                  Professional Performance
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] uppercase tracking-tighter text-white mb-10">
                Ósseo+<br/>
                <span className="text-primary italic">{t('performance.hero.title').split(' ')[1]}</span>
              </h1>
              <p className="text-base md:text-xl text-gray-400 font-medium max-w-2xl mb-12 leading-relaxed tracking-tight">
                {t('performance.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#assessment" className="group/btn relative px-10 py-5 bg-primary text-black font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden rounded-sm transition-all hover:bg-white">
                  <span className="relative z-10">{t('common.get_started')}</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{t('performance.hero.scroll')}</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Intro - Neuromuscular Precision Section */}
      <section id="precision" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <RevealOnScroll direction="left">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                  <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-8 leading-tight">
                    {t('performance.intro.title')} <span className="text-primary italic underline decoration-4 underline-offset-8">{t('performance.intro.highlight')}</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {t('performance.intro.text')}
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2 relative group">
                      <div className="absolute -inset-4 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="text-4xl font-black text-primary relative">100%</div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest relative">{t('performance.intro.data_label')}</div>
                    </div>
                    <div className="space-y-2 relative group">
                      <div className="absolute -inset-4 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="text-4xl font-black text-primary relative">0</div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest relative">{t('performance.intro.guess_label')}</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <RevealOnScroll direction="right">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-1 transition-transform duration-500"></div>
                  <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-video border-4 border-white/10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <iframe 
                      src="https://www.youtube.com/embed/LcwrvJ7FwHI?controls=0&rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=LcwrvJ7FwHI"
                      title="Ósseo+ Performance Technology"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    {/* Badge visible only on md+ as overlay */}
                    <div className="hidden md:block absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-gray-100 max-w-[220px] animate-fade-in-up">
                      <div className="flex items-center gap-2 mb-2">
                         <Activity className="text-primary w-5 h-5 animate-pulse" />
                         <span className="font-bold text-[11px] uppercase tracking-tighter text-gray-900">{t('performance.intro.live_badge')}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-bold leading-tight uppercase tracking-tight">{t('performance.intro.live_desc')}</p>
                    </div>
                  </div>
                  {/* Badge visible on mobile, below the video */}
                  <div className="md:hidden mt-4 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg border border-gray-100 animate-fade-in-up">
                    <Activity className="text-primary w-5 h-5 animate-pulse shrink-0" />
                    <div>
                      <span className="font-bold text-[11px] uppercase tracking-tighter text-gray-900 block">{t('performance.intro.live_badge')}</span>
                      <p className="text-[10px] text-gray-500 font-bold leading-tight uppercase tracking-tight">{t('performance.intro.live_desc')}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Services Section */}
      <section id="assessment" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-24 relative">
            {/* Ghost Background Text */}
            <div className="absolute -top-16 -left-8 select-none pointer-events-none overflow-hidden h-32 md:h-48 w-full z-0 hidden lg:block">
              <span className="text-[120px] md:text-[200px] font-display font-black text-gray-900/[0.03] uppercase tracking-tighter leading-none whitespace-nowrap">
                PERFORMANCE
              </span>
            </div>

            <RevealOnScroll direction="left" className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                  The Investment
                </span>
                <div className="w-16 h-px bg-primary/30"></div>
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.85] uppercase tracking-tighter text-gray-900 mb-10">
                {t('performance.get.title').split(' ').slice(0, 2).join(' ')}<br/>
                <span className="text-primary italic">{t('performance.get.title').split(' ').slice(2).join(' ')}</span>
              </h2>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-primary"></div>
                <div className="w-2 h-1 bg-primary/30"></div>
                <div className="w-1 h-1 bg-primary/10"></div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Initial Assessment Card */}
            <RevealOnScroll delay={100} className="h-full">
              <div className="group relative h-full bg-gray-950 text-white rounded-sm p-10 md:p-14 overflow-hidden border border-white/10 transition-all duration-700 hover:border-primary/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -mr-40 -mt-40 transition-all duration-700 group-hover:bg-primary/20"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-12 border-b border-white/10 pb-8">
                    <div className="min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-display font-black mb-2 uppercase tracking-tight leading-tight">{t('performance.get.assessment.title')}</h3>
                      <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">{t('performance.get.assessment.subtitle')}</p>
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter tabular-nums shrink-0">{t('performance.get.assessment.price')}</div>
                  </div>

                  <div className="space-y-10 mb-16 flex-grow">
                    <div className="space-y-6">
                      <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-white/40">{t('performance.get.assessment.includes_title')}</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {[1, 2, 3, 4].map((i) => (
                          <li key={i} className="flex items-center gap-3 group/item">
                            <div className="w-1.5 h-1.5 bg-primary/50 group-hover/item:bg-primary transition-colors"></div>
                            <span className="text-sm font-bold text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-tight">{t(`performance.get.assessment.item${i}`)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-8 bg-white/[0.03] border border-white/5 rounded-sm relative group/moves transition-all duration-500 hover:border-primary/30">
                      <h5 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-6">{t('performance.get.assessment.item5_title')}</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-center sm:text-left">
                        {assessmentMoves.map((move, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] font-black text-gray-500 uppercase tracking-widest transition-colors hover:text-white">
                            <span className="text-primary leading-none text-xs">/</span> {move}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-10 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                      <div className="p-5 bg-white/[0.02] border border-white/5 rounded-sm group/benefit relative overflow-hidden transition-all duration-500 hover:bg-white/[0.04]">
                         <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover/benefit:bg-primary transition-colors"></div>
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                          {t('performance.get.assessment.benefit1')}
                        </p>
                      </div>
                      <div className="p-5 bg-white/[0.02] border border-white/5 rounded-sm group/benefit relative overflow-hidden transition-all duration-500 hover:bg-white/[0.04]">
                         <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover/benefit:bg-primary transition-colors"></div>
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                          {t('performance.get.assessment.benefit2')}
                        </p>
                      </div>
                    </div>
                    <Link to="/contact" className="group/btn relative block w-full py-6 bg-white text-black rounded-sm font-black uppercase tracking-[0.4em] text-xs hover:bg-primary hover:text-white transition-all text-center overflow-hidden">
                      <span className="relative z-10 transition-transform duration-500 block group-hover/btn:-translate-y-1">
                        {t('common.request_quote')}
                      </span>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10 transition-all group-hover/btn:h-2"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Continuous Sessions Card */}
            <RevealOnScroll delay={300} className="h-full">
              <div className="group relative h-full bg-gray-50 text-gray-900 rounded-sm p-10 md:p-14 overflow-hidden border border-gray-200 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] flex flex-col">
                <div className="relative z-10 flex flex-col h-full uppercase tracking-tight">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-12 border-b border-gray-200 pb-8">
                    <div className="min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-display font-black mb-2 leading-tight">
                        {t('performance.get.sessions.title').split(' ').map((word, i, arr) => (
                          <React.Fragment key={i}>
                            {word}
                            {i < arr.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h3>
                      <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">{t('performance.get.sessions.subtitle')}</p>
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter tabular-nums shrink-0">{t('performance.get.sessions.price')}</div>
                  </div>

                  <ul className="space-y-8 mb-16 flex-grow">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-center gap-5 group/entry">
                        <div className="w-1.5 h-1.5 bg-primary/30 group-hover/entry:bg-primary transition-colors"></div>
                        <span className="text-sm font-black text-gray-600 group-hover/entry:text-gray-900 transition-colors uppercase tracking-wider">{t(`performance.get.sessions.item${i}`)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-950 text-white rounded-sm p-10 relative overflow-hidden transition-all duration-700 hover:bg-black group/freq">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 border-b border-white/10 pb-4">{t('performance.get.sessions.freq_title')}</h4>
                      <div className="space-y-6 mb-10">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em]">
                            <span className="text-gray-400 group-hover/freq:text-white transition-colors">{t(`performance.get.sessions.freq${i}`).split('(')[0]}</span>
                            {i === 1 && <span className="bg-primary text-black px-2 py-0.5 rounded-sm text-[8px] font-black group-hover:scale-110 transition-transform">TOP TIER</span>}
                          </div>
                        ))}
                      </div>
                      <Link to="/contact" className="group/btn2 relative block w-full py-5 bg-primary text-black rounded-sm font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all text-center overflow-hidden">
                        {t('common.request_quote')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Why Athletes - Grid Section */}
      <section id="advantages" className="py-20 md:py-32 bg-gray-950 text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,122,139,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-24">
            <RevealOnScroll direction="left">
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">
                Athletic Edge
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black leading-[0.9] uppercase tracking-tighter mb-8">
               {t('performance.why.title').split(' ').slice(0, 4).join(' ')}<br/>
               <span className="text-primary italic">{t('performance.why.title').split(' ').slice(4).join(' ')}</span>
              </h2>
              <div className="w-24 h-px bg-primary/50"></div>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {whyItems.map((item, i) => (
              <RevealOnScroll 
                key={i} 
                delay={i * 150} 
                className="h-full"
              >
                <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 p-10 rounded-sm group overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-primary/50 group/card">
                  {/* Technical Index */}
                  <div className="absolute -top-4 -right-2 text-[120px] font-black text-white/[0.03] transition-colors duration-700 group-hover:text-primary/[0.05] tabular-nums select-none">
                    0{i + 1}
                  </div>
                  
                  {/* Subtle Glow */}
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_25px_rgba(14,122,139,0.5)]">
                      <item.icon className="w-7 h-7 text-primary transition-colors duration-700 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors duration-700">
                      {item.text}
                    </h3>
                    <div className="mt-8 w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-700 group-hover:bg-primary"></div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The Edge Section */}
      <section id="report" className="py-20 md:py-32 bg-gray-950 text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,122,139,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll direction="left">
              <div className="max-w-xl">
                <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">
                  {t('performance.edge.badge')}
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-black leading-[0.9] uppercase tracking-tighter mb-10">
                  {t('performance.edge.title_base')}<br/>
                  <span className="text-primary italic">{t('performance.edge.title_highlight')}</span>
                </h2>
                <p className="text-xl text-gray-400 font-medium mb-12 leading-relaxed">
                  {t('performance.edge.desc')}
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2">{t('performance.edge.item1_title')}</div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-tight">{t('performance.edge.item1_desc')}</div>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6">
                    <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2">{t('performance.edge.item2_title')}</div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-tight">{t('performance.edge.item2_desc')}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{t('performance.edge.validation_badge')}</span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" className="relative group">
              {/* Technical Frame Decoration */}
              <div className="absolute -inset-4 border border-white/5 rounded-sm pointer-events-none transition-all duration-700 group-hover:-inset-8 group-hover:border-primary/20"></div>
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/50 -translate-x-2 -translate-y-2 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/50 translate-x-2 translate-y-2 pointer-events-none"></div>
              
              <div className="relative rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] border border-white/10 group-hover:border-primary/30 transition-all duration-700 bg-gray-950/50 backdrop-blur-md p-3 sm:p-5 pb-8">
                <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl z-10">
                  <div className="relative w-full">
                    {/* Ghost image to establish height natively */}
                    <img src={carouselImages[0]} className="w-full h-auto opacity-0 pointer-events-none" alt="" />
                    
                    {carouselImages.map((img, index) => (
                      <img 
                        key={index}
                        src={img} 
                        loading="lazy"
                        alt={`Performance Report ${index + 1}`} 
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                          index === currentImageIndex 
                            ? 'opacity-100 scale-100 z-10' 
                            : 'opacity-0 scale-[1.02] z-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        index === currentImageIndex 
                          ? 'w-6 bg-primary' 
                          : 'w-1.5 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity pointer-events-none z-0"></div>
              </div>

              {/* Scanning Line Effect */}
              <div className="absolute top-0 left-0 w-full h-px bg-primary/30 shadow-[0_0_15px_rgba(14,122,139,1)] translate-y-0 group-hover:translate-y-[100%] transition-transform duration-[3000ms] pointer-events-none"></div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Expert Section - Dr. Andrew Hatch */}
      <section id="expert" className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll direction="up">
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-4 border-2 border-gray-100 rounded-sm pointer-events-none transition-all duration-700 group-hover:-inset-8 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(14,122,139,0.2)]"></div>
              
              <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                <div className="w-full max-w-[300px] shrink-0">
                  <div className="relative rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden bg-black z-10 border border-gray-100 group-hover:border-primary/30 transition-all duration-500">
                    <div className="aspect-[9/16] relative">
                      <iframe 
                        src="https://www.youtube.com/embed/YfFWUijqols?controls=0&rel=0&modestbranding=1&autoplay=1&mute=1&playlist=YfFWUijqols&loop=1&iv_load_policy=3"
                        title="Dr. Andrew Hatch Bio Video"
                        className="absolute inset-0 w-full h-full scale-[1.15]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      
                      <div className="absolute inset-0 z-20 pointer-events-auto group-hover:bg-primary/5 transition-all duration-500"></div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">{t('performance.expert.clinical_nav')}</span>
                    </div>
                    <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em] animate-pulse">Live Bio Video</div>
                  </div>
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                    <div className="w-8 h-px bg-primary"></div>
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">{t('performance.expert.subtitle')}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-none uppercase tracking-tighter text-gray-900 mb-8">
                    {t('performance.expert.title')}<br/>
                    <span className="text-primary italic">{t('performance.expert.highlight')}</span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                    {t('performance.expert.description')}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* High-Impact CTA Section */}
      <section id="cta" className="relative py-32 md:py-48 overflow-hidden bg-black">
        <YouTubeBackground 
          videoId="Jnitf8W8iIU" 
          start={0} 
          end={27} 
          opacity={0.85} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-[1]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll direction="up">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">
                Next Level Achievement
              </span>
              <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">
                START<br />
                <span className="text-primary">PERFORMANCE.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                {t('performance.cta_text')}
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.WHATSAPP.replace(/\s/g, '')}?text=${encodeURIComponent(t('common.whatsapp_message'))}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-12 py-6 bg-primary text-white font-black text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full md:w-auto text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {t('common.book_assessment')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10"></div>
                </a>
                
                <Link 
                  to="/contact"
                  className="px-12 py-6 border border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto text-center"
                >
                  {t('common.learn_more')}
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default AthletesSection;
