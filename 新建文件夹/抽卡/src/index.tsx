import React from 'react';
import ReactDOM from 'react-dom/client';
import './App'; // 确保导入样式
import App from './App'; // 确保导入App组件

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);