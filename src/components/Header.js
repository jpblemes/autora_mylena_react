import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return (
        <Router>
            <div style={{backgroundColor: '#FFF0F5'}} className="ui four item menu">
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/meuslivros" className="item">
                    Meus livros
                </Link>
                <Link to="/sobremim" className="item">
                    Sobre mim
                </Link>
                <Link to="/extras" className="item">
                    Extras
                </Link>
            </div>
        </Router>
    );
}

export default Header;