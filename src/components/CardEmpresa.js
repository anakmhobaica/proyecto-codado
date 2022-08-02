import React from 'react'
import './Card.css'

function CardEmpresa(props) {
    return (
      <div className="card">
            <div className="div-image">
              <img src={props.img} class='card-images' alt=''/>
            </div>
            <div className="card-content">
              <h2 className='card-title'>{props.title}</h2>
              <ul>
                <li className='card-text'>{props.text1}</li><br/><br/>
                <li className='card-text'><b>Requisitos:</b>{props.text2}</li><br/><br/>
              </ul>
            </div>    
      </div>
    )
    }
export default CardEmpresa