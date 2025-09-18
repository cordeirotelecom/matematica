import React from 'react';
import { Calculator, Clock, Target, Trophy, CheckCircle, AlertCircle } from 'lucide-react';
import InteractiveExercisesList from '@/components/InteractiveExercisesList';

const ExercisesPage = () => {
  const exerciseCategories = [
    {
      id: 'aritmetica',
      title: 'Aritmética',
      description: 'Operações básicas, frações, decimais e porcentagem',
      totalExercises: 120,
      completed: 85,
      difficulty: 'Básico',
      estimatedTime: '2-5 min',
      color: 'bg-green-500',
      topics: ['Adição e Subtração', 'Multiplicação e Divisão', 'Frações', 'Decimais', 'Porcentagem']
    },
    {
      id: 'algebra',
      title: 'Álgebra',
      description: 'Equações, expressões algébricas e sistemas lineares',
      totalExercises: 150,
      completed: 67,
      difficulty: 'Intermediário',
      estimatedTime: '5-10 min',
      color: 'bg-blue-500',
      topics: ['Expressões Algébricas', 'Equações do 1º Grau', 'Equações do 2º Grau', 'Sistemas', 'Funções']
    },
    {
      id: 'geometria',
      title: 'Geometria',
      description: 'Formas, áreas, volumes e geometria analítica',
      totalExercises: 100,
      completed: 43,
      difficulty: 'Intermediário',
      estimatedTime: '5-15 min',
      color: 'bg-purple-500',
      topics: ['Área e Perímetro', 'Volume', 'Ângulos', 'Triângulos', 'Círculos']
    },
    {
      id: 'calculo',
      title: 'Cálculo',
      description: 'Limites, derivadas e integrais',
      totalExercises: 80,
      completed: 12,
      difficulty: 'Avançado',
      estimatedTime: '10-20 min',
      color: 'bg-red-500',
      topics: ['Limites', 'Derivadas', 'Integrais', 'Otimização', 'Séries']
    }
  ];

  const recentExercises = [
    {
      id: 1,
      title: 'Equações do 2º Grau',
      category: 'Álgebra',
      difficulty: 'Intermediário',
      status: 'completed',
      score: 85,
      timeSpent: '8 min'
    },
    {
      id: 2,
      title: 'Área de Triângulos',
      category: 'Geometria',
      difficulty: 'Básico',
      status: 'completed',
      score: 92,
      timeSpent: '5 min'
    },
    {
      id: 3,
      title: 'Derivadas de Funções',
      category: 'Cálculo',
      difficulty: 'Avançado',
      status: 'in-progress',
      score: null,
      timeSpent: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Exercícios de Matemática</h1>
              <p className="text-gray-600 mt-2">Pratique e teste seus conhecimentos</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">207</div>
                <div className="text-sm text-gray-500">Exercícios Completados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">87%</div>
                <div className="text-sm text-gray-500">Taxa de Acerto</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">12h</div>
                <div className="text-sm text-gray-500">Tempo Estudado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna principal - Categorias de exercícios */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias de Exercícios</h2>
            <div className="grid gap-6">
              {exerciseCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                        <Calculator className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Progresso</div>
                      <div className="text-xl font-bold text-gray-900">
                        {category.completed}/{category.totalExercises}
                      </div>
                    </div>
                  </div>

                  {/* Barra de progresso */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className={`h-2 rounded-full transition-all ${category.color}`}
                      style={{ width: `${(category.completed / category.totalExercises) * 100}%` }}
                    ></div>
                  </div>

                  {/* Informações */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Target className="h-4 w-4" />
                        <span>{category.difficulty}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{category.estimatedTime}</span>
                      </div>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      {Math.round((category.completed / category.totalExercises) * 100)}% concluído
                    </div>
                  </div>

                  {/* Tópicos */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Botão */}
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors">
                    Continuar Exercícios
                  </button>
                </div>
              ))}
            </div>

            {/* Exercícios Interativos */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pratique Agora</h2>
              <InteractiveExercisesList />
            </div>
          </div>

          {/* Sidebar - Exercícios recentes e estatísticas */}
          <div className="space-y-6">
            {/* Exercícios recentes */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Exercícios Recentes</h3>
              <div className="space-y-4">
                {recentExercises.map((exercise) => (
                  <div key={exercise.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{exercise.title}</h4>
                        <p className="text-sm text-gray-600">{exercise.category}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {exercise.difficulty}
                          </span>
                          {exercise.status === 'completed' && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                          {exercise.status === 'in-progress' && (
                            <AlertCircle className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        {exercise.score && (
                          <div className="text-green-600 font-semibold">{exercise.score}%</div>
                        )}
                        {exercise.timeSpent && (
                          <div className="text-gray-500">{exercise.timeSpent}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estatísticas */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Suas Conquistas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">Sequência Atual</span>
                  </div>
                  <span className="font-semibold text-gray-900">7 dias</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">Meta Semanal</span>
                  </div>
                  <span className="font-semibold text-gray-900">15/20</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Taxa de Acerto</span>
                  </div>
                  <span className="font-semibold text-gray-900">87%</span>
                </div>
              </div>
            </div>

            {/* Desafio do dia */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Desafio do Dia</h3>
              <p className="text-blue-100 text-sm mb-4">
                Complete 5 exercícios de álgebra para ganhar pontos extras!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm">Progresso: 2/5</span>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;
