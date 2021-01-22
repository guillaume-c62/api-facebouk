import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./welcome.module.css";
// import background from "../..img/plop.jpg";

const WelcomePage = () => {
    return(
        <div className={styles.container}>
          {/* <div style={{ backgroundImage: url($background) }}> */}
        <h1 className={styles.logo}>Facebouk</h1>
            <div className={styles.containerBt}>
                <Link className={styles.bt} to="/Connexion" >Se connecter</Link>
                <Link className={styles.bti} to="/Inscription" >S'inscrire</Link>
                    </div>
                </div>
            // </div>
    )
}
export default WelcomePage