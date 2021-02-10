import React, {useState} from 'react';
import Loader from '../../../Loader/index';

const withLoading = (Component) => {
    return function WithLoading(props) {
        const [isLoading, setLoading] = useState(true); 
        return(
            <>
                {isLoading && <Loader />}
                <Component {...props} setLoading={setLoading} />
            </>
        );
    };
}

export default withLoading;