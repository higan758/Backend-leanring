import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';       // ✅ import Provider
import store from './store/store';            // ✅ import your Redux store

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>                  {/* ✅ wrap with Provider */}
      <App />
    </Provider>
  </StrictMode>
);