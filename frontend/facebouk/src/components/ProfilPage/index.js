import React, { useEffect } from 'react';
import styles from "./profil.module.css";
import Header from '../Header';
import fetchprof from "./profile";
import fetchcursor from "./cursor";

const ProfilPage = () => {
useEffect(()=>{fetchprof(); fetchcursor();})
    return(
        <div> 
            <Header/>
                <div className={styles.container}>
                     <p className={styles.titre}> Pseudo </p>
                         <span id="username"></span>
                             <p className={styles.titre}> Email </p>
                                 <span id="email"></span>
                                 <div id="cursor" className={styles.cursor}></div>
                </div>
            </div>
    )
}

export default ProfilPage