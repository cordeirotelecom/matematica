import React from 'react';
import { Brain, Zap, Target, Users, Award, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Aprendizado Inteligente",
      description: "Algoritmos adaptativos que se ajustam ao seu ritmo de aprendizado e identificam suas dificuldades."
    },
    {
      icon: Zap,
      title: "Visualizações Interativas",
      description: "Gráficos 3D, animações e simulações que tornam conceitos abstratos mais tangíveis."
    },
    {
      icon: Target,
      title: "Exercícios Direcionados",
      description: "Problemas personalizados baseados no seu nível e objetivos de aprendizado."
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros estudantes, tire dúvidas e participe de discussões."
    },
    {
      icon: Award,
      title: "Sistema de Conquistas",
      description: "Ganhe pontos, medalhas e certificados conforme progride em seus estudos."
    },
    {
      icon: Sparkles,
      title: "Conteúdo Atualizado",
      description: "Material sempre atualizado com as melhores práticas pedagógicas modernas."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o MathLearn?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece uma experiência de aprendizado única, 
            combinando tecnologia avançada com métodos pedagógicos comprovados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Seção de estatísticas */}
        <div className="mt-20 bg-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Resultados Comprovados</h3>
            <p className="text-blue-200 text-lg">
              Milhares de estudantes já transformaram seu aprendizado conosco
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-200">Taxa de Aprovação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50k+</div>
              <div className="text-blue-200">Estudantes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1M+</div>
              <div className="text-blue-200">Exercícios Resolvidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-blue-200">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
