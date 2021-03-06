// https://www.npmjs.com/package/react-responsive-carousel
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Bookcard from "../Bookcard/";
import { getBooks } from "../../services/fakeBookService";

const Bookcarousel = () => {
  const allbooks = getBooks();

  const bookcards = allbooks.map((book) => {
    return <Bookcard key={book.id} book={book} />;
  });

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
        {bookcards}
      </Carousel>
    </div>
  );
};

export default Bookcarousel;
