import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { subscribeToEbook } from '../services/brevo';

// --- Data from actual Ebook analysis ---
const CHAPTERS = [
  {
    num: '01',
    title: 'O osso que vive',
    subtitle: 'Reframing the Biology',
    desc: 'O osso não é giz. É um dos tecidos mais metabolicamente ativos do corpo humano — constantemente a ser destruído e reconstruído, respondendo a sinais mecânicos e hormonais.',
  },
  {
    num: '02',
    title: 'A epidemia silenciosa',
    subtitle: 'The Epidemic in Numbers',
    desc: '"1 em cada 2 mulheres e 1 em cada 4 homens com mais de 50 anos vão partir um osso devido à osteoporose." — Fundação Internacional de Osteoporose',
  },
  {
    num: '03',
    title: 'Sarcopenia & longevidade',
    subtitle: 'Muscle: The Organ of Longevity',
    desc: 'A massa muscular é o mais poderoso preditor de mortalidade. O músculo não é apenas mecânico — é um órgão endócrino que regula a imunidade, a cognição e a sobrevivência ao cancro.',
  },
  {
    num: '04',
    title: 'A ciência do carregamento osteogénico',
    subtitle: 'How Bone Responds to Force',
    desc: 'Estímulo breve e de alta intensidade é o sinal ótimo para o crescimento ósseo. A Osseo+ aplica forças axiais em ângulos articulares seguros, ultrapassando o limiar osteogénico sem risco.',
  },
  {
    num: '05',
    title: 'Casos reais, resultados reais',
    subtitle: 'Osseo+ Case Studies',
    desc: 'Maria, 74 anos. António, 79. Helena, 82. Sofia, 50 — Osteopenia revertida para normal. Sete casos documentados com dados DEXA antes e depois.',
  },
  {
    num: '06',
    title: 'Guia prático diário',
    subtitle: 'Daily Habits for Stronger Bones',
    desc: 'Nutrição (Vitamina D, K2, Proteína, Magnésio), movimento contra a gravidade, treino de força — tudo o que implementar imediatamente para começar a construir osso hoje.',
  },
];

const STATS = [
  { value: '1 em 2', label: 'mulheres com +50 anos vai partir um osso' },
  { value: '10,5%', label: 'de produtividade perdida por condições músculo-esqueléticas' },
  { value: '7', label: 'casos clínicos documentados com DEXA scan' },
  { value: '777 kg', label: 'leg press pessoal do Dr. Hatch — começou nos 450 kg' },
];

export default function EbookLanding() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [visibleChapters, setVisibleChapters] = useState<Set<number>>(new Set());
  const chapterRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setVisibleChapters((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15 }
    );
    chapterRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setStatus('loading');
    const result = await subscribeToEbook(name, email);
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.message || 'Ocorreu um erro.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Living Bone, Living Strong | Guia Científico Gratuito — Ósseo+</title>
        <meta
          name="description"
          content="O estudo clínico completo do Prof. Dr. Andrew P. Hatch sobre osteoporose, sarcopenia e carregamento osteogénico. 18 capítulos. 7 casos reais. Baseado em evidência."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-surface-light text-secondary font-body flex flex-col md:flex-row">

        {/* ── LEFT: Scrollable Content ── */}
        <div className="w-full md:w-[58%] lg:w-[62%] overflow-y-auto order-2 md:order-1 relative">

          {/* Top bar */}
          <div className="border-b border-secondary/15 px-8 md:px-16 py-5 flex items-center justify-between">
            <span className="font-display text-xs tracking-[0.25em] uppercase font-semibold text-primary">
              Ósseo+ Research · 2026
            </span>
            <span className="font-display text-xs tracking-[0.2em] uppercase text-secondary/40 font-medium">
              Estudo Clínico
            </span>
          </div>

          <div className="px-8 md:px-16 lg:px-20">

            {/* Hero Typography */}
            <header className="pt-16 pb-20 border-b border-secondary/10">
              <p className="font-display text-xs tracking-[0.25em] uppercase mb-6 text-secondary/50 font-medium">
                Prof. Dr. Andrew P. Hatch DC, PhD
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 font-bold">
                A CIÊNCIA<br />
                <span className="italic font-light text-primary">DO MOVIMENTO.</span>
              </h1>
              <p className="font-body text-lg md:text-xl leading-relaxed max-w-xl text-secondary/70 font-light">
                A perda óssea não é uma doença. É descondicionamento. E qualquer tecido que pode
                ser descondicionado pode, nas condições certas, ser recondicionado.
              </p>
            </header>

            {/* Stats row */}
            <section className="py-16 border-b border-secondary/10 grid grid-cols-2 gap-x-8 gap-y-10">
              {STATS.map((stat, i) => (
                <div key={i}>
                  <p className="font-display text-4xl md:text-5xl font-bold leading-none mb-2 tracking-tight text-primary">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-secondary/60 leading-snug font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </section>

            {/* Mobile CTA 1 */}
            <div className="md:hidden py-10 border-b border-secondary/10">
              <button
                onClick={scrollToForm}
                className="w-full bg-[#085C68] text-white active:bg-[#064a54] py-5 flex items-center justify-center gap-4 transition-colors duration-200 shadow-xl"
                style={{ borderRadius: 0 }}
              >
                <span className="font-display text-xs uppercase font-bold tracking-[0.15em]">
                  Receber Acesso
                </span>
                <ArrowRight strokeWidth={2} size={16} />
              </button>
            </div>

            {/* Author block */}
            <section className="py-16 border-b border-secondary/10 flex gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-primary flex items-center justify-center">
                <span className="text-white text-2xl font-display font-bold">AH</span>
              </div>
              <div>
                <p className="font-display text-xl font-bold mb-1">Prof. Dr. Andrew P. Hatch DC, PhD</p>
                <p className="font-body text-sm text-secondary/60 leading-relaxed font-light">
                  Quiroprático, investigador e fundador da Osseo+, Lisboa. Doutorado em doenças
                  músculo-esqueléticas e o seu impacto na saúde das populações. O seu protocolo
                  clínico reduziu a perda de produtividade por condições MSK de{' '}
                  <strong className="font-semibold text-secondary">10,5% para 1,86%</strong> em seis meses.
                </p>
              </div>
            </section>

            {/* Quote */}
            <section className="py-16 border-b border-secondary/10">
              <blockquote className="font-display text-2xl md:text-3xl leading-snug italic font-light max-w-xl text-secondary/80">
                "A medicina construiu um paradigma em torno de abrandar a deterioração. Este livro
                é sobre estimular a regeneração."
              </blockquote>
              <p className="font-display mt-6 text-xs tracking-[0.2em] uppercase text-primary/70 font-medium">
                — A.P. Hatch, Prefácio
              </p>
            </section>

            {/* Chapter list */}
            <section className="py-16 border-b border-secondary/10">
              <p className="font-display text-xs tracking-[0.25em] uppercase mb-10 text-secondary/50 font-medium">
                18 Capítulos · Índice Seleccionado
              </p>
              <ul className="space-y-0">
                {CHAPTERS.map((ch, i) => (
                  <li
                    key={i}
                    ref={(el) => { chapterRefs.current[i] = el; }}
                    data-idx={i}
                    className="border-t border-secondary/10 py-8 flex gap-6 transition-all duration-700"
                    style={{
                      opacity: visibleChapters.has(i) ? 1 : 0,
                      transform: visibleChapters.has(i) ? 'translateY(0)' : 'translateY(24px)',
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <span className="font-display text-3xl font-bold text-primary/25 flex-shrink-0 leading-none mt-1">
                      {ch.num}
                    </span>
                    <div>
                      <p className="font-display text-xl font-bold leading-tight mb-1">{ch.title}</p>
                      <p className="font-display text-xs tracking-[0.15em] uppercase text-secondary/35 mb-3 font-medium">
                        {ch.subtitle}
                      </p>
                      <p className="font-body text-sm text-secondary/60 leading-relaxed font-light">
                        {ch.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* For whom */}
            <section className="py-16">
              <p className="font-display text-xs tracking-[0.25em] uppercase mb-8 text-secondary/50 font-medium">
                Para quem é este guia?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Adultos com osteopenia ou osteoporose diagnosticada',
                  'Atletas que querem maximizar a densidade óssea e muscular',
                  'Médicos e fisioterapeutas à procura de evidência clínica',
                  'Qualquer pessoa que recuse envelhecer em declínio',
                ].map((item, i) => (
                  <div key={i} className="border border-secondary/15 px-5 py-4 flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary flex-shrink-0" />
                    <p className="font-body text-sm text-secondary/70 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mobile CTA 2 */}
            <div className="md:hidden pb-16 pt-4">
              <button
                onClick={scrollToForm}
                className="w-full bg-[#085C68] text-white active:bg-[#064a54] py-5 flex items-center justify-center gap-4 transition-colors duration-200 shadow-xl"
                style={{ borderRadius: 0 }}
              >
                <span className="font-display text-xs uppercase font-bold tracking-[0.15em]">
                  Descarregar O Estudo
                </span>
                <ArrowRight strokeWidth={2} size={16} />
              </button>
            </div>

            <div className="hidden md:block pb-24" />
          </div>
        </div>

        {/* ── RIGHT: Sticky Form ── */}
        <div className="w-full md:w-[42%] lg:w-[38%] bg-[#085C68] text-white flex flex-col justify-center order-1 md:order-2 md:sticky top-0 h-auto md:h-screen font-body">

          <div className="px-8 md:px-10 lg:px-12 py-12 md:py-0 max-w-md mx-auto w-full">
            {status === 'success' ? (
              <div key="success" style={{ animation: 'ebookFadeIn 0.5s ease both' }}>
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-8">
                  <CheckCircle className="text-[#085C68] w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="font-display text-4xl font-bold leading-tight mb-5">
                  Acesso<br />Confirmado.
                </h3>
                <p className="font-body text-white/70 font-light leading-relaxed mb-8 text-sm">
                  O guia <strong className="text-white">Living Bone, Living Strong</strong> foi
                  enviado para <strong className="text-white">{email}</strong>. Verifique a sua
                  caixa de entrada.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setName(''); setEmail(''); }}
                  className="font-display text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors flex items-center gap-2 font-medium"
                >
                  Voltar <ArrowRight size={12} />
                </button>
              </div>
            ) : (
              <div key="form">
                {/* Badge */}
                <span className="inline-block border border-white/20 text-white/50 font-display text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 mb-8 font-medium">
                  Estudo Exclusivo · 2026
                </span>

                <h2 className="font-display text-3xl md:text-4xl font-bold leading-[0.92] tracking-tight mb-4">
                  Descarregar<br />
                  <span className="italic font-light text-white/90">O estudo.</span>
                </h2>

                <p className="font-body text-white/50 font-light text-sm leading-relaxed mb-10">
                  18 capítulos. 7 casos clínicos com DEXA scan. A ciência do
                  carregamento osteogénico explicada para si.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="group">
                    <label
                      htmlFor="ebook-name"
                      className="block font-display text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2 group-focus-within:text-white transition-colors font-medium"
                    >
                      Primeiro Nome
                    </label>
                    <input
                      id="ebook-name"
                      type="text"
                      required
                      disabled={status === 'loading'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="ex: Maria"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors font-body"
                      style={{ borderRadius: 0 }}
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label
                      htmlFor="ebook-email"
                      className="block font-display text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2 group-focus-within:text-white transition-colors font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="ebook-email"
                      type="email"
                      required
                      disabled={status === 'loading'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maria@exemplo.com"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors font-body"
                      style={{ borderRadius: 0 }}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-xs font-light border-l border-red-500 pl-3 font-body">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-white text-[#085C68] hover:bg-surface-light py-5 mt-6 flex items-center justify-center gap-4 group transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ borderRadius: 0 }}
                  >
                    <span className="font-display text-xs uppercase font-bold tracking-[0.15em]">
                      {status === 'loading' ? 'A Processar...' : 'Receber Acesso'}
                    </span>
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : (
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform duration-200"
                        strokeWidth={2}
                        size={16}
                      />
                    )}
                  </button>
                </form>

                <p className="font-body text-white/30 text-[10px] font-light mt-6 text-center leading-relaxed">
                  Dados protegidos. Ao submeter, concorda com os nossos{' '}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    termos e condições
                  </a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Minimal animation keyframe */}
      <style>{`
        @keyframes ebookFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </>
  );
}
