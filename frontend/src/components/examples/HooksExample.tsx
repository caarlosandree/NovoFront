'use client';

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useLocalStorage, useToggle, useAsync, useDebounce } from '@/hooks';
import Card from '@/components/ui/Card';
import CustomButton from '@/components/ui/Button';

// Função simulada de API
const fetchUserData = async (...args: unknown[]): Promise<{ id: string; name: string }> => {
  const userId = args[0] as string;
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simula delay
  return { id: userId, name: `Usuário ${userId}` };
};

export default function HooksExample() {
  // Hook de localStorage
  const { value: userName, setValue: setUserName } = useLocalStorage('userName', '');
  
  // Hook de toggle
  const { value: isDarkMode, toggle: toggleDarkMode } = useToggle(false);
  
  // Hook de async
  const { data: userData, loading, error, execute: fetchUser } = useAsync(fetchUserData);
  
  // Hook de debounce
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleFetchUser = () => {
    fetchUser('123');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Exemplos de Hooks
      </Typography>

      {/* Exemplo de useLocalStorage */}
      <Card title="useLocalStorage" subtitle="Persistência de dados no localStorage">
        <TextField
          fullWidth
          label="Nome do usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Digite seu nome..."
          sx={{ mb: 2 }}
        />
        <Typography variant="body2" color="text.secondary">
          Valor salvo: {userName || 'Nenhum valor salvo'}
        </Typography>
      </Card>

      {/* Exemplo de useToggle */}
      <Card title="useToggle" subtitle="Controle de estado booleano">
        <FormControlLabel
          control={
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          }
          label={`Modo escuro: ${isDarkMode ? 'Ativado' : 'Desativado'}`}
        />
      </Card>

      {/* Exemplo de useAsync */}
      <Card title="useAsync" subtitle="Gerenciamento de operações assíncronas">
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <CustomButton onClick={handleFetchUser} loading={loading}>
            Buscar Usuário
          </CustomButton>
        </Box>
        
        {loading && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={20} />
            <Typography variant="body2">Carregando...</Typography>
          </Box>
        )}
        
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Erro: {error.message}
          </Alert>
        )}
        
        {userData && (
          <Alert severity="success">
            Usuário carregado: {userData.name} (ID: {userData.id})
          </Alert>
        )}
      </Card>

      {/* Exemplo de useDebounce */}
      <Card title="useDebounce" subtitle="Debounce de input para otimizar buscas">
        <TextField
          fullWidth
          label="Termo de busca"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite para buscar..."
          sx={{ mb: 2 }}
        />
        <Typography variant="body2" color="text.secondary">
          Termo original: {searchTerm}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Termo com debounce (500ms): {debouncedSearchTerm}
        </Typography>
      </Card>
    </Box>
  );
}
