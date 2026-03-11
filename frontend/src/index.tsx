import ReactDOM from 'react-dom/client';

import './assets/stylesheets/application.scss';
import app from './application';

const run = async () => {
  const rootElement = document.getElementById('main');

  if (!rootElement) {
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  const dom = await app();
  root.render(dom);
};

run();
