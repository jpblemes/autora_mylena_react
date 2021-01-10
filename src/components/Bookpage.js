import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Bookpage = ({book}) => {

    const titlestyle = {
        textAlign: 'center',
        fontSize: '20px'
    }

    return(
        <div className="ui container">
            <br/>
            <div style={{backgroundColor: '#cbbce6'}} className="ui fluid card">
                <div className="content">
                    <div style={titlestyle}className="header">
                        <h2>{book.title}</h2>
                    </div>
                    <br/><br/>
                    <div className="description">
                        <Router>
                            <div className="ui right floated vertical buttons">
                                <img 
                                    style={{margin: '1px',}} 
                                    className="right floated small ui image" 
                                    src={book.imageurl}
                                    alt={book.alt}
                                />
                                <button 
                                    style={{margin: '1px 0'}} 
                                    className="ui violet button">
                                    <i className="circular inverted amazon icon"></i> 
                                    Adquira
                                </button>
                                <button 
                                    style={{margin: '1px 0',}} 
                                    className="ui violet button">
                                    Resenhas
                                </button>
                                <Link to={`${book.nameurl}-primeiro_capitulo`} className="item">
                                    <button 
                                        style={{margin: '1px 0',}} 
                                        className="ui violet button" href={`${book.nameurl}-primeiro_capitulo`}>
                                        Leia o 1º capítulo
                                    </button>
                                </Link>
                                <button 
                                    style={{margin: '1px 0',}} 
                                    className="ui violet button">
                                    Skoob
                                </button>
                            </div>
                            <h3>{book.extra}</h3>
                            <p>{book.summary}</p>
                        </Router>
                    </div>
                    
                </div>
            </div>   
        </div>
        
    );   
}

export default Bookpage;