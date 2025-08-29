import React from 'react';
import { Scroll, Globe, Calculator, Atom, Crown, Telescope } from 'lucide-react';

const MathHistorySection = () => {
  const historicalMoments = [
    {
      era: "3000 AC",
      title: "Os Primeiros Números",
      location: "Mesopotâmia",
      icon: Calculator,
      color: "bg-amber-500",
      story: "Imagine um comerciante babilônico tentando contar suas ovelhas. Assim nasceram os primeiros sistemas de numeração!",
      impact: "Sistema decimal que usamos hoje",
      modernUse: "Toda transação bancária digital",
      character: "Comerciante Sumério",
      discovery: "Inventou os símbolos para representar quantidades",
      funFact: "Eles usavam argila para 'salvar' cálculos - os primeiros HD's da história!"
    },
    {
      era: "500 AC",
      title: "O Teorema de Pitágoras",
      location: "Grécia Antiga",
      icon: Crown,
      color: "bg-blue-500",
      story: "Pitágoras descobriu que todo triângulo retângulo esconde um segredo mágico: a² + b² = c²",
      impact: "Base da geometria e trigonometria",
      modernUse: "GPS, arquitetura, design gráfico",
      character: "Pitágoras de Samos",
      discovery: "A relação matemática nos triângulos retângulos",
      funFact: "Ele acreditava que números governavam o universo - e não estava errado!"
    },
    {
      era: "800 DC",
      title: "Álgebra Nasce no Oriente",
      location: "Bagdá, Iraque",
      icon: Scroll,
      color: "bg-green-500",
      story: "Al-Khwarizmi escreveu um livro que mudaria tudo: 'Al-jabr' - a restauração dos números quebrados.",
      impact: "Criação da álgebra moderna",
      modernUse: "Inteligência artificial, criptografia",
      character: "Muhammad al-Khwarizmi",
      discovery: "Métodos sistemáticos para resolver equações",
      funFact: "A palavra 'algoritmo' vem do seu nome - ele criou receitas matemáticas!"
    },
    {
      era: "1600",
      title: "Cálculo Revoluciona o Mundo",
      location: "Inglaterra",
      icon: Telescope,
      color: "bg-purple-500",
      story: "Newton e Leibniz inventaram o cálculo para entender como as coisas mudam - e descobriram o segredo do movimento!",
      impact: "Revolução científica e industrial",
      modernUse: "Física quântica, economia, medicina",
      character: "Isaac Newton",
      discovery: "Como calcular mudanças instantâneas",
      funFact: "Newton inventou o cálculo aos 23 anos durante a quarentena da peste!"
    },
    {
      era: "1900",
      title: "Matemática Quântica",
      location: "Alemanha",
      icon: Atom,
      color: "bg-red-500",
      story: "Max Planck descobriu que a energia vem em 'pacotinhos' - revolucionando nossa compreensão da realidade!",
      impact: "Era da computação e tecnologia",
      modernUse: "Computadores, lasers, smartphones",
      character: "Max Planck",
      discovery: "A natureza discreta da energia",
      funFact: "Essa descoberta 'acidental' criou toda a tecnologia moderna!"
    },
    {
      era: "Hoje",
      title: "IA e Big Data",
      location: "Mundial",
      icon: Globe,
      color: "bg-cyan-500",
      story: "Algoritmos matemáticos agora reconhecem rostos, dirigem carros e até criam arte - o futuro é matemático!",
      impact: "Transformação digital global",
      modernUse: "IA, blockchain, realidade virtual",
      character: "Você - próximo matemático",
      discovery: "Aplicações que ainda nem imaginamos",
      funFact: "Cada like no Instagram é processado por dezenas de algoritmos matemáticos!"
    }
  ];

  const mathMyths = [
    {
      myth: "Matemática é só para gênios",
      truth: "Todo mundo pode aprender! O cérebro matemático se desenvolve com prática.",
      icon: "🧠"
    },
    {
      myth: "Nunca vou usar isso na vida real",
      truth: "Você usa matemática centenas de vezes por dia sem perceber!",
      icon: "🔍"
    },
    {
      myth: "Tem que decorar fórmulas",
      truth: "O importante é entender os padrões e conexões.",
      icon: "🧩"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            📜 Viagem no Tempo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A <span className="text-indigo-600">Aventura</span> da Matemática
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cada fórmula tem uma história fascinante! Conheça os heróis, vilões e descobertas 
            que moldaram o mundo em que vivemos. Matemática não é só números - é drama, suspense e revolução!
          </p>
        </div>

        {/* Timeline interativa */}
        <div className="relative">
          {/* Linha do tempo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 hidden lg:block"></div>
          
          <div className="space-y-16">
            {historicalMoments.map((moment, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Conteúdo */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    {/* Header do momento */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`${moment.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                          <moment.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-500">{moment.era}</span>
                          <h3 className="text-xl font-bold text-gray-900">{moment.title}</h3>
                          <p className="text-gray-600 text-sm">📍 {moment.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* História */}
                    <div className="space-y-4">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-900 font-medium text-sm">
                          📚 <strong>A História:</strong> {moment.story}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-900 text-sm mb-2">🎯 Impacto na Época</h4>
                          <p className="text-green-800 text-sm">{moment.impact}</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-900 text-sm mb-2">💻 Uso Hoje</h4>
                          <p className="text-purple-800 text-sm">{moment.modernUse}</p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <p className="text-yellow-900 text-sm">
                          🎭 <strong>{moment.character}:</strong> {moment.discovery}
                        </p>
                        <p className="text-yellow-800 text-xs mt-2 italic">
                          💡 Curiosidade: {moment.funFact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ícone central (timeline) */}
                <div className="lg:w-auto flex justify-center">
                  <div className={`${moment.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                    <moment.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Espaço vazio para alternância */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de mitos */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🔥 Derrubando Mitos Matemáticos
            </h3>
            <p className="text-gray-600">
              Hora de acabar com essas crenças limitantes sobre matemática!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mathMyths.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-red-900 text-sm mb-2">❌ MITO:</h4>
                  <p className="text-red-800 text-sm">{item.myth}</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 text-sm mb-2">✅ VERDADE:</h4>
                  <p className="text-green-800 text-sm">{item.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Fazer História?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Cada grande matemático começou exatamente onde você está agora. 
              Que tal descobrir qual será SUA contribuição para a matemática?
            </p>
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Começar Minha Jornada Matemática
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathHistorySection;
