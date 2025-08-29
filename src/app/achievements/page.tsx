import React from 'react';
import { Trophy, Star, Target, Award, Zap } from 'lucide-react';

const AchievementsPage = () => {
  const achievements = [
    {
      id: 1,
      title: 'Primeiro Passo',
      description: 'Complete sua primeira lição',
      icon: '🚀',
      category: 'Iniciante',
      points: 50,
      earned: true,
      earnedDate: '15 Jan 2025',
      rarity: 'common'
    },
    {
      id: 2,
      title: 'Sequência de Fogo',
      description: 'Estude 7 dias consecutivos',
      icon: '🔥',
      category: 'Consistência',
      points: 200,
      earned: true,
      earnedDate: '22 Jan 2025',
      rarity: 'rare'
    },
    {
      id: 3,
      title: 'Calculista',
      description: 'Resolva 100 exercícios',
      icon: '🧮',
      category: 'Prática',
      points: 300,
      earned: true,
      earnedDate: '28 Jan 2025',
      rarity: 'epic'
    },
    {
      id: 4,
      title: 'Mestre da Álgebra',
      description: 'Complete todos os módulos de álgebra',
      icon: '📚',
      category: 'Domínio',
      points: 500,
      earned: false,
      progress: 75,
      rarity: 'legendary'
    },
    {
      id: 5,
      title: 'Velocista',
      description: 'Resolva 10 exercícios em menos de 5 minutos',
      icon: '⚡',
      category: 'Velocidade',
      points: 150,
      earned: false,
      progress: 60,
      rarity: 'rare'
    },
    {
      id: 6,
      title: 'Rei da Matemática',
      description: 'Alcance o 1º lugar no ranking mensal',
      icon: '👑',
      category: 'Competição',
      points: 1000,
      earned: false,
      progress: 30,
      rarity: 'mythic'
    }
  ];

  const stats = {
    totalPoints: 750,
    totalAchievements: 3,
    totalAvailable: 6,
    currentStreak: 7,
    bestStreak: 12,
    rank: 'Bronze'
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500';
      case 'rare': return 'bg-blue-500';
      case 'epic': return 'bg-purple-500';
      case 'legendary': return 'bg-yellow-500';
      case 'mythic': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      default: return 'bg-gray-500';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300';
      case 'rare': return 'border-blue-300';
      case 'epic': return 'border-purple-300';
      case 'legendary': return 'border-yellow-300';
      case 'mythic': return 'border-pink-300';
      default: return 'border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Suas Conquistas</h1>
              <p className="text-gray-600 mt-2">Acompanhe seu progresso e desbloqueie novos troféus</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-1" />
                <div className="text-2xl font-bold text-gray-900">{stats.totalPoints}</div>
                <div className="text-sm text-gray-500">Pontos</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-500 mx-auto mb-1" />
                <div className="text-2xl font-bold text-gray-900">{stats.totalAchievements}/{stats.totalAvailable}</div>
                <div className="text-sm text-gray-500">Conquistas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar com estatísticas */}
          <div className="space-y-6">
            {/* Estatísticas gerais */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Estatísticas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Sequência Atual</span>
                  </div>
                  <span className="font-semibold text-gray-900">{stats.currentStreak} dias</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Melhor Sequência</span>
                  </div>
                  <span className="font-semibold text-gray-900">{stats.bestStreak} dias</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">Rank Atual</span>
                  </div>
                  <span className="font-semibold text-gray-900">{stats.rank}</span>
                </div>
              </div>
            </div>

            {/* Progresso por categoria */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Progresso por Categoria</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Iniciante</span>
                    <span className="text-gray-600">1/1</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Prática</span>
                    <span className="text-gray-600">1/2</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Domínio</span>
                    <span className="text-gray-600">0/1</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de conquistas */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={`relative bg-white rounded-xl p-6 shadow-sm border-2 transition-all hover:shadow-md ${
                    achievement.earned 
                      ? `${getRarityBorder(achievement.rarity)} ring-2 ring-opacity-20 ${getRarityColor(achievement.rarity).replace('bg-', 'ring-')}`
                      : 'border-gray-200 opacity-60'
                  }`}
                >
                  {/* Badge de raridade */}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${getRarityColor(achievement.rarity)}`}>
                    {achievement.rarity}
                  </div>

                  {/* Ícone */}
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <h3 className={`text-lg font-bold ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                      {achievement.title}
                    </h3>
                  </div>

                  {/* Descrição */}
                  <p className={`text-sm text-center mb-4 ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                    {achievement.description}
                  </p>

                  {/* Informações */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Categoria</span>
                      <span className={`text-sm font-medium ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Pontos</span>
                      <span className={`text-sm font-bold ${achievement.earned ? 'text-yellow-600' : 'text-gray-500'}`}>
                        {achievement.points}
                      </span>
                    </div>

                    {achievement.earned ? (
                      <div className="bg-green-100 text-green-800 text-center py-2 rounded-lg text-sm font-medium">
                        ✅ Conquistado em {achievement.earnedDate}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Progresso</span>
                          <span className="text-gray-600">{achievement.progress || 0}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all"
                            style={{width: `${achievement.progress || 0}%`}}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center mt-8">
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Continue Estudando!</h3>
              <p className="text-blue-100 mb-6">
                Você está no caminho certo. Continue resolvendo exercícios e desbloqueie novas conquistas!
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Ir para Exercícios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
