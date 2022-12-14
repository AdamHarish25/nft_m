import { AiFillHeart } from "react-icons/ai";
import { RiTimerFill } from "react-icons/ri";
import Carousel from "./Components/Carousel/OriginCarousel/Carousel";
import CountdownTimer from "./Components/Timer/Timer";
import { Carousel2 } from "./Data/CarouselData";
import hand from "../Attachments/Image/meltedHand.png";
import { ListofNft } from "./Data/ListofNft";

const Offers = () => {
  const className = {
    container: "w-screen h-auto p-10 grid place-items-center",
    boxes:
      "w-fit h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 place-items-center lg:place-items-stretch relative",
    box1: {
      box1: "w-[400px] lg:w-auto 2xl:w-[500px] 2xl:px-8 h-full py-10 px-4 border border-gray-400 rounded-xl font-Sora",
      title: "font-bold text-xl xl:text-2xl px-5",
      buttonbox: "px-6 w-full",
      button:
        "w-full p-3 h-fit rounded-xl font-semibold text-gray-400 border-2 border-gray-400",
    },
    box2: {
      box2: "w-full md:w-auto 2xl:w-[500px] h-full py-10 font-Sora flex flex-col items-center justify-end bg-box2 bg-contain bg-no-repeat bg-bottom",
      handImg: "w-full h-fit",
      bottomComponents: "w-full px-10 h-fit space-y-10 text-white",
      descriptionBox: "space-y-2 w-fit",
      title: "font-Sora font-bold text-xl",
      description: "font-Inter font-extralight text-xs",
      button: "w-full h-fit p-5 rounded-lg bg-purple-500 font-bold font-Sora",
    },
    box3: {
      box3: "w-full h-auto 2xl:w-[500px] space-y-10 py-10 border border-gray-400 rounded-xl font-Sora absolute lg:static lg:block inset-x-0 bottom-0",
      title: "font-bold text-xl xl:text-2xl px-10",
      lists: "w-full h-auto px-10 lg:px-5 xl:px-10 list-none space-y-5",
      list: "w-full h-fit flex items-center gap-3",
      img: "w-32 lxl:w-52 h-auto rounded-3xl",
      descriptionBox: "w-full h-auto space-y-2",
      listTitle: "font-Sora font-semibold text-sm",
      box: "h-fit flex items-center justify-between w-full",
      countDownBox: "flex items-center gap-2 font-semibold text-[10px] lg:text-[9px] xl:text-[10px] lxl:text-xs 2xl:text-sm",
      timer: "flex gap-1 items-center font-Inter",
      price:
        "bg-[#2A27C9]/20 text-[#2A27C9] w-auto h-auto p-[6px] rounded-lg text-center font-semibold text-[10px] lg:text-[9px] xl:text-[10px] lxl:text-sm",
      like: "flex items-center gap-5",
      bidders: "text-xs font-Inter",
      buttonbox: "px-10 w-full",
      button:
        "w-full p-3 h-fit rounded-xl font-semibold text-gray-400 border-2 border-gray-400",
    },
    cards: {
      cardContainer: "w-auto lxl:w-auto flex",
      card: "w-fit h-fit",
      cardHeader: "w-full h-fit",
      headerImg: "w-60 lxl:w-full h-fit object-cover rounded-xl my-5",
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
    },
  };

  return (
    <div className={ className.container }>
      <div className={ className.boxes }>
        <section className={ className.box1.box1 }>
          <h1 className={ className.box1.title }>
            Check out the hottest
            <br /> Sale offers
          </h1>

          <Carousel show={ 1.5 }>
            { Carousel2.map(
              ({ src, alt, title, price, bidders, timer }, index) => {
                return (
                  <div key={ index } className={ className.cards.cardContainer }>
                    <div className={ className.cards.card }>
                      <div className={ className.cards.cardHeader }>
                        <img
                          src={ src }
                          alt={ alt }
                          className={ className.cards.headerImg }
                        />
                      </div>
                      <div className={ className.cards.cardBody }>
                        <h1 className={ className.cards.cardTitle }>{ title }</h1>
                        <div className={ className.cards.headerBox }>
                          <h1 className={ className.cards.countDownBox }>
                            <RiTimerFill className="w-5 h-5" />
                            <span className={ className.cards.timer }>
                              <CountdownTimer targetDate={ timer } />
                              min left
                            </span>
                          </h1>
                          <p className={ className.cards.price }>
                            { price }
                          </p>
                        </div>
                      </div>
                      <div className={ className.cards.cardFooter }>
                        <h1>{ bidders } people are bidding</h1>
                        <div className={ className.cards.like }>
                          <AiFillHeart />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            ) }
          </Carousel>

          <div className={ className.box1.buttonbox }>
            <button className={ className.box1.button }>Show me more</button>
          </div>
        </section>

        <section className={ className.box2.box2 }>
          <img
            src={ hand }
            alt="A colorful hand with a melted texture"
            className={ className.box2.handImg }
          />

          <div className={ className.box2.bottomComponents }>
            <div className={ className.box2.descriptionBox }>
              <h1 className={ className.box2.title }>
                Get started creating & selling your NFTs
              </h1>
              <p className={ className.box2.description }>
                Nunc gravida faucibus netus feugiat tellus, viverra massa
                feugiat. Mi est sit.
              </p>
            </div>

            <button className={ className.box2.button }>Get started</button>
          </div>
        </section>

        <div className="w-full h-[50rem] lg:hidden">
          <br />
        </div>

        <section className={ className.box3.box3 }>
          <h1 className={ className.box3.title }>
            Top NFT at a lower <br /> price
          </h1>

          <ul className={ className.box3.lists }>
            { ListofNft.map(
              ({ src, alt, title, timer, price, bidders, icon }, index) => {
                return (
                  <li key={ index } className={ className.box3.list }>
                    <img src={ src } alt={ alt } className={ className.box3.img } />
                    <div className={ className.box3.descriptionBox }>
                      <h1 className={ className.box3.listTitle }>{ title }</h1>
                      <div className={ className.box3.box }>
                        <h1 className={ className.box3.countDownBox }>
                          <RiTimerFill className="w-3 h-3 lxl:w-4 lxl:h-4" />
                          <span className={ className.box3.timer }>
                            <CountdownTimer targetDate={ timer } />
                            min left
                          </span>
                        </h1>
                        <p className={ className.box3.price }>{ price }</p>
                      </div>
                      <div className={ className.box3.box }>
                        <h1 className={ className.box3.bidders }>
                          { bidders } people are bidding
                        </h1>
                        <button className={ className.box3.like }>{ icon }</button>
                      </div>
                    </div>
                  </li>
                );
              }
            ) }
          </ul>
          <div className={ className.box3.buttonbox }>
            <button className={ className.box3.button }>Show me more</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offers;
