import React from 'react';

const Book = ({book}) => {
    return (
        <div className="ui card">
            <div className="ui centered small image">
                <img style={{padding: '10px'}} src={book.imageurl} alt={book.alt} />
            </div>
            <div className="content">
                <h4 className="header">{book.title}</h4>
                <div className="meta">
                    <span>{book.autora}</span>
                </div>
                <br/>
                <div style={{color: 'black'}}className="description">
                    {book.description}
                </div>
            </div>
        </div>
    );
}

export default Book;