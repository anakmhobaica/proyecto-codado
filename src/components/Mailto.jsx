import React from "react";
import styles from './Mailto.module.css';

export default function Mailto({ email, subject, name, body, ...props }) {
  return (
    <div className={styles.buttonStyle}>
        <a href={`mailto:${email}?subject=${name} - ${subject}&body=${body}`} className={styles.botonForm}>
            {props.children}
        </a>
    </div>
  );
}