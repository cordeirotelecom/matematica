'use client';

import React, { useState } from 'react';
import { Play, Clock, Users, Star, Trophy, BookOpen, CheckCircle, Lock } from 'lucide-react';
import LessonModal from '@/components/LessonModal';
import { getTopicLessons, LessonContent } from '@/data/lessons';

export default function LessonsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [selectedLesson, setSelectedLesson] = useState<LessonContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        { 
          id: 'numeros-operacoes',
          title: 'Números e Operações', 
          lessons: 12, 
          completed: Math.min(12, Array.from(completedLessons).filter(id => id.includes('numeros')).length),
          description: 'Contagem, adição, subtração e números naturais'
        },
        { 
          id: 'geometria-basica',
          title: 'Geometria Básica', 
          lessons: 10, 
          completed: Math.min(10, Array.from(completedLessons).filter(id => id.includes('geometria')).length),
          description: 'Formas, tamanhos e posições'
        },
        { 
          id: 'medidas-grandezas',
          title: 'Medidas e Grandezas', 
          lessons: 8, 
          completed: Math.min(8, Array.from(completedLessons).filter(id => id.includes('medidas')).length),
          description: 'Tempo, comprimento, massa e capacidade'
        },
        { 
          id: 'tratamento-informacao',
          title: 'Tratamento da Informação', 
          lessons: 6, 
          completed: Math.min(6, Array.from(completedLessons).filter(id => id.includes('informacao')).length),
          description: 'Gráficos simples e organização de dados'
        }
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
        { 
          id: 'algebra',
          title: 'Álgebra', 
          lessons: 18, 
          completed: Math.min(18, Array.from(completedLessons).filter(id => id.includes('algebra')).length),
          description: 'Equações, expressões algébricas e sistemas'
        },
        { 
          id: 'geometria-plana',
          title: 'Geometria Plana', 
          lessons: 15, 
          completed: Math.min(15, Array.from(completedLessons).filter(id => id.includes('geometria-plana')).length),
          description: 'Triângulos, quadriláteros e círculos'
        }
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
        { 
          id: 'funcoes',
          title: 'Funções', 
          lessons: 25, 
          completed: Math.min(25, Array.from(completedLessons).filter(id => id.includes('funcoes')).length),
          description: 'Função do 1º grau, 2º grau, exponencial e logarítmica'
        }
      ]
    }
  ];

  const handleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const handleOpenLesson = (lesson: LessonContent) => {
    setSelectedLesson(lesson);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  const getTopicLessonsForDisplay = (categoryId: string, topicId: string) => {
    return getTopicLessons(categoryId, topicId);
  };

  const renderTopicLessons = (categoryId: string, topicId: string) => {
    const topicLessons = getTopicLessonsForDisplay(categoryId, topicId);
    
    return (
      <div className="mt-4 space-y-3">
        {topicLessons.length > 0 ? (
          topicLessons.map((lesson, index) => (
            <div 
              key={lesson.id}
              className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
              onClick={() => handleOpenLesson(lesson)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    completedLessons.has(lesson.id) 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {completedLessons.has(lesson.id) ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                    <p className="text-sm text-gray-600">{lesson.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    lesson.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                    lesson.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lesson.difficulty}
                  </span>
                  <Play className="h-4 w-4 text-blue-600" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Lições em desenvolvimento</p>
            <p className="text-sm text-gray-500 mt-1">Em breve teremos mais conteúdo disponível!</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Lições de Matemática</h1>
              <p className="text-gray-600">Escolha seu nível e comece a aprender de forma interativa</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Progresso Total</div>
              <div className="text-2xl font-bold text-blue-600">{completedLessons.size} lições</div>
              <div className="text-sm text-gray-500">concluídas</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {!selectedCategory ? (
          /* Seleção de Categoria */
          <div>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Selecione seu Nível de Ensino</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Escolha o nível que melhor se adequa ao seu conhecimento atual. 
                Você pode sempre mudar de nível ou revisitar conteúdos anteriores.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`${category.color} rounded-xl p-6 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg border-2`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <BookOpen className={`h-8 w-8 ${category.iconColor}`} />
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{category.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.subtitle}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Lições:</span>
                      <span className="font-medium">{category.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duração:</span>
                      <span className="font-medium">{category.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Estudantes:</span>
                      <span className="font-medium">{category.students.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">Tópicos principais:</div>
                    <div className="text-xs text-gray-500">
                      {category.topics.slice(0, 2).map(topic => topic.title).join(', ')}
                      {category.topics.length > 2 && '...'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : !selectedTopic ? (
          /* Seleção de Tópico */
          <div>
            <div className="flex items-center mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-blue-600 hover:text-blue-700 font-medium mr-4"
              >
                ← Voltar às Categorias
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {categories.find(c => c.id === selectedCategory)?.title}
                </h2>
                <p className="text-gray-600">
                  {categories.find(c => c.id === selectedCategory)?.subtitle}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {categories.find(c => c.id === selectedCategory)?.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
                  onClick={() => setSelectedTopic(topic.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">Progresso</span>
                    <span className="text-sm font-medium text-gray-700">
                      {topic.completed}/{topic.lessons} lições
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(topic.completed / topic.lessons) * 100}%` }}
                    />
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>~{Math.ceil(topic.lessons * 0.5)}h</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{Math.floor(Math.random() * 500 + 200)} estudando</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Lista de Lições */
          <div>
            <div className="flex items-center mb-8">
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-blue-600 hover:text-blue-700 font-medium mr-4"
              >
                ← Voltar aos Tópicos
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {categories.find(c => c.id === selectedCategory)?.topics.find(t => t.id === selectedTopic)?.title}
                </h2>
                <p className="text-gray-600">
                  {categories.find(c => c.id === selectedCategory)?.topics.find(t => t.id === selectedTopic)?.description}
                </p>
              </div>
            </div>

            {renderTopicLessons(selectedCategory, selectedTopic)}
          </div>
        )}
      </div>

      {selectedLesson && (
        <LessonModal
          lesson={selectedLesson}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onComplete={handleLessonComplete}
        />
      )}
    </div>
  );
}