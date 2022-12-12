import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ModifiedCarousel.css";
import { useViewport } from "../../Viewport";

const ModCarousel = (props) => {
    var { children, show } = props;

    const viewport = useViewport().windowSize;
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ Length, setLength ] = useState(children && children.length);

    const [ touchPosition, setTouchPosition ] = useState(null);

        
    useEffect(() => {
        setLength(children && children.length);
    }, [ children ]);

    const next = () => {
        if (currentIndex < Length - show)
        {
            setCurrentIndex((prefState) => prefState + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0)
        {
            setCurrentIndex((prefState) => prefState - 1);
        }
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[ 0 ].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null)
        {
            return;
        }

        const currentTouch = e.touches[ 0 ].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5)
        {
            next();
        }

        if (diff < -5)
        {
            prev();
        }

        setTouchPosition(null);
    };

    var carouselCountDisplay;

    if (show > 2)
    {
        if (viewport.innerWidth < 1080 && viewport.innerWidth >= 780)
        {
            show = 2;
            carouselCountDisplay = `shows-${ show }`;
        } else if (viewport.innerWidth < 780 && viewport.innerWidth >= 0)
        {
            show = 1;
            carouselCountDisplay = `shows-${ show }`;
        } else if (viewport.innerWidth >= 1600)
        {
            show = 4;
            carouselCountDisplay = `shows-${ show }`;
        } else
        {
            carouselCountDisplay = `shows-${ show }`;
        }
    } else
    {
        if (viewport.innerWidth <= 1000 && viewport.innerWidth > 0)
        {
            show = 1;
            carouselCountDisplay = `shows-${ show }`;
        } else
        {
            carouselCountDisplay = `shows-${ show }`;
        }
    }

    return (
        <div className="carousel-container2">
            <div className="carousel-wrapper2">
                <div
                    className="carousel-content-wrapper2"
                    onTouchStart={ handleTouchStart }
                    onTouchMove={ handleTouchMove }
                >
                    <div
                        className={ `carousel-content2 ${ carouselCountDisplay }` }
                        style={ {
                            transform: `translateX(-${ currentIndex * (100 / show) }%)`,
                        } }
                    >
                        { children }
                    </div>
                </div>
            </div>

            <div className="button-box">
                <button
                    onClick={ prev }
                    className={ `left-arrow2 ${ currentIndex > 0 && "opacity-100 cursor-pointer"
                        } transition-opacity duration-300` }
                >
                    <FaChevronLeft />
                </button>

                <button
                    onClick={ next }
                    className={ `right-arrow2 ${ currentIndex < Length - show && "opacity-100 cursor-pointer"
                        } transition-opacity duration-300` }
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default ModCarousel;
