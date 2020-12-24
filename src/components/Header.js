import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui four item menu">
            <Link href="/" className="item">
                Home
            </Link>
            <Link href="/" className="item">
                Meus livros
            </Link>
            <Link href="/sobremim" className="item">
                Sobre mim
            </Link>
            <Link href="/sobremim" className="item">
                Extras
            </Link>
        </div>
    );
}

export default Header;