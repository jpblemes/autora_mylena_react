import React from 'react';
import Iconlist from './Iconlist';

const contact = {
    email: 'mylena.andre.cunha@gmail.com',
}

const socialmedia = [
    {
        id: 1,
        location: '../images/instagram_icon.png',
        href: 'https://www.instagram.com/mylena_aladim_autora/',
        alt: 'Instagram logo',
    },
    {
        id: 2,
        location: '../images/pinterest_icon.png',
        href: 'https://br.pinterest.com/mimica_cunha/_saved/',
        alt: 'Pinterest logo',
    },
    {
        id: 3,
        location: '../images/amazon_icon.png',
        href: 'https://www.amazon.com.br/kindle-dbs/entity/author/B08NLQM23L?ref_=dbs_p_ebk_r00_abau_000000',
        alt: 'Amazon logo',
    },
]

const centervertically={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '25px',
}

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
            <div style={{backgroundColor: '#ededed'}} className="ui vertical footer segment">
                <h4 style={{textAlign: 'center'}}>© 2021 Mylena Aladim</h4> 
            </div>
        </div>
        
    );
}

export default Footer