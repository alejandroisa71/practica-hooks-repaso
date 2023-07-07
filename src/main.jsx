import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HookApp from './HookApp.jsx';
// import CounterApp from './components/01-useState/CounterApp.jsx';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook.jsx';
// import { SimpleForm } from './components/02-useEffect/SimpleForm.jsx';
// import { FormWithCustomHook } from './components/02-useEffect/FormWihtCustomHook.jsx';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks.jsx';
// import { FocusScreen } from './components/04-useRef/FocusScreen.jsx';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef.jsx';
import { Memorize } from './components/06-memos/Memorize.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<Memorize />);
