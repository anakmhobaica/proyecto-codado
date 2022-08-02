import React from 'react';
import MainSlider from './MainSlider';
import image from '../images/foto_portada.jpg'
import image2 from '../images/hero.jpg'
import image3 from '../images/circulo_1.jpg'
import image4 from '../images/circulo_2.jpg'
import image5 from '../images/circulo_3.jpg'
import image6 from '../images/circulo_4.jpg'
import Section from './Section';
import styles from './Home.module.css'
import Information from './Information';
import InformativeFlayer from './InformativeFlayer';
import ImageBanner from './ImageBanner';

export default function Home() {
  return (
    <>
        <MainSlider 
          image={image} 
          title={"INSTITUTO CODADO"} 
          text={"Desde la formación de oficios hasta la especialización en nuestros diplomados"}
          width={"1200px"}
          height={"254px"}
        />
        <div className={styles.sections}>
            <Section 
            title={"PARTICIPANTES"} 
            image={image3} 
            direction={"right"}
            titleHover={"Participantes"}
            text={"Nuestra razón de ser, en ellos nos inspiramos para que sin desperdicio puedan aprovechar durante todas las sesiones de aprendizaje de forma respetuosa y agradable."}/>
            <Section 
            title={"FACILITADORES"} 
            image={image4}
            direction={"right"}
            titleHover={"Facilitadores"}
            text={"Son nuestros embajadores, representan nuestra marca y comparten una filosofía de trabajo que nos diferencia de nuestros competidores."}/>
            <Section 
            title={"EL PROCESO"} 
            image={image5}
            direction={"left"}
            titleHover={"El Proceso"}
            text={"Educar y transferir conocimientos es un proceso dinámico que requiere el seguimiento y reforzamiento permanente de los conocimientos."}/>
            <Section 
            title={"COMUNIDADES"} 
            image={image6}
            direction={"left"}
            titleHover={"Comunidades"}
            text={"Participamos activamente en distintas comunidades del conocimiento, Universidades, gremios profesionales, cámaras regionales y sectoriales, ex participantes y comunidades virtuales."}/>
        </div>
        <ImageBanner image={image2} direction={"flex-end"}>
            <InformativeFlayer title={"CURSOS"} button={"Ver cursos"} marginRight={"120px"} link={"cursos"}>
              <p className={styles.textFlayer}>Instituto Codado tiene acuerdos con la Universidad del Caribe ubicada en Panamá y con empresas como Cipe, una Escuela de Negocios en Hidrocarburos y Energía ubicada tanto en Colombia como en Venezuela.<br/> <br/>Tenemos cursos en diferentes áreas, como lo son: informática, marketing, desarrollo profesional y personal, y más.</p>
            </InformativeFlayer>
        </ImageBanner>
        <div className={styles.importantInfo}>
            <Information title={'MISIÓN'} text={'Permanecer en el tiempo como la solución de nuestros clientes en el desarrollo y fortalecimiento de su recurso humano, a través de la alta calidad de nuestros programas; garantizando un sistema de trabajo que provea conocimiento y bienestar profesional.'} image={'https://josefacchin.com/wp-content/uploads/2020/06/mision-vision-valores.png'}/>
            <Information title={'VISIÓN'} text={'Ser reconocidos internacionalmente como la Empresa Líder en consultoría y capacitación de personal, contribuyendo al crecimiento y cambio organizacional de nuestros clientes.'} image={'https://img.freepik.com/vector-gratis/ilustracion-concepto-vision-empresarial_114360-7130.jpg?w=740&t=st=1658016874~exp=1658017474~hmac=df4604be5a6fa933717cc76f2177a748106ed74b552f45b9e05437acbc82b867'}/>
            <Information title={'VALOR AGREGADO'} text={'Ofrecemos soluciones para la formación, a nivel Nacional, de grandes grupos de personas de las empresas y/o trabajadores temporales que se desempeñen en proyectos especiales.'} image={'https://entercommla.com/wp-content/uploads/2020/04/valor-agregado-entercomm.png'}/>
        </div>
    </>
  )
}
