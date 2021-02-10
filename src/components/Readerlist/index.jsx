import React from 'react';
import Readercard from '../Readercard/';

const Readerlist = ({readers}) => {
    const allreaders = readers.map((reader) => {
        return <Readercard  key={reader.id} reader={reader}/>
    });

    return <div className="ui container three doubling stackable cards">{allreaders}</div>
}

export default Readerlist;