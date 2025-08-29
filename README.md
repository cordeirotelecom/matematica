# MathLearn - Plataforma Interativa de Ensino de Matemática

Uma plataforma completa e moderna para o ensino de matemática, cobrindo desde o ensino fundamental até níveis avançados de graduação. Desenvolvida com Next.js, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

### ✨ Recursos Principais
- **Lições Interativas**: Visualizações 3D, animações e simulações matemáticas
- **Aprendizado Adaptativo**: Algoritmos que se ajustam ao ritmo do estudante
- **Múltiplos Níveis**: Do Fundamental I até Matemática Avançada
- **Gamificação**: Sistema de pontos, medalhas e conquistas
- **Comunidade**: Fóruns de discussão e suporte entre estudantes
- **História da Matemática**: Contexto histórico e biografias de matemáticos

### 📚 Níveis de Ensino
1. **Fundamental I (1º ao 5º ano)**
   - Números e operações básicas
   - Geometria inicial
   - Medidas e estatística básica

2. **Fundamental II (6º ao 9º ano)**
   - Álgebra básica
   - Geometria plana
   - Frações e equações
   - Probabilidade

3. **Ensino Médio (1º ao 3º ano)**
   - Funções avançadas
   - Trigonometria
   - Geometria analítica
   - Preparação para vestibulares

4. **Nível Avançado (Graduação+)**
   - Cálculo diferencial e integral
   - Álgebra linear
   - Equações diferenciais
   - Matemática aplicada

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 15 + TypeScript
- **Styling**: Tailwind CSS
- **Ícones**: Lucide React
- **Animações**: Framer Motion (preparado)
- **Componentes**: Headless UI (preparado)

## 🏃‍♂️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <seu-repositorio>
cd matematica

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificar código com ESLint
```

## 📁 Estrutura do Projeto

```
src/
├── app/                # App Router do Next.js
│   ├── layout.tsx     # Layout principal
│   ├── page.tsx       # Página inicial
│   └── globals.css    # Estilos globais
├── components/        # Componentes React
│   ├── Header.tsx     # Cabeçalho com navegação
│   ├── Footer.tsx     # Rodapé
│   ├── Hero.tsx       # Seção principal
│   ├── FeaturesSection.tsx     # Recursos da plataforma
│   ├── LevelsSection.tsx       # Níveis de ensino
│   └── TestimonialsSection.tsx # Depoimentos
└── public/           # Arquivos estáticos
```

## 🎨 Design System

### Cores Principais
- **Azul Primário**: `bg-blue-900` - Navegação e elementos principais
- **Amarelo Destaque**: `bg-yellow-500` - Call-to-actions
- **Cinza Neutro**: `bg-gray-50` - Backgrounds de seções
- **Gradientes**: Azul para roxo em elementos especiais

### Tipografia
- **Títulos**: Font weight bold (700)
- **Corpo**: Font weight normal (400)
- **Destaques**: Font weight semibold (600)

## 🚀 Próximos Passos

### Funcionalidades Planejadas
- [ ] Sistema de autenticação de usuários
- [ ] Dashboard personalizado do estudante
- [ ] Exercícios interativos com feedback em tempo real
- [ ] Visualizações matemáticas com Three.js
- [ ] Sistema de progressão e conquistas
- [ ] Fórum da comunidade
- [ ] Seção de história da matemática
- [ ] Integração com plataformas de pagamento
- [ ] App mobile com React Native
- [ ] Sistema de relatórios para professores

### Páginas a Desenvolver
- [ ] `/lessons` - Catálogo de lições
- [ ] `/exercises` - Exercícios práticos
- [ ] `/history` - História da matemática
- [ ] `/profile` - Perfil do usuário
- [ ] `/achievements` - Sistema de conquistas
- [ ] `/assessment` - Teste de nivelamento

## 📊 Estatísticas do Projeto

- **+50.000** estudantes ativos (projetado)
- **+500** lições planejadas
- **+10.000** exercícios interativos
- **98%** taxa de satisfação projetada

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Email**: contato@mathlearn.com
- **Website**: https://mathlearn.com
- **Suporte**: (11) 9999-9999

---

Desenvolvido com ❤️ para democratizar o ensino de matemática no Brasil.
