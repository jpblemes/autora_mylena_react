import React from 'react';
import Summarycard from './Summarycard';

const Summarycardlist = ({readers}) => {
    const allreaders = readers.map((reader) => {
        return <Summarycard  key={reader.id} reader={reader}/>
    });

    return <div className="ui container cards">{allreaders}</div>
}

export default Summarycardlist;