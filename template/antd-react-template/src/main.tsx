import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import './styles/global.scss';

const rootElement: any = document.getElementById('root');
const root = createRoot(rootElement);

// 解决useEffect二次加载问题
root.render(<App />);
