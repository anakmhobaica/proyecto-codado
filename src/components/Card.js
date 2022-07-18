import React from 'react'
import './Card.css'

function Card(props) {
  if (props.direction === "left") {
    return (
      <div className="card">
            <div className="div-image">
              <img src={props.img} class='card-image' alt=''/>
            </div>
            <div className="card-content">
              <h2 className='card-title'>{props.title}</h2>
              <ul>
                {/* <li className='card-title'>{props.text}</li> */}
                <li className='card-text'><b>Requisitos:</b>{props.text1}</li><br/><br/>
                {/* <li className='card-title'>{props.info}</li> */}
                <li className='card-text'><b>Duración:</b>{props.info1}</li><br/><br/>
                {/* <li className='card-title'>{props.info_h}</li> */}
                <li className='card-text'><b>Horario:</b>{props.info2}</li>
            
              </ul>
              <p style={{color: 'red', textAlign:'center', fontFamily:'Quicksand', fontSize:'14px', marginBottom: '10px'}}>- <b>Mínima edad requerida:</b> 16 hasta 19 años NO CUMPLIDOS -</p>
            </div>    
      </div>
    )
  } 
  else{
    return (
      <div className="card">
            <div className="card-content">
              <h2 className='card-title'>{props.title}</h2>
              <ul>
                <li className='card-text'><b>Requisitos:</b>{props.text1}</li><br/><br/>
                <li className='card-text'><b>Duración:</b>{props.info1}</li><br/><br/>
                <li className='card-text'><b>Horario:</b>{props.info2}</li>
              </ul>
              <p style={{color: 'red', textAlign:'center', fontFamily:'Quicksand', fontSize:'14px', marginBottom: '10px'}}>- <b>Mínima edad requerida:</b> 16 hasta 19 años NO CUMPLIDOS -</p>
            </div>    
            <div className="div-image">
              <img src={props.img} class='card-image' alt=''/>
            </div>
      </div>
    )
  }
}

export default Card