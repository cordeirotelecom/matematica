'use client';
import React, { useState } from 'react';
import { Briefcase, TrendingUp, Users, Target, DollarSign, Star, ChevronRight } from 'lucide-react';

interface ProfessionalCase {
  id: string;
  profession: string;
  mathArea: string;
  challenge: string;
  solution: string;
  impact: string;
  salary: string;
  growth: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: string[];
  companies: string[];
}

const professionalCases: ProfessionalCase[] = [
  {
    id: 'data-scientist',
    profession: 'Cientista de Dados',
    mathArea: 'Estatística & Álgebra Linear',
    challenge: 'Netflix precisa recomendar filmes para 200 milhões de usuários',
    solution: 'Usa algoritmos estatísticos para analisar padrões de visualização e álgebra linear para processar matrizes de preferências, criando recomendações personalizadas em tempo real.',
    impact: '80% das visualizações vêm de recomendações, economizando bilhões em produção de conteúdo',
    salary: 'R$ 120k - R$ 250k/ano',
    growth: '+35% nos próximos 5 anos',
    icon: TrendingUp,
    color: 'bg-blue-500',
    skills: ['Probabilidade', 'Regressão Linear', 'Machine Learning', 'Python'],
    companies: ['Netflix', 'Google', 'Amazon', 'Nubank']
  },
  {
    id: 'quant-analyst',
    profession: 'Analista Quantitativo',
    mathArea: 'Cálculo & Probabilidade',
    challenge: 'Prever movimentos do mercado financeiro para investimentos',
    solution: 'Aplica equações diferenciais para modelar preços de ações e teoria da probabilidade para calcular riscos, criando estratégias de trading automatizadas.',
    impact: 'Fundos quantitativos gerenciam trilhões de dólares globalmente',
    salary: 'R$ 200k - R$ 500k/ano',
    growth: '+25% com fintech em expansão',
    icon: DollarSign,
    color: 'bg-green-500',
    skills: ['Cálculo Estocástico', 'Teoria dos Jogos', 'Estatística Bayesiana', 'R/Python'],
    companies: ['BTG Pactual', 'XP Investimentos', 'Goldman Sachs', 'Itaú']
  },
  {
    id: 'game-developer',
    profession: 'Desenvolvedor de Jogos',
    mathArea: 'Geometria & Física Matemática',
    challenge: 'Criar mundos virtuais realistas para jogos AAA',
    solution: 'Usa geometria para renderizar gráficos 3D, física para simular movimento realista e álgebra linear para transformações de câmera e animações.',
    impact: 'Indústria de games movimenta R$ 180 bilhões globalmente',
    salary: 'R$ 80k - R$ 180k/ano',
    growth: '+20% com realidade virtual crescendo',
    icon: Target,
    color: 'bg-purple-500',
    skills: ['Geometria 3D', 'Álgebra Linear', 'Física Computacional', 'C++/Unity'],
    companies: ['Ubisoft', 'Epic Games', 'Aquiris', 'Hoplon']
  },
  {
    id: 'ai-engineer',
    profession: 'Engenheiro de IA',
    mathArea: 'Cálculo & Álgebra Linear',
    challenge: 'Ensinar carros autônomos a dirigir com segurança',
    solution: 'Implementa redes neurais usando cálculo diferencial para otimização e álgebra linear para processamento de imagens, permitindo que carros "vejam" e tomem decisões.',
    impact: 'Carros autônomos podem salvar 1,35 milhão de vidas por ano',
    salary: 'R$ 150k - R$ 300k/ano',
    growth: '+40% maior crescimento em tech',
    icon: Users,
    color: 'bg-red-500',
    skills: ['Deep Learning', 'Otimização', 'Processamento de Sinais', 'TensorFlow'],
    companies: ['Tesla', 'Google', 'NVIDIA', 'Mercedes-Benz']
  },
  {
    id: 'biostatistician',
    profession: 'Bioestatístico',
    mathArea: 'Estatística & Probabilidade',
    challenge: 'Descobrir se um novo medicamento funciona e é seguro',
    solution: 'Projeta experimentos clínicos usando estatística inferencial e testa hipóteses com milhares de pacientes para provar eficácia de tratamentos.',
    impact: 'Vacinas COVID foram aprovadas em tempo recorde graças à bioestatística',
    salary: 'R$ 100k - R$ 200k/ano',
    growth: '+30% com envelhecimento populacional',
    icon: Briefcase,
    color: 'bg-orange-500',
    skills: ['Testes de Hipótese', 'Análise de Sobrevivência', 'Epidemiologia', 'SAS/R'],
    companies: ['Pfizer', 'Roche', 'Hospital Sírio-Libanês', 'Fiocruz']
  }
];

const ProfessionalMathCases = () => {
  const [selectedCase, setSelectedCase] = useState<ProfessionalCase | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Carreiras que Usam Matemática
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como profissionais usam matemática para resolver problemas reais 
            e construir carreiras de sucesso em diversas áreas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lista de casos */}
          <div className="space-y-4">
            {professionalCases.map((case_) => (
              <div
                key={case_.id}
                onClick={() => setSelectedCase(case_)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  selectedCase?.id === case_.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${case_.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <case_.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{case_.profession}</h3>
                    <p className="text-sm font-medium text-blue-600 mb-2">{case_.mathArea}</p>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{case_.challenge}</p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-green-600">
                          <DollarSign className="h-3 w-3" />
                          <span className="font-medium">{case_.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-blue-600">
                          <TrendingUp className="h-3 w-3" />
                          <span>{case_.growth}</span>
                        </div>
                      </div>
                      <ChevronRight className={`h-4 w-4 transition-transform ${
                        selectedCase?.id === case_.id ? 'rotate-90 text-blue-500' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detalhes do caso selecionado */}
          <div className="lg:sticky lg:top-8">
            {selectedCase ? (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 ${selectedCase.color} rounded-xl flex items-center justify-center`}>
                    <selectedCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedCase.profession}</h3>
                    <p className="text-blue-600 font-medium">{selectedCase.mathArea}</p>
                  </div>
                </div>

                {/* Desafio */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-red-500" />
                    Desafio
                  </h4>
                  <p className="text-gray-700 bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    {selectedCase.challenge}
                  </p>
                </div>

                {/* Solução */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-blue-500" />
                    Como a Matemática Resolve
                  </h4>
                  <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    {selectedCase.solution}
                  </p>
                </div>

                {/* Impacto */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                    Impacto Real
                  </h4>
                  <p className="text-gray-700 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    {selectedCase.impact}
                  </p>
                </div>

                {/* Habilidades necessárias */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Habilidades Necessárias</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Empresas */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Principais Empresas</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCase.companies.map((company, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg"
                      >
                        <div className={`w-8 h-8 ${selectedCase.color} rounded flex items-center justify-center`}>
                          <span className="text-white text-xs font-bold">{company[0]}</span>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remuneração */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Potencial de Carreira</h4>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1 text-green-600">
                          <DollarSign className="h-4 w-4" />
                          <span className="font-medium">{selectedCase.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-blue-600">
                          <TrendingUp className="h-4 w-4" />
                          <span>{selectedCase.growth}</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      Estudar Área
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Explore Carreiras
                  </h3>
                  <p className="text-gray-600">
                    Selecione uma profissão para ver como a matemática é aplicada no dia a dia
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

export default ProfessionalMathCases;
