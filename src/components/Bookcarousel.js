// https://www.npmjs.com/package/react-responsive-carousel
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Maincontent from './Maincontent';
const Bookcarousel = () => {
    return (
        <div>
            <Carousel 
                showThumbs={false} 
                showArrows={true} 
                showStatus={false} 
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                thumbWidth={0}
            >
                <div>
                    <Maincontent/>
                </div>
                <div>
                    <Maincontent/>
                </div>
                <div>
                    <Maincontent/>
                </div>
            </Carousel>
        </div>

    );
}

export default Bookcarousel;