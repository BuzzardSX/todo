import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const app = document.getElementById('App');

createRoot(app!).render(createElement(App));
