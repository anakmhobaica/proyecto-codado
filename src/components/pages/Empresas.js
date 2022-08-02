import React from 'react'
import '../Empresas.css';
import styles from '../Requerimientos.module.css';
import PdfButton from '../PdfButton';
import CardEmpresa from '../CardEmpresa';
import image from '../../images/Inces.png'
import requerimientoempresas from '../../documents/inces_requisitos_empresa.pdf';

const Empresas = () => {
  return (
    <>
      <div className = "body">
        <h1 className = "title">INFORMACIÓN DE EMPRESAS</h1>
        <br></br>
        <br></br>
        <div className = "banner">
          <CardEmpresa
          img = {image}
          title="Empresas Publicas y Privadas"
          text1 = "En el Instituto Codado ofrecemos la formación y el desarrollo de Aprendices INCES en las empresas a través de los institutos: IADD, Instituto de Acción Delegada para la Formación INCES, DAE, Desarrollo de Aprendices en la Empresa, AIE, Agrupación Inter Empresa."
          text2 = "Toda empresa que desee impartir a sus aprendices en los cursos del Instituto Codado debe estar registrada en el Instituto Nacional de Capacitación y Educación Socialista (INCES) "
          />
        </div>
        <h1 className = "title">REQUERIMIENTOS</h1>
        <div className ={styles.pdfDocuments}>
          <div className = {styles.containerPDF}>
            <h3 className = {styles.reqSubtitle}>INSCRIPCIÓN DE EMPRESAS</h3>
            <PdfButton link={requerimientoempresas}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Empresas
