import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {db} from '../../db';

export default function Admin() {
  const [registro, setRegistro] = useState([]);
  useEffect(()=>{
    // console.log(db)
    let results = db.getCollection('users').data;
    console.log(results);
    setRegistro(results);
  }, []);

  return (
    <>
        <div>
            <ul>
                {registro.map(data => (
                    <li key={data.meta.$loki}> 
                        <div>{data.meta.$loki}</div>
                        <div>{data.name}</div>
                        <div>{data.cedula}</div>
                        <div>{data.edad}</div>
                        <div>{data.number}</div>
                        <div>{data.cursos}</div>
                        <div>{data.correo}</div>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}
