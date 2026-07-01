import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { subscribeToEbook } from '../services/brevo';

export default function EbookLanding() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus('loading');
    
    // Simulate or call Brevo
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
        <title>O Guia Definitivo da Saúde Articular | Ósseo+</title>
        <meta name="description" content="Descubra a ciência por trás do movimento sem dor. Descarregue o nosso Ebook gratuito e aprenda como proteger as suas articulações hoje." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F0] text-[#111111] font-sans selection:bg-[#0055FF] selection:text-white flex flex-col md:flex-row">
        
        {/* LEFT COLUMN: Content (Scrollable) */}
        <div className="w-full md:w-7/12 lg:w-8/12 p-8 md:p-16 lg:p-24 overflow-y-auto order-2 md:order-1 relative">
          
          <div className="max-w-3xl mx-auto">
            <header className="mb-24">
              <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold border border-[#111] px-4 py-2 mb-8">
                Estudo Exclusivo &middot; 2026
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight mb-8">
                A CIÊNCIA<br/>
                <span className="italic font-light text-[#0055FF]">DO MOVIMENTO.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl text-[#333]">
                Descubra por que as articulações envelhecem mais rápido do que nós e as estratégias clínicas para reverter o desgaste.
              </p>
            </header>

            {/* Editorial Image Block */}
            <div className="relative mb-24 group">
              <div className="absolute inset-0 bg-[#0055FF] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Pessoa em movimento fluído" 
                className="w-full h-[60vh] object-cover grayscale contrast-125"
              />
              <p className="mt-4 text-sm font-mono uppercase tracking-widest text-right">Fig 1. Biomecânica Humana</p>
            </div>

            <section className="mb-24">
              <h2 className="text-3xl md:text-5xl font-serif mb-12">O que vai aprender neste manifesto.</h2>
              
              <ul className="space-y-8">
                {[
                  { title: "A Fisiologia do Desgaste", desc: "Compreender os três estágios de degradação da cartilagem e como identificar sinais invisíveis." },
                  { title: "Nutrição Sinovial", desc: "Os componentes exatos (além da glucosamina) que provaram aumentar a densidade do fluido sinovial." },
                  { title: "Mecânica de Recuperação", desc: "Protocolos de movimento testados para reduzir a inflamação mecânica em 72 horas." }
                ].map((item, i) => (
                  <li key={i} className="flex border-t border-[#111]/20 pt-8">
                    <span className="font-mono text-xl mr-8 text-[#0055FF]">0{i + 1}</span>
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-wide mb-2">{item.title}</h3>
                      <p className="text-[#555] font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            
            <div className="border-t-4 border-[#111] pt-12 pb-24">
              <h3 className="text-2xl font-serif italic mb-6">"Não é sobre viver mais tempo, é sobre não se sentir preso no próprio corpo."</h3>
              <p className="font-mono uppercase text-sm tracking-widest">— Ósseo+ Research Team</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Form */}
        <div className="w-full md:w-5/12 lg:w-4/12 bg-[#111] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 md:order-2 md:sticky top-0 h-auto md:h-screen shadow-2xl">
          
          <div className="max-w-md mx-auto w-full">
            {status === 'success' ? (
              <div className="animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-[#0055FF] rounded-none flex items-center justify-center mb-8">
                  <CheckCircle className="text-white w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl font-serif mb-4">Acesso Liberado.</h3>
                <p className="font-light text-[#AAA] leading-relaxed mb-8">
                  O manifesto foi enviado para <strong>{email}</strong>. Verifique a sua caixa de entrada (e a pasta de spam, por segurança).
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs uppercase font-mono tracking-[0.2em] text-[#0055FF] hover:text-white transition-colors flex items-center gap-2"
                >
                  Voltar <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Descarregar<br/>O Estudo.</h2>
                <p className="text-[#888] font-light mb-12">Insira os seus dados para receber o PDF diretamente no email.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-xs uppercase font-mono tracking-widest text-[#666] mb-2 group-focus-within:text-white transition-colors">Primeiro Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      disabled={status === 'loading'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent border-b border-[#333] py-3 text-lg focus:outline-none focus:border-[#0055FF] transition-colors rounded-none text-white placeholder-[#333]"
                      placeholder="Ex: João"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-xs uppercase font-mono tracking-widest text-[#666] mb-2 group-focus-within:text-white transition-colors">Email Profissional</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      disabled={status === 'loading'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-[#333] py-3 text-lg focus:outline-none focus:border-[#0055FF] transition-colors rounded-none text-white placeholder-[#333]"
                      placeholder="joao@exemplo.com"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-light mt-2 border-l-2 border-red-500 pl-3">{errorMessage}</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-white text-[#111] hover:bg-[#0055FF] hover:text-white py-5 mt-8 flex items-center justify-center gap-4 group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="uppercase font-bold tracking-[0.15em] text-sm">
                      {status === 'loading' ? 'A Processar...' : 'Receber Acesso'}
                    </span>
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} size={18} />
                    )}
                  </button>
                </form>
                
                <p className="text-[#555] text-xs font-light mt-8 text-center">
                  Os seus dados estão seguros. Ao submeter, concorda com os nossos <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">termos e condições</a>.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
}
