import { BrowserRouter } from 'react-router-dom';

import { Router } from './router';

import './assets/styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
