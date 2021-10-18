import { React, useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';


function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="slide" id="slide" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slide__item">
        <Image
          className="d-block w-100 slide__item__image"
          src="static/2.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="slide__item">
        <Image
          className="d-block w-100 slide__item__image"
          src="static/3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slide;

