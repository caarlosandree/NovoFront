'use client';

import dynamic from 'next/dynamic';

const HooksExample = dynamic(() => import('./HooksExample'), {
  ssr: false,
  loading: () => <div>Carregando exemplos...</div>
});

export default function HooksExampleWrapper() {
  return <HooksExample />;
}
