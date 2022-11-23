import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { RiTimerFill } from "react-icons/ri";
import Carousel from "./Components/Carousel/Carousel";
import CountdownTimer from "./Components/Timer/Timer";
import { useViewport } from "./Components/Viewport";
import { Showcase2 } from "./Data/ShowcaseData";

const Showcase = () => {

  const [isBigScreen, setBigScreen] = useState(false);
  const viewport = useViewport().windowSize;

  const className = {
    container: "w-screen h-auto p-10",
    titleHeader: "text-center font-Sora text-3xl font-bold space-y-2",
    sectionTitle: "text-gray-400 font-Inter text-sm font-normal tracking-widest",
    buttonCols: "w-full h-auto flex items-center justify-center py-10 gap-5",
    navigationButton: "h-auto w-auto px-3 py-1 border border-[#7780A1] rounded-md text-[#7780A1]",
    cards: "w-auto h-auto flex items-center justify-center gap-2",
    buttonBox: "w-full p-10 flex justify-center items-center",
    button:
        "w-fit py-3 px-5 h-fit rounded-xl text-lg font-semibold text-gray-400 border-2 border-gray-400",
    card: {
      container: "flex justify-center",
      card: "w-96 2xl:w-auto h-fit px-5",
      cardHeader: "w-full h-fit",
      headerImg: "w-full h-fit object-cover rounded-xl my-5",
      cardBody: "w-full h-fit",
      headerBox: "h-fit flex items-center justify-between my-5",
      cardTitle: "font-semibold w-[250px] text-sm xl:text-base",
      price:
        "bg-[#2A27C9]/20 text-[#2A27C9] w-fit h-fit p-2 rounded-lg text-center font-semibold text-xs xl:text-sm",
      countDownBox: "flex items-center gap-3 font-semibold text-xs xl:text-sm",
      like: "flex items-center gap-5 text-red-600",
      timer: "flex gap-2 items-center font-Inter",
      cardFooter:
        "my-5 w-full h-fit border-t border-t-gray-400 py-5 flex justify-between items-center text-gray-500 text-xs xl:text-sm gap-5",
    }
  };

  if (isBigScreen === false && viewport.innerWidth >= 1860) {
    setBigScreen(true)
  } else if (isBigScreen === true && viewport.innerWidth < 1860) {
    setBigScreen(false)
  }

  return (
    <div className={className.container}>
      <h1 className={className.titleHeader}>
        <p className={className.sectionTitle}>
          OVERLINE
        </p>
        <p>Most popular live auctions</p>
      </h1>
      <div className={className.buttonCols}>
        <button className={className.navigationButton}>Architecture</button>
        <button className={className.navigationButton}>Photography</button>
        <button className={className.navigationButton}>Games</button>
        <button className={className.navigationButton}>Music</button>
      </div>

      {isBigScreen ? (
        <div className={className.cards}>
          {Showcase2.map(({ src, alt, title, timer, bidders, price }, index) => {
            return (
              <card key={index} className={className.card.card}>
                <cardheader className={className.card.cardHeader}>
                  <img
                    draggable={false}
                    src={src}
                    alt={alt}
                    className={className.card.headerImg}
                  />
                </cardheader>
                <cardbody className={className.card.cardBody}>
                  <h1 className={className.card.cardTitle}>{title}</h1>
                  <headerbox className={className.card.headerBox}>
                    <h1 className={className.card.countDownBox}>
                      <RiTimerFill className="w-5 h-5" />
                      <span className={className.card.timer}>
                        <CountdownTimer targetDate={timer} />
                        min left
                      </span>
                    </h1>
                    <price className={className.card.price}>
                      {price}
                    </price>
                  </headerbox>
                </cardbody>
                <cardfooter className={className.card.cardFooter}>
                  <h1>{bidders} people are bidding</h1>
                  <div className={className.card.like}>
                    <AiFillHeart />
                  </div>
                </cardfooter>
              </card>
            )
          })}
        </div>
      ) : (
        <Carousel show={3}>
          {Showcase2.map(({ src, alt, title, timer, bidders, price }, index) => {
            return (
              <div key={index} className={className.card.container}>
                <card className={className.card.card}>
                  <cardheader className={className.card.cardHeader}>
                    <img
                      draggable={false}
                      src={src}
                      alt={alt}
                      className={className.card.headerImg}
                    />
                  </cardheader>
                  <cardbody className={className.card.cardBody}>
                    <h1 className={className.card.cardTitle}>{title}</h1>
                    <headerbox className={className.card.headerBox}>
                      <h1 className={className.card.countDownBox}>
                        <RiTimerFill className="w-5 h-5" />
                        <span className={className.card.timer}>
                          <CountdownTimer targetDate={timer} />
                          min left
                        </span>
                      </h1>
                      <price className={className.card.price}>
                        {price}
                      </price>
                    </headerbox>
                  </cardbody>
                  <cardfooter className={className.card.cardFooter}>
                    <h1>{bidders} people are bidding</h1>
                    <div className={className.card.like}>
                      <AiFillHeart />
                    </div>
                  </cardfooter>
                </card>
              </div>
            )
          })}
        </Carousel>
      )}

      <div className={className.buttonBox}>
          <button className={className.button}>
            Show me more
          </button>
      </div>
    </div>
  )
}

export default Showcase;