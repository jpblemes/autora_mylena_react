import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import {titleStyle, textStyle} from './styles'

const Bookcard = ({book}) => {

    return(
        <div className="ui container">
        <div style={{backgroundColor: '#cbbce6'}} className="ui fluid card">
            <div style={{marginTop: '20px'}} className="content">
                <div className="description">
                    <div className="ui right floated vertical buttons bookmenu">
                        <img 
                            className="marginPhoto small ui image" 
                            src={book.imageurl}
                            alt={book.alt}
                        />
                    </div>
                    <div>
                        <div style={titleStyle}className="header">
                            <h2>{book.title}</h2>
                        </div>
                        <br/>
                        <div style={textStyle}>
                            <p>{book.subtitle}</p>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <Router>
                                <Link to={book.nameurl}>
                                    <button style={{marginTop: '40px'}} className="ui violet button">
                                        <i className="circular inverted book icon"></i> 
                                        Conheça este e-book!
                                    </button>
                                </Link>
                            </Router>
                        </div>
                        <br/><br/><br/><br/>
                    </div>

                </div>
            </div>
        </div>   
    </div>
    );
}

export default Bookcard;