import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return (
        <Router>
            <div style={{backgroundColor: 'transparent'}} className="ui four item menu">
                <Link to="/" className="item">
                    <b>Home</b>
                </Link>
                <Link to="/meuslivros" className="item">
                    <b>Meus livros</b>
                </Link>
                <Link to="/sobremim" className="item">
                    <b>Sobre mim</b>
                </Link>
                <Link to="/extras" className="item">
                    <b>Extras</b>
                </Link>
            </div>
        </Router>
    );
}

export default Header;