import React from 'react';

const Readercard = ({reader}) => {

    const style = {
        backgroundColor: '#cbbce6',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        WebkitBoxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        MozBoxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    }

    return (
            <div style={style}className="ui fluid card">
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


