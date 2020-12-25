import React from 'react';

function Footer({ children }) {
    return (
        <React.Fragment>
            <div className="ui inverted vertical footer segment">
                <div className="ui inverted menu">
                    <div className="right menu">
                        <div style={{marginRight: '25px'}}>
                            <h4>Contato:</h4>
                            <p>mylena@mail</p>
                            <p>(xx) xxxxx-xxxx</p>
                        </div>  
                    </div>    
                </div>
            </div>
            <div className="ui vertical footer segment">
                <h4 style={{textAlign: 'center'}}>© 2021 - Mylena Aladim</h4> 
            </div>
        </React.Fragment>
        
    );
}

export default Footer