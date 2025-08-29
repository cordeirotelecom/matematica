import React from 'react';
import { Calculator, Brain, Target, Trophy } from 'lucide-react';
import InteractiveCalculator from '@/components/InteractiveCalculator';
import InteractiveExercise from '@/components/InteractiveExercise';

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Demonstração Interativa</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experimente nossas ferramentas educacionais e veja como tornar o aprendizado 
              de matemática mais dinâmico e eficiente.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Seção de Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Calculadora</h3>
            <p className="text-gray-600 text-sm">Ferramenta interativa para verificar cálculos</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Exercícios</h3>
            <p className="text-gray-600 text-sm">Pratique com feedback imediato</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Progresso</h3>
            <p className="text-gray-600 text-sm">Acompanhe seu desenvolvimento</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Conquistas</h3>
            <p className="text-gray-600 text-sm">Sistema gamificado motivacional</p>
          </div>
        </div>

        {/* Demonstrações Interativas */}
        <div className="space-y-12">
          {/* Seção 1: Exercício Interativo */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sistema de Exercícios Interativos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pratique com exercícios que oferecem feedback imediato, explicações detalhadas 
                e acompanhamento de progresso em tempo real.
              </p>
            </div>
            
            <InteractiveExercise />
          </div>

          {/* Seção 2: Calculadora */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Calculadora Educacional
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Uma calculadora integrada que ajuda os estudantes a verificar seus cálculos 
                e compreender o passo a passo das operações.
              </p>
            </div>
            
            <InteractiveCalculator />
          </div>

          {/* Seção 3: Metodologia */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Combinamos teoria sólida com prática interativa para criar uma experiência 
                de aprendizado única e eficaz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aprendizado Direcionado</h3>
                <p className="text-gray-600">
                  Conteúdo adaptado ao nível e ritmo de cada estudante, garantindo 
                  progressão consistente.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Feedback Imediato</h3>
                <p className="text-gray-600">
                  Correção instantânea com explicações detalhadas para consolidar 
                  o aprendizado.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Progresso Visual</h3>
                <p className="text-gray-600">
                  Acompanhamento detalhado do progresso com relatórios e estatísticas 
                  motivacionais.
                </p>
              </div>
            </div>
          </div>

          {/* Seção 4: Depoimentos */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                O que Nossos Estudantes Dizem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👩‍🎓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Maria Silva</h4>
                    <p className="text-gray-600 text-sm">Estudante do 2º ano EM</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &ldquo;A plataforma mudou completamente minha relação com matemática. 
                  Os exercícios interativos tornaram tudo muito mais claro!&rdquo;
                </p>
                <div className="flex items-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👨‍🎓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">João Santos</h4>
                    <p className="text-gray-600 text-sm">Estudante universitário</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &ldquo;O sistema de conquistas me motivou muito. Consegui melhorar 
                  minhas notas e ainda me divertir estudando!&rdquo;
                </p>
                <div className="flex items-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de estudantes que já transformaram seu aprendizado 
              de matemática com nossa plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Começar Agora
              </button>
              <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Mais Recursos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
