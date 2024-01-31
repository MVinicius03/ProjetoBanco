import React from "react";
import styles from "./cadastro.module.css";
import LogoIMG from '../../img/cadastro.png'
import { Link } from "react-router-dom";
import './cadastro.module.css'

const Cadastro = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_login}>
          <div className={styles.warp_login}>
            <form className={styles.login_form}>
              <span className={styles.login_form_title}>Bem Vindo!</span>
              <span className={styles.imgcadastro}>
                <img src={LogoIMG} alt="imagem" />
              </span>

              <div className={styles.warp_input}>
                <input className={styles.input} type="text" />
                <span className={styles.focus_input} data-placeholder="Nome completo"></span>
              </div>
              <div className={styles.warp_input}>
                <input className={styles.input} type="email" />
                <span className={styles.focus_input} data-placeholder="Email"></span>
              </div>
              <div className={styles.warp_input}>
                <input className={styles.input} type="text" />
                <span className={styles.focus_input} data-placeholder="CPF"></span>
              </div>
              <div className={styles.warp_input}>
                <input className={styles.input} type="number" />
                <span className={styles.focus_input} data-placeholder="Telefone"></span>
              </div>
              <div className={styles.warp_input}>
                <input className={styles.input} type="text" />
                <span className={styles.focus_input} data-placeholder="Endereço"></span>
              </div>
              <div className={styles.warp_input}>
                <input className={styles.input} type="password" />
                <span className={styles.focus_input} data-placeholder="Senha"></span>
              </div>
              <div className={styles.warp_input}>
                <input className={styles.input} type="password" />
                <span className={styles.focus_input} data-placeholder="Confirmar senha"></span>
              </div>

              <div className={styles.container_login_form_btn}>
                <button className={styles.login_form_btn}>CRIAR CONTA</button>
              </div>

              <div className={styles.create_account}>
                <span className={styles.txt1}>Já possui uma conta!</span>
                <Link className={styles.clicavel} to='/login'>
                <a>Entrar</a>
                </Link>

              </div>
                
              <div className={styles.login_admin}>
                <span className={styles.txt2}>Administrador! </span>

                <Link className={styles.clicavel2} to='/adm'>
                  <a> Logar.</a>
                </Link>
              </div>


            </form>
          </div>
        </div>
      </div>
    </>


  )

}

export default Cadastro;