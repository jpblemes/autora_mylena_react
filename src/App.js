import React from 'react';
import Route from './components/Route';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Booklist from './components/Booklist';
import Sobremim from './components/Sobremim';

const logo = {
    url: './images/mylena.png',
    alt: 'Logo do site'
}

 const App = () => {
    return (
        <div>
            <img className="ui centered medium image" src={logo.url} alt={logo.alt}></img>
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/meuslivros">
                <br/>
                <Booklist />
            </Route>
            <Route path="/sobremim">
                <br/>
                <Sobremim />
            </Route>
            <Route path="/extras">
                <Home />
            </Route>
            <br/>
            <Footer/>
            
        </div>
        
        
    );
};

export default App;