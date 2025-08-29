import React from 'react';
import { BookOpen, Users, Target, Award, Heart, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Conteúdo Estruturado',
      description: 'Mais de 500 lições organizadas de forma progressiva, do básico ao avançado.'
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: 'Uma comunidade de mais de 10.000 estudantes e professores dispostos a ajudar.'
    },
    {
      icon: Target,
      title: 'Aprendizado Personalizado',
      description: 'Sistema adaptativo que se ajusta ao seu ritmo e estilo de aprendizado.'
    },
    {
      icon: Award,
      title: 'Conquistas e Progresso',
      description: 'Acompanhe seu desenvolvimento com relatórios detalhados e sistema de conquistas.'
    }
  ];

  const team = [
    {
      name: 'Dr. Maria Silva',
      role: 'Coordenadora Pedagógica',
      description: 'PhD em Educação Matemática, 15 anos de experiência em ensino.',
      avatar: '👩‍🏫'
    },
    {
      name: 'Prof. João Santos',
      role: 'Especialista em Álgebra',
      description: 'Mestre em Matemática, autor de 3 livros didáticos.',
      avatar: '👨‍🔬'
    },
    {
      name: 'Ana Costa',
      role: 'Designer Educacional',
      description: 'Especialista em UX/UI para plataformas educacionais.',
      avatar: '👩‍💻'
    },
    {
      name: 'Carlos Lima',
      role: 'Desenvolvedor',
      description: 'Especialista em tecnologias educacionais e gamificação.',
      avatar: '👨‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Sobre o <span className="text-blue-300">MathLearn</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Nossa missão é tornar a matemática acessível, compreensível e fascinante 
              para estudantes de todos os níveis, utilizando tecnologia e metodologias 
              pedagógicas modernas.
            </p>
          </div>
        </div>
      </div>

      {/* Nossa História */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa História</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Transformando o Ensino de Matemática
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  O MathLearn nasceu da percepção de que a matemática é frequentemente vista 
                  como uma matéria difícil e inacessível. Nossa equipe de educadores e 
                  desenvolvedores se uniu para criar uma plataforma que mudasse essa realidade.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Desde 2020, temos trabalhado incansavelmente para desenvolver conteúdos 
                  que tornem o aprendizado de matemática mais intuitivo, prático e envolvente.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hoje, mais de 10.000 estudantes já foram beneficiados por nossa metodologia, 
                  melhorando significativamente seu desempenho e, mais importante, 
                  desenvolvendo amor pela matemática.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Nossos Números</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10k+</div>
                    <div className="text-gray-600">Estudantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">500+</div>
                    <div className="text-gray-600">Lições</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">95%</div>
                    <div className="text-gray-600">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">24/7</div>
                    <div className="text-gray-600">Suporte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recursos */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O que nos Diferencia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos tecnologia avançada com metodologias pedagógicas comprovadas 
              para oferecer a melhor experiência de aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nossa Equipe */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profissionais apaixonados por educação e tecnologia, dedicados a 
              transformar o ensino de matemática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metodologia */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Metodologia</h2>
              <p className="text-gray-600">
                Baseada em pesquisas científicas e feedback de milhares de estudantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Compreensão</h3>
                <p className="text-gray-600 text-sm">
                  Explicações claras e intuitivas que conectam conceitos matemáticos 
                  com situações do dia a dia.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Prática</h3>
                <p className="text-gray-600 text-sm">
                  Exercícios progressivos e adaptativos que reforçam o aprendizado 
                  de forma gradual e eficiente.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Motivação</h3>
                <p className="text-gray-600 text-sm">
                  Sistema de conquistas e feedback positivo que mantém 
                  os estudantes engajados e motivados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para Transformar seu Aprendizado?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de estudantes que já descobriram uma nova forma 
              de aprender matemática. Comece hoje mesmo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Começar Agora
              </button>
              <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Falar com a Equipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
