import React from 'react';
import { User, BookOpen, Target, Trophy, ArrowRight } from 'lucide-react';

const LearningJourneySection = () => {
  const journeySteps = [
    {
      id: 1,
      title: "Descubra Seu Nível",
      subtitle: "Todo herói precisa conhecer seus poderes",
      description: "Comece com nosso teste de nivelamento personalizado. Como um RPG, descobrimos exatamente onde você está na sua jornada matemática.",
      icon: User,
      color: "bg-green-500",
      features: ["Teste adaptativo", "Diagnóstico preciso", "Sem pressão"],
      story: "João, 15 anos, descobriu que sabia mais do que imaginava!",
      time: "10 minutos",
      difficulty: "Fácil"
    },
    {
      id: 2,
      title: "Trilha Personalizada",
      subtitle: "Sua aventura única de aprendizado",
      description: "Baseado no seu nível, criamos uma trilha de aprendizado sob medida. Como um GPS, sempre sabemos o próximo passo ideal.",
      icon: BookOpen,
      color: "bg-blue-500",
      features: ["Sequência otimizada", "Pré-requisitos claros", "Progresso visual"],
      story: "Maria seguiu sua trilha e viu conexões que nunca imaginou!",
      time: "Contínuo",
      difficulty: "Adaptável"
    },
    {
      id: 3,
      title: "Aprenda Fazendo",
      subtitle: "Teoria + Prática = Maestria",
      description: "Cada conceito vem com aplicações do mundo real. Você não apenas aprende fórmulas, mas entende PARA QUE servem.",
      icon: Target,
      color: "bg-purple-500",
      features: ["Exemplos práticos", "Simulações interativas", "Casos reais"],
      story: "Carlos entendeu geometria construindo uma casa virtual!",
      time: "30 min/lição",
      difficulty: "Progressiva"
    },
    {
      id: 4,
      title: "Conquiste e Evolua",
      subtitle: "Cada vitória conta na sua jornada",
      description: "Sistema de conquistas que reconhece cada progresso. Badges, pontos e certificados tornam o aprendizado viciante!",
      icon: Trophy,
      color: "bg-yellow-500",
      features: ["Sistema de badges", "Ranking amigável", "Certificados"],
      story: "Ana ganhou 15 badges em 2 meses e virou referência na turma!",
      time: "Instantâneo",
      difficulty: "Motivador"
    }
  ];

  const achievements = [
    { icon: "🚀", title: "Explorador", desc: "Primeira lição completa" },
    { icon: "🧮", title: "Calculista", desc: "100 exercícios resolvidos" },
    { icon: "🎯", title: "Certeiro", desc: "95% de acertos na semana" },
    { icon: "📈", title: "Evoluindo", desc: "Progresso constante por 7 dias" },
    { icon: "🏆", title: "Campeão", desc: "Terminou um módulo completo" },
    { icon: "🔥", title: "Em Chamas", desc: "Sequência de 30 dias" }
  ];

  const studentStories = [
    {
      name: "Ana, 16 anos",
      before: "\"Matemática era meu pesadelo\"",
      after: "\"Agora eu entendo PARA QUE serve!\"",
      achievement: "De 4.0 para 8.5 em 3 meses",
      avatar: "A",
      color: "bg-pink-500"
    },
    {
      name: "Carlos, 22 anos",
      before: "\"Precisava de cálculo para engenharia\"",
      after: "\"Visualizar os conceitos mudou tudo!\"",
      achievement: "Aprovado em Cálculo I com 9.2",
      avatar: "C",
      color: "bg-blue-500"
    },
    {
      name: "Prof. Maria, 35 anos",
      before: "\"Meus alunos não se interessavam\"",
      after: "\"Agora eles fazem fila para matemática!\"",
      achievement: "Turma melhorou 40% nas avaliações",
      avatar: "M",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            🎮 Sua Jornada de Aprendizado
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforme Matemática em <span className="text-purple-600">Aventura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Como em um jogo, você evolui passo a passo, desbloqueando novos poderes matemáticos. 
            Cada conceito aprendido é uma nova habilidade para usar na vida real!
          </p>
        </div>

        {/* Jornada do Aprendizado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {journeySteps.map((step) => (
            <div 
              key={step.id}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-200"
            >
              {/* Header do passo */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-500">Passo {step.id}</span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm italic">{step.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">⏱️ {step.time}</div>
                  <div className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    {step.difficulty}
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="text-xs bg-white text-gray-600 px-2 py-1 rounded border">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* História de sucesso */}
              <div className="bg-white border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-purple-900 text-sm font-medium">
                  🌟 <strong>História Real:</strong> {step.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sistema de Conquistas */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🏆 Sistema de Conquistas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada progresso é celebrado! Ganhe badges, suba no ranking e mostre suas conquistas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{achievement.title}</h4>
                <p className="text-xs text-gray-600">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Histórias de Transformação */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              📖 Histórias de Transformação
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja como outros estudantes transformaram sua relação com a matemática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`${story.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}>
                    {story.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r">
                    <p className="text-red-800 text-sm font-medium">ANTES: {story.before}</p>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-green-800 text-sm font-medium">DEPOIS: {story.after}</p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                    <p className="text-blue-900 font-semibold text-sm">🎯 {story.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Começar Sua Jornada?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Mais de 50.000 estudantes já transformaram suas vidas com o MathLearn. 
              Que tal ser o próximo?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <span>Fazer Teste de Nivelamento</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Trilhas Disponíveis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySection;
