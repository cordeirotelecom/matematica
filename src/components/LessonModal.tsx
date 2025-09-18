'use client';
import React, { useState } from 'react';
import { X, CheckCircle, Clock, BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';

interface LessonContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  objectives: string[];
  content: {
    explanation: string;
    examples: Array<{
      title: string;
      problem: string;
      solution: string[];
      tip?: string;
    }>;
    exercises: Array<{
      question: string;
      options?: string[];
      answer: string;
      explanation: string;
    }>;
  };
  prerequisites?: string[];
  nextLesson?: string;
}

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: LessonContent;
  onComplete?: (lessonId: string) => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const LessonModal: React.FC<LessonModalProps> = ({
  isOpen,
  onClose,
  lesson,
  onComplete,
  onNext,
  onPrevious
}) => {
  const [currentTab, setCurrentTab] = useState<'overview' | 'content' | 'exercises'>('overview');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleCompleteLesson = () => {
    setIsCompleted(true);
    onComplete?.(lesson.id);
  };

  const handleAnswerSelect = (exerciseIndex: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [exerciseIndex]: answer
    }));
  };

  const getScorePercentage = () => {
    const correctAnswers = lesson.content.exercises.filter((exercise, index) => 
      userAnswers[index] === exercise.answer
    ).length;
    return Math.round((correctAnswers / lesson.content.exercises.length) * 100);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{lesson.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{lesson.duration}</span>
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  lesson.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                  lesson.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {lesson.difficulty}
                </span>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {[
            { id: 'overview', label: 'Visão Geral' },
            { id: 'content', label: 'Conteúdo' },
            { id: 'exercises', label: 'Exercícios' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id as 'overview' | 'content' | 'exercises')}
              className={`px-6 py-3 border-b-2 font-medium transition-colors ${
                currentTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {currentTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Descrição</h3>
                <p className="text-gray-700">{lesson.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Objetivos de Aprendizagem</h3>
                <ul className="space-y-2">
                  {lesson.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {lesson.prerequisites && lesson.prerequisites.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Pré-requisitos</h3>
                  <ul className="space-y-1">
                    {lesson.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-gray-700">• {prereq}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {currentTab === 'content' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Explicação</h3>
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed">{lesson.content.explanation}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Exemplos Práticos</h3>
                <div className="space-y-4">
                  {lesson.content.examples.map((example, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                      <div className="mb-3">
                        <strong className="text-gray-900">Problema:</strong>
                        <p className="text-gray-700 mt-1">{example.problem}</p>
                      </div>
                      <div>
                        <strong className="text-gray-900">Solução:</strong>
                        <ol className="list-decimal list-inside text-gray-700 mt-1 space-y-1">
                          {example.solution.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                      </div>
                      {example.tip && (
                        <div className="mt-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                          <strong className="text-yellow-800">Dica:</strong>
                          <p className="text-yellow-700 mt-1">{example.tip}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentTab === 'exercises' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercício {currentExercise + 1} de {lesson.content.exercises.length}
                </h3>
                {showAnswers && (
                  <div className="text-sm font-medium">
                    Pontuação: <span className="text-blue-600">{getScorePercentage()}%</span>
                  </div>
                )}
              </div>

              {lesson.content.exercises.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="mb-4">
                    <p className="text-gray-900 font-medium mb-4">
                      {lesson.content.exercises[currentExercise].question}
                    </p>

                    {lesson.content.exercises[currentExercise].options ? (
                      <div className="space-y-2">
                        {lesson.content.exercises[currentExercise].options!.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(currentExercise, option)}
                            disabled={showAnswers}
                            className={`w-full text-left p-3 rounded-lg border transition-colors ${
                              userAnswers[currentExercise] === option
                                ? showAnswers
                                  ? option === lesson.content.exercises[currentExercise].answer
                                    ? 'border-green-500 bg-green-50'
                                    : 'border-red-500 bg-red-50'
                                  : 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={userAnswers[currentExercise] || ''}
                        onChange={(e) => handleAnswerSelect(currentExercise, e.target.value)}
                        disabled={showAnswers}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Digite sua resposta..."
                      />
                    )}
                  </div>

                  {showAnswers && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-900 mb-2">Explicação:</h4>
                      <p className="text-blue-800">{lesson.content.exercises[currentExercise].explanation}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => setCurrentExercise(Math.max(0, currentExercise - 1))}
                      disabled={currentExercise === 0}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Anterior</span>
                    </button>

                    {!showAnswers ? (
                      <button
                        onClick={() => setShowAnswers(true)}
                        disabled={!userAnswers[currentExercise]}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Ver Respostas
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          if (currentExercise < lesson.content.exercises.length - 1) {
                            setCurrentExercise(currentExercise + 1);
                            setShowAnswers(false);
                          } else {
                            handleCompleteLesson();
                          }
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
                      >
                        {currentExercise < lesson.content.exercises.length - 1 ? 'Próximo' : 'Concluir Lição'}
                      </button>
                    )}

                    <button
                      onClick={() => setCurrentExercise(Math.min(lesson.content.exercises.length - 1, currentExercise + 1))}
                      disabled={currentExercise === lesson.content.exercises.length - 1}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>Próximo</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <div className="flex items-center space-x-4">
            {onPrevious && (
              <button
                onClick={onPrevious}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Lição Anterior</span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {!isCompleted ? (
              <button
                onClick={handleCompleteLesson}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Marcar como Concluída</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Lição Concluída!</span>
              </div>
            )}

            {onNext && (
              <button
                onClick={onNext}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                <span>Próxima Lição</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;