import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
// Запускаем установкку React командой "npх create-react-app .", убираем лишние файлы, чистим их и запускаем React командой "npm start"
// Устанавливаем библиотеку Redux команддой "npm i redux react-redux @redux-devtools/extension redux-thunk"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>        {/* оборачиваем App в "Provider", что бы подтянуть контекст, который находится в хранилище "store" */ }                             
    <App />
  </Provider>
);
