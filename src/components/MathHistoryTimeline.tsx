'use client';
import React, { useState } from 'react';
import { Calendar, MapPin, User, BookOpen, Lightbulb } from 'lucide-react';

interface HistoricalEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  mathematician: string;
  location: string;
  impact: string;
  modernApplication: string;
  color: string;
}

const historicalEvents: HistoricalEvent[] = [
  {
    id: '1',
    year: '3000 a.C.',
    title: 'Nascimento dos Números',
    description: 'Os sumérios criam o primeiro sistema de numeração para comércio e astronomia.',
    mathematician: 'Civilização Suméria',
    location: 'Mesopotâmia (atual Iraque)',
    impact: 'Base para todo desenvolvimento matemático posterior',
    modernApplication: 'Sistema decimal usado em computadores e calculadoras',
    color: 'bg-amber-500'
  },
  {
    id: '2',
    year: '300 a.C.',
    title: 'Elementos de Euclides',
    description: 'Euclides sistematiza a geometria em 13 livros, criando a base da matemática moderna.',
    mathematician: 'Euclides de Alexandria',
    location: 'Alexandria, Egito',
    impact: 'Método axiomático ainda usado hoje na matemática',
    modernApplication: 'GPS, arquitetura, design gráfico e realidade virtual',
    color: 'bg-blue-500'
  },
  {
    id: '3',
    year: '820 d.C.',
    title: 'Álgebra Revolucionária',
    description: 'Al-Khwarizmi cria a álgebra, introduzindo métodos sistemáticos para resolver equações.',
    mathematician: 'Muhammad al-Khwarizmi',
    location: 'Bagdá, Iraque',
    impact: 'Origem da palavra "álgebra" e "algoritmo"',
    modernApplication: 'Inteligência artificial, criptografia e algoritmos de busca',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    year: '1202',
    title: 'Fibonacci e a Sequência Dourada',
    description: 'Leonardo Fibonacci introduz os números árabes na Europa e descobre sua famosa sequência.',
    mathematician: 'Leonardo Fibonacci',
    location: 'Pisa, Itália',
    impact: 'Revoluciona o comércio europeu com sistema decimal',
    modernApplication: 'Arte, arquitetura, mercado financeiro e biologia',
    color: 'bg-green-500'
  },
  {
    id: '5',
    year: '1687',
    title: 'Cálculo de Newton',
    description: 'Newton publica Principia, criando o cálculo e as leis da física moderna.',
    mathematician: 'Isaac Newton',
    location: 'Cambridge, Inglaterra',
    impact: 'Permite a Revolução Industrial e exploração espacial',
    modernApplication: 'Carros autônomos, foguetes e simulações 3D',
    color: 'bg-red-500'
  },
  {
    id: '6',
    year: '1940',
    title: 'Era da Computação',
    description: 'Matemática se torna digital com os primeiros computadores eletrônicos.',
    mathematician: 'Alan Turing',
    location: 'Bletchley Park, Inglaterra',
    impact: 'Nasce a ciência da computação moderna',
    modernApplication: 'Internet, smartphones, redes sociais e IA',
    color: 'bg-indigo-500'
  }
];

const MathHistoryTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Jornada Histórica da Matemática
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma viagem através dos momentos que moldaram a matemática e, 
            consequentemente, nossa civilização moderna.
          </p>
        </div>

        <div className="relative">
          {/* Linha do tempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

          <div className="space-y-12">
            {historicalEvents.map((event, index) => (
              <div key={event.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Conteúdo */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div 
                    className={`bg-white rounded-xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedEvent?.id === event.id ? 'border-blue-500 shadow-xl' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span className="text-lg font-bold text-gray-900">{event.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{event.mathematician}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {selectedEvent?.id === event.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                            <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                            Impacto Histórico
                          </h4>
                          <p className="text-gray-700 text-sm">{event.impact}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                            Aplicação Moderna
                          </h4>
                          <p className="text-gray-700 text-sm">{event.modernApplication}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Marcador central */}
                <div className="relative z-10">
                  <div className={`w-6 h-6 ${event.color} rounded-full border-4 border-white shadow-lg`}></div>
                </div>

                {/* Espaço vazio do outro lado */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Faça Parte da História da Matemática
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Cada grande descoberta começou com curiosidade e estudo. 
              Comece sua jornada matemática hoje e quem sabe você não será 
              o próximo a revolucionar esta ciência milenar.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Iniciar Minha Jornada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathHistoryTimeline;
