import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './inscription.module.css';
import fetchinsc from './inscription';
import fetchannul from '../Annuler/annuler'

const Inscription = () => {                                                                                                             
useEffect(()=>{fetchinsc(); fetchannul();})

    return(
        
            <div className={styles.container}>
                <div className={styles.image}> 
                <form className={styles.form}>
                    <label className={styles.titre} >Inscription</label>
                    <div className={styles.login}>
                        <input className={styles.inputInscription} minlength="3" id="username" type="text"  method="post" for="" placeholder="Identifiant ..."></input>
                        <input className={styles.inputInscription} id="email" type="email" method="post" for="email" placeholder="Adresse mail ..."></input>
                        <input className={styles.inputInscription} minlength="6" id="password" type="password" method="post" for="password" placeholder="Mot de passe ..."></input>
                        <input className={styles.inputInscription} minlength="6" type="password" method="post" for="password" placeholder="Confirmez le mot de passe ..."></input>  
                    </div>            
                </form>
                <div className={styles.btn}> 
                        <button className={styles.log} id="submit" type="submit">Je m'inscris</button>
                            <button className={styles.dead} id="cancel">Annuler</button>
                            
                        </div> 
                <p id="error"></p>
            </div>
        </div>
    )
}

export default Inscription