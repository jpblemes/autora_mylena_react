import React from 'react';

const Maincontent = () => {
    const phone = '../images/smartphonebook2.png';
    const bgimg = '../images/background.jpg';
    const bgstyle = { 
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }
    return(
        <div 
            style={bgstyle} 
            className="ui fluid card bgimg"
        >
            <div className="content">
                
                <div className="description">
                    <div>
                        <img className="small ui image" alt="New book in a smarthpone" src={phone}/>
                    </div>
                    <br/>
                    <div className="header">
                    <h2 style={{color: '#f4e1d2'}} >A REBELDE DE DOIS MUNDOS</h2>
                </div>
                <div style={{color: '#F8F8FF'}} className="meta">
                    <h4>Uma fantasia New Adult</h4>
                </div>
                <br/>
                    <div>
                        <p style={{color: '#F8F8FF'}}>Uma bela de uma Ladra convencida teve o seu destino roubado de suas mãos.</p>
                        <p style={{color: '#F8F8FF'}}>Áquila não é quem diz ser e Isabelle não é quem pensou que fosse.</p>
                        <p style={{color: '#F8F8FF'}}>Nessa luta de opostos, quem irá vencer: A honra ou o amor?</p>
                    </div>
                </div>
                <br/>
                <div style={{backgroundColor: '#F8F8FF'}}className="ui centered card">
                    <div className="content">
                        <div className="header">Adquira o e-book!</div>
                        <br/>
                        <button className="ui black button">Amazon BR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maincontent;