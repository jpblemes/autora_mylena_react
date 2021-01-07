import React from 'react';
import Bookcarousel from './Bookcarousel';

const mylena = {
    src: "../images/mylenaphoto.png", 
    alt: "A photo of Mylena Aladim",
}
const allabout =[
    {
        id: 1,
        text:   `Mylena Aladim cresceu em Minas Gerais em uma casa cheia.
                Influenciada pela avó, desde pequena devora livros. As leituras
                obrigatórias no colégio, nunca foram obrigatórias para ela,
                principalmente se fosse um romance ou uma aventura.`
    },
    {
        id: 2,
        text:   `Qualquer heroína que seja forte, rouba dela cinco estrelas.
                Ela vai do Rock barulhento ao MPB em um piscar de  
                olhos. Mylena mora atualmente em Brasília com o marido e 
                um Jack Russel, que dão a ela uma verdadeira aventura todos 
                os dias.`
    },
    {
        id: 3,
        text: `Os gêneros literários de suas obras são Fantasia, Romance, New Adult e Young Adult`,
    },
]

const Sobremim = () => {

    const titlestyle = {
        textAlign: 'center',
        fontSize: '20px'
    }

    const aboutmylena = allabout.map((about) => {
        return(
            <p key={about.id}>{about.text}</p>
        );
    });

    return(
        <div className="ui container">
            <br/>
            <div style={{backgroundColor: '#cbbce6'}} className="ui fluid card">
                <div className="content">
                    <div style={titlestyle}className="header">
                        <h2>Sobre mim</h2>
                    </div>
                    <br/><br/>
                    <div className="description">
                        <div className="ui right floated vertical buttons bookmenu">
                            <img 
                                style={{margin: '1px',}} 
                                className="right floated small ui image" 
                                src={mylena.src}
                                alt={mylena.alt}
                            />
                        </div>
                        <div>{aboutmylena}</div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <h1 style={{textAlign: 'center'}}>Obras disponíveis:</h1>
            <br/>
            <div style={{width: '90%'}} className="ui container">
                <Bookcarousel/>
            </div>
            
        </div>
        
    ); 
}

export default Sobremim