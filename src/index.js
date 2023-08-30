// import React from 'react';
// import { createRoot } from 'react-dom/client';

// import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// const element = <someElement throwIfNamespace={false}>Hello, World!</someElement>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
