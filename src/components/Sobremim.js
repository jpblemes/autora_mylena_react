import React from 'react';

const mylenaphoto = {
    src: "../images/mylena.jpg", 
    alt: "A photo of Mylena Aladim"
}

const Sobremim = () => {
    return(
        <div>
            <div style={{margin: '10px'}} className="ui">
                <div className="ui card">
                    <img
                        className="ui medium circular image" 
                        src={mylenaphoto.src} 
                        alt={mylenaphoto.alt}
                    />
                    <div className="content">
                        <a className="header">Mylena Aladim</a>
                        <div className="description">
                            Autora
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        
    );
}

export default Sobremim