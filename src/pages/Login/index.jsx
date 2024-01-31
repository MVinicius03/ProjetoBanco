import React from "react";
import styles from "./login.module.css";
import LogoIMG from '../../img/login.png'
import { Link } from "react-router-dom";
import './login.module.css'

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_login}>
          <div className={styles.warp_login}>
            <form className={styles.login_form}>
              <span className={styles.login_form_title}>Bem Vindo!</span>
              <span>
                <img className={styles.imagemlogin} src={LogoIMG} alt="imagem" />
              </span>

              <div className={styles.warp_input}>
                <input className={styles.input} type="email" />
                <span className={styles.focus_input} data-placeholder="Email"></span>
              </div>
              <div className={styles.warp_input}>
                <input className={styles.input} type="password" />
                <span className={styles.focus_input} data-placeholder="Senha"></span>
              </div>

              <div className={styles.container_login_form_btn}>
                <button className={styles.login_form_btn}>Login</button>
              </div>

              <div className={styles.create_account}>
                <span className={styles.txt1}>Não possui conta! </span>

                <Link className={styles.clicavel} to='/cadastro'>
                  <a> Criar conta.</a>
                </Link>
              </div>
              <div className={styles.login_admin}>
                <span className={styles.txt2}>Administrador. </span>

                <Link className={styles.clicavel2} to='/adm'>
                  <a> Logar </a>
                </Link>
              </div>


            </form>
          </div>
        </div>
      </div>
    </>


  )

}

export default Login;