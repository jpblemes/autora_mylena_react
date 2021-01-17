import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import '../css/Maincontent.css';

const Bookcard = ({book}) => {

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
        <div style={{backgroundColor: '#cbbce6'}} className="ui fluid card">
            <div className="content">
                <br/><br/>
                <div className="description">
                    <div className="ui right floated vertical buttons bookmenu">
                        <img 
                            className="marginPhoto small ui image" 
                            src={book.imageurl}
                            alt={book.alt}
                        />
                    </div>
                    <div>
                        <div style={titlestyle}className="header">
                            <h2>{book.title}</h2>
                        </div>
                        <br/><br/>
                        <div style={textstyle}>
                            <p style={{fontSize: '18px'}}>{book.subtitle}</p>
                        </div>
                        <br/><br/><br/>
                        <div className="content">
                            <Router>
                                <Link to={book.nameurl}>
                                    <button className="ui violet button">
                                        <i className="circular inverted book icon"></i> 
                                        Conheça este e-book!
                                    </button>
                                </Link>
                            </Router>
                        </div>
                    </div>
                    <br/><br/><br/><br/>
                </div>
            </div>
        </div>   
    </div>
    );
}

export default Bookcard;