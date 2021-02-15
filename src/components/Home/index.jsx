import React from 'react';
import Maincontent from '../Maincontent/';
import Readerlist from '../Readerlist/';
import readers from './data'

const Home = () => {
      
    return(
        <div className="ui center aligned container">
            <br/>
            <Maincontent />
            <br/>
            <Readerlist readers ={readers}/>
            <br/>
        </div>
    );
}

export default Home;