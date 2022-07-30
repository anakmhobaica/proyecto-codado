import React, { useRef } from 'react'
import styles from '../Contacto.module.css';
import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

export default function Contacto() {
  const ref = useRef(null);
  // const form = ref;
  console.log(ref)
  // form.addEventListener('submit', handleSubmit);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(ref);
  }
  return (
    <>
        <div className={styles.mainContact}>
            <div className={styles.mapContact}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7845.90582667058!2d-66.9237538!3d10.504375!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sve!4v1658013028502!5m2!1sen!2sve" title="mapa-codado" width="500" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.formContact}>
              <h1 className={styles.titleContact}>NUESTRA INFORMACIÓN DE CONTACTO</h1>
              <hr className={styles.lineContact}/>
              <div className={styles.phoneContact}>
                <div>
                  <h2 className={styles.titlePhone}>TELÉFONOS:</h2> 
                </div>
                <div style={{marginTop:'20px'}}>
                  <p className={styles.eachPhone}>+58 4122257324</p>
                  <p className={styles.eachPhone}>+58 4241459403</p>
                  <p className={styles.eachPhone}>+58 4129003500</p>
                </div>
              </div>
              <div className={styles.adressContact}>
                <div >
                  <h2 className={styles.titlePhone}>DIRECCIÓN:</h2>
                </div>
                <div style={{marginTop:'10px'}}>
                  <p className={styles.eachPhone}>Edf. IUDAG Esquina de Sociedad a San Francisco, Av. Universidad, Caracas 1012 Distrito Capital, Venezuela</p>
                </div>
              </div>
              <div className={styles.socialMediaContact}>
                 <div className={styles.socialMediaTitle}>
                    <h2>REDES SOCIALES:</h2>
                 </div>
                 <div className={styles.socialMedia}>
                  <div className={styles.socialMediaIcons}>
                    <FaInstagramSquare style={{height:"100px", width:"100px", color:"rgba(0, 0, 0, 0.93)", cursor:"pointer"}}/>
                    <p className={styles.socialText}>@institutocodado</p>
                  </div>
                  <div className={styles.socialMediaIcons}>
                    <FaTwitterSquare style={{height:"100px", width:"100px", color:"rgba(0, 0, 0, 0.93)", cursor:"pointer"}}/>
                    <p className={styles.socialText}>@institutocodado</p>
                  </div>
                  <div className={styles.socialMediaIcons}>
                    <FaFacebookSquare style={{height:"100px", width:"100px", color:"rgba(0, 0, 0, 0.93)", cursor:"pointer"}}/>
                    <p className={styles.socialText}>Instituto Codado Venezuela</p>
                  </div>
                 </div>
              </div>
            </div>
        </div>
        <div className={styles.questions}>
          <div>
              <h1 className={styles.titleContact}>HAZNOS UNA PREGUNTA</h1>
              <hr className={styles.lineForm}/>
          </div>
          <div>
          <form id="form" ref={ref}>       
              <div className={styles.personalInfo}>
                <p className="p-form">
                    <input type="text" name='nombre' id="nombre" required="obligatorio" placeholder="Nombre" className={styles.inputName}/>
                </p>
                <p className="p-form">
                    <input type="email" name='email' id="email" required="obligatorio" placeholder="Dirección de correo electrónico" className={styles.inputForm}/>
                </p>      
              </div>
              <p className="p-form">                    
                  <textarea name="mensaje" className={styles.textoMensaje} id="mensaje" required="obligatorio" placeholder="Comentario"></textarea> 
              </p>                    
              
              <p className="aviso">
                  <span className="obligatorio"> * </span>los campos son obligatorios.
              </p>          
          </form>
          <div className={styles.buttonStyle}>
            <button name="enviar_formulario" id="enviar" className={styles.botonForm} onClick={console.log(handleSubmit)} >Enviar</button>
          </div>
          </div>
        </div>
    </>
  )
}
