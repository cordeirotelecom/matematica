export interface LessonContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  objectives: string[];
  content: {
    explanation: string;
    examples: Array<{
      title: string;
      problem: string;
      solution: string[];
      tip?: string;
    }>;
    exercises: Array<{
      question: string;
      options?: string[];
      answer: string;
      explanation: string;
    }>;
  };
  prerequisites?: string[];
  nextLesson?: string;
  category: string;
  topicId: string;
}

export const lessonsData: LessonContent[] = [
  // FUNDAMENTAL I - Números e Operações
  {
    id: 'fundamental-1-numeros-1',
    title: 'Contagem e Números Naturais',
    description: 'Aprenda a contar e reconhecer números naturais no dia a dia.',
    duration: '25 min',
    difficulty: 'Fácil',
    category: 'fundamental-1',
    topicId: 'numeros-operacoes',
    objectives: [
      'Reconhecer e escrever números de 0 a 100',
      'Entender a sequência numérica',
      'Aplicar contagem em situações práticas',
      'Compreender o conceito de quantidade'
    ],
    content: {
      explanation: 'Os números estão em toda parte ao nosso redor! Usamos números para contar objetos, dizer nossa idade, marcar o tempo e muito mais. Vamos aprender a contar de forma organizada e entender o que cada número representa.',
      examples: [
        {
          title: 'Contando objetos do dia a dia',
          problem: 'Maria tem algumas maçãs na mesa. Como podemos contar quantas são?',
          solution: [
            'Apontamos para cada maçã, uma de cada vez',
            'Falamos os números em ordem: 1, 2, 3, 4, 5',
            'O último número que falamos é a quantidade total',
            'Maria tem 5 maçãs'
          ],
          tip: 'Sempre conte devagar e aponte para cada objeto para não se perder!'
        },
        {
          title: 'Números em casa',
          problem: 'Onde podemos encontrar números em casa?',
          solution: [
            'No relógio: mostra as horas',
            'No calendário: mostra os dias',
            'No controle remoto: para mudar de canal',
            'Na régua: para medir objetos'
          ]
        }
      ],
      exercises: [
        {
          question: 'Quantos dedos você tem nas duas mãos?',
          options: ['8', '10', '12', '15'],
          answer: '10',
          explanation: 'Cada mão tem 5 dedos. 5 + 5 = 10 dedos no total.'
        },
        {
          question: 'Qual número vem depois do 7?',
          options: ['6', '8', '9', '10'],
          answer: '8',
          explanation: 'A sequência é: ...6, 7, 8, 9... Então depois do 7 vem o 8.'
        },
        {
          question: 'Se você tem 3 brinquedos e ganha mais 2, quantos brinquedos você terá?',
          options: ['4', '5', '6', '7'],
          answer: '5',
          explanation: 'Você tinha 3 brinquedos, ganhou 2, então: 3 + 2 = 5 brinquedos.'
        }
      ]
    },
    prerequisites: ['Conhecimento básico de contagem'],
    nextLesson: 'fundamental-1-numeros-2'
  },
  {
    id: 'fundamental-1-numeros-2',
    title: 'Adição Simples',
    description: 'Aprenda a somar números pequenos usando objetos e desenhos.',
    duration: '30 min',
    difficulty: 'Fácil',
    category: 'fundamental-1',
    topicId: 'numeros-operacoes',
    objectives: [
      'Entender o conceito de "juntar" como adição',
      'Resolver somas até 20',
      'Usar objetos concretos para somar',
      'Reconhecer o símbolo + e ='
    ],
    content: {
      explanation: 'Somar significa juntar quantidades. Quando juntamos coisas, temos mais do que antes. Por exemplo, se você tem 2 doces e ganha mais 1, você ficará com 3 doces. Isso é uma soma: 2 + 1 = 3.',
      examples: [
        {
          title: 'Somando com frutas',
          problem: 'João tem 3 bananas e sua mãe lhe dá mais 2 bananas. Quantas bananas João tem agora?',
          solution: [
            'João tinha 3 bananas',
            'Ganhou mais 2 bananas',
            'Juntamos: 3 + 2',
            'Contamos tudo: 1, 2, 3, 4, 5',
            'João tem 5 bananas agora'
          ],
          tip: 'Use os dedos ou desenhe para ajudar a contar!'
        },
        {
          title: 'Brincando de loja',
          problem: 'Ana comprou 4 adesivos de manhã e 3 adesivos à tarde. Quantos adesivos ela comprou no total?',
          solution: [
            'Adesivos de manhã: 4',
            'Adesivos à tarde: 3',
            'Total: 4 + 3 = 7 adesivos'
          ]
        }
      ],
      exercises: [
        {
          question: 'Quanto é 2 + 3?',
          options: ['4', '5', '6', '7'],
          answer: '5',
          explanation: 'Contando: 2 (1, 2) + 3 (3, 4, 5) = 5'
        },
        {
          question: 'Pedro tem 1 carrinho e ganha 4 carrinhos. Quantos carrinhos ele tem agora?',
          options: ['3', '4', '5', '6'],
          answer: '5',
          explanation: 'Pedro tinha 1 carrinho, ganhou 4. Então: 1 + 4 = 5 carrinhos.'
        },
        {
          question: 'Em uma cesta há 6 ovos. Colocamos mais 2 ovos. Quantos ovos há na cesta?',
          options: ['7', '8', '9', '10'],
          answer: '8',
          explanation: 'Havia 6 ovos, colocamos 2, então: 6 + 2 = 8 ovos na cesta.'
        }
      ]
    },
    prerequisites: ['Contagem e Números Naturais'],
    nextLesson: 'fundamental-1-numeros-3'
  },

  // FUNDAMENTAL II - Álgebra
  {
    id: 'fundamental-2-algebra-1',
    title: 'Introdução às Equações',
    description: 'Entenda o conceito de equação como uma balança em equilíbrio.',
    duration: '40 min',
    difficulty: 'Médio',
    category: 'fundamental-2',
    topicId: 'algebra',
    objectives: [
      'Compreender o conceito de equação',
      'Resolver equações simples do tipo x + a = b',
      'Entender o princípio do equilíbrio',
      'Aplicar equações em problemas práticos'
    ],
    content: {
      explanation: 'Uma equação é como uma balança: o que está de um lado deve ser igual ao que está do outro lado. Quando temos uma "incógnita" (geralmente representada por x), nosso objetivo é descobrir que número ela representa para manter a igualdade.',
      examples: [
        {
          title: 'A balança dos números',
          problem: 'Se x + 3 = 7, qual é o valor de x?',
          solution: [
            'Imagine uma balança: de um lado temos x + 3, do outro temos 7',
            'Para manter o equilíbrio, x + 3 deve ser igual a 7',
            'Que número somado com 3 dá 7?',
            'Podemos testar: se x = 4, então 4 + 3 = 7 ✓',
            'Portanto, x = 4'
          ],
          tip: 'Sempre verifique sua resposta substituindo o valor encontrado na equação original!'
        },
        {
          title: 'Problema da mesada',
          problem: 'Carlos tinha alguns reais. Sua mãe lhe deu mais R$ 15,00 e agora ele tem R$ 32,00. Quanto Carlos tinha antes?',
          solution: [
            'Vamos chamar o dinheiro que Carlos tinha de x',
            'Carlos tinha x reais + ganhou R$ 15,00 = tem R$ 32,00',
            'Nossa equação: x + 15 = 32',
            'Para encontrar x: 32 - 15 = 17',
            'Carlos tinha R$ 17,00 antes'
          ]
        }
      ],
      exercises: [
        {
          question: 'Qual é o valor de x na equação x + 5 = 12?',
          options: ['6', '7', '8', '17'],
          answer: '7',
          explanation: 'Para resolver x + 5 = 12, subtraímos 5 de ambos os lados: x = 12 - 5 = 7'
        },
        {
          question: 'Ana tinha algumas figurinhas. Comprou mais 8 figurinhas e agora tem 20. Quantas figurinhas Ana tinha?',
          options: ['10', '11', '12', '28'],
          answer: '12',
          explanation: 'Equação: x + 8 = 20. Resolvendo: x = 20 - 8 = 12 figurinhas.'
        },
        {
          question: 'Se y - 4 = 9, qual é o valor de y?',
          options: ['5', '12', '13', '14'],
          answer: '13',
          explanation: 'Para resolver y - 4 = 9, somamos 4 a ambos os lados: y = 9 + 4 = 13'
        }
      ]
    },
    prerequisites: ['Operações básicas', 'Números inteiros'],
    nextLesson: 'fundamental-2-algebra-2'
  },

  // ENSINO MÉDIO - Funções
  {
    id: 'ensino-medio-funcoes-1',
    title: 'Conceito de Função',
    description: 'Entenda o que são funções e como elas modelam situações do cotidiano.',
    duration: '50 min',
    difficulty: 'Médio',
    category: 'ensino-medio',
    topicId: 'funcoes',
    objectives: [
      'Compreender o conceito de função',
      'Identificar domínio e contradomínio',
      'Interpretar gráficos de funções',
      'Aplicar funções em situações práticas'
    ],
    content: {
      explanation: 'Uma função é uma relação especial entre dois conjuntos onde cada elemento do primeiro conjunto (domínio) se relaciona com exatamente um elemento do segundo conjunto (contradomínio). Funções são usadas para modelar situações do mundo real, como o custo de um táxi em função da distância percorrida.',
      examples: [
        {
          title: 'Função do táxi',
          problem: 'Um táxi cobra R$ 4,50 de bandeirada + R$ 2,30 por km rodado. Como calcular o preço de uma corrida?',
          solution: [
            'Preço = bandeirada + (preço por km × km rodados)',
            'Se chamarmos a distância de x, temos: f(x) = 4,50 + 2,30x',
            'Para 5 km: f(5) = 4,50 + 2,30(5) = 4,50 + 11,50 = R$ 16,00',
            'Para 10 km: f(10) = 4,50 + 2,30(10) = 4,50 + 23,00 = R$ 27,50'
          ],
          tip: 'A função f(x) = 4,50 + 2,30x nos permite calcular o preço para qualquer distância!'
        },
        {
          title: 'Conversão de temperatura',
          problem: 'Como converter graus Celsius para Fahrenheit?',
          solution: [
            'A fórmula é: F = (9/5)C + 32',
            'Onde C é a temperatura em Celsius e F em Fahrenheit',
            'Para 25°C: F = (9/5)(25) + 32 = 45 + 32 = 77°F',
            'Para 0°C: F = (9/5)(0) + 32 = 0 + 32 = 32°F'
          ]
        }
      ],
      exercises: [
        {
          question: 'Se f(x) = 2x + 3, qual é o valor de f(4)?',
          options: ['9', '10', '11', '12'],
          answer: '11',
          explanation: 'Substituindo x = 4: f(4) = 2(4) + 3 = 8 + 3 = 11'
        },
        {
          question: 'Uma loja cobra R$ 10,00 fixo + R$ 5,00 por item. Qual função representa o preço total?',
          options: ['f(x) = 10x + 5', 'f(x) = 10 + 5x', 'f(x) = 15x', 'f(x) = 5x'],
          answer: 'f(x) = 10 + 5x',
          explanation: 'Preço total = valor fixo + (preço por item × quantidade). Logo: f(x) = 10 + 5x'
        },
        {
          question: 'Se g(x) = x² - 1, qual é g(3)?',
          options: ['7', '8', '9', '10'],
          answer: '8',
          explanation: 'Substituindo x = 3: g(3) = 3² - 1 = 9 - 1 = 8'
        }
      ]
    },
    prerequisites: ['Álgebra básica', 'Operações com números reais'],
    nextLesson: 'ensino-medio-funcoes-2'
  },

  // FUNDAMENTAL I - Mais lições de Números e Operações
  {
    id: 'fundamental-1-numeros-3',
    title: 'Subtração Simples',
    description: 'Aprenda a subtrair números pequenos usando objetos e situações do dia a dia.',
    duration: '30 min',
    difficulty: 'Fácil',
    category: 'fundamental-1',
    topicId: 'numeros-operacoes',
    objectives: [
      'Entender o conceito de "tirar" como subtração',
      'Resolver subtrações até 20',
      'Usar objetos concretos para subtrair',
      'Reconhecer o símbolo - e ='
    ],
    content: {
      explanation: 'Subtrair significa tirar uma quantidade de outra. Quando tiramos algo, ficamos com menos do que tínhamos antes. Por exemplo, se você tem 5 doces e come 2, sobrarão 3 doces. Isso é uma subtração: 5 - 2 = 3.',
      examples: [
        {
          title: 'Subtraindo brinquedos',
          problem: 'Pedro tem 8 carrinhos. Ele deu 3 carrinhos para seu irmão. Quantos carrinhos Pedro tem agora?',
          solution: [
            'Pedro tinha 8 carrinhos',
            'Deu 3 carrinhos para o irmão',
            'Tiramos: 8 - 3',
            'Contamos o que sobrou: 5 carrinhos',
            'Pedro tem 5 carrinhos agora'
          ],
          tip: 'Use os dedos ou retire objetos reais para visualizar a subtração!'
        }
      ],
      exercises: [
        {
          question: 'Quanto é 7 - 3?',
          options: ['3', '4', '5', '6'],
          answer: '4',
          explanation: 'Começamos com 7, tiramos 3, sobram 4.'
        },
        {
          question: 'Ana tinha 9 adesivos e perdeu 4. Quantos adesivos ela tem agora?',
          options: ['4', '5', '6', '7'],
          answer: '5',
          explanation: 'Ana tinha 9 adesivos, perdeu 4. Então: 9 - 4 = 5 adesivos.'
        }
      ]
    },
    prerequisites: ['Adição Simples'],
    nextLesson: 'fundamental-1-numeros-4'
  },

  // FUNDAMENTAL I - Geometria
  {
    id: 'fundamental-1-geometria-1',
    title: 'Formas Geométricas Básicas',
    description: 'Reconheça e identifique formas geométricas no mundo ao seu redor.',
    duration: '35 min',
    difficulty: 'Fácil',
    category: 'fundamental-1',
    topicId: 'geometria-basica',
    objectives: [
      'Identificar círculo, quadrado, triângulo e retângulo',
      'Reconhecer formas no ambiente',
      'Contar lados e vértices',
      'Desenhar formas básicas'
    ],
    content: {
      explanation: 'As formas geométricas estão em todo lugar! Na sua casa, na escola, nos brinquedos. Vamos aprender a reconhecer as formas mais comuns e entender suas características.',
      examples: [
        {
          title: 'Formas na cozinha',
          problem: 'Que formas você consegue encontrar na cozinha?',
          solution: [
            'Mesa: retângulo (4 lados)',
            'Prato: círculo (redondo)',
            'Janela: quadrado (4 lados iguais)',
            'Fatia de pizza: triângulo (3 lados)'
          ],
          tip: 'Procure formas em objetos do dia a dia para praticar!'
        }
      ],
      exercises: [
        {
          question: 'Quantos lados tem um triângulo?',
          options: ['2', '3', '4', '5'],
          answer: '3',
          explanation: 'Um triângulo sempre tem 3 lados e 3 vértices (pontas).'
        },
        {
          question: 'Qual forma não tem lados?',
          options: ['Quadrado', 'Triângulo', 'Círculo', 'Retângulo'],
          answer: 'Círculo',
          explanation: 'O círculo é redondo e não tem lados nem vértices.'
        }
      ]
    },
    prerequisites: ['Contagem básica'],
    nextLesson: 'fundamental-1-geometria-2'
  },

  // FUNDAMENTAL II - Mais álgebra
  {
    id: 'fundamental-2-algebra-2',
    title: 'Expressões Algébricas',
    description: 'Aprenda a trabalhar com expressões que contêm letras e números.',
    duration: '45 min',
    difficulty: 'Médio',
    category: 'fundamental-2',
    topicId: 'algebra',
    objectives: [
      'Compreender o que são expressões algébricas',
      'Calcular o valor de expressões',
      'Simplificar expressões simples',
      'Aplicar em problemas práticos'
    ],
    content: {
      explanation: 'Uma expressão algébrica é como uma "receita matemática" que mistura números e letras. As letras representam valores que podem mudar, como ingredientes em quantidades diferentes.',
      examples: [
        {
          title: 'Calculando o perímetro',
          problem: 'Um retângulo tem largura x e comprimento y. Qual é a expressão para o perímetro?',
          solution: [
            'Perímetro = soma de todos os lados',
            'Retângulo tem: largura + comprimento + largura + comprimento',
            'Isso é: x + y + x + y',
            'Simplificando: 2x + 2y',
            'Ou ainda: 2(x + y)'
          ],
          tip: 'Sempre agrupe termos semelhantes (que têm as mesmas letras)!'
        }
      ],
      exercises: [
        {
          question: 'Se x = 3, qual é o valor de 2x + 5?',
          options: ['8', '10', '11', '13'],
          answer: '11',
          explanation: 'Substituindo x = 3: 2(3) + 5 = 6 + 5 = 11'
        }
      ]
    },
    prerequisites: ['Introdução às Equações'],
    nextLesson: 'fundamental-2-algebra-3'
  },

  // FUNDAMENTAL II - Geometria Plana
  {
    id: 'fundamental-2-geometria-1',
    title: 'Área e Perímetro',
    description: 'Aprenda a calcular área e perímetro de figuras geométricas.',
    duration: '50 min',
    difficulty: 'Médio',
    category: 'fundamental-2',
    topicId: 'geometria-plana',
    objectives: [
      'Diferenciar área de perímetro',
      'Calcular área de retângulos e quadrados',
      'Calcular perímetro de figuras',
      'Aplicar em situações reais'
    ],
    content: {
      explanation: 'Perímetro é como uma cerca ao redor da figura - é o contorno. Área é o espaço dentro da figura - como o terreno cercado. São conceitos diferentes mas igualmente importantes!',
      examples: [
        {
          title: 'Calculando material para um jardim',
          problem: 'Um jardim retangular tem 6m de comprimento e 4m de largura. Quanto de cerca precisa e qual a área?',
          solution: [
            'Perímetro (cerca): 6 + 4 + 6 + 4 = 20 metros',
            'Ou usando fórmula: 2(6 + 4) = 2(10) = 20 metros',
            'Área (terreno): 6 × 4 = 24 metros quadrados',
            'Precisa de 20m de cerca para um jardim de 24m²'
          ],
          tip: 'Perímetro é soma dos lados, área é multiplicação base × altura!'
        }
      ],
      exercises: [
        {
          question: 'Um quadrado tem lado de 5 cm. Qual sua área?',
          options: ['20 cm²', '25 cm²', '30 cm²', '10 cm²'],
          answer: '25 cm²',
          explanation: 'Área do quadrado = lado × lado = 5 × 5 = 25 cm²'
        }
      ]
    },
    prerequisites: ['Formas geométricas', 'Multiplicação'],
    nextLesson: 'fundamental-2-geometria-2'
  },

  // ENSINO MÉDIO - Mais funções
  {
    id: 'ensino-medio-funcoes-2',
    title: 'Função do 1º Grau',
    description: 'Entenda as características e aplicações da função do primeiro grau.',
    duration: '60 min',
    difficulty: 'Médio',
    category: 'ensino-medio',
    topicId: 'funcoes',
    objectives: [
      'Identificar funções do 1º grau',
      'Construir gráficos lineares',
      'Interpretar coeficientes angular e linear',
      'Resolver problemas práticos'
    ],
    content: {
      explanation: 'A função do 1º grau tem a forma f(x) = ax + b e representa uma linha reta. É muito usada para modelar situações onde há uma taxa constante de variação, como velocidade, custos fixos + variáveis, etc.',
      examples: [
        {
          title: 'Conta de celular',
          problem: 'Uma operadora cobra R$ 25,00 fixo + R$ 0,50 por minuto. Crie a função e calcule o custo para 100 minutos.',
          solution: [
            'Custo = valor fixo + (preço por minuto × minutos)',
            'f(x) = 25 + 0,5x, onde x = minutos',
            'Para 100 minutos: f(100) = 25 + 0,5(100)',
            'f(100) = 25 + 50 = R$ 75,00',
            'O coeficiente a = 0,5 é a taxa por minuto'
          ],
          tip: 'Em f(x) = ax + b: "a" é a inclinação da reta, "b" é onde ela corta o eixo y!'
        }
      ],
      exercises: [
        {
          question: 'Na função f(x) = 3x - 2, qual é o coeficiente angular?',
          options: ['-2', '3', '3x', '-2x'],
          answer: '3',
          explanation: 'Na forma f(x) = ax + b, o coeficiente angular é "a" = 3'
        }
      ]
    },
    prerequisites: ['Conceito de Função'],
    nextLesson: 'ensino-medio-funcoes-3'
  },

  // NÍVEL AVANÇADO - Cálculo
  {
    id: 'avancado-calculo-1',
    title: 'Introdução aos Limites',
    description: 'Compreenda o conceito fundamental de limite em cálculo.',
    duration: '70 min',
    difficulty: 'Difícil',
    category: 'avancado',
    topicId: 'calculo',
    objectives: [
      'Compreender o conceito intuitivo de limite',
      'Calcular limites simples',
      'Interpretar limites graficamente',
      'Aplicar em problemas de continuidade'
    ],
    content: {
      explanation: 'Um limite descreve o comportamento de uma função quando a variável se aproxima de um determinado valor. É a base para derivadas e integrais, fundamentais para entender taxas de variação e áreas.',
      examples: [
        {
          title: 'Velocidade instantânea',
          problem: 'Como calcular a velocidade exata de um carro no instante t = 2 segundos?',
          solution: [
            'Velocidade média = distância/tempo',
            'Para velocidade instantânea, tempo tende a zero',
            'Usamos: lim(h→0) [s(2+h) - s(2)]/h',
            'Onde s(t) é a função posição',
            'Isso nos dá a derivada s\'(2)'
          ],
          tip: 'Limite é como "quase chegar" em um valor sem necessariamente alcançá-lo!'
        }
      ],
      exercises: [
        {
          question: 'Calcule lim(x→2) (x² + 1):',
          options: ['3', '4', '5', '6'],
          answer: '5',
          explanation: 'Substituindo x = 2: 2² + 1 = 4 + 1 = 5'
        }
      ]
    },
    prerequisites: ['Funções avançadas', 'Álgebra'],
    nextLesson: 'avancado-calculo-2'
  }
];

export const getTopicLessons = (categoryId: string, topicId: string): LessonContent[] => {
  return lessonsData.filter(lesson => 
    lesson.category === categoryId && lesson.topicId === topicId
  );
};

export const getLessonById = (id: string): LessonContent | undefined => {
  return lessonsData.find(lesson => lesson.id === id);
};