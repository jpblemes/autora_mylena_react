import React from 'react';
import Imagecolor from '../common/Imagecolor';
import {map, coloredMap, cardladra, quizlink} from './styles'

const Extracontent = () => {

    return(
        <div style={{textAlign: 'center'}} className="ui cenred container">
            <h1>Mapa de A Ladra de Dois Mundos</h1>
            <div className="ui medium image">
                <Imagecolor  img1={map} img2={coloredMap}/>
            </div>
            
            <h1>Você sabe tudo sobre A Ladra de Dois Mundos?</h1>
            <br/>
            <a target="_blank" href={quizlink} rel="noreferrer">
                <button className="ui violet button">Responda ao QUIZ</button>
            </a>
            <br/><br/><br/><br/>
            <div className="ui medium image">
                <img src={cardladra.src} alt={cardladra.alt}/>
            </div>
        </div>
    );
    
}

export default Extracontent;