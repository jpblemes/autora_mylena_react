import React from 'react';

const Iconlist = (props) => {

    const icons = props.icons.map((icon) => {
        return(
            <div classname="four wide column">
                <img 
                    className="ui image" 
                    key={icon.id} 
                    src={icon.location} 
                    alt={icon.alt} 
                    href={icon.href}
                />
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