import React from 'react';
import '../css/Bookpage.css';

const Bookpage = ({book}) => {

    const titlestyle = {
        textAlign: 'center',
        fontSize: '20px'
    }

    return(
        <div className="ui container">
            <br/>
            <div style={{backgroundColor: '#FFF0F5'}} className="ui fluid card">
                <div className="content">
                    <div style={titlestyle}className="header">
                        <h2>{book.title}</h2>
                    </div>
                    <br/><br/>
                    <div className="description">
                        <div className="ui right floated vertical buttons bookmenu">
                            <img 
                                style={{margin: '1px',}} 
                                className="right floated small ui image" 
                                src={book.imageurl}
                                alt={book.alt}
                            />
                            <button 
                                style={{margin: '1px 0',}} 
                                class="ui violet button">
                                <i className="circular inverted amazon icon"></i> 
                                Adquira
                            </button>
                            <button 
                                style={{margin: '1px 0',}} 
                                className="ui violet button">
                                Teaser
                            </button>
                            <button 
                                style={{margin: '1px 0',}} 
                                className="ui violet button">
                                Resenhas
                            </button>
                            <button 
                                style={{margin: '1px 0',}} 
                                className="ui violet button">
                                Leia o 1º capítulo
                            </button>
                            <button 
                                style={{margin: '1px 0',}} 
                                className="ui violet button">
                                Skoob
                            </button>
                        </div>
                        <h3>{book.extra}</h3>
                        <p>{book.summary}</p>
                    </div>
                </div>
            </div>   
        </div>
        
    );   
}

export default Bookpage;