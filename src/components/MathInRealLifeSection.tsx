import React from 'react';
import { Smartphone, Car, Home, Stethoscope, Palette, Rocket, Calculator, TrendingUp } from 'lucide-react';

const MathInRealLifeSection = () => {
  const applications = [
    {
      icon: Smartphone,
      title: "Tecnologia",
      area: "Desenvolvimento de Apps",
      description: "Algoritmos, criptografia e inteligência artificial dependem de matemática avançada.",
      examples: ["Algoritmos de busca", "Criptografia de dados", "Machine Learning", "Compressão de imagens"],
      mathConcepts: ["Álgebra Linear", "Estatística", "Teoria dos Números"],
      realExample: "O GPS no seu celular usa trigonometria e cálculo para calcular a menor rota!",
      difficulty: "Avançado",
      color: "bg-blue-500"
    },
    {
      icon: Stethoscope,
      title: "Medicina",
      area: "Diagnósticos e Tratamentos",
      description: "Desde dosagens de medicamentos até análise de exames, a matemática salva vidas.",
      examples: ["Dosagem de medicamentos", "Análise de ECG", "Estatísticas de epidemias", "Modelagem de crescimento tumoral"],
      mathConcepts: ["Proporção", "Estatística", "Equações Diferenciais"],
      realExample: "A dose certa de um remédio é calculada usando proporção baseada no peso corporal!",
      difficulty: "Intermediário",
      color: "bg-red-500"
    },
    {
      icon: Home,
      title: "Arquitetura",
      area: "Construção e Design",
      description: "Cada edifício que você vê foi projetado usando princípios matemáticos complexos.",
      examples: ["Cálculo de materiais", "Resistência estrutural", "Geometria espacial", "Proporção áurea"],
      mathConcepts: ["Geometria", "Trigonometria", "Cálculo"],
      realExample: "A estabilidade de uma ponte depende de cálculos precisos de forças e tensões!",
      difficulty: "Intermediário",
      color: "bg-yellow-500"
    },
    {
      icon: Car,
      title: "Engenharia",
      area: "Transporte e Mobilidade",
      description: "Carros, aviões e trens são otimizados usando matemática para máxima eficiência.",
      examples: ["Aerodinâmica", "Consumo de combustível", "Sistemas de freios", "Navegação GPS"],
      mathConcepts: ["Física Matemática", "Otimização", "Cálculo Vetorial"],
      realExample: "O formato aerodinâmico dos carros é calculado para reduzir a resistência do ar!",
      difficulty: "Avançado",
      color: "bg-green-500"
    },
    {
      icon: Palette,
      title: "Arte e Design",
      area: "Criatividade Matemática",
      description: "A beleza na arte muitas vezes segue padrões e proporções matemáticas.",
      examples: ["Proporção áurea", "Fractais", "Perspectiva", "Padrões geométricos"],
      mathConcepts: ["Geometria", "Sequências", "Simetria"],
      realExample: "A Mona Lisa e o Parthenon usam a proporção áurea para criar harmonia visual!",
      difficulty: "Básico",
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Economia",
      area: "Mercado Financeiro",
      description: "Investimentos, empréstimos e economia global são governados por modelos matemáticos.",
      examples: ["Juros compostos", "Análise de risco", "Modelos econômicos", "Otimização de carteiras"],
      mathConcepts: ["Matemática Financeira", "Estatística", "Probabilidade"],
      realExample: "Sua poupança cresce usando a fórmula de juros compostos: M = C(1+i)^t",
      difficulty: "Intermediário",
      color: "bg-indigo-500"
    },
    {
      icon: Rocket,
      title: "Exploração Espacial",
      area: "Ciência e Descoberta",
      description: "Cada missão espacial é um triunfo da matemática aplicada.",
      examples: ["Trajetórias orbitais", "Navegação espacial", "Cálculo de combustível", "Comunicação com satélites"],
      mathConcepts: ["Mecânica Celeste", "Cálculo Avançado", "Física Matemática"],
      realExample: "Para chegar à Lua, precisamos calcular a trajetória perfeita considerando a gravidade!",
      difficulty: "Avançado",
      color: "bg-gray-700"
    },
    {
      icon: Calculator,
      title: "Vida Cotidiana",
      area: "Situações do Dia a Dia",
      description: "Desde fazer compras até cozinhar, usamos matemática o tempo todo sem perceber.",
      examples: ["Calculando troco", "Receitas culinárias", "Orçamento doméstico", "Reforma da casa"],
      mathConcepts: ["Aritmética", "Proporção", "Porcentagem", "Geometria Básica"],
      realExample: "Ao dobrar uma receita, você está usando proporção matemática!",
      difficulty: "Básico",
      color: "bg-orange-500"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            🌍 Matemática na Vida Real
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onde a Matemática <span className="text-blue-600">Ganha Vida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubra como cada conceito matemático que você aprende tem aplicações práticas 
            no mundo real. Da sua conta bancária aos foguetes que vão ao espaço!
          </p>
        </div>

        {/* Grid de aplicações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Header do card */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`${app.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <app.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
                    <p className="text-gray-500 text-sm">{app.area}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(app.difficulty)}`}>
                  {app.difficulty}
                </span>
              </div>

              {/* Descrição */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {app.description}
              </p>

              {/* Exemplo prático em destaque */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <p className="text-blue-900 font-medium text-sm">
                  💡 <strong>Exemplo Real:</strong> {app.realExample}
                </p>
              </div>

              {/* Conceitos matemáticos */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Conceitos Matemáticos:</h4>
                <div className="flex flex-wrap gap-2">
                  {app.mathConcepts.map((concept, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exemplos de aplicação */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm mb-3">Aplicações Práticas:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {app.examples.slice(0, 4).map((example, idx) => (
                    <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Ver a Matemática com Outros Olhos?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Cada lição do MathLearn mostra as aplicações práticas dos conceitos. 
              Você nunca mais vai perguntar: &ldquo;Para que serve isso?&rdquo;
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Explorar Lições Práticas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathInRealLifeSection;
