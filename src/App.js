import NavBar from "./components/NavBar";
import React from 'react'
import Home from "./components/Home";
import Footer from "./components/Footer";
import CoursePage from "./components/CoursePage";
import Copyright from "./components/Copyright";
import { Routes, Route } from 'react-router-dom';
import Formulario from "./components/pages/Formulario";
import Requerimientos from "./components/pages/Requerimientos";
import Contacto from "./components/pages/Contacto";
import Admin from "./components/pages/Admin";
import Empresas from './components/pages/Empresas';

export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cursos" element={<CoursePage/>}/>
        <Route path="/formulario" element={<Formulario/>}/>
        <Route path="/requerimientos" element={<Requerimientos/>}/>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/empresas" element={<Empresas/>}></Route>
      </Routes>
      <Footer/>
      <Copyright text={"@2022 Instituto Codado - Todos los derechos reservados "}/>
    </>
  )
}
