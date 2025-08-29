import React from 'react';
import { Calculator, TrendingUp, Zap, Heart, Target } from 'lucide-react';

const MathConceptsSection = () => {
  const concepts = [
    {
      level: "Básico",
      title: "Porcentagem",
      subtitle: "O poder dos 100 pedacinhos",
      icon: TrendingUp,
      color: "bg-green-500",
      definition: "Porcentagem é uma forma de expressar uma fração de 100. É como dividir algo em 100 pedaços iguais!",
      formula: "% = (parte/total) × 100",
      realExamples: [
        {
          situation: "🛒 Desconto na Loja",
          problem: "Camisa de R$ 80 com 25% de desconto",
          solution: "25% de 80 = (25/100) × 80 = R$ 20 de desconto",
          result: "Você paga R$ 60!",
          tip: "Dica: 25% = 1/4, então divida por 4!"
        },
        {
          situation: "📊 Nota da Prova",
          problem: "Acertou 17 de 20 questões",
          solution: "(17/20) × 100 = 85%",
          result: "Sua nota é 8,5!",
          tip: "Sempre que ver X de Y, pense em fração!"
        },
        {
          situation: "💰 Aumento Salarial",
          problem: "Salário de R$ 2000 com aumento de 10%",
          solution: "10% de 2000 = (10/100) × 2000 = R$ 200",
          result: "Novo salário: R$ 2200!",
          tip: "10% é sempre mover a vírgula uma casa!"
        }
      ],
      whyItMatters: "Porcentagem está em TUDO: impostos, descontos, juros, estatísticas, crescimento...",
      nextLevel: "Aprenda juros compostos e veja seu dinheiro crescer!"
    },
    {
      level: "Intermediário",
      title: "Funções",
      subtitle: "Máquinas matemáticas que transformam números",
      icon: Zap,
      color: "bg-blue-500",
      definition: "Uma função é como uma máquina: você coloca um número (entrada), ela processa e dá outro número (saída).",
      formula: "f(x) = y (f transforma x em y)",
      realExamples: [
        {
          situation: "🚗 Velocidade e Distância",
          problem: "Carro a 60 km/h por t horas",
          solution: "Distância = 60 × t (função linear)",
          result: "Em 2h = 120km, em 3h = 180km",
          tip: "A função prevê o futuro baseado no presente!"
        },
        {
          situation: "📱 Plano de Celular",
          problem: "R$ 50 fixo + R$ 0,10 por minuto",
          solution: "Custo(x) = 50 + 0,10x",
          result: "100 min = R$ 60, 200 min = R$ 70",
          tip: "Toda cobrança progressiva é uma função!"
        },
        {
          situation: "🌡️ Conversão de Temperatura",
          problem: "Celsius para Fahrenheit",
          solution: "F(C) = (9/5)C + 32",
          result: "25°C = 77°F, 0°C = 32°F",
          tip: "Funções conectam grandezas diferentes!"
        }
      ],
      whyItMatters: "Funções modelam TUDO na natureza: crescimento populacional, decaimento radioativo, economia...",
      nextLevel: "Explore funções exponenciais e entenda crescimento viral!"
    },
    {
      level: "Avançado",
      title: "Derivadas",
      subtitle: "A matemática da mudança instantânea",
      icon: Target,
      color: "bg-purple-500",
      definition: "Derivada mede quão rápido algo está mudando em um instante específico. É como medir a velocidade instantânea!",
      formula: "f'(x) = lim[h→0] (f(x+h) - f(x))/h",
      realExamples: [
        {
          situation: "🏎️ Aceleração do Carro",
          problem: "Velocidade mudando a cada segundo",
          solution: "Derivada da posição = velocidade, derivada da velocidade = aceleração",
          result: "Prevê quando o carro vai parar!",
          tip: "Derivada é como ter superpoderes de previsão!"
        },
        {
          situation: "💊 Absorção de Medicamento",
          problem: "Como o remédio é absorvido pelo corpo",
          solution: "Derivada mostra a taxa de absorção",
          result: "Médicos calculam a dose perfeita!",
          tip: "Salva vidas calculando concentrações ótimas!"
        },
        {
          situation: "📈 Lucro Máximo da Empresa",
          problem: "Qual preço gera mais lucro?",
          solution: "Derivada da função lucro = 0",
          result: "Encontra o ponto de lucro máximo!",
          tip: "Empresas usam isso para precificar produtos!"
        }
      ],
      whyItMatters: "Derivadas controlam foguetes, otimizam redes neurais, calculam riscos financeiros...",
      nextLevel: "Integração: o processo inverso que calcula áreas e volumes!"
    }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-blue-100 text-blue-800';
      case 'Avançado': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            🎯 Conceitos Desvendados
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Matemática <span className="text-blue-600">Descomplicada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chega de decorar fórmulas! Entenda o PORQUÊ por trás de cada conceito e 
            veja como aplicar na vida real. Matemática não é abstrata - é super prática!
          </p>
        </div>

        {/* Conceitos */}
        <div className="space-y-16">
          {concepts.map((concept, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Header do conceito */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`${concept.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                    <concept.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(concept.level)}`}>
                      {concept.level}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">{concept.title}</h3>
                    <p className="text-gray-600 italic">{concept.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Definição e fórmula */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <Calculator className="h-5 w-5 mr-2" />
                    O Que É?
                  </h4>
                  <p className="text-blue-800 leading-relaxed">{concept.definition}</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <h4 className="font-bold text-purple-900 mb-3">📐 Fórmula Básica</h4>
                  <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                    <code className="text-purple-800 font-mono text-lg">{concept.formula}</code>
                  </div>
                </div>
              </div>

              {/* Exemplos práticos */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🌟 Exemplos do Mundo Real
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {concept.realExamples.map((example, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                      <h5 className="font-bold text-gray-900 mb-3">{example.situation}</h5>
                      
                      <div className="space-y-3">
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded-r">
                          <p className="text-yellow-900 text-sm">
                            <strong>Problema:</strong> {example.problem}
                          </p>
                        </div>
                        
                        <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded-r">
                          <p className="text-blue-900 text-sm">
                            <strong>Solução:</strong> {example.solution}
                          </p>
                        </div>
                        
                        <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded-r">
                          <p className="text-green-900 text-sm">
                            <strong>Resultado:</strong> {example.result}
                          </p>
                        </div>
                        
                        <div className="bg-purple-100 border border-purple-200 p-3 rounded text-center">
                          <p className="text-purple-900 text-xs font-medium">💡 {example.tip}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Por que importa */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-bold text-orange-900 mb-3 flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Por Que É Importante?
                  </h4>
                  <p className="text-orange-800">{concept.whyItMatters}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center">
                    🚀 Próximo Nível
                  </h4>
                  <p className="text-green-800">{concept.nextLevel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metodologia */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              🎓 Nossa Metodologia Única
            </h3>
            <p className="text-indigo-100 max-w-3xl mx-auto">
              Cada conceito segue nossa fórmula testada para transformar complexo em simples
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤔</span>
              </div>
              <h4 className="font-bold mb-2">1. Entenda o QUE</h4>
              <p className="text-sm text-indigo-100">Definição clara e simples</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-bold mb-2">2. Veja o COMO</h4>
              <p className="text-sm text-indigo-100">Exemplos práticos do dia a dia</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-bold mb-2">3. Entenda o PORQUÊ</h4>
              <p className="text-sm text-indigo-100">Aplicações no mundo real</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold mb-2">4. Use o PODER</h4>
              <p className="text-sm text-indigo-100">Pratique e domine</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para Dominar Esses Conceitos?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cada conceito vem com exercícios interativos, simulações e projetos práticos. 
              Você vai USAR matemática, não apenas estudar!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explorar Lições Interativas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathConceptsSection;
