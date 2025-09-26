import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardActions,
  CardHeader,
  CardProps as MuiCardProps,
} from '@mui/material';
import { BaseComponentProps } from '@/types';

interface CardProps extends Omit<MuiCardProps, 'children'>, BaseComponentProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  elevation?: number;
}

export default function Card({
  children,
  title,
  subtitle,
  actions,
  elevation = 1,
  className = '',
  ...props
}: CardProps) {
  return (
    <MuiCard elevation={elevation} className={className} {...props}>
      {(title || subtitle) && (
        <CardHeader
          title={title}
          subheader={subtitle}
          titleTypographyProps={{ variant: 'h6' }}
          subheaderTypographyProps={{ variant: 'body2' }}
        />
      )}
      <CardContent>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
}
