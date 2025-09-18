'use client';
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Target, AlertCircle, Brain, Users, Lightbulb } from 'lucide-react';

interface RealWorldSituation {
  title: string;
  description: string;
  thinkingProcess: string;
  exercises: Array<{
    question: string;
    thinkingSteps: string[];
  }>;
}

interface MathConcept {
  id: string;
  title: string;
  level: string;
  description: string;
  whyItMatters: string;
  practicalScenario: string;
  commonMistake: string;
  howToThink: string;
  realWorldSituations: RealWorldSituation[];
}

const mathConcepts: MathConcept[] = [
  {
    id: 'fractions',
    title: 'Frações',
    level: 'Fundamental I',
    description: 'Frações representam partes de um todo. São essenciais para entender proporções, medidas e cálculos do dia a dia.',
    whyItMatters: 'As frações são a base para entender porcentagens, medidas culinárias, construção civil, e praticamente qualquer divisão que não é exata. Sem elas, seria impossível expressar metade de uma pizza ou calcular 1/3 de desconto.',
    practicalScenario: 'Receita de bolo: se a receita serve 4 pessoas e você quer fazer para 6, precisa multiplicar todos os ingredientes por 6/4 = 3/2. Se pede 2 xícaras de farinha, você usará 2 × 3/2 = 3 xícaras.',
    commonMistake: 'Muitos pensam que 1/4 é maior que 1/3 porque 4 > 3. O erro é esquecer que quanto maior o denominador, menor a parte. Pense em pizza: 1/4 da pizza é menor que 1/3 da pizza.',
    howToThink: 'Sempre visualize frações como partes reais. Use desenhos, objetos ou situações concretas. Quando somar frações com denominadores diferentes, pense: "como dividir em partes iguais para que todos caibam?"',
    realWorldSituations: [
      {
        title: 'Cozinha e Receitas',
        description: 'Dobrar ou reduzir receitas, converter medidas',
        thinkingProcess: 'Se a receita pede 3/4 de xícara e você quer fazer metade: 3/4 ÷ 2 = 3/4 × 1/2 = 3/8 de xícara',
        exercises: [
          {
            question: 'Uma receita pede 2/3 de xícara de açúcar para 4 pessoas. Quanto açúcar para 6 pessoas?',
            thinkingSteps: [
              'Identifique a proporção: 2/3 xícara para 4 pessoas',
              'Encontre quanto por pessoa: (2/3) ÷ 4 = 2/3 × 1/4 = 2/12 = 1/6 por pessoa',
              'Multiplique por 6 pessoas: 6 × 1/6 = 1 xícara',
              'Verificação: 6 é 1,5 vez maior que 4, então 2/3 × 1,5 = 1 ✓'
            ]
          }
        ]
      }
    ]
  },
    {
      id: 'areas',
      title: 'Áreas de Figuras Planas',
      level: 'Fundamental II',
      description: 'Calcular áreas é essencial para construção, agricultura, design e muitas outras atividades práticas.',
      whyItMatters: 'Saber calcular áreas permite planejar espaços, comprar materiais, estimar custos e evitar desperdícios. É fundamental para engenheiros, arquitetos, agricultores e qualquer pessoa que precise medir ou dividir espaços.',
      practicalScenario: 'Você quer colocar piso em uma sala retangular de 5m x 3m. Precisa saber a área para comprar a quantidade certa de material: área = 5 × 3 = 15 m².',
      commonMistake: 'Confundir perímetro com área. Perímetro é o contorno, área é o espaço interno. Outro erro comum: esquecer de usar as mesmas unidades (m, cm, etc).',
      howToThink: 'Sempre desenhe a figura e identifique o que é base, altura, raio, etc. Use fórmulas simples e confira se as unidades estão corretas. Para figuras compostas, divida em partes menores e some as áreas.',
      realWorldSituations: [
        {
          title: 'Construção Civil',
          description: 'Calcular área de pisos, paredes, terrenos',
          thinkingProcess: 'Para um terreno retangular de 12m x 20m: área = 12 × 20 = 240 m². Se for triangular, área = (base × altura) ÷ 2.',
          exercises: [
            {
              question: 'Um terreno tem 8m de frente e 25m de fundo. Qual a área?',
              thinkingSteps: [
                'Identifique a forma: retângulo',
                'Use a fórmula: área = base × altura',
                'Área = 8 × 25 = 200 m²',
                'Verifique se as unidades estão corretas ✓'
              ]
            }
          ]
        },
        {
          title: 'Agricultura',
          description: 'Planejar plantio, calcular rendimento',
          thinkingProcess: 'Se um campo tem formato de triângulo com base 30m e altura 20m: área = (30 × 20) ÷ 2 = 300 m²',
          exercises: [
            {
              question: 'Um agricultor quer plantar em um terreno triangular de base 40m e altura 15m. Qual a área?',
              thinkingSteps: [
                'Identifique a forma: triângulo',
                'Use a fórmula: área = (base × altura) ÷ 2',
                'Área = (40 × 15) ÷ 2 = 600 ÷ 2 = 300 m²',
                'Confirme se faz sentido para o contexto ✓'
              ]
            }
          ]
        }
      ]
    },
  {
    id: 'percentage',
    title: 'Porcentagens',
    level: 'Fundamental II',
    description: 'Porcentagens são frações especiais que usam 100 como base. São fundamentais para entender descontos, juros, estatísticas e comparações.',
    whyItMatters: 'Porcentagens estão em todo lugar: descontos em lojas, taxa de juros, estatísticas de futebol, crescimento da economia. É impossível ser um cidadão bem informado sem entender porcentagens.',
    practicalScenario: 'Loja com desconto: um produto de R$ 80 com 25% de desconto. O desconto é 25/100 × 80 = R$ 20. Preço final: R$ 80 - R$ 20 = R$ 60. Ou direto: 80 × (1 - 0,25) = 80 × 0,75 = R$ 60.',
    commonMistake: 'Confundir "25% de desconto" com "pagar 25%". Se tem 25% de desconto, você paga 75% (100% - 25%), não 25%.',
    howToThink: 'Sempre converta porcentagem para fração: 25% = 25/100 = 1/4. Pense: "se divido em 100 partes, quantas estou considerando?" Para 25%, são 25 partes de 100.',
    realWorldSituations: [
      {
        title: 'Compras e Descontos',
        description: 'Calcular preços finais, comparar ofertas',
        thinkingProcess: 'Desconto de 30% em R$ 150: desconto = 30% × 150 = 0,30 × 150 = R$ 45. Preço final = 150 - 45 = R$ 105',
        exercises: [
          {
            question: 'Uma TV de R$ 1.200 está com 15% de desconto. Qual o preço final?',
            thinkingSteps: [
              'Identifique: preço original R$ 1.200, desconto 15%',
              'Calcule o desconto: 15% de 1.200 = 0,15 × 1.200 = R$ 180',
              'Preço final: 1.200 - 180 = R$ 1.020',
              'Método direto: 1.200 × (1 - 0,15) = 1.200 × 0,85 = R$ 1.020 ✓'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'equations',
    title: 'Equações do 1º Grau',
    level: 'Fundamental II',
    description: 'Equações são igualdades com uma incógnita. Aprender a resolvê-las é fundamental para resolver problemas práticos da vida.',
    whyItMatters: 'Equações são a linguagem da resolução de problemas. Sempre que você tem uma situação onde "algo é igual a algo", você tem uma equação. É essencial para finanças, engenharia, medicina, economia.',
    practicalScenario: 'Plano de celular: você paga R$ 30 fixo + R$ 1,50 por minuto. Se a conta deu R$ 75, quantos minutos você usou? Equação: 30 + 1,5x = 75. Resolvendo: 1,5x = 45, logo x = 30 minutos.',
    commonMistake: 'Mudar só um lado da equação. REGRA DE OURO: o que faz de um lado, faz do outro. Se somar 5 de um lado, soma 5 do outro. Sempre manter a balança equilibrada.',
    howToThink: 'Pense na equação como uma balança em equilíbrio. Seu objetivo é isolar a incógnita (x) de um lado. Faça operações inversas: se tem +5, subtraia 5; se tem ×3, divida por 3.',
    realWorldSituations: [
      {
        title: 'Finanças Pessoais',
        description: 'Calcular gastos, dividir contas, planejamento financeiro',
        thinkingProcess: 'Se você quer economizar R$ 1.200 em 6 meses, quanto deve guardar por mês? Equação: 6x = 1200, logo x = 200 reais por mês',
        exercises: [
          {
            question: 'Você tem R$ 500 e quer comprar um videogame de R$ 800. Se economizar R$ 50 por mês, em quantos meses terá o dinheiro?',
            thinkingSteps: [
              'Situação: R$ 500 (já tem) + R$ 50 × meses = R$ 800 (precisa ter)',
              'Monte a equação: 500 + 50x = 800',
              'Resolva: 50x = 800 - 500 = 300',
              'Logo: x = 300 ÷ 50 = 6 meses ✓'
            ]
          }
        ]
      },
      {
        title: 'Problemas de Idade',
        description: 'Calcular idades atuais e futuras',
        thinkingProcess: 'Maria tem 3 anos a mais que João. Juntos têm 27 anos. Idades? João = x, Maria = x + 3. Total: x + (x + 3) = 27',
        exercises: [
          {
            question: 'Pedro tem o dobro da idade de Ana. Daqui a 5 anos, Pedro terá 25 anos. Qual a idade atual de Ana?',
            thinkingSteps: [
              'Idade atual de Pedro: x, idade atual de Ana: x/2',
              'Daqui a 5 anos Pedro terá: x + 5 = 25',
              'Resolva: x = 25 - 5 = 20 anos (idade atual de Pedro)',
              'Ana tem: 20 ÷ 2 = 10 anos ✓'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'functions',
    title: 'Funções',
    level: 'Ensino Médio',
    description: 'Funções descrevem relações entre variáveis. São fundamentais para modelar situações do mundo real.',
    whyItMatters: 'Funções são usadas em tudo: velocidade do carro, custo de produção, crescimento populacional, previsão de vendas. Entender funções permite prever, planejar e otimizar processos.',
    practicalScenario: 'Táxi: Preço = R$ 4,50 (bandeirada) + R$ 2,30 × km rodados. Função: f(x) = 4,50 + 2,30x. Para 10 km: f(10) = 4,50 + 2,30(10) = R$ 27,50.',
    commonMistake: 'Confundir a variável independente (x) com a dependente (y). X é a causa, Y é o efeito. No táxi: km rodados (x) causa o preço (y).',
    howToThink: 'Identifique: o que muda (variável x) e o que é afetado (função f(x)). Pergunte: "Se eu aumentar x em 1, quanto y muda?" Essa é a taxa de variação.',
    realWorldSituations: [
      {
        title: 'Negócios e Empreendedorismo',
        description: 'Calcular custos, receitas, ponto de equilíbrio',
        thinkingProcess: 'Loja de camisetas: custo fixo R$ 1000/mês + R$ 15 por camiseta. Custo(x) = 1000 + 15x. Para 100 camisetas: 1000 + 15(100) = R$ 2500',
        exercises: [
          {
            question: 'Uma pizzaria tem custo fixo de R$ 2000/mês e gasta R$ 12 por pizza. Se vende cada pizza por R$ 25, quantas pizzas precisa vender para ter lucro zero?',
            thinkingSteps: [
              'Custo total: C(x) = 2000 + 12x',
              'Receita total: R(x) = 25x',
              'Lucro zero: Receita = Custo → 25x = 2000 + 12x',
              'Resolva: 25x - 12x = 2000 → 13x = 2000 → x = 154 pizzas ✓'
            ]
          }
        ]
      },
      {
        title: 'Física e Movimento',
        description: 'Velocidade, distância, aceleração',
        thinkingProcess: 'Carro a 60 km/h: distância = velocidade × tempo. D(t) = 60t. Em 2,5 horas: D(2,5) = 60 × 2,5 = 150 km',
        exercises: [
          {
            question: 'Um trem parte às 8h a 80 km/h. A que horas chegará a uma cidade 320 km distante?',
            thinkingSteps: [
              'Função: distância = velocidade × tempo → D(t) = 80t',
              'Queremos: 80t = 320',
              'Resolve: t = 320 ÷ 80 = 4 horas',
              'Chegada: 8h + 4h = 12h (meio-dia) ✓'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'probability',
    title: 'Probabilidade',
    level: 'Ensino Médio',
    description: 'Probabilidade mede as chances de eventos acontecerem. Essencial para tomada de decisões e análise de riscos.',
    whyItMatters: 'Probabilidade está em tudo: previsão do tempo, jogos, medicina, seguros, investimentos. Saber calcular probabilidades ajuda a tomar decisões mais inteligentes.',
    practicalScenario: 'Concurso com 5000 candidatos para 50 vagas. Sua probabilidade de passar = 50/5000 = 1/100 = 1% = muito baixa. Vale a pena o investimento de tempo?',
    commonMistake: 'Confundir probabilidade com certeza. 70% de chance de chuva NÃO significa que vai chover 70% do dia, mas que há 70% de chance de chover.',
    howToThink: 'Probabilidade = casos favoráveis ÷ casos possíveis. Sempre entre 0 (impossível) e 1 (certeza). Use percentuais para comunicar: 0,25 = 25%.',
    realWorldSituations: [
      {
        title: 'Jogos e Apostas',
        description: 'Calcular chances, entender riscos',
        thinkingProcess: 'Loteria: 6 números de 60. Combinações possíveis = 50.063.860. Probabilidade de ganhar = 1/50.063.860 ≈ 0,000002%',
        exercises: [
          {
            question: 'Em um dado honesto, qual a probabilidade de tirar um número par?',
            thinkingSteps: [
              'Números pares no dado: 2, 4, 6 = 3 números',
              'Total de possibilidades: 6 números',
              'Probabilidade = 3/6 = 1/2 = 0,5 = 50%',
              'Interpretação: metade das vezes dará par ✓'
            ]
          }
        ]
      },
      {
        title: 'Medicina e Saúde',
        description: 'Interpretar exames, riscos de doenças',
        thinkingProcess: 'Teste com 95% de precisão: se 100 pessoas fazem o teste, 95 terão resultado correto e 5 podem ter resultado errado',
        exercises: [
          {
            question: 'Um remédio tem 85% de eficácia. De 200 pacientes, quantos provavelmente se curarão?',
            thinkingSteps: [
              'Eficácia = 85% = 0,85',
              'Pacientes que se curarão = 200 × 0,85',
              'Resultado = 170 pacientes',
              'Interpretação: espera-se que 170 se curem e 30 não ✓'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'statistics',
    title: 'Estatística Básica',
    level: 'Ensino Médio',
    description: 'Estatística ajuda a entender dados, fazer comparações e tomar decisões baseadas em informações reais.',
    whyItMatters: 'Vivemos na era dos dados. Saber interpretar médias, gráficos e percentuais é essencial para não ser enganado por notícias falsas, pesquisas manipuladas ou marketing enganoso.',
    practicalScenario: 'Notas de um aluno: 7, 8, 6, 9, 5. Média = (7+8+6+9+5) ÷ 5 = 35 ÷ 5 = 7,0. Essa média representa bem o desempenho?',
    commonMistake: 'Achar que média sempre representa bem os dados. Se um bilionário entra numa sala com 9 pessoas pobres, a renda média será alta, mas não representa a realidade de 90% das pessoas.',
    howToThink: 'Sempre questione os dados. De onde vieram? Qual o tamanho da amostra? Há valores muito altos ou baixos que distorcem a média? Use múltiplas medidas: média, mediana, moda.',
    realWorldSituations: [
      {
        title: 'Análise de Desempenho',
        description: 'Avaliar notas, vendas, resultados',
        thinkingProcess: 'Vendas mensais: Jan=1000, Fev=1200, Mar=800, Abr=1100. Média = (1000+1200+800+1100) ÷ 4 = 1025 reais',
        exercises: [
          {
            question: 'Um time fez os seguintes gols por jogo: 2, 0, 3, 1, 4, 2, 1. Qual a média de gols?',
            thinkingSteps: [
              'Some todos os gols: 2+0+3+1+4+2+1 = 13 gols',
              'Conte o número de jogos: 7 jogos',
              'Média = 13 ÷ 7 = 1,86 gols por jogo',
              'Interpretação: em média, fazem quase 2 gols por jogo ✓'
            ]
          }
        ]
      },
      {
        title: 'Pesquisas e Enquetes',
        description: 'Interpretar resultados, identificar tendências',
        thinkingProcess: 'Pesquisa eleitoral: 1000 pessoas entrevistadas, 45% votam no candidato A. Margem de erro: 3%. Resultado real pode variar entre 42% e 48%',
        exercises: [
          {
            question: 'Uma pesquisa sobre filme favorito: Ação=30, Comédia=45, Drama=15, Terror=10. Qual o percentual de cada gênero?',
            thinkingSteps: [
              'Total de pessoas: 30+45+15+10 = 100 pessoas',
              'Ação: 30/100 = 30%',
              'Comédia: 45/100 = 45% (favorito)',
              'Drama: 15%, Terror: 10% ✓'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'measurements',
    title: 'Sistema de Medidas',
    level: 'Fundamental I',
    description: 'Entender e converter unidades de medida é fundamental para culinária, construção, ciências e vida cotidiana.',
    whyItMatters: 'Erros de conversão podem causar acidentes graves: remédio na dose errada, receita que não dá certo, construção com medidas inadequadas. É questão de segurança e precisão.',
    practicalScenario: 'Receita pede 250ml de leite, mas você só tem xícara. 1 xícara = 240ml, então precisa de um pouco mais que 1 xícara (250ml ÷ 240ml = 1,04 xícaras).',
    commonMistake: 'Confundir unidades similares: ml com l, cm com m, kg com g. Sempre verifique a unidade antes de fazer cálculos.',
    howToThink: 'Decore conversões básicas: 1m = 100cm, 1kg = 1000g, 1l = 1000ml. Para converter, use proporção: se 1m = 100cm, então 2,5m = 2,5 × 100 = 250cm.',
    realWorldSituations: [
      {
        title: 'Culinária e Receitas',
        description: 'Converter medidas, ajustar quantidades',
        thinkingProcess: 'Receita para 4 pessoas usa 500g de carne. Para 6 pessoas: (500g ÷ 4) × 6 = 125g × 6 = 750g',
        exercises: [
          {
            question: 'Uma receita pede 2 xícaras de farinha (1 xícara = 120g). Você tem balança que mede em kg. Quantos kg de farinha usar?',
            thinkingSteps: [
              'Calcule o total em gramas: 2 × 120g = 240g',
              'Converta para kg: 240g ÷ 1000 = 0,24kg',
              'Verificação: 0,24kg × 1000 = 240g ✓',
              'Resposta: usar 0,24kg ou 240g de farinha'
            ]
          }
        ]
      },
      {
        title: 'Construção e Reforma',
        description: 'Calcular materiais, converter unidades',
        thinkingProcess: 'Parede de 3m de altura × 4m de largura = 12m². Se cada lata de tinta cobre 10m², precisa de 1,2 latas (arredondar para 2)',
        exercises: [
          {
            question: 'Um terreno tem 15m × 20m. Quer cercar com arame. Se cada rolo tem 50m, quantos rolos precisa?',
            thinkingSteps: [
              'Calcule o perímetro: 2 × (15 + 20) = 2 × 35 = 70m',
              'Divida pelo comprimento do rolo: 70m ÷ 50m = 1,4 rolos',
              'Arredonde para cima: 2 rolos (não dá para comprar 1,4 rolos)',
              'Sobrará: (2 × 50) - 70 = 30m de arame ✓'
            ]
          }
        ]
      }
    ]
  }
];

const MathConceptsSection = () => {
  const [selectedConcept, setSelectedConcept] = useState<string>('fractions');
  const [activeTab, setActiveTab] = useState<'purpose' | 'scenario' | 'mistakes' | 'thinking' | 'situations'>('purpose');
  const [expandedSituation, setExpandedSituation] = useState<number | null>(null);

  const concept = mathConcepts.find(c => c.id === selectedConcept);

  if (!concept) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aprenda Matemática de Verdade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entenda para que serve cada conceito, como pensar matematicamente e onde usar na vida real
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Lista de Conceitos */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conceitos</h3>
            <div className="space-y-2">
              {mathConcepts.map((concept) => (
                <button
                  key={concept.id}
                  onClick={() => setSelectedConcept(concept.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    selectedConcept === concept.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border'
                  }`}
                >
                  <div className="font-medium">{concept.title}</div>
                  <div className={`text-sm ${selectedConcept === concept.id ? 'text-blue-100' : 'text-gray-500'}`}>
                    {concept.level}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo do Conceito */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Header */}
              <div className="border-b pb-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{concept.title}</h3>
                <p className="text-gray-600 text-lg">{concept.description}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {concept.level}
                </span>
              </div>

              {/* Tabs */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-6 border-b">
                  {[
                    { id: 'purpose', label: 'Para que serve?', icon: Target },
                    { id: 'scenario', label: 'Exemplo Prático', icon: Lightbulb },
                    { id: 'mistakes', label: 'Erros Comuns', icon: AlertCircle },
                    { id: 'thinking', label: 'Como Pensar', icon: Brain },
                    { id: 'situations', label: 'Situações Reais', icon: Users }
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id as 'purpose' | 'scenario' | 'mistakes' | 'thinking' | 'situations')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg border-b-2 transition-colors ${
                        activeTab === id
                          ? 'border-blue-600 text-blue-600 bg-blue-50'
                          : 'border-transparent text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[300px]">
                  {activeTab === 'purpose' && (
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Por que este conceito é importante?</h4>
                          <p className="text-gray-700 leading-relaxed">{concept.whyItMatters}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'scenario' && (
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Lightbulb className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Exemplo Prático Completo</h4>
                          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-gray-700 leading-relaxed">{concept.practicalScenario}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'mistakes' && (
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Erro Comum e Como Evitar</h4>
                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                            <p className="text-gray-700 leading-relaxed">{concept.commonMistake}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'thinking' && (
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Brain className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Como Pensar Matematicamente</h4>
                          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                            <p className="text-gray-700 leading-relaxed">{concept.howToThink}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'situations' && (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Situações do Mundo Real</h4>
                          <p className="text-gray-600">Aprenda como aplicar este conceito em contextos práticos</p>
                        </div>
                      </div>

                      {concept.realWorldSituations.map((situation, index) => (
                        <div key={index} className="border rounded-lg">
                          <button
                            onClick={() => setExpandedSituation(expandedSituation === index ? null : index)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                          >
                            <div>
                              <h5 className="font-semibold text-gray-900">{situation.title}</h5>
                              <p className="text-gray-600 text-sm mt-1">{situation.description}</p>
                            </div>
                            {expandedSituation === index ? 
                              <ChevronDown className="w-5 h-5 text-gray-400" /> : 
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            }
                          </button>

                          {expandedSituation === index && (
                            <div className="px-6 pb-6 border-t bg-gray-50">
                              <div className="mt-4 space-y-4">
                                <div>
                                  <h6 className="font-medium text-gray-900 mb-2">Como Pensar:</h6>
                                  <p className="text-gray-700 text-sm bg-white p-3 rounded border-l-4 border-blue-400">
                                    {situation.thinkingProcess}
                                  </p>
                                </div>

                                {situation.exercises.map((exercise, exIndex) => (
                                  <div key={exIndex} className="bg-white p-4 rounded-lg border">
                                    <h6 className="font-medium text-gray-900 mb-2">Exercício Prático:</h6>
                                    <p className="text-gray-700 mb-3 font-medium">{exercise.question}</p>
                                    
                                    <div>
                                      <h6 className="font-medium text-gray-900 mb-2 text-sm">Passos do Raciocínio:</h6>
                                      <ol className="text-sm text-gray-700 space-y-1">
                                        {exercise.thinkingSteps.map((step, stepIndex) => (
                                          <li key={stepIndex} className="flex items-start space-x-2">
                                            <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full text-xs flex items-center justify-center font-medium">
                                              {stepIndex + 1}
                                            </span>
                                            <span>{step}</span>
                                          </li>
                                        ))}
                                      </ol>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathConceptsSection;
