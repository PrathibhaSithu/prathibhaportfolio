import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.scss";
import App from './App.jsx';
import * as serviceWorker from "./serviceWorker";


createRoot(document.getElementById('root')).render(
  <div>
    <App />
  </div>,
)

serviceWorker.unregister();
