import './index.css';
import App from './App.tsx';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
