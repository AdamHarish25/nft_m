import { AiFillHeart } from "react-icons/ai";
import { RiTimerFill } from "react-icons/ri";
import Carousel from "./Components/Carousel/Carousel";
import CountdownTimer from "./Components/Timer/Timer";
import { Carousel2 } from "./Data/CarouselData";

const Offers = () => {
  const className = {
    container: "w-screen h-auto p-10 grid place-items-center",
    boxes: "w-fit h-[900px] grid grid-cols-3 gap-3 p-3",
    box1: "w-[450px] h-[850px] py-8 px-5 border border-gray-400 rounded-xl space-y-5 font-Sora",
    box1Title: "font-bold text-2xl px-4",
    cardContainer: "w-full flex justify-start",
    card: "w-fit p-5 h-fit",
    cardHeader: "w-full h-fit",
    headerImg: "w-full h-fit object-cover rounded-xl my-5",
    cardBody: "w-full h-fit",
    headerBox: "h-fit flex items-center justify-between my-5",
    cardTitle: "font-semibold w-[250px] text-sm xl:text-base",
    price:
      "bg-[#2A27C9]/20 text-[#2A27C9] w-fit h-fit p-2 rounded-lg text-center font-semibold text-sm",
    countDownBox: "flex items-center gap-3 font-semibold text-sm",
    timer: "flex gap-2 items-center",
    cardFooter:
      "my-5 w-full h-fit border-t border-t-gray-400 py-5 flex justify-between items-center text-gray-500 text-sm gap-5",
    people: "flex justify-start items-center",
    person: "w-6 h-6 xl:w-7 xl:h-7 object-cover rounded-full",
    like: "flex items-center gap-5 text-red-600",
  };

  return (
    <container className={className.container}>
      <div className={className.boxes}>
        <box1 className={className.box1}>
          <h1 className={className.box1Title}>
            Check out the hottest
            <br /> Sale offers
          </h1>

          <Carousel show={1}>
            {Carousel2.map(
              ({ src, alt, title, price, bidders, timer }, index) => {
                return (
                  <div key={index} className={className.cardContainer}>
                    <card className={className.card}>
                      <cardheader className={className.cardHeader}>
                        <img
                          src={src}
                          alt={alt}
                          className={className.headerImg}
                        />
                      </cardheader>
                      <cardbody className={className.cardBody}>
                        <h1 className={className.cardTitle}>{title}</h1>
                        <headerbox className={className.headerBox}>
                          <h1 className={className.countDownBox}>
                            <RiTimerFill className="w-5 h-5" />
                            <span className={className.timer}>
                              <CountdownTimer targetDate={timer} />
                              min left
                            </span>
                          </h1>
                          <price className={className.price}>{price}</price>
                        </headerbox>
                      </cardbody>
                      <cardfooter className={className.cardFooter}>
                        <h1>{bidders} people are bidding</h1>
                        <div className={className.like}>
                          <AiFillHeart />
                        </div>
                      </cardfooter>
                    </card>
                  </div>
                );
              }
            )}
          </Carousel>
        </box1>
        <box2></box2>
        <box3></box3>
      </div>
    </container>
  );
};

export default Offers;
