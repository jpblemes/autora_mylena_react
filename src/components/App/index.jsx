import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Booklist from '../Booklist';
import Aboutme from '../Aboutme';
import Bookpage from '../Bookpage';
import Firstchapter from '../Firstchapter';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Extracontent from '../Extracontent';
import Booksummary from '../Booksummary';
import './styles.css'
import {logo, allbooks, allsummaries} from './data'

 const App = () => {

    const firstchapterroute = (book) => {
        if(book.pdfurl !== ''){
            return (
                <Route         
                    path={`${book.nameurl}-primeiro_capitulo`}
                    exact 
                    component={() => <Firstchapter pdfurl={book.pdfurl}/>}
                />
            )
        }  
    }
    const bookpageroute = (book) => {
        return (
            <Route
                path={book.nameurl} 
                exact 
                component={() => <Bookpage book={book}/>}
            />
        )
        
    }


    const getBookSummary = (book) => {
        const booksummaries = []
        allsummaries.forEach((summary) => {
            if(book.id === summary.bookid){
                booksummaries.push(summary)
            }
        });
        return booksummaries
    }

    const summaryroute = (book) => {
        const booksummaries = getBookSummary(book)
        if (booksummaries.length > 0){
            return (
                <Route
                path={`${book.nameurl}-summary`}
                    exact 
                    component={() => <Booksummary booksummaries={booksummaries}/>}
                />
            );
        }
    }

    const bookpages = allbooks.map((book) => {
        return(
            <div key={book.id}>
                {bookpageroute(book)}
                {firstchapterroute(book)}
                {summaryroute(book)}
            </div>  
        );
    });
    return (
        <Router>
            <img className="ui centered medium image" src={logo.url} alt={logo.alt}></img>
            <Header />
                <div style={{backgroundColor: '#ededed'}}>
                    <br/>
                    <Route path="/" exact component={Home}/>
                    <Route 
                        path="/meuslivros" 
                        exact
                        component={() => <Booklist allbooks={allbooks}/>}
                    />
                    <Route 
                        path="/sobremim" 
                        exact 
                        component={() => <Aboutme allbooks={allbooks}/>}
                    />
                    <Route path="/extras" exact component={Extracontent}/>
                    {bookpages}
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            <Footer/>
        </Router>
    );
};

export default App;