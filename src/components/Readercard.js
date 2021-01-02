import React from 'react';

const Readercard = ({reader}) => {
    return (
            <div style={{backgroundColor: '#FFF0F5'}}className="ui fluid card">
                <div className="content">
                    <div className="center aligned">
                        <img 
                            className="ui avatar Medium image" 
                            alt="Imagem do(a) leitor(a)"
                            src={reader.imageurl}
                        /> 
                        <p><b>{reader.title}</b></p>
                        <p>{reader.opinion}</p>
                        <p><b>{reader.name}</b></p>
                    </div>
                </div>  
            </div>
    );
}

export default Readercard;


