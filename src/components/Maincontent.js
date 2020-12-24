import React from 'react';

const Maincontent = () => {
    const phone = '../images/smartphonebook2.png';
    return(
        <div className="ui fluid card">
            <div className="content">
                <div className="header">
                    <h2>A REBELDE DE DOIS MUNDOS</h2>
                </div>
                <div className="meta">
                    <h4>Uma fantasia New Adult</h4>
                </div>
                <div className="description">
                <img className="right floated small ui image" src={phone}/>
                <br></br>
                <p>Uma bela de uma Ladra convencida teve o seu destino roubado de suas mãos.</p>
                <p>Áquila não é quem diz ser e Isabelle não é quem pensou que fosse. Nessa luta de opostos, quem irá vencer: A honra ou o amor?</p>
                <br></br>
                <div className="ui centered card">
                <div className="content">
                    <div className="header">Adquira o e-book!</div>
                    <button className="ui black button">Amazon BR</button>
                </div>
            </div>
                </div>
            </div>
        </div>


        // <div className="ui fluid card">
        //     <img className="ui right floated small image header" src={phone} />
        //     <div className="center aligned">
        //         <h2>A REBELDE DE DOIS MUNDOS</h2>
        //         <h4>Uma fantasia New Adult</h4>
        //         <br></br>
        //         <p>Uma bela de uma Ladra convencida teve o seu destino roubado de suas mãos.</p>
        //         <p>Áquila não é quem diz ser e Isabelle não é quem pensou que fosse. Nessa luta de opostos, quem irá vencer: a honra ou o amor?</p>
        //     </div>
        //    <br></br>
        //     <div className="ui centered card">
        //         <div className="content">
        //             <div className="header">Adquira o e-book!</div>
        //             <div className="meta">
        //                 <span>Amazon BR</span>
        //             </div>
        //             <button className="ui black button right floated">Clique aqui</button>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Maincontent;