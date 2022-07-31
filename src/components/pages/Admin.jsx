import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {db} from '../../db';
import styles from '../Admin.module.css';

export default function Admin() {
  const [registro, setRegistro] = useState([]);
  useEffect(()=>{
    db.loadDatabase({}, function (err) {
        if (err) {
            console.log("error : "+ err);
        }else {
            let results = db.getCollection("users");
            setRegistro(results.data);
        }
    });
  }, []);

  return (
    <>
    <div className={styles.titleContainer}>
        <h1 className={styles.inscritos}>LISTA DE PREINSCRITOS</h1>
    </div>
        <div className={styles.listContainer}>
            <ul className={styles.listData}>
                <li style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={styles.infoTitle}>Nombre</div>
                    <div className={styles.infoTitle}>Cédula</div>
                    <div className={styles.infoTitle} style={{width:"90px"}}>Edad</div>
                    <div className={styles.infoTitle}>Teléfono</div>
                    <div className={styles.infoTitle}>Curso</div>
                    <div className={styles.infoTitle} style={{width:"240px"}}>Correo</div>
                </li>
                {registro.map(data => (
                    <li key={data.$loki} className={styles.data}> 
                        <div className={styles.items}>{data.name}</div>
                        <div className={styles.items}>{data.cedula}</div>
                        <div className={styles.items} style={{width:"90px"}}>{data.edad}</div>
                        <div className={styles.items}>{data.number}</div>
                        <div className={styles.items}>{data.cursos}</div>
                        <div className={styles.items} style={{width:"240px"}}>{data.correo}</div>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}
