# NovoFront App

Uma aplicação Next.js moderna construída com as melhores práticas de desenvolvimento, utilizando Material-UI e hooks personalizados.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Material-UI (MUI)** - Biblioteca de componentes React
- **@uidotdev/usehooks** - Coleção de hooks personalizados
- **ESLint & Prettier** - Ferramentas de qualidade de código

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── examples/          # Componentes de exemplo
│   ├── layout/            # Componentes de layout
│   ├── providers/         # Providers (Theme, etc.)
│   └── ui/                # Componentes de UI base
├── constants/             # Constantes da aplicação
├── features/              # Funcionalidades por domínio
│   ├── auth/              # Autenticação
│   ├── dashboard/         # Dashboard
│   └── profile/           # Perfil do usuário
├── hooks/                 # Hooks personalizados
├── services/              # Serviços e APIs
├── styles/                # Temas e estilos
├── types/                 # Definições de tipos TypeScript
└── utils/                 # Funções utilitárias
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start

# Linting
npm run lint

# Formatação de código
npm run format
```

### Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa ESLint
- `npm run format` - Executa Prettier

## 🎨 Componentes e Hooks

### Componentes UI

- `Button` - Botão personalizado com MUI
- `Card` - Card com header, content e actions
- `Layout` - Layout principal com header e footer
- `Header` - Cabeçalho da aplicação
- `Footer` - Rodapé da aplicação

### Hooks Personalizados

- `useLocalStorage` - Persistência no localStorage
- `useToggle` - Controle de estado booleano
- `useAsync` - Gerenciamento de operações assíncronas
- `useDebounce` - Debounce para otimizar buscas

### Hooks do @uidotdev/usehooks

- `useClickAway` - Detecta cliques fora do elemento
- `useCopyToClipboard` - Copia texto para área de transferência
- `useEventListener` - Adiciona event listeners
- `useGeolocation` - Acesso à localização do usuário
- `useIntersectionObserver` - Observer de interseção
- `useKeyPress` - Detecta teclas pressionadas
- `useMediaQuery` - Media queries responsivas
- `useOnClickOutside` - Detecta cliques fora
- `usePrevious` - Valor anterior de uma variável
- `useSessionStorage` - Persistência no sessionStorage
- `useThrottle` - Throttle para otimizar eventos
- `useWindowSize` - Tamanho da janela

## 🎯 Funcionalidades

- ✅ Estrutura baseada em features
- ✅ TypeScript configurado
- ✅ Material-UI com tema personalizado
- ✅ Hooks personalizados e do @uidotdev/usehooks
- ✅ ESLint e Prettier configurados
- ✅ Componentes reutilizáveis
- ✅ Layout responsivo
- ✅ Otimizações de performance
- ✅ Headers de segurança

## 🔧 Configurações

### ESLint

Configurado com regras para Next.js, TypeScript e Prettier.

### Prettier

Configurado para formatação consistente do código.

### Next.js

Configurado com otimizações de performance e segurança.

## 📝 Próximos Passos

1. Adicionar testes unitários (Jest + Testing Library)
2. Configurar Storybook para documentação de componentes
3. Implementar autenticação
4. Adicionar PWA capabilities
5. Configurar CI/CD
6. Adicionar monitoramento de erros (Sentry)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.