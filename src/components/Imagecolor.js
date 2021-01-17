import React, {useState} from 'react';

const Imagecolor = ({img1, img2}) => {
    const [imagesrc, setImagesrc] = useState(img1.src);
    const [imagealt, setImagealt] = useState(img1.alt);
    return(
        <img
            src={imagesrc} 
            alt={imagealt}
            onMouseOut={() => {setImagesrc(img1.src); setImagealt(img1.alt)}}
            onMouseOver={() => {setImagesrc(img2.src); setImagealt(img2.alt)}}
        />
        
    );
}

export default Imagecolor;