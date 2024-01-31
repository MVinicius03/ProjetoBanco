import React from 'react';
import styles from './navbar.module.css';
import Container from '../Container';
import { Link } from "react-router-dom";
import logo from '../../img/nomebanco.png'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>  
            <Link to="/Cartao">Solicitar Cartão</Link>
          </li>  
          <li className={styles.item}>
            <Link to="/Cadastro">Cadastro</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Login">Login</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Sobre">Sobre</Link>
          </li>
          
        </ul>
      </Container>
    </nav>
  )

}

export default Navbar;