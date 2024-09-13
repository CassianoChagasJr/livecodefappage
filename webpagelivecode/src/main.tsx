import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './css/global.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
      <App/>
    {/* </GlobalStyle> */}
  </StrictMode>,
);
