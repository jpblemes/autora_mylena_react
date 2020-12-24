import React, { useState } from 'react';
import Route from './components/Route';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

export default () => {
    const logo = {
        url: './images/mylena.png',
        alt: 'Logo do site'
    }
    return (
        <div>
            <img class="ui centered medium image" src={logo.url} alt={logo.alt}></img>
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/sobremim">
                <Home />
            </Route>
            <Footer/>
            
        </div>
        
        
    );
};