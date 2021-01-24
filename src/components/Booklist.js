import React from 'react';
import Book from './Book';
import { HashRouter as Router } from 'react-router-dom';

const Booklist = ({allbooks}) => {

    const books = allbooks.map((book) => {
        return(
            <Router key={book.id}>
                <Book book={book}/>
            </Router>
        );
    });
    
    return <div className="ui container three doubling stackable cards">{books}</div>;
}

export default Booklist;