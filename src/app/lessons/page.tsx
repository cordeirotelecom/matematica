import React from 'react';
import { BookOpen, Star, ArrowRight, Play } from 'lucide-react';

const LessonsPage = () => {
  const categories = [
    {
      id: 'fundamental-1',
      title: 'Fundamental I',
      subtitle: '1º ao 5º ano',
      lessons: 45,
      duration: '120 horas',
      rating: 4.9,
      students: 1520,
      color: 'bg-green-100 border-green-300',
      iconColor: 'text-green-600',
      topics: [
        { title: 'Números e Operações', lessons: 12, completed: 8 },
        { title: 'Geometria Básica', lessons: 10, completed: 5 },
        { title: 'Medidas e Grandezas', lessons: 8, completed: 3 },
        { title: 'Tratamento da Informação', lessons: 6, completed: 0 }
      ]
    },
    {
      id: 'fundamental-2',
      title: 'Fundamental II',
      subtitle: '6º ao 9º ano',
      lessons: 68,
      duration: '180 horas',
      rating: 4.8,
      students: 2340,
      color: 'bg-blue-100 border-blue-300',
      iconColor: 'text-blue-600',
      topics: [
        { title: 'Álgebra', lessons: 18, completed: 12 },
        { title: 'Geometria Plana', lessons: 15, completed: 8 },
        { title: 'Proporções e Porcentagem', lessons: 12, completed: 6 },
        { title: 'Estatística e Probabilidade', lessons: 10, completed: 2 }
      ]
    },
    {
      id: 'ensino-medio',
      title: 'Ensino Médio',
      subtitle: '1º ao 3º ano',
      lessons: 92,
      duration: '250 horas',
      rating: 4.9,
      students: 3180,
      color: 'bg-purple-100 border-purple-300',
      iconColor: 'text-purple-600',
      topics: [
        { title: 'Funções', lessons: 25, completed: 15 },
        { title: 'Geometria Analítica', lessons: 20, completed: 10 },
        { title: 'Trigonometria', lessons: 18, completed: 8 },
        { title: 'Estatística Avançada', lessons: 15, completed: 5 }
      ]
    },
    {
      id: 'avancado',
      title: 'Nível Avançado',
      subtitle: 'Graduação e Pós',
      lessons: 156,
      duration: '400 horas',
      rating: 4.7,
      students: 890,
      color: 'bg-red-100 border-red-300',
      iconColor: 'text-red-600',
      topics: [
        { title: 'Cálculo Diferencial', lessons: 40, completed: 20 },
        { title: 'Cálculo Integral', lessons: 35, completed: 15 },
        { title: 'Álgebra Linear', lessons: 30, completed: 10 },
        { title: 'Equações Diferenciais', lessons: 25, completed: 5 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Lições de Matemática</h1>
              <p className="text-gray-600 mt-2">Escolha seu nível e comece a aprender</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">361</div>
                <div className="text-sm text-gray-500">Total de Lições</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8.5k+</div>
                <div className="text-sm text-gray-500">Estudantes Ativos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {categories.map((category) => (
            <div key={category.id} className={`border-2 rounded-xl p-6 ${category.color}`}>
              {/* Header do nível */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${category.iconColor} bg-white rounded-xl flex items-center justify-center`}>
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{category.lessons}</div>
                    <div className="text-sm text-gray-600">Lições</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{category.duration}</div>
                    <div className="text-sm text-gray-600">Duração</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-xl font-bold text-gray-900">{category.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">{category.students} estudantes</div>
                  </div>
                </div>
              </div>

              {/* Tópicos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {category.topics.map((topic, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{topic.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{topic.lessons} lições</span>
                      <span className="text-green-600 font-medium">{topic.completed}/{topic.lessons}</span>
                    </div>
                    {/* Barra de progresso */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${(topic.completed / topic.lessons) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ações */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
                    <Play className="h-5 w-5" />
                    <span>Continuar Estudando</span>
                  </button>
                  <button className="border border-gray-400 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
                    <span>Ver Todas as Lições</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="text-sm text-gray-600">
                  Progresso geral: <span className="font-semibold text-gray-900">
                    {Math.round((category.topics.reduce((acc, topic) => acc + topic.completed, 0) / 
                               category.topics.reduce((acc, topic) => acc + topic.lessons, 0)) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center mt-8">
          <h3 className="text-2xl font-bold mb-4">Não sabe por onde começar?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Faça nosso teste de nivelamento para descobrir o ponto ideal para iniciar seus estudos 
            e receber um plano personalizado.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Fazer Teste de Nivelamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
