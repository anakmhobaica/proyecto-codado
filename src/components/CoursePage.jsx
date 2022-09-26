import React, {useState} from 'react';
import MainSlider from './MainSlider';
import image from '../images/cursos.jpg'
import Courses from './Courses';
import styles from './CoursePage.module.css';
import image2 from '../images/hero.jpg';
import image3 from '../images/1297016224_0.jpg';
import image4 from '../images/asesor-financiero-personal.jpg';
import image5 from '../images/55c6fa787c63f7b7bf94dd959fa3f24d5365fbbe.jpeg';
import image6 from '../images/600x300_asistcont.jpg';
import image7 from '../images/c8586436ab9e949fb8964b78cd404eb9.jpg'
import InformativeFlayer from './InformativeFlayer';
import ImageBanner from './ImageBanner';
import Portal from './Portal';
import ModalInfo from './ModalInfo';

export default function CoursePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({titulo:'', parrafo:''})
  
  function modalInfo(text){
    setIsOpen(true);
    setModalContent(text);
  }

  return (
    <>
        <MainSlider  
        image={image} 
        title={"PROGRAMACIÓN DE CURSOS 2022"} 
        text={"Formatos prediseñados atendiendo a las tendecias del mercado, con posibilidad de ajustes y rediseños según sus requerimientos."}
        width={"1272px"}
        height={"520px"}
        />

        <div className={styles.divCourses}>
            <Courses title={"Asistente de Informática"} image={image3} onClick={() => modalInfo({titulo:'Asistente de Informática', parrafo:'Los agentes de soporte técnico informático brindan asistencia o soporte a la empresa o a los empleados acerca de cuestiones relacionadas con el mantenimiento de hardware, redes y sistemas. Pueden hacerlo personalmente o de manera remota, por teléfono o a través de correo electrónico.'})}/>
            <Courses title={"Asistente Financiero"} image={image4} onClick={() => modalInfo({titulo:'Asistente Financiero', parrafo:'El Asistente Financiero es un profesional que ayuda a descubrir las necesidades financieras, analizando circunstancias pasadas, presentes y futuras de su cliente, teniendo en cuenta la edad, su patrimonio disponible, su tipo impositivo, su situación profesional y familiar, y el resto de inversiones que pueda disponer.'})}/>
            <Courses title={"Asistente Administrativo"} image={image5} onClick={() => modalInfo({titulo:'Asistente Administrativo', parrafo:'El Asistente Administraivo, está capacitado para desenvolverse tanto en las Actividades Administrativas y Contables. Desempeñando Habilidades y Destrezas en las distintas Actividades de una Empresa. Realiza Procesos en forma manual u operando Equipos y Programas Computarizados Actualizados. Capacidad de Trabajo en Equipo y Bajo Presión.'})}/>
            <Courses title={"Asistente Contable"} image={image6} onClick={() => modalInfo({titulo:'Asistente Contable', parrafo:'La persona que opte por adquirir destrezas como Asistente Contable podrá aportar a la ejecución de las transacciones generales de la empresa. También calculará y elaborará roles de pago y manejará de forma adecuada las herramientas informáticas de los diferentes organismos de control como el Servicio de Rentas Internas, Ministerio de Trabajo, Instituto de Seguridad Social, entre otros.'})}/>
            <Courses title={"Asistente de Ventas"} image={image7} onClick={() => modalInfo({titulo:'Asistente de Ventas', parrafo:'Entre las obligaciones del asistente de ventas se incluyen vender, reabastecer y realizar tareas de promoción comercial. El objetivo es ofrecer un servicio de alto nivel al cliente y aumentar el crecimiento y los ingresos de la empresa maximizando las ventas.'})}/>
        </div> 

        <Portal open={isOpen} onClose={() => setIsOpen(false)}>
          <ModalInfo title={modalContent.titulo } text={modalContent.parrafo}/>
        </Portal>

        <ImageBanner image={image2} direction={"left"}>
            <InformativeFlayer  title={"FORMULARIO"} button={"Ir al formulario"} marginLeft={"120px"} link={"formulario"}>
              <p className={styles.textFlayer}>Si cumples con los requerimientos y estás interesado en alguno de los cursos que se dictan en el Instituto Codado, te recomendamos que llenes el formulario de pre-inscripción y reserves tu cupo para el próximo periodo de clases. <br /><br /> ¡Éxitos!</p>
            </InformativeFlayer>
        </ImageBanner>
    </>
  )
}
