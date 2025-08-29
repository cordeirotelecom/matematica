import React from 'react';
import { ArrowRight, Play, Star, Users, Award, BookOpen, Brain, Calculator, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">∑</div>
        <div className="absolute top-40 right-20 text-4xl">∫</div>
        <div className="absolute bottom-20 left-20 text-5xl">π</div>
        <div className="absolute bottom-40 right-10 text-3xl">√</div>
        <div className="absolute top-60 left-1/2 text-4xl">∞</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="h-4 w-4 mr-2 text-yellow-400" />
              #1 Plataforma de Matemática do Brasil
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transforme <span className="text-yellow-400">Números</span> em 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Superpoderes
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Descubra como a matemática está em TUDO: do seu celular aos foguetes espaciais. 
              Aprenda com histórias reais, aplicações práticas e uma metodologia que transforma 
              medo em fascínio!
            </p>
            
            {/* Features rápidas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Brain className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Metodologia Cientificamente Comprovada</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Aplicações do Mundo Real</span>
              </div>
              <div className="flex items-center space-x-3">
                <Lightbulb className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Aprenda o PORQUÊ de cada fórmula</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calculator className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Do Básico ao PhD</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/assessment" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Descobrir Meu Nível</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Play className="h-5 w-5" />
                <span>Ver Como Funciona</span>
              </Link>
            </div>

            {/* Estatísticas impressionantes */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">127%</div>
                <div className="text-xs text-blue-200">Melhoria média nas notas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">89%</div>
                <div className="text-xs text-blue-200">Passaram a GOSTAR de matemática</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">52k+</div>
                <div className="text-xs text-blue-200">Vidas transformadas</div>
              </div>
            </div>
          </div>

          {/* Área visual com preview do que esperar */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">O Que Te Espera</h3>
              </div>
              
              {/* Preview das funcionalidades */}
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-4 flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-yellow-400" />
                  <div className="text-left">
                    <div className="text-sm font-semibold">Lições Storytelling</div>
                    <div className="text-xs text-blue-200">Aprenda com histórias fascinantes</div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-xl p-4 flex items-center space-x-3">
                  <Target className="h-6 w-6 text-yellow-400" />
                  <div className="text-left">
                    <div className="text-sm font-semibold">Aplicações Práticas</div>
                    <div className="text-xs text-blue-200">Veja ONDE usar cada conceito</div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-xl p-4 flex items-center space-x-3">
                  <Users className="h-6 w-6 text-yellow-400" />
                  <div className="text-left">
                    <div className="text-sm font-semibold">Comunidade Ativa</div>
                    <div className="text-xs text-blue-200">52k+ estudantes te ajudando</div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-xl p-4 flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <div className="text-left">
                    <div className="text-sm font-semibold">Gamificação Viciante</div>
                    <div className="text-xs text-blue-200">Badges, rankings e conquistas</div>
                  </div>
                </div>
              </div>

              {/* Depoimento em destaque */}
              <div className="text-center pt-4 border-t border-white border-opacity-20">
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-blue-200">
                  &ldquo;Nunca pensei que fosse AMAR matemática. Agora vejo fórmulas em tudo!&rdquo;
                </p>
                <p className="text-xs text-blue-300 mt-1">- Ana, 16 anos, subiu de 4.0 para 8.7</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 rounded-full font-bold text-sm shadow-lg animate-bounce">
              📚 500+ Lições
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-black p-3 rounded-full font-bold text-sm shadow-lg">
              🎯 100% Prático
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
