import React, { useState, useEffect, useRef } from 'react';
import { usePdf } from 'react-pdf-js';
import WithLoading from '../HOC/WithLoading/';

const Pdf = ({pdfurl, setLoading}) => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(null);
    const [scale, setScale] = useState(1.0);

    const renderPagination = () => {
        if (!pages) {
            return null;
        }
        let previousButton =(
            <button onClick={() => setPage(page - 1)}>{'<'}</button>
        ); 
        if (page === 1) {
            previousButton = (
                <button>{'<'}</button>
            );
        }
        let nextButton =(
            <button onClick={() => setPage(page + 1)}>{'>'}</button>
        ); 
        if (page === pages) {
            nextButton = (
                <button>{'>'}</button>
            );
        }
        let scalePlusButton = <button onClick={() => setScale(scale + 0.1)}><i className="search plus icon"/></button>
        let scaleMinusButton = <button onClick={() => setScale(scale - 0.1)}><i className="search minus icon"/></button>;
        if (scale <= 1) {
            scaleMinusButton = (
                <button><i className="search minus icon"/></button>
            );
        }
        if (scale >= 3) {
            scalePlusButton = (
                <button><i className="search plus icon"/></button>
            );
        }
        let resetButton = <button onClick={() => {setScale(1.0)}}><i className="undo icon"/></button>
        let pageLabel = <button readOnly >{page}/{pages}</button>
        return (
            <nav style={{textAlign: 'center'}}>
                <ul style={{display: 'inline-block',listStyleType: 'none'}}>
                    {previousButton}
                    {nextButton}
                    {pageLabel}
                    {scalePlusButton}
                    {scaleMinusButton}
                    {resetButton}
                </ul>
            </nav>  
        );
    }

    const canvasEl = useRef(null);

    const [loading, numPages] = usePdf({
        file: pdfurl,
        onDocumentComplete: () => setPage(1),
        page,
        scale,
        canvasEl
    });

    useEffect(() => {
        setPages(numPages);
    }, [numPages]);

    const horizontalScroll = {
        width: 'auto',
        height:'auto',
        overflowX: 'auto',
        overflowY: 'hidden',
    }

    useEffect(() => {
        loading ? setLoading(true) : setLoading(false);
    });

    return (
        <div className="ui container">
            {renderPagination()}
            <div style={horizontalScroll}>
                <canvas style={{margin: 'auto', display: 'block'}} ref={canvasEl} />
            </div >
            {renderPagination()}
        </div>
    );
}

export default WithLoading(Pdf);
