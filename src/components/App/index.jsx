import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";
import Booklist from "../Booklist";
import Aboutme from "../Aboutme";
import Bookpage from "../Bookpage";
import Firstchapter from "../Firstchapter";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Extracontent from "../Extracontent";
import Booksummary from "../Booksummary";
import "./styles.css";
import colors from "../../config/colors";
import Notfound from "../Notfound";
import url from "../../config/urls";

const logo = {
  url: "./images/mylena.png",
  alt: "Logo do site",
};

const App = () => {
  return (
    <>
      <img
        className="ui centered medium image"
        src={logo.url}
        alt={logo.alt}
      ></img>
      <Header />
      <div style={{ backgroundColor: colors.lightGray, paddingBottom: "15em" }}>
        <Switch>
          <Route path={url.bookPage} exact component={Bookpage} />
          <Route path={url.notFound} component={Notfound} />
          <Route path={url.myBooks} exact component={Booklist} />
          <Route path={url.aboutMe} component={Aboutme} />
          <Route path={url.extras} component={Extracontent} />
          <Route path={url.bookSummary} component={Booksummary} />
          <Route path={url.bookPdf} component={Firstchapter} />
          <Route path={url.root} exact component={Home} />
          <Redirect to={url.notFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
