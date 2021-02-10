import React from 'react';
import Summarycardlist from '../Summarycardlist';

const Booksummary = ({booksummaries}) => {
    return(
        <div className="ui container">
            <Summarycardlist readers={booksummaries}/>
        </div>
    );
}

export default Booksummary;