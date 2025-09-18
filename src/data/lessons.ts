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