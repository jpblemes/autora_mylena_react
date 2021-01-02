import React from 'react';
import Book from './Book';
import Bookpage from './Bookpage';
import { HashRouter as Router, Route } from 'react-router-dom';

const Booklist = ({allbooks}) => {

    const books = allbooks.map((book) => {
        const bookhref = '/' + (book.id).toString();
        return(
            <Router>
                <Book  key={book.id} book={book}/>
                <div>
                    <Route 
                        path={bookhref} 
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