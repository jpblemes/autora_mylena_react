import React from 'react';

const Iconlist = (props) => {

    const icons = props.icons.map((icon) => {
        return(
            <div key={icon.id} className="four wide column">
                <a href={icon.href}>
                    <img 
                        className="ui image"  
                        src={icon.location} 
                        alt={icon.alt}  
                    />
                </a>
                
            </div>

        );
    });

    return(
        <div className="ui grid center aligned container">
            <div className="ui stackable four row grid images">
                {icons}
            </div>
        </div >
    );
}

export default Iconlist;