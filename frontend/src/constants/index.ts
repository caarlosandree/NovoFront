// Constantes da aplicação

export const APP_CONFIG = {
  name: 'NovoFront App',
  version: '1.0.0',
  description: 'Aplicação Next.js com MUI e usehooks',
  author: 'Desenvolvedor',
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    profile: '/api/auth/profile',
  },
  users: {
    list: '/api/users',
    create: '/api/users',
    update: '/api/users/:id',
    delete: '/api/users/:id',
  },
} as const;

export const ROUTES = {
  home: '/',
  about: '/about',
  dashboard: '/dashboard',
  profile: '/profile',
  login: '/login',
  register: '/register',
} as const;

export const STORAGE_KEYS = {
  user: 'user',
  theme: 'theme',
  language: 'language',
  preferences: 'preferences',
} as const;

export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

export const Z_INDEX = {
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
} as const;
