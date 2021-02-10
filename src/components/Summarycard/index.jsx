import React from 'react';

const Summarycard = ({reader}) => {

    const style = {
        backgroundColor: '#cbbce6',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        WebkitBoxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        MozBoxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    }

    const readersummary = reader.texts.map((text) => {
        return(
            <p 
                style={{textAlign: 'center', fontSize: '15px'}} 
                key={reader.id}>
                {text}
            </p>
        );
    });

    return(
        <div className="ui container">
            <br/>
            <div style={style} className="ui fluid card">
            <div className="center aligned content">
                <img 
                    style={{margin: '15px'}} 
                    className="ui circular tiny image" 
                    src={reader.src}
                    alt='autor(a) da resenha'
                /><span style={{fontSize: '25px'}}><b>{reader.name}</b></span>
            </div>
            <div>{readersummary}</div>
            <br/><br/><br/>
            </div>
        </div>
    ); 
}

export default Summarycard;