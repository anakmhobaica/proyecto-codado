import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import logo from '../images/Logo-Codado_d400.png';

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.divLogoCodado}>
        <Link to='/' reloadDocument><img className={styles.logoCodado} src={logo} alt="logo"/></Link>
      </div> 
      <div className={styles.elements}>
        <ul className={styles.links} >
            <div className={styles.divOption}><Link to={"/"} className={styles.linkNavbar} reloadDocument><li>Empresas</li></Link><span className={styles.line}></span></div>
            <div className={styles.divOption}><Link to={'/cursos'} className={styles.linkNavbar} reloadDocument><li>Cursos</li></Link><span className={styles.line}></span></div>
            <div className={styles.divOption}><Link to='/contacto' className={styles.linkNavbar} reloadDocument><li>Contacto</li></Link><span className={styles.line}></span></div>
            <div className={styles.divOption}><Link to='/requerimientos' className={styles.linkNavbar} reloadDocument><li>Requerimientos</li></Link><span className={styles.line}></span></div>
            {/* <span className={styles.line}></span> */}
        </ul>
            <Link to='/formulario' className={styles.linkForm} reloadDocument><li>FORMULARIO</li></Link>
      </div>
    </nav> 
  )
}
