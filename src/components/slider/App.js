// App.js
import React from 'react';
import './App.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'progressive',
  };

  const slidesData = [
    {
      id: 1,
      title: 'slide 1',
      label: 'Image 1'
    }, {
      id: 2,
      title: 'slide 2',
      label: 'Image 2'
    }, {
      id: 3,
      title: 'slide 3',
      label: 'Image 3'
    }, {
      id: 4,
      title: 'slide 4',
      label: 'Image 4'
    }, {
      id: 5,
      title: 'slide 5',
      label: 'Image 5'
    }, {
      id: 6,
      title: 'slide 6',
      label: 'Image 6'
    },
  ];

  return (
    <div className="App">

      <div className="slider-wrapper">

        <Slider {...settings}>

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
              <label className="slick-slide-label">{slide.label}</label>
            </div>

          )}

        </Slider>

      </div>

    </div>
  );
}

export default App;