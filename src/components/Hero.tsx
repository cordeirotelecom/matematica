import React from 'react';
import { BookOpen, Calculator, Users, Brain } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Padrão matemático sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl font-light">∑</div>
        <div className="absolute top-40 right-20 text-4xl font-light">∫</div>
        <div className="absolute bottom-20 left-20 text-5xl font-light">π</div>
        <div className="absolute bottom-40 right-10 text-3xl font-light">√</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Título principal */}
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Aprenda <span className="text-blue-400">Matemática</span>
            <br />
            <span className="text-slate-300 font-normal">de forma intuitiva</span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Uma plataforma educacional que transforma conceitos complexos 
            em aprendizado claro e progressivo.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Começar a Estudar
            </Link>
            <Link 
              href="/demo"
              className="border border-slate-600 hover:bg-slate-800 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Explorar Conteúdo
            </Link>
          </div>

          {/* Cards de recursos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg text-center">
              <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Conteúdo Estruturado</h3>
              <p className="text-sm text-slate-400">Lições organizadas por nível e complexidade</p>
            </div>
            
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg text-center">
              <Calculator className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Exercícios Práticos</h3>
              <p className="text-sm text-slate-400">Pratique com problemas reais e feedback imediato</p>
            </div>
            
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg text-center">
              <Brain className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Aprendizado Adaptativo</h3>
              <p className="text-sm text-slate-400">O sistema se adapta ao seu ritmo de aprendizado</p>
            </div>
            
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg text-center">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Comunidade de Estudo</h3>
              <p className="text-sm text-slate-400">Conecte-se com outros estudantes e professores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
