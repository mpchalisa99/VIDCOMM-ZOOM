import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register Service Worker for PWA / WebAPK installability and offline support
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('[PWA] Service Worker update available');
  },
  onOfflineReady() {
    console.log('[PWA] App ready to work offline');
  },
});

createRoot(document.getElementById('root')!).render(<App />);
