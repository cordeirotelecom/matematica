import React from 'react';
import { CheckCircle, Clock, Brain, Target } from 'lucide-react';
import Link from 'next/link';

const AssessmentPage = () => {
  const assessmentQuestions = [
    {
      id: 1,
      question: "Qual é o resultado de 15 + 23?",
      options: ["36", "38", "40", "42"],
      level: "básico"
    },
    {
      id: 2,
      question: "Se x + 5 = 12, qual é o valor de x?",
      options: ["5", "6", "7", "8"],
      level: "intermediário"
    },
    {
      id: 3,
      question: "Qual é a derivada de f(x) = x²?",
      options: ["x", "2x", "x²", "2x²"],
      level: "avançado"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Teste de Nivelamento</h1>
            <p className="text-gray-600">Descubra qual é o seu nível atual de conhecimento em matemática</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Informações do teste */}
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Como funciona o teste?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">15 minutos</h3>
                  <p className="text-sm text-gray-600">Tempo estimado para completar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">20 questões</h3>
                  <p className="text-sm text-gray-600">Questões de múltipla escolha</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Resultado instantâneo</h3>
                  <p className="text-sm text-gray-600">Saiba seu nível imediatamente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Questões do teste */}
          <div className="space-y-6">
            {assessmentQuestions.map((question, index) => (
              <div key={question.id} className="bg-white rounded-lg p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Questão {index + 1}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    question.level === 'básico' ? 'bg-green-100 text-green-800' :
                    question.level === 'intermediário' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {question.level}
                  </span>
                </div>
                
                <p className="text-gray-800 mb-4">{question.question}</p>
                
                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name={`question-${question.id}`}
                        value={option}
                        className="text-blue-600"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Botões de ação */}
          <div className="flex justify-between mt-8">
            <Link
              href="/"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Voltar ao Início
            </Link>
            <div className="space-x-4">
              <Link
                href="/lessons"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Pular Teste
              </Link>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Finalizar Teste
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;