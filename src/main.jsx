import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import  MyContext from '../context/MyContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MyContext>
        <App />
      </MyContext>
    </BrowserRouter>
  </StrictMode>,
);


