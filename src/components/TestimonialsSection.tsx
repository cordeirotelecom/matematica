import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Estudante de Engenharia',
      image: '/testimonial-1.jpg',
      rating: 5,
      text: 'O MathLearn transformou completamente minha relação com a matemática. As visualizações interativas me ajudaram a entender conceitos que sempre foram difíceis para mim.',
      course: 'Cálculo I'
    },
    {
      id: 2,
      name: 'Prof. Carlos Mendes',
      role: 'Professor de Matemática',
      image: '/testimonial-2.jpg',
      rating: 5,
      text: 'Como educador, posso afirmar que esta é uma das melhores plataformas de ensino de matemática disponíveis. Uso com meus alunos e os resultados são excepcionais.',
      course: 'Álgebra Linear'
    },
    {
      id: 3,
      name: 'Mariana Costa',
      role: 'Vestibulanda',
      image: '/testimonial-3.jpg',
      rating: 5,
      text: 'Estava com muita dificuldade em matemática para o vestibular. Com o MathLearn, consegui melhorar minhas notas significativamente em apenas 3 meses!',
      course: 'Preparação ENEM'
    },
    {
      id: 4,
      name: 'João Pedro',
      role: 'Estudante 9º ano',
      image: '/testimonial-4.jpg',
      rating: 5,
      text: 'Matemática era minha matéria menos favorita, mas agora até gosto de estudar! Os jogos e desafios tornaram tudo mais divertido.',
      course: 'Fundamental II'
    },
    {
      id: 5,
      name: 'Dra. Luciana Torres',
      role: 'Pesquisadora',
      image: '/testimonial-5.jpg',
      rating: 5,
      text: 'Uso o MathLearn para revisar conceitos matemáticos em minha pesquisa. A qualidade do conteúdo e a clareza das explicações são impressionantes.',
      course: 'Matemática Aplicada'
    },
    {
      id: 6,
      name: 'Roberto Lima',
      role: 'Pai de Estudante',
      image: '/testimonial-6.jpg',
      rating: 5,
      text: 'Meu filho de 12 anos estava com notas baixas em matemática. Após usar o MathLearn, ele não apenas melhorou as notas como desenvolveu amor pela matéria.',
      course: 'Acompanhamento Familiar'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos estudantes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 50.000 estudantes já transformaram sua relação com a matemática. 
            Veja alguns depoimentos reais de nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-blue-500 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              {/* Depoimento */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Curso */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.course}
                </span>
              </div>

              {/* Perfil do usuário */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de convite para depoimento */}
        <div className="mt-16 text-center">
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Você também pode ser nosso próximo caso de sucesso!
            </h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de estudantes que já transformaram seus resultados 
              em matemática com nossa plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Começar Gratuitamente
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Mais Depoimentos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
