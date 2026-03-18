import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

console.log('MOUNTING APP');
createRoot(document.getElementById('root')!).render(
  <App />
);
