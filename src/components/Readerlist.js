import React from 'react';
import Readercard from './Readercard';

const ReaderList = (props) => {
    const readers = props.readers.map((reader) => {
        return <Readercard  key={reader.id} reader={reader}/>
    });

    return <div className="ui container three doubling stackable cards">{readers}</div>
}

export default ReaderList;