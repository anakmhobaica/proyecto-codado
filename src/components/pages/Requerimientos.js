import React from 'react'
import styles from '../Requerimientos.module.css';
import Card from '../Card';
import PdfButton from '../PdfButton';
import document from '../../documents/ley_del_inces.pdf';
import requerimientos from '../../documents/requisitos_inscripcion.pdf';

function Requerimientos() {
  return (
    <>
    <div className={styles.body}>
    <div className={styles.wrapper}>
    <h1 className={styles.reqTitle}>INFORMACIÓN DE LOS CURSOS</h1>
      <div className={styles.divCard}>
      <Card
      img = "https://source.unsplash.com/64YrPKiguAE"
      title = "Asistente de Informatica"
      // text = "Requisitos:"
      text1=" Cursado bachillerato y con inclinaciones a estudios superiores en Ciencias de la Informatica"
      // info="Duracion"
      info1=" 8 meses. (800 horas académicas teóricas-prácticas)"
      // info_h="Horario"
      info2=" Lunes a Viernes de 2pm a 5pm  
      (para grupos de mínimo 15 personas)"
      direction="left"
      />
      </div>

      <div className={styles.divCard}>
      <Card
      img = "https://source.unsplash.com/BlKBaiFdNgA"
      title = "Asistente Financiero"
      text1=" Cursado bachillerato y con inclinaciones a estudios superiores en Finanzas"
      info1=" 1 año y 4 meses. (1600 horas académicas teóricas-prácticas)"
      info2=" Lunes a Viernes de 2:00pm a 4:00pm
      (para grupos de mínimo 15 personas)"
      direction="right"
      />
      </div>

      <div className={styles.divCard}>
      <Card
      img = "https://source.unsplash.com/UK1N66KUkMk"
      title = "Asistente Administrativo"
      text1=" Cursado bachillerato y con inclinaciones a estudios superiores en Adminitracion"
      info1=" 1 año y 4 meses. (1.600 horas académicas teóricas-prácticas)"
      info2=" Lunes a Viernes de 3:00pm a 6:00pm
      (para grupos de mínimo 15 personas)"
      direction="left"
      />
      </div>

      <div className={styles.divCard}>
      <Card
      img = "https://source.unsplash.com/5fNmWej4tAA"
      title = "Asistente Contable"
      text1=" Cursado bachillerato y con inclinaciones a estudios superiores en Contabilidad"
      // text2=" • Ser mayor de 18 años"
      // text3=" • Contar con Rif"
      // text4=" • Fotocopia de la Cedula de Identidad"
      // modulo=" Programa del curso"
      // modulo1=" • Modulo I: "
      // modulo2=" • Modulo II:"
      // modulo3=" • Modulo III:"
      // modulo4=" • Modulo IV:"
      // modulo5=" • Modulo V: "
      info1=" 1 año. (1200 horas académicas teóricas-prácticas)"
      info2=" Lunes a Viernes Miercoles de 3:00pm a 6:00pm
      (para grupos de mínimo 15 personas)"
      direction="right"
      />
      </div>

    <div className={styles.divCard}>
    <Card
      img = "https://img.freepik.com/fotos-premium/asistente-ventas-tienda-ropa_470178-3464.jpg?w=1060"
      title = "Asistente de ventas"
      text=" Requisitos:"
      text1=" Cursado bachillerato y con inclinaciones a estudios superiores en Contabilidad"
      info=" Duracion"
      info1=" 5 meses. (500 horas académicas teóricas-prácticas)"
      info_h=" Horario"
      info2=" Lunes a Viernes de 3:00pm a 6:00pm
      (para grupos de mínimo 15 personas)"
      direction="left"
      />
    </div>

      </div>
    <h1 className={styles.reqTitle}>REQUERIMIENTOS</h1>
    <div className={styles.pdfDocuments}>
      <div className={styles.containerPDF}>
        <h3 className={styles.reqSubtitle}>INSCRIPCIÓN POR PRIMERA VEZ</h3>
        <PdfButton link={requerimientos}/>
      </div>
      <div className={styles.containerPDF}>
        <h3 className={styles.reqSubtitle}>LEY INCES</h3>
        <PdfButton link={document}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Requerimientos