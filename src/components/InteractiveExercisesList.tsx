'use client';
import React, { useState } from 'react';
import { CheckCircle, X, Calculator, RotateCcw, Trophy } from 'lucide-react';

interface Exercise {
  id: string;
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  category: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

const exercises: Exercise[] = [
  {
    id: 'arit-1',
    question: 'Quanto é 15 + 27?',
    options: ['40', '41', '42', '43'],
    answer: '42',
    explanation: '15 + 27 = 42. Você pode verificar: 15 + 20 = 35, depois 35 + 7 = 42.',
    category: 'Aritmética',
    difficulty: 'Fácil'
  },
  {
    id: 'arit-2',
    question: 'Uma loja tem 24 camisetas. Vendeu 8 pela manhã e 5 à tarde. Quantas restaram?',
    options: ['9', '10', '11', '12'],
    answer: '11',
    explanation: 'Total vendido: 8 + 5 = 13. Restaram: 24 - 13 = 11 camisetas.',
    category: 'Aritmética',
    difficulty: 'Fácil'
  },
  {
    id: 'alg-1',
    question: 'Se x + 8 = 15, qual é o valor de x?',
    options: ['6', '7', '8', '9'],
    answer: '7',
    explanation: 'Para resolver: x = 15 - 8 = 7. Verificação: 7 + 8 = 15 ✓',
    category: 'Álgebra',
    difficulty: 'Médio'
  },
  {
    id: 'geo-1',
    question: 'Qual é a área de um retângulo de 6 cm por 4 cm?',
    options: ['20 cm²', '24 cm²', '26 cm²', '28 cm²'],
    answer: '24 cm²',
    explanation: 'Área do retângulo = base × altura = 6 × 4 = 24 cm²',
    category: 'Geometria',
    difficulty: 'Médio'
  },
  {
    id: 'calc-1',
    question: 'Qual é a derivada de f(x) = 3x²?',
    options: ['3x', '6x', '3x²', '6x²'],
    answer: '6x',
    explanation: 'Usando a regra da potência: d/dx(ax^n) = n·ax^(n-1). Logo: d/dx(3x²) = 2·3x = 6x',
    category: 'Cálculo',
    difficulty: 'Difícil'
  }
];

const InteractiveExercisesList = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const exercise = exercises[currentExercise];
  const isCorrect = selectedAnswer === exercise.answer;

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    setShowResult(true);
    
    if (isCorrect && !completedExercises.includes(exercise.id)) {
      setScore(score + 1);
      setCompletedExercises([...completedExercises, exercise.id]);
    }
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer('');
      setShowResult(false);
    }
  };

  const resetExercises = () => {
    setCurrentExercise(0);
    setSelectedAnswer('');
    setShowResult(false);
    setScore(0);
    setCompletedExercises([]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Difícil': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
      {/* Header com progresso */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Exercícios Interativos</h2>
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            <span className="font-semibold text-gray-900">{score}/{exercises.length}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Exercício {currentExercise + 1} de {exercises.length}</span>
          <span>{exercise.category}</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Exercício atual */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(exercise.difficulty)}`}>
            {exercise.difficulty}
          </span>
          <Calculator className="h-6 w-6 text-blue-600" />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          {exercise.question}
        </h3>

        {/* Opções de resposta */}
        {exercise.options && (
          <div className="space-y-3 mb-6">
            {exercise.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && setSelectedAnswer(option)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === option
                    ? showResult
                      ? option === exercise.answer
                        ? 'border-green-500 bg-green-50 text-green-900'
                        : 'border-red-500 bg-red-50 text-red-900'
                      : 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && option === exercise.answer && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {showResult && selectedAnswer === option && option !== exercise.answer && (
                    <X className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Resultado e explicação */}
        {showResult && (
          <div className={`p-4 rounded-lg border-l-4 mb-6 ${
            isCorrect 
              ? 'border-green-400 bg-green-50' 
              : 'border-red-400 bg-red-50'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <X className="h-5 w-5 text-red-600" />
              )}
              <span className={`font-semibold ${
                isCorrect ? 'text-green-900' : 'text-red-900'
              }`}>
                {isCorrect ? 'Correto!' : 'Incorreto'}
              </span>
            </div>
            <p className={isCorrect ? 'text-green-800' : 'text-red-800'}>
              {exercise.explanation}
            </p>
          </div>
        )}

        {/* Botões de ação */}
        <div className="flex justify-between">
          <button
            onClick={resetExercises}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Recomeçar</span>
          </button>

          <div className="space-x-4">
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Verificar Resposta
              </button>
            ) : (
              <>
                {currentExercise < exercises.length - 1 ? (
                  <button
                    onClick={nextExercise}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Próximo Exercício
                  </button>
                ) : (
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 mb-2">
                      Parabéns! Você completou todos os exercícios!
                    </div>
                    <div className="text-gray-600">
                      Pontuação final: {score}/{exercises.length} ({Math.round((score/exercises.length)*100)}%)
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveExercisesList;