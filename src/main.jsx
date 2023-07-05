import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HookApp from './HookApp.jsx';
// import CounterApp from './components/01-useState/CounterApp.jsx';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<CounterWithCustomHook />);