import React from 'react';

const Iconlist = (props) => {

    const icons = props.icons.map((icon) => {
        return(
            <a key= {icon.id} href={icon.href}>
                <img 
                    className="ui circular image"  
                    src={icon.location} 
                    alt={icon.alt}
                    width="30" 
                    height="30"
                />
            </a>
        );
    });

    return(
        <div className="ui images">
            {icons}
        </div>
    );
}

export default Iconlist;