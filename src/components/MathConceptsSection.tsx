'use client';
import React, { useState } from 'react';
import { BookOpen, Clock, Lightbulb, Calculator, Eye, ChevronRight } from 'lucide-react';

interface MathConcept {
  id: string;
  title: string;
  level: string;
  description: string;
  stepByStep: {
    title: string;
    explanation: string;
    example: string;
    visualization?: string;
  }[];
  history: {
    period: string;
    discovery: string;
    mathematician: string;
    impact: string;
  };
  practicalApplications: {
    title: string;
    description: string;
    example: string;
    industry: string;
  }[];
  exercises: {
    problem: string;
    solution: string;
    difficulty: 'Fácil' | 'Médio' | 'Difícil';
  }[];
}

const mathConcepts: MathConcept[] = [
  {
    id: 'fractions',
    title: 'Frações',
    level: 'Fundamental II',
    description: 'Frações representam partes de um todo. São fundamentais para entender proporções, porcentagens e muito mais.',
    stepByStep: [
      {
        title: 'Passo 1: O que é uma fração?',
        explanation: 'Uma fração é formada por duas partes: numerador (parte de cima) e denominador (parte de baixo).',
        example: 'Em 3/4: o 3 é o numerador (partes que temos) e o 4 é o denominador (total de partes)',
        visualization: '🍕 Imagine uma pizza dividida em 4 pedaços, você comeu 3 pedaços = 3/4'
      },
      {
        title: 'Passo 2: Como somar frações',
        explanation: 'Para somar frações com mesmo denominador, some apenas os numeradores.',
        example: '1/4 + 2/4 = (1+2)/4 = 3/4',
        visualization: '🍕 1 pedaço + 2 pedaços = 3 pedaços da mesma pizza'
      },
      {
        title: 'Passo 3: Frações com denominadores diferentes',
        explanation: 'Primeiro encontre o denominador comum (MMC), depois iguale as frações.',
        example: '1/2 + 1/3 = 3/6 + 2/6 = 5/6',
        visualization: '🍰 Metade de um bolo + um terço = três sextos + dois sextos'
      },
      {
        title: 'Passo 4: Simplificando frações',
        explanation: 'Divida numerador e denominador pelo mesmo número para simplificar.',
        example: '6/8 = 3/4 (dividindo ambos por 2)',
        visualization: '📏 É como medir com réguas diferentes - a proporção é a mesma'
      }
    ],
    history: {
      period: '3000 AC - Antigo Egito',
      discovery: 'Os egípcios criaram o primeiro sistema de frações para dividir terras e construir pirâmides',
      mathematician: 'Escribas egípcios',
      impact: 'Revolucionou a arquitetura, agricultura e comércio. Sem frações, não teríamos as pirâmides!'
    },
    practicalApplications: [
      {
        title: 'Culinária',
        description: 'Receitas usam frações constantemente',
        example: 'Para fazer 1/2 receita de bolo, use 1/2 xícara de farinha em vez de 1 xícara completa',
        industry: 'Gastronomia'
      },
      {
        title: 'Medicina',
        description: 'Dosagens de medicamentos são calculadas em frações',
        example: 'Um bebê de 6kg toma 1/4 da dose de um adulto de 60kg',
        industry: 'Saúde'
      },
      {
        title: 'Construção',
        description: 'Medidas de materiais e proporções',
        example: 'Mistura de concreto: 1 parte de cimento, 2 partes de areia, 3 partes de brita',
        industry: 'Engenharia'
      }
    ],
    exercises: [
      {
        problem: 'João comeu 2/8 de uma pizza e Maria comeu 3/8. Quanto da pizza foi consumida?',
        solution: '2/8 + 3/8 = 5/8 da pizza foi consumida',
        difficulty: 'Fácil'
      },
      {
        problem: 'Uma receita pede 3/4 de xícara de açúcar. Você só tem 1/2 xícara. Quanto falta?',
        solution: '3/4 - 1/2 = 3/4 - 2/4 = 1/4 de xícara falta',
        difficulty: 'Médio'
      }
    ]
  },
  {
    id: 'equations',
    title: 'Equações do 1º Grau',
    level: 'Fundamental II',
    description: 'Equações são igualdades com incógnitas. Aprender a resolvê-las é fundamental para a álgebra.',
    stepByStep: [
      {
        title: 'Passo 1: Identificando a equação',
        explanation: 'Uma equação do 1º grau tem uma incógnita (x) elevada à primeira potência.',
        example: '2x + 5 = 13 (equação do 1º grau)',
        visualization: '⚖️ Pense numa balança: os dois lados devem ser iguais'
      },
      {
        title: 'Passo 2: Isolando termos',
        explanation: 'Mova os números para um lado e deixe os termos com x do outro.',
        example: '2x + 5 = 13 → 2x = 13 - 5 → 2x = 8',
        visualization: '➡️ O que passa para o outro lado, muda de sinal'
      },
      {
        title: 'Passo 3: Encontrando x',
        explanation: 'Divida ambos os lados pelo coeficiente de x.',
        example: '2x = 8 → x = 8/2 → x = 4',
        visualization: '🎯 Agora temos o valor de x!'
      },
      {
        title: 'Passo 4: Verificando',
        explanation: 'Substitua o valor encontrado na equação original.',
        example: '2(4) + 5 = 8 + 5 = 13 ✓',
        visualization: '✅ Se der certo, a resposta está correta!'
      }
    ],
    history: {
      period: '820 DC - Bagdá',
      discovery: 'Al-Khwarizmi criou métodos sistemáticos para resolver equações',
      mathematician: 'Muhammad ibn Musa al-Khwarizmi',
      impact: 'Fundou a álgebra moderna. Seu nome deu origem à palavra "algoritmo"'
    },
    practicalApplications: [
      {
        title: 'Finanças',
        description: 'Calcular preços e descontos',
        example: 'Se um produto custa x reais com 20% de desconto fica R$ 80: 0.8x = 80, logo x = R$ 100',
        industry: 'Comércio'
      },
      {
        title: 'Engenharia',
        description: 'Calcular resistências e cargas',
        example: 'Para uma viga suportar 1200kg com 3 pilares de x kg cada: 3x = 1200, logo x = 400kg',
        industry: 'Construção'
      }
    ],
    exercises: [
      {
        problem: 'Resolva: 3x - 7 = 14',
        solution: '3x = 14 + 7 → 3x = 21 → x = 7',
        difficulty: 'Fácil'
      },
      {
        problem: 'A idade de Pedro mais 15 anos é igual a 32 anos. Qual a idade de Pedro?',
        solution: 'x + 15 = 32 → x = 32 - 15 → x = 17 anos',
        difficulty: 'Médio'
      }
    ]
  },
  {
    id: 'percentage',
    title: 'Porcentagem',
    level: 'Fundamental II',
    description: 'Porcentagem é uma forma de expressar proporções. Essencial para finanças, estatísticas e vida cotidiana.',
    stepByStep: [
      {
        title: 'Passo 1: O que é porcentagem?',
        explanation: 'Porcentagem significa "por cem". É uma fração com denominador 100.',
        example: '25% = 25/100 = 0,25',
        visualization: '💯 Se algo tem 100 partes, 25% são 25 dessas partes'
      },
      {
        title: 'Passo 2: Calculando porcentagem',
        explanation: 'Multiplique o valor pela porcentagem em decimal.',
        example: '30% de 200 = 0,30 × 200 = 60',
        visualization: '🧮 Transforme % em decimal: 30% = 0,30'
      },
      {
        title: 'Passo 3: Aumentos e descontos',
        explanation: 'Para aumento: some. Para desconto: subtraia.',
        example: 'Aumento de 15%: valor × 1,15 | Desconto de 15%: valor × 0,85',
        visualization: '📈📉 100% + 15% = 115% = 1,15 | 100% - 15% = 85% = 0,85'
      },
      {
        title: 'Passo 4: Encontrando o total',
        explanation: 'Se você sabe a parte e a porcentagem, pode encontrar o todo.',
        example: 'Se 40% é igual a 80, o total é: 80 ÷ 0,40 = 200',
        visualization: '🔍 Divida a parte pela porcentagem em decimal'
      }
    ],
    history: {
      period: '1500 - Renascimento',
      discovery: 'Comerciantes italianos popularizaram o uso de porcentagens',
      mathematician: 'Comerciantes de Veneza e Florença',
      impact: 'Revolucionou o comércio, bancos e o sistema financeiro mundial'
    },
    practicalApplications: [
      {
        title: 'Compras',
        description: 'Calcular descontos e preços finais',
        example: 'Sapato de R$ 120 com 25% de desconto: 120 × 0,75 = R$ 90',
        industry: 'Varejo'
      },
      {
        title: 'Investimentos',
        description: 'Calcular rendimentos e juros',
        example: 'R$ 1000 investidos a 12% ao ano rendem: 1000 × 0,12 = R$ 120',
        industry: 'Financeiro'
      },
      {
        title: 'Estatísticas',
        description: 'Expressar dados e pesquisas',
        example: 'Se 7 de 10 pessoas aprovam algo: 7/10 = 0,7 = 70%',
        industry: 'Pesquisa'
      }
    ],
    exercises: [
      {
        problem: 'Calcule 15% de 80',
        solution: '15% de 80 = 0,15 × 80 = 12',
        difficulty: 'Fácil'
      },
      {
        problem: 'Um produto custava R$ 50 e aumentou 20%. Qual o novo preço?',
        solution: 'Novo preço = 50 × 1,20 = R$ 60',
        difficulty: 'Médio'
      }
    ]
  },
  {
    id: 'geometry',
    title: 'Geometria Básica',
    level: 'Fundamental II',
    description: 'Geometria estuda formas, tamanhos e propriedades de figuras. Base para arquitetura, design e engenharia.',
    stepByStep: [
      {
        title: 'Passo 1: Perímetro',
        explanation: 'Perímetro é a soma de todos os lados de uma figura.',
        example: 'Retângulo 5×3: P = 5 + 3 + 5 + 3 = 16',
        visualization: '🔲 Imagine uma cerca ao redor da figura'
      },
      {
        title: 'Passo 2: Área do retângulo',
        explanation: 'Área é base × altura.',
        example: 'Retângulo 5×3: A = 5 × 3 = 15',
        visualization: '📦 Quantos quadradinhos cabem dentro'
      },
      {
        title: 'Passo 3: Área do triângulo',
        explanation: 'Área é (base × altura) ÷ 2.',
        example: 'Triângulo base 6, altura 4: A = (6 × 4) ÷ 2 = 12',
        visualization: '🔺 É meio retângulo'
      },
      {
        title: 'Passo 4: Área do círculo',
        explanation: 'Área é π × raio².',
        example: 'Círculo raio 3: A = π × 3² = 9π ≈ 28,3',
        visualization: '⭕ π (pi) ≈ 3,14'
      }
    ],
    history: {
      period: '300 AC - Grécia Antiga',
      discovery: 'Euclides sistematizou a geometria em "Os Elementos"',
      mathematician: 'Euclides de Alexandria',
      impact: 'Base para toda arquitetura, engenharia e navegação por 2000 anos'
    },
    practicalApplications: [
      {
        title: 'Construção',
        description: 'Calcular materiais e áreas',
        example: 'Para azulejar um banheiro 3×2m: área = 6m², precisa de 6m² de azulejos',
        industry: 'Construção Civil'
      },
      {
        title: 'Agricultura',
        description: 'Medir terrenos e plantações',
        example: 'Campo circular raio 100m: área = π × 100² = 31.416m² ≈ 3,14 hectares',
        industry: 'Agropecuária'
      }
    ],
    exercises: [
      {
        problem: 'Calcule a área de um retângulo 8×5',
        solution: 'Área = 8 × 5 = 40',
        difficulty: 'Fácil'
      },
      {
        problem: 'Quantos metros de cerca são necessários para um terreno retangular 15×10m?',
        solution: 'Perímetro = 15 + 10 + 15 + 10 = 50 metros',
        difficulty: 'Médio'
      }
    ]
  }
];

const MathConceptsSection = () => {
  const [selectedConcept, setSelectedConcept] = useState<MathConcept | null>(null);
  const [activeTab, setActiveTab] = useState<'steps' | 'history' | 'applications' | 'exercises'>('steps');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conceitos Explicados Passo a Passo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda matemática de forma detalhada com explicações passo a passo, 
            história fascinante e aplicações práticas do dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de conceitos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Escolha um Conceito</h3>
            {mathConcepts.map((concept) => (
              <div
                key={concept.id}
                onClick={() => setSelectedConcept(concept)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                  selectedConcept?.id === concept.id
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{concept.title}</h4>
                    <p className="text-sm text-blue-600 mb-2">{concept.level}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{concept.description}</p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform ${
                    selectedConcept?.id === concept.id ? 'rotate-90 text-blue-500' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Conteúdo detalhado */}
          <div className="lg:col-span-2">
            {selectedConcept ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedConcept.title}</h3>
                  <p className="text-gray-600">{selectedConcept.description}</p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  {[
                    { id: 'steps', label: 'Passo a Passo', icon: BookOpen },
                    { id: 'history', label: 'História', icon: Clock },
                    { id: 'applications', label: 'Aplicações', icon: Lightbulb },
                    { id: 'exercises', label: 'Exercícios', icon: Calculator }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'steps' | 'history' | 'applications' | 'exercises')}
                      className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Conteúdo das tabs */}
                <div className="p-6">
                  {activeTab === 'steps' && (
                    <div className="space-y-6">
                      {selectedConcept.stepByStep.map((step, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                              <p className="text-gray-700 mb-3">{step.explanation}</p>
                              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-3">
                                <p className="font-mono text-blue-800">{step.example}</p>
                              </div>
                              {step.visualization && (
                                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                  <p className="text-green-800">{step.visualization}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'history' && (
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Clock className="h-6 w-6 text-purple-600" />
                        <h4 className="text-xl font-semibold text-gray-900">Contexto Histórico</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">Período</h5>
                          <p className="text-gray-700 mb-4">{selectedConcept.history.period}</p>
                          
                          <h5 className="font-semibold text-purple-700 mb-2">Descoberta</h5>
                          <p className="text-gray-700">{selectedConcept.history.discovery}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">Matemático</h5>
                          <p className="text-gray-700 mb-4">{selectedConcept.history.mathematician}</p>
                          
                          <h5 className="font-semibold text-purple-700 mb-2">Impacto</h5>
                          <p className="text-gray-700">{selectedConcept.history.impact}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'applications' && (
                    <div className="space-y-6">
                      {selectedConcept.practicalApplications.map((app, index) => (
                        <div key={index} className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-semibold text-green-900">{app.title}</h4>
                            <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm font-medium">
                              {app.industry}
                            </span>
                          </div>
                          <p className="text-green-800 mb-3">{app.description}</p>
                          <div className="bg-white p-4 rounded border border-green-200">
                            <h5 className="font-semibold text-green-900 mb-2">Exemplo Prático:</h5>
                            <p className="text-green-700">{app.example}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'exercises' && (
                    <div className="space-y-6">
                      {selectedConcept.exercises.map((exercise, index) => (
                        <div key={index} className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-semibold text-orange-900">Exercício {index + 1}</h4>
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              exercise.difficulty === 'Fácil' ? 'bg-green-200 text-green-800' :
                              exercise.difficulty === 'Médio' ? 'bg-yellow-200 text-yellow-800' :
                              'bg-red-200 text-red-800'
                            }`}>
                              {exercise.difficulty}
                            </span>
                          </div>
                          <div className="mb-4">
                            <h5 className="font-semibold text-orange-900 mb-2">Problema:</h5>
                            <p className="text-orange-800">{exercise.problem}</p>
                          </div>
                          <div className="bg-white p-4 rounded border border-orange-200">
                            <h5 className="font-semibold text-orange-900 mb-2">Solução:</h5>
                            <p className="text-orange-700 font-mono">{exercise.solution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg flex items-center justify-center min-h-[500px]">
                <div className="text-center">
                  <Eye className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Selecione um Conceito
                  </h3>
                  <p className="text-gray-600">
                    Escolha um conceito matemático para ver explicações detalhadas, 
                    história e aplicações práticas.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathConceptsSection;
