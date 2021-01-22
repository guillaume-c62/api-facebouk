import React,{useEffect} from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import fetchhom from './homePage';



const HomePage = () => {
    useEffect(()=>{ fetchhom ()})
    return(
        <div > 
            <Header/>
                 <div className={styles.navs}>
                     <div className={styles.btn}>
                         <label for="site-search"></label>
                            <input name="site-search" type="search"></input>
                                <button className={styles.btnl} >chercher</button>
                    </div>
                        </div>
                        <div className={styles.image} ></div>
            <div className={styles.container}>
                    <p className={styles.p}>Hello <span id="username"></span> !</p>

                    <p className={styles.p}>cliquer sur le bouton profil !</p>
            </div>
        </div>
    )
}

export default HomePage