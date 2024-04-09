import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Vehiculos from './data/Vehiculos';
import VehiculosView from './views/VehiculosView';
import IniciarSesion from "./componentes/IniciarSesion"
import RegistroSesion from "./componentes/RegistroSesion"

const routes = [
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/iniciarSesion",
    element:<IniciarSesion/>,
  },
  {
    path: "/registroSesion",
    element:<RegistroSesion/>,
  }
];

Vehiculos.forEach((Vehiculo) => {
  routes.push({
    path: Vehiculo.titulo,
    element: <VehiculosView vehiculo={Vehiculo}/>,
  })
})

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById
  ('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
