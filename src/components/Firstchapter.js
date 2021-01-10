import React from 'react';
import Pdf from './Pdf';
 
const Firstchapter = ({pdfurl}) => {
    return (
        <div className= 'ui centered container'>
            <Pdf pdfurl={pdfurl} />            
        </div>
    )
}

export default Firstchapter;