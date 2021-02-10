import React from 'react';
import Imagecolor from '../Imagecolor/';

const Extra = () => {

    const map = {
        src:"../images/map_a_ladra.png",
        alt:'Um mapa preto e branco de a ladra.'
    }
    const coloredMap = {
        src:"../images/colored_map_a_ladra.png",
        alt:'Um mapa colorido de a ladra.'
    }
    const cardladra = {
        src:"../images/card_a_ladra.png",
        alt:'Uma imagem da do livro a ladra de dois mundos.'
    }
    const quizlink='https://pt.quizur.com/quiz/voce-sabe-tudo-sobre-a-ladra-de-dois-mundos-CNF2'

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

export default Extra;