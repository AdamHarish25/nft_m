import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";
import { useViewport } from "../../Viewport";

const Carousel = (props) => {
  var { children, show, addition } = props;

  const viewport = useViewport().windowSize;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Length, setLength] = useState(children && children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children && children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < Length - show) {
      setCurrentIndex((prefState) => prefState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prefState) => prefState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  var carouselCountDisplay;

  if(currentIndex > 0 && addition === true){
    setCurrentIndex(0)
  }

  if (show > 2) {
    if (viewport.innerWidth < 1080 && viewport.innerWidth >= 780) {
      show = 2;
      carouselCountDisplay = `show-${ show }`;
    } else if(viewport.innerWidth < 780 && viewport.innerWidth >= 0) {
      show = 1;
      carouselCountDisplay = `show-${ show }`;
    } else if(viewport.innerWidth >= 1600 && viewport.innerWidth < 1800){
      show = 4;
      carouselCountDisplay = `show-${ show }`;
    } else if(viewport.innerWidth >= 1800){
      show = 5;
      carouselCountDisplay = `show-${ show }`;
    } else {
      carouselCountDisplay = `show-${ show }`;
    }
  } else if (show === 1.5) {
    if(viewport.innerWidth < 1280 && viewport.innerWidth >= 1024){
      show = 1.2;
      carouselCountDisplay = `show-1-5`;
    }else{
      show = 1.5;
      carouselCountDisplay = `show-1-5`;
    }
  } else {
    if(viewport.innerWidth <= 1000 && viewport.innerWidth > 0) {
      show = 1;
      carouselCountDisplay = `show-${ show }`;
    } else {
      carouselCountDisplay = `show-${ show }`;
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content ${carouselCountDisplay}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className={`left-arrow ${
          currentIndex > 0 && "opacity-100 cursor-pointer"
        } transition-opacity duration-300`}
      >
        <FaChevronLeft className={`text-black`} />
      </button>

      <button
        onClick={next}
        className={`right-arrow ${
          currentIndex < Length - show && "opacity-100 cursor-pointer"
        } transition-opacity duration-300`}
      >
        <FaChevronRight className={`text-black`} />
      </button>
    </div>
  );
};

export default Carousel;
