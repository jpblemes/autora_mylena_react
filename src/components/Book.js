import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Book = ({book}) => {

    const titlestyle = {
        textAlign: 'center',
        fontSize: '16px',
        marginTop: '3px',
    }
    return (
        <div style={{backgroundColor: 'transparent', boxShadow: 'none', marginTop: '20px'}} className="ui black card">
            <Router>
                <Link to={'/' + (book.id).toString()} className="ui centered small image">  
                    <img 
                        src={book.imageurl} 
                        alt={book.alt} 
                    />
                </Link>
                <div style={titlestyle}>
                    <h4 className="header">{book.title}</h4>
                </div> 
            </Router> 
        </div>
    );
}

export default Book;