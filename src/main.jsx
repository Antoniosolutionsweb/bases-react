import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Componente } from './components/Componente.jsx'
import { Propiedades } from './components/Propiedades.jsx'
import { ContadorHooks } from './components/ContadorHooks.jsx'
import { Scrollhooks } from './components/Scrollhooks.jsx'
import { RelojHooks } from './components/RelojHooks.jsx'
import { AjaxHooks } from './components/AjaxHooks.jsx'
import { HooksPeronalizados } from './components/HooksPeronalizados.jsx'
import { Referencias } from './components/Referencias.jsx'
import { Formularios } from './components/Formularios.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Componente/>
    <Propiedades
      cadena =" esto es una cdena de texto"
      numero={27}
      booleano={true}
    /> */}

    <ContadorHooks/>
    <hr />
    <Scrollhooks/>
    <hr />
    <RelojHooks/>
    <hr />
    {/* <AjaxHooks/> */}
    <HooksPeronalizados/>
    <hr />
    <Referencias/>
    <hr />
    <Formularios/>
  </React.StrictMode>,
)
