import React from 'react';

const contact = {
    email: 'mylena@mail',
    number: '(xx) xxxxx-xxxx'
}

function Footer() {
    return (
        <div style={{paddingTop: '10em'}}>
            <div 
                style={{position: 'relative', bottom: '0', width: '100%'}} 
                className="ui inverted vertical footer segment"
            >
                <div className="ui inverted menu">
                    <div className="right menu">
                        <div style={{marginRight: '25px'}}>
                            <h4>Contato:</h4>
                            <p>{contact.email}</p>
                            <p>{contact.number}</p>
                        </div>  
                    </div>    
                </div>
            </div>
            <div className="ui vertical footer segment">
                <h4 style={{textAlign: 'center'}}>© 2021 - Mylena Aladim</h4> 
            </div>
        </div>
        
    );
}

export default Footer