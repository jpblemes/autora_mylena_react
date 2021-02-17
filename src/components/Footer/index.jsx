import React from 'react';
import Iconlist from '../Iconlist/';
import {contact, socialmedia, centervertically} from './styles'
import colors from '../../config/colors'

function Footer() {
    return (
        <div>
            <div 
                style={{position: 'relative', bottom: '0', width: '100%'}} 
                className="ui inverted vertical footer segment"
            >
                <div className="ui inverted menu">
                    <div style={centervertically}>
                        <Iconlist icons={socialmedia}/>
                    </div>
                    
                    <div className="right menu">
                        <div style={{marginRight: '25px'}}>
                            <h4>Contato:</h4>
                            <p>{contact.email}</p>
                            <br/>
                        </div>  
                    </div>    
                </div>
            </div>
            <div style={{backgroundColor: colors.lightGray}} className="ui vertical footer segment">
                <h4 style={{textAlign: 'center'}}>© 2021 Mylena Aladim</h4> 
            </div>
        </div>
        
    );
}

export default Footer