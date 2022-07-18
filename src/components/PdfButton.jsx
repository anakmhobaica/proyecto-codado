import React from 'react'
import styles from './pdfButtons.module.css'
// import { saveAs } from 'file-saver';

// async function startDownload(link) {
//   let url = link;
//   let fileName = "ley_del_inces.pdf";
//   saveAs(url, fileName);
// }

export default function PdfButton({link}) {
  return (
    //  <button onClick={startDownload(link)}>{title}</button>
    <a href={link} target={'_blank'} rel={"noreferrer"} className={styles.toPdf}>
      <div className={styles.pdfButton}>
        Descargar PDF
      </div>
    </a>
  )
}
