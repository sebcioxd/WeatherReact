import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// if you're using react18 then comments reactdom above and uncomment the code below.

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
