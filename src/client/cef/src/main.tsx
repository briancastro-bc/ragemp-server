import './index.css';

import { StrictMode, } from 'react';
import { createRoot, } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <h1>Hola mundo!</h1>
  </StrictMode>,
)
