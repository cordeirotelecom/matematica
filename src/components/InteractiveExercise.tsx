'use client';
import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Lightbulb, Award } from 'lucide-react';

interface Exercise {
  id: number;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  category: string;
  points: number;
}

const exercises: Exercise[] = [
  {
    id: 1,
    question: "Qual é o resultado de 15 + 7 × 3?",
    options: ["36", "66", "45", "21"],
    correctAnswer: "36",
    explanation: "Primeiro resolvemos a multiplicação: 7 × 3 = 21, depois a soma: 15 + 21 = 36",
    difficulty: "Fácil",
    category: "Aritmética",
    points: 10
  },
  {
    id: 2,
    question: "Se x + 5 = 12, qual é o valor de x?",
    options: ["5", "7", "17", "12"],
    correctAnswer: "7",
    explanation: "Para encontrar x, subtraímos 5 de ambos os lados: x = 12 - 5 = 7",
    difficulty: "Médio",
    category: "Álgebra",
    points: 15
  },
  {
    id: 3,
    question: "Qual é a área de um retângulo com base 8 cm e altura 5 cm?",
    options: ["13 cm²", "26 cm²", "40 cm²", "20 cm²"],
    correctAnswer: "40 cm²",
    explanation: "A área do retângulo = base × altura = 8 × 5 = 40 cm²",
    difficulty: "Fácil",
    category: "Geometria",
    points: 10
  },
  {
    id: 4,
    question: "Qual é 25% de 80?",
    options: ["15", "20", "25", "30"],
    correctAnswer: "20",
    explanation: "25% de 80 = (25/100) × 80 = 0,25 × 80 = 20",
    difficulty: "Médio",
    category: "Porcentagem",
    points: 15
  }
];

const InteractiveExercise = () => {
  const [currentExercise, setCurrentExercise] = useState<Exercise>(exercises[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    const correct = answer === currentExercise.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + currentExercise.points);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const nextExercise = () => {
    const nextIndex = (exerciseIndex + 1) % exercises.length;
    setExerciseIndex(nextIndex);
    setCurrentExercise(exercises[nextIndex]);
    setSelectedAnswer('');
    setIsAnswered(false);
    setIsCorrect(false);
    setShowExplanation(false);
  };

  const resetExercise = () => {
    setSelectedAnswer('');
    setIsAnswered(false);
    setIsCorrect(false);
    setShowExplanation(false);
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
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Award className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Exercício Interativo</h3>
            <p className="text-sm text-gray-600">{currentExercise.category}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{score}</div>
            <div className="text-xs text-gray-500">Pontos</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">{streak}</div>
            <div className="text-xs text-gray-500">Sequência</div>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(currentExercise.difficulty)}`}>
            {currentExercise.difficulty}
          </span>
          <span className="text-blue-600 font-semibold text-sm">
            +{currentExercise.points} pontos
          </span>
        </div>
        
        <h4 className="text-xl font-semibold text-gray-900 mb-4">
          {currentExercise.question}
        </h4>
      </div>

      {/* Options */}
      {currentExercise.options && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {currentExercise.options.map((option, index) => {
            let buttonClass = "p-4 border-2 rounded-lg text-left transition-all ";
            
            if (!isAnswered) {
              buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
            } else if (option === currentExercise.correctAnswer) {
              buttonClass += "border-green-500 bg-green-50 text-green-800";
            } else if (option === selectedAnswer && !isCorrect) {
              buttonClass += "border-red-500 bg-red-50 text-red-800";
            } else {
              buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={buttonClass}
                disabled={isAnswered}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium">{option}</span>
                  {isAnswered && option === currentExercise.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                  )}
                  {isAnswered && option === selectedAnswer && !isCorrect && (
                    <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Result and Explanation */}
      {isAnswered && (
        <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-center space-x-2 mb-2">
            {isCorrect ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
            <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Correto!' : 'Incorreto'}
            </span>
            {isCorrect && (
              <span className="text-green-600 text-sm">+{currentExercise.points} pontos</span>
            )}
          </div>
          
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            <Lightbulb className="h-4 w-4" />
            <span>{showExplanation ? 'Ocultar' : 'Ver'} explicação</span>
          </button>
          
          {showExplanation && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 text-sm">{currentExercise.explanation}</p>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Exercício {exerciseIndex + 1} de {exercises.length}
        </div>
        
        <div className="flex space-x-3">
          {isAnswered && (
            <button
              onClick={resetExercise}
              className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Tentar Novamente</span>
            </button>
          )}
          
          <button
            onClick={nextExercise}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Próximo Exercício
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveExercise;
