import React from 'react';

const Book = ({book}) => {
    return (
        <div class="ui card">
            <div class="ui centered small image">
                <img style={{margin: '10px'}} src={book.imageurl} />
            </div>
            <div class="content">
                <a class="header">{book.title}</a>
                <div class="meta">
                    <span>{book.autora}</span>
                </div>
                <div style={{color: 'black'}}class="description">
                    {book.description}
                </div>
            </div>

        </div>
    );
}

export default Book;