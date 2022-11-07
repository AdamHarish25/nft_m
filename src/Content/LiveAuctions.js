import { RiTimerFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import Carousel from "./Components/Carousel/Carousel";
import { Carousel1 } from "./Data/CarouselData";
import CountdownTimer from "./Components/Timer/Timer";

const LiveAuctions = () => {
  const className = {
    container:
      "w-screen h-auto py-20 flex flex-col justify-center items-center font-Sora",
    title: "text-3xl mb-10",
    cardContainer: "flex justify-center xl:justify-start",
    card: "w-96 p-10 h-fit",
    cardHeader: "w-full h-fit",
    headerImg: "w-full h-fit object-cover",
    cardBody: "w-full h-fit",
    headerBox: "h-fit flex items-center justify-between my-5",
    cardTitle: "font-semibold w-[250px] text-sm xl:text-base",
    price:
      "bg-[#2A27C9]/20 text-[#2A27C9] w-fit h-fit p-2 rounded-lg text-center font-semibold text-sm xl:text-base",
    countDown: "flex items-center gap-5 font-semibold text-sm lg:text-base",
    cardFooter:
      "my-5 w-full h-fit border-t border-t-gray-400 py-5 flex justify-evenly items-center",
    people: "flex justify-start items-center",
    person: "w-6 h-6 xl:w-7 xl:h-7 object-cover rounded-full",
    sections:
      "w-full flex justify-between items-center text-gray-500 text-xs xl:text-sm gap-5 pl-10",
    like: "flex items-center gap-5",
  };

  return (
    <div className={className.container}>
      <h1 className={className.title}>Latest live auctions</h1>
      <Carousel show={3}>
        {Carousel1.map(
          (
            { src, alt, title, price, people, bidders, likers, timer },
            index
          ) => {
            return (
              <div key={index} className={className.cardContainer}>
                <card>
                  <cardheader className={className.cardHeader}>
                    <img src={src} alt={alt} className={className.headerImg} />
                  </cardheader>
                  <cardbody className={className.cardBody}>
                    <headerbox className={className.headerBox}>
                      <h1 className={className.cardTitle}>{title}</h1>
                      <price className={className.price}>{price}</price>
                    </headerbox>
                    <h1 className={className.countDown}>
                      <RiTimerFill className="w-6 h-6" />{" "}
                      <CountdownTimer targetDate={timer} /> min left
                    </h1>
                  </cardbody>
                  <cardfooter className={className.cardFooter}>
                    <people className={className.people}>
                      {people.map(({ src, alt }, index) => {
                        return (
                          <img
                            key={index}
                            src={src}
                            alt={alt}
                            className={className.person}
                          />
                        );
                      })}
                    </people>
                    <sections className={className.sections}>
                      <h1>{bidders} people are bidding</h1>
                      <div className={className.like}>
                        <AiFillHeart className="text-red-600" />
                        {likers}
                      </div>
                    </sections>
                  </cardfooter>
                </card>
              </div>
            );
          }
        )}
      </Carousel>
    </div>
  );
};

export default LiveAuctions;
