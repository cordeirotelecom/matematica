import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calculator, Atom, Infinity } from 'lucide-react';

const LevelsSection = () => {
  const levels = [
    {
      id: 'elementary',
      title: 'Fundamental I',
      subtitle: '1º ao 5º ano',
      description: 'Fundamentos da matemática: números, operações básicas, geometria inicial e resolução de problemas simples.',
      icon: BookOpen,
      color: 'bg-green-500',
      topics: ['Números e Operações', 'Geometria Básica', 'Medidas', 'Estatística Inicial'],
      students: '15k+ estudantes'
    },
    {
      id: 'middle',
      title: 'Fundamental II',
      subtitle: '6º ao 9º ano',
      description: 'Álgebra básica, frações, equações, geometria plana e introdução às funções matemáticas.',
      icon: Calculator,
      color: 'bg-blue-500',
      topics: ['Álgebra Básica', 'Geometria Plana', 'Probabilidade', 'Equações'],
      students: '20k+ estudantes'
    },
    {
      id: 'high-school',
      title: 'Ensino Médio',
      subtitle: '1º ao 3º ano',
      description: 'Funções avançadas, trigonometria, geometria analítica, estatística e preparação para vestibulares.',
      icon: Atom,
      color: 'bg-purple-500',
      topics: ['Funções', 'Trigonometria', 'Geometria Analítica', 'Estatística'],
      students: '25k+ estudantes'
    },
    {
      id: 'advanced',
      title: 'Nível Avançado',
      subtitle: 'Graduação+',
      description: 'Cálculo diferencial e integral, álgebra linear, equações diferenciais e matemática aplicada.',
      icon: Infinity,
      color: 'bg-red-500',
      topics: ['Cálculo', 'Álgebra Linear', 'Eq. Diferenciais', 'Matemática Aplicada'],
      students: '10k+ estudantes'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha seu Nível de Aprendizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do básico ao avançado, temos o conteúdo perfeito para seu nível atual. 
            Comece onde se sentir confortável e evolua no seu ritmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {levels.map((level) => (
            <div 
              key={level.id}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Header do card */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`${level.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <level.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{level.title}</h3>
                    <p className="text-gray-500 font-medium">{level.subtitle}</p>
                  </div>
                </div>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                  {level.students}
                </span>
              </div>

              {/* Descrição */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {level.description}
              </p>

              {/* Tópicos */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Principais Tópicos:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {level.topics.map((topic, topicIndex) => (
                    <div 
                      key={topicIndex}
                      className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <Link 
                href={`/lessons/${level.id}`}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Começar Agora</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to action geral */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Não sabe por onde começar?
            </h3>
            <p className="text-blue-100 mb-6">
              Faça nosso teste de nivelamento e descubra o ponto ideal para iniciar seus estudos.
            </p>
            <Link 
              href="/assessment"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Fazer Teste de Nivelamento</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
