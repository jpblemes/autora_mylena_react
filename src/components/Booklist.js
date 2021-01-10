import React from 'react';
import Book from './Book';
import Bookpage from './Bookpage';
import { HashRouter as Router, Route } from 'react-router-dom';

const Booklist = ({allbooks}) => {

    const books = allbooks.map((book) => {
        return(
            <Router key={book.id}>
                <Book book={book}/>
                <div>
                    <Route 
                        path={book.nameurl} 
                        exact 
                        component={() => <Bookpage book={book}/>}
                    />
                </div>
            </Router>
        );
    });
    
    return <div className="ui container three doubling stackable cards">{books}</div>;
}

export default Booklist;