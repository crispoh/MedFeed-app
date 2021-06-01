import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Quienes_somos from './pages/Quienes_somos';
import Inicio from './pages/Inicio';
import Footer from './components/Footer/Footer';
import Contacto from './pages/Contacto';
import Login_Medico from './pages/Login_Medico';
import Login_Paciente from './pages/Login_Paciente';
import Soporte from './pages/Soporte';



function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path = "/" component = {Inicio}/>
          <Route exact path = "/home" component = {Home}/>
          <Route exact path = "/quienes_somos" component = {Quienes_somos}/>
          <Route exact path = "/contacto" component = {Contacto}/>
          <Route exact path = "/login_medico" component = {Login_Medico}/>
          <Route exact path = "/login_paciente" component = {Login_Paciente}/>
          <Route exact path = "/soporte" component = {Soporte}/>
        </Switch>
        </Router>
      <Footer/>
    </>
  );
}

export default App;
