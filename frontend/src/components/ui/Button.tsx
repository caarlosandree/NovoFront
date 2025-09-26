import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { BaseComponentProps } from '@/types';

interface ButtonProps extends Omit<MuiButtonProps, 'children'>, BaseComponentProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
}

export default function Button({
  children,
  variant = 'contained',
  size = 'medium',
  loading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      className={className}
      {...props}
    >
      {loading ? 'Carregando...' : children}
    </MuiButton>
  );
}
