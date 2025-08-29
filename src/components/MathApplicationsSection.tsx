'use client';
import React, { useState } from 'react';
import { ChevronRight, Clock, Users, TrendingUp, Zap, Globe, Heart, Car, Smartphone, Rocket } from 'lucide-react';

interface MathApplication {
  id: string;
  title: string;
  description: string;
  realWorldExample: string;
  historicalContext: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  industries: string[];
  difficulty: 'Básico' | 'Intermediário' | 'Avançado';
}

const mathApplications: MathApplication[] = [
  {
    id: 'arithmetic',
    title: 'Aritmética',
    description: 'As operações fundamentais que usamos no dia a dia para calcular, medir e quantificar.',
    realWorldExample: 'Desde calcular o troco no supermercado até determinar dosagens de medicamentos, a aritmética está presente em cada aspecto de nossas vidas. Engenheiros usam para calcular cargas estruturais, chefs para ajustar receitas.',
    historicalContext: 'Desenvolvida há mais de 5.000 anos pelos sumérios e babilônios para comércio e agricultura. O sistema decimal que usamos hoje foi criado na Índia e popularizado pelos árabes.',
    icon: TrendingUp,
    color: 'bg-blue-500',
    industries: ['Comércio', 'Medicina', 'Culinária', 'Construção'],
    difficulty: 'Básico'
  },
  {
    id: 'algebra',
    title: 'Álgebra',
    description: 'A linguagem que nos permite resolver problemas complexos usando símbolos e equações.',
    realWorldExample: 'GPS usa álgebra para calcular rotas, bancos para juros compostos, Netflix para recomendar filmes. Cada vez que você ajusta a temperatura do ar condicionado, está usando conceitos algébricos.',
    historicalContext: 'Criada no século IX pelo matemático persa Al-Khwarizmi (de onde vem "algoritmo"). Revolutionou a matemática ao introduzir métodos sistemáticos para resolver equações.',
    icon: Zap,
    color: 'bg-purple-500',
    industries: ['Tecnologia', 'Finanças', 'Logística', 'Entretenimento'],
    difficulty: 'Intermediário'
  },
  {
    id: 'geometry',
    title: 'Geometria',
    description: 'O estudo das formas, espaços e suas propriedades que moldam nosso mundo físico.',
    realWorldExample: 'Arquitetos projetam edifícios, designers criam produtos, artistas fazem obras de arte. Seus óculos, sua casa, seu smartphone - tudo foi criado usando princípios geométricos.',
    historicalContext: 'Euclides sistematizou a geometria em 300 a.C. em Alexandria. Suas leis ainda são usadas hoje. A geometria foi crucial para a construção das pirâmides e catedrais.',
    icon: Globe,
    color: 'bg-green-500',
    industries: ['Arquitetura', 'Design', 'Arte', 'Engenharia'],
    difficulty: 'Intermediário'
  },
  {
    id: 'statistics',
    title: 'Estatística',
    description: 'A ciência de coletar, analisar e interpretar dados para tomar decisões inteligentes.',
    realWorldExample: 'Netflix usa para recomendar séries, médicos para avaliar tratamentos, empresas para entender clientes. Até previsões do tempo dependem de modelos estatísticos complexos.',
    historicalContext: 'Começou no século XVII com jogos de azar. Pascal e Fermat criaram a teoria da probabilidade. Hoje é fundamental para inteligência artificial e ciência de dados.',
    icon: Users,
    color: 'bg-orange-500',
    industries: ['Mídia', 'Medicina', 'Marketing', 'Meteorologia'],
    difficulty: 'Intermediário'
  },
  {
    id: 'calculus',
    title: 'Cálculo',
    description: 'A matemática do movimento e mudança, essencial para entender nosso mundo dinâmico.',
    realWorldExample: 'Carros autônomos usam para navegar, médicos para modelar crescimento de tumores, engenheiros para projetar foguetes. Cada animação da Pixar usa cálculo.',
    historicalContext: 'Inventado independentemente por Newton e Leibniz no século XVII. Permitiu a Revolução Industrial e é a base da física moderna, incluindo a teoria da relatividade.',
    icon: Rocket,
    color: 'bg-red-500',
    industries: ['Automotiva', 'Aeroespacial', 'Animação', 'Física'],
    difficulty: 'Avançado'
  },
  {
    id: 'trigonometry',
    title: 'Trigonometria',
    description: 'O estudo dos triângulos e ondas que governa desde música até navegação.',
    realWorldExample: 'Spotify usa para comprimir música, GPS para localização, médicos para ultrassom. Até o Wi-Fi da sua casa funciona com princípios trigonométricos.',
    historicalContext: 'Desenvolvida pelos antigos gregos para astronomia e navegação. Hiparco criou as primeiras tabelas trigonométricas. Fundamental para a era das grandes navegações.',
    icon: Heart,
    color: 'bg-pink-500',
    industries: ['Música', 'Comunicações', 'Medicina', 'Navegação'],
    difficulty: 'Intermediário'
  }
];

const MathApplicationsSection = () => {
  const [selectedApp, setSelectedApp] = useState<MathApplication | null>(null);
  const [activeTab, setActiveTab] = useState<'example' | 'history' | 'industries'>('example');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Matemática no Mundo Real
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como cada área da matemática molda o mundo ao nosso redor, 
            desde tecnologias que usamos diariamente até as maiores descobertas científicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de aplicações */}
          <div className="lg:col-span-1 space-y-4">
            {mathApplications.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  selectedApp?.id === app.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center`}>
                    <app.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{app.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{app.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        app.difficulty === 'Básico' ? 'bg-green-100 text-green-800' :
                        app.difficulty === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {app.difficulty}
                      </span>
                      <ChevronRight className={`h-5 w-5 transition-transform ${
                        selectedApp?.id === app.id ? 'rotate-90 text-blue-500' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detalhes da aplicação selecionada */}
          <div className="lg:col-span-2">
            {selectedApp ? (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 ${selectedApp.color} rounded-xl flex items-center justify-center`}>
                    <selectedApp.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedApp.title}</h3>
                    <p className="text-gray-600">{selectedApp.description}</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('example')}
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                      activeTab === 'example'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Smartphone className="h-4 w-4 inline mr-2" />
                    Aplicações Reais
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                      activeTab === 'history'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Clock className="h-4 w-4 inline mr-2" />
                    História
                  </button>
                  <button
                    onClick={() => setActiveTab('industries')}
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                      activeTab === 'industries'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Car className="h-4 w-4 inline mr-2" />
                    Indústrias
                  </button>
                </div>

                {/* Conteúdo das tabs */}
                <div className="min-h-[200px]">
                  {activeTab === 'example' && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Como é Usada Hoje
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {selectedApp.realWorldExample}
                      </p>
                    </div>
                  )}

                  {activeTab === 'history' && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Contexto Histórico
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {selectedApp.historicalContext}
                      </p>
                    </div>
                  )}

                  {activeTab === 'industries' && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Principais Setores de Aplicação
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedApp.industries.map((industry, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <div className={`w-10 h-10 ${selectedApp.color} rounded-lg flex items-center justify-center`}>
                              <span className="text-white font-bold">{industry[0]}</span>
                            </div>
                            <span className="font-medium text-gray-900">{industry}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Call to action */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm font-medium">
                    💡 Quer aprender {selectedApp.title}? 
                    <button className="text-blue-600 hover:text-blue-700 font-semibold ml-1">
                      Comece com nossas lições interativas →
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Explore a Matemática
                  </h3>
                  <p className="text-gray-600">
                    Selecione uma área à esquerda para descobrir suas aplicações no mundo real
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

export default MathApplicationsSection;
