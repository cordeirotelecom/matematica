import React from 'react';
import { Users, MessageSquare, Trophy, Target, Award, Heart } from 'lucide-react';

const CommunityGameSection = () => {
  const achievements = [
    { icon: "🚀", name: "Primeiro Passo", desc: "Complete sua primeira lição", rarity: "Comum", color: "bg-gray-500" },
    { icon: "🔥", name: "Em Chamas", desc: "7 dias consecutivos estudando", rarity: "Raro", color: "bg-orange-500" },
    { icon: "🧮", name: "Calculista", desc: "Resolva 100 exercícios", rarity: "Épico", color: "bg-purple-500" },
    { icon: "👑", name: "Rei da Matemática", desc: "1º lugar no ranking mensal", rarity: "Lendário", color: "bg-yellow-500" },
    { icon: "🏆", name: "Mestre dos Números", desc: "Complete todos os módulos", rarity: "Mítico", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: "💎", name: "Gênio Supremo", desc: "Ajude 50 colegas", rarity: "Divino", color: "bg-gradient-to-r from-blue-500 to-cyan-500" }
  ];

  const leaderboard = [
    { pos: 1, name: "Ana Silva", points: 15420, streak: 45, avatar: "A", level: 28, badge: "👑" },
    { pos: 2, name: "Carlos Mendes", points: 14890, streak: 32, avatar: "C", level: 26, badge: "🥈" },
    { pos: 3, name: "Maria Santos", points: 13750, streak: 28, avatar: "M", level: 24, badge: "🥉" },
    { pos: 4, name: "João Pedro", points: 12340, streak: 21, avatar: "J", level: 22, badge: "🏆" },
    { pos: 5, name: "Lucia Costa", points: 11890, streak: 19, avatar: "L", level: 21, badge: "⭐" }
  ];

  const forumTopics = [
    {
      title: "Como entender derivadas de forma simples?",
      author: "Pedro123",
      replies: 23,
      time: "2h atrás",
      category: "Cálculo",
      hot: true
    },
    {
      title: "Aplicações de geometria na arquitetura",
      author: "ArqMaria",
      replies: 15,
      time: "4h atrás",
      category: "Geometria",
      hot: false
    },
    {
      title: "Dicas para decorar fórmulas de física?",
      author: "EstudanteVest",
      replies: 31,
      time: "6h atrás",
      category: "Dicas",
      hot: true
    },
    {
      title: "Fibonacci na natureza - exemplos incríveis",
      author: "CuriosaMatematica",
      replies: 8,
      time: "1d atrás",
      category: "Curiosidades",
      hot: false
    }
  ];

  const challenges = [
    {
      title: "Desafio da Semana",
      description: "Resolva 20 exercícios de álgebra",
      progress: 75,
      reward: "🏆 Badge Algebrista + 500 pontos",
      timeLeft: "2 dias",
      difficulty: "Médio"
    },
    {
      title: "Maratona de Cálculo",
      description: "Complete 3 módulos de derivadas",
      progress: 33,
      reward: "💎 Badge Derivador + 1000 pontos",
      timeLeft: "5 dias",
      difficulty: "Difícil"
    },
    {
      title: "Ajuda Comunitária",
      description: "Ajude 5 colegas no fórum",
      progress: 60,
      reward: "❤️ Badge Mentor + 300 pontos",
      timeLeft: "Sem limite",
      difficulty: "Fácil"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            🎮 Gamificação & Comunidade
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mais que Estudar: <span className="text-purple-600">Conectar e Competir</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transforme o aprendizado em aventura! Ganhe pontos, desbloqueie conquistas, 
            conecte-se com outros matemáticos e prove que você é o mestre dos números!
          </p>
        </div>

        {/* Sistema de Conquistas */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🏆 Sistema de Conquistas
            </h3>
            <p className="text-gray-600">
              Cada progresso é recompensado! Colete badges raros e mostre suas habilidades.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{achievement.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{achievement.desc}</p>
                <span className={`${achievement.color} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                  {achievement.rarity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de funcionalidades */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Ranking */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
                Top Matemáticos
              </h3>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                Esta Semana
              </span>
            </div>
            
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div key={user.pos} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-sm">
                      {user.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900 text-sm">{user.name}</span>
                        <span className="text-lg">{user.badge}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Level {user.level} • {user.streak} dias seguidos
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600 text-sm">{user.points.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">pontos</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
              <p className="text-blue-800 text-sm font-medium">
                🎯 Você está na posição #47 com 8.234 pontos
              </p>
              <button className="text-blue-600 text-xs font-semibold hover:underline mt-1">
                Ver ranking completo
              </button>
            </div>
          </div>

          {/* Fórum da Comunidade */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-blue-500" />
                Fórum Ativo
              </h3>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                1.2k online
              </span>
            </div>
            
            <div className="space-y-4">
              {forumTopics.map((topic, idx) => (
                <div key={idx} className="p-3 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {topic.hot && (
                          <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                            🔥 Hot
                          </span>
                        )}
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                          {topic.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">
                        {topic.title}
                      </h4>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">por {topic.author}</span>
                        <span className="text-xs text-gray-500">{topic.time}</span>
                      </div>
                    </div>
                    <div className="ml-3 text-center">
                      <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {topic.replies}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">respostas</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors">
              Participar do Fórum
            </button>
          </div>

          {/* Desafios Ativos */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Target className="h-6 w-6 mr-2 text-green-500" />
                Desafios Ativos
              </h3>
            </div>
            
            <div className="space-y-4">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900 text-sm">{challenge.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      challenge.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                      challenge.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-xs mb-3">{challenge.description}</p>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progresso</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 p-2 rounded text-center mb-2">
                    <p className="text-yellow-800 text-xs font-medium">🎁 {challenge.reward}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">⏰ {challenge.timeLeft}</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors">
                      Participar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estatísticas da Comunidade */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🌟 Nossa Comunidade em Números</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">52.437</div>
              <div className="text-purple-100 text-sm">Estudantes Ativos</div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">1.2M</div>
              <div className="text-purple-100 text-sm">Dúvidas Respondidas</div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">89.3k</div>
              <div className="text-purple-100 text-sm">Badges Conquistadas</div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">4.9/5</div>
              <div className="text-purple-100 text-sm">Satisfação Média</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para se Juntar à Elite Matemática?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Mais de 52 mil estudantes já fazem parte da maior comunidade de matemática do Brasil. 
              Venha conquistar seu lugar no topo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Entrar na Comunidade
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Ranking Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGameSection;
