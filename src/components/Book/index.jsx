import React, {useState} from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Book = ({book}) => {
    const [hovered, setHovered] = useState(false);

    const titlestyle = {
        textAlign: 'center',
        fontSize: '16px',
        marginTop: '12px',
    }

    return (
        <div style={{backgroundColor: 'transparent', boxShadow: 'none', marginTop: '20px'}} className="ui black card">
            <Router>
                <Link to={book.nameurl} className="ui centered small image">  
                    <img 
                        src={book.imageurl} 
                        alt={book.alt}
                        onMouseOut={() => setHovered(false)}
                        onMouseOver={() => setHovered(true)}
                        style={{
                            transform: `${hovered ? 'scale(1.1)' : 'scale(1)'}`,
                        }}
                    />
                </Link>
                <div style={titlestyle}>
                    <h4 className="header">{book.title}</h4>
                </div> 
            </Router> 
        </div>
    );
}

export default Book;