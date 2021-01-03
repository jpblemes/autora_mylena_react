import React from 'react';
import '../css/Maincontent.css';

const Maincontent = () => {
    const phone = '../images/smartphonebook2.png';
    const bgimg = '../images/background.png';
    const bgstyle = { 
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }
    const titlestyle = {
        textAlign: 'center',
        fontSize: '20px'
    }
    const textstyle = {
        textAlign: 'center',
        fontSize: '15px'
    }
    return(
        <div className="ui container">
        <div style={bgstyle} className="ui fluid card">
            <div className="content">
                
                <br/><br/>
                <div className="description">
                    <div className="ui right floated vertical buttons bookmenu">
                        <img 
                            className="marginPhoto right floated small ui image" 
                            src={phone}
                            alt='Smartphone with the book on screen'
                        />
                    </div>
                    <div>
                        <div style={titlestyle}className="header">
                            <h2 style={{color: '#F8F8FF'}} >A Rebelde de Dois Mundos</h2>
                        </div>
                        <br/><br/>
                        <div style={textstyle}>
                            <p style={{color: '#F8F8FF'}}>Uma bela de uma Ladra convencida teve o seu destino roubado de suas mãos.</p>
                            <p style={{color: '#F8F8FF'}}>Áquila não é quem diz ser e Isabelle não é quem pensou que fosse.</p>
                            <p style={{color: '#F8F8FF'}}>Nessa luta de opostos, quem irá vencer: A honra ou o amor?</p>
                        </div>
                        <br/>
                        <div style={{backgroundColor: '#cbbce6'}} className="ui centered card">
                            <div className="content">
                                <div className="header">Adquira o e-book!</div>
                                <br/>
                                <button className="ui violet button">
                                    <i className="circular inverted amazon icon"></i> 
                                    Amazon BR
                                </button>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                </div>
            </div>
        </div>   
    </div>
        // <div 
        //     style={bgstyle} 
        //     className="ui fluid card bgimg"
        // >
        //     <div className="content">
                
        //         <div className="description">
                    
        //             <br/>
        //             <div className="header">
        //             <h2 style={{color: '#f4e1d2'}} >A REBELDE DE DOIS MUNDOS</h2>
        //         </div>
        //         <div style={{color: '#F8F8FF'}} className="meta">
        //             <h4>Uma fantasia New Adult</h4>
        //         </div>
        //         <div>
        //             <img className="small ui image" alt="New book in a smarthpone" src={phone}/>
        //         </div>
        //         <br/>
        //             <div>
        //                 <p style={{color: '#F8F8FF'}}>Uma bela de uma Ladra convencida teve o seu destino roubado de suas mãos.</p>
        //                 <p style={{color: '#F8F8FF'}}>Áquila não é quem diz ser e Isabelle não é quem pensou que fosse.</p>
        //                 <p style={{color: '#F8F8FF'}}>Nessa luta de opostos, quem irá vencer: A honra ou o amor?</p>
        //             </div>
        //         </div>
        //         <br/>
        //         <div style={{backgroundColor: '#FFF0F5'}} className="ui centered card">
        //             <div className="content">
        //                 <div className="header">Adquira o e-book!</div>
        //                 <br/>
        //                 <button className="ui violet button">
        //                     <i class="circular inverted amazon icon"></i> 
        //                     Amazon BR
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Maincontent;