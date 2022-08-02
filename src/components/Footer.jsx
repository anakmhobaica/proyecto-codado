import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.firstSection}>
            <hr />
            <div className={styles.infoFooter}>
                <h3 className={styles.subtitlesFooter}>VISÍTANOS</h3>
                <p className={styles.textInfo}>Edf. IUDAG
Esquina de Sociedad a San Francisco, Av. Universidad, Caracas 1012 Distrito Capital, Venezuela</p>
            </div>
        </div>
        <div className={styles.titleFooter}> 
            <h1 className={styles.contactanos}>CONTÁCTANOS</h1>
            <div >
                <h3 className={styles.subtitlesFooter}>LLÁMANOS</h3>
                <p className={styles.textInfo}>+58 4122257324 <br/>
+58 4241459403<br/>
+58 4129003500</p>
            </div>
        </div>
        <div className={styles.secondSection}>
            <hr />
            <div className={styles.infoFooter}>
                <h3 className={styles.subtitlesFooter}>ENLACES DE INTERÉS</h3>
                <a href="https://inces.gob.ve/" target={"_blank"} rel={"noreferrer"}>www.inces.gob.ve</a><br /><br />
                <a href="https://www.facebook.com/" class='fab fa-facebook'>Facebook</a><br /><br />
                <a href="https://twitter.com/icodado"class='fab fa-twitter'>Twitter</a><br />
            </div>
        </div>
    </footer>
  )
}
