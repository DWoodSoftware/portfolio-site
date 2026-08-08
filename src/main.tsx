import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App.tsx'

const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");

if (redirect) {
  window.history.replaceState(
    null,
    "",
    redirect,
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Unable to initialize application: #root element not found.")
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
