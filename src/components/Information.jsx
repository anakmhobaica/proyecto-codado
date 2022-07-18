import React from 'react'
import styles from './Information.module.css'

export default function Information({ title, text, image }) {
  return (
    <div className={styles.info} style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <h3 className={styles.infoTitle}>{title}</h3>
        <p className={styles.infoText}>{text}</p>
    </div>
  ) 
}
