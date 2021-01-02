import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Book = ({book}) => {

    const titlestyle = {
        textAlign: 'center',
        fontSize: '20px'
    }
    return (
        <div style={{backgroundColor: '#FFF0F5'}} className="ui card">
            <Router>
                <Link to={'/' + (book.id).toString()} className="ui centered medium image">  
                    <img style={{padding: '10px'}} src={book.imageurl} alt={book.alt} />
                </Link>
                <Link to={'/' + (book.id).toString()} className="content">
                    <span style={titlestyle} className="header">{book.title}</span>
                </Link> 
            </Router> 
        </div>
    );
}

export default Book;