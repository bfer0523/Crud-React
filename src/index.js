import React from 'react';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

