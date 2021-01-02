import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Book = ({book}) => {

    const titlestyle = {
        textAlign: 'center',
        fontSize: '18px'
    }
    return (
        <div style={{backgroundColor: 'transparent', boxShadow: 'none'}} className="ui black card">
            <Router>
                <Link to={'/' + (book.id).toString()} className="ui centered small image">  
                    <img 
                        src={book.imageurl} 
                        alt={book.alt} 
                    />
                </Link>
                <Link to={'/' + (book.id).toString()} className="content">
                    <span style={titlestyle} className="header">{book.title}</span>
                </Link> 
            </Router> 
        </div>
    );
}

export default Book;