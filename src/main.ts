import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './github.theme.css';

const app = document.getElementById('app');

createRoot(app!).render(createElement(App));
