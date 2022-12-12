import { RiTimerFill } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ModCarousel from "./Components/Carousel/ModCarousel/ModifiedCarousel";
import { Carousel1 } from "./Data/CarouselData";
import CountdownTimer from "./Components/Timer/Timer";

const LiveAuctions = () => {
  const className = {
    container:
      "w-screen h-auto py-20 flex flex-col justify-center items-center font-Sora px-0 lg:px-10",
    title: "text-3xl mb-10",
    cards: {
      container: "flex items-center justify-center",
      innerContainer:
        "p-6 -z-20 bg-black border-2 border-purple-500 space-y-5 w-[400px] h-auto",
      imgWthTimer: "w-full h-auto relative",
      img: "object-cover w-full h-[18rem]",
      timer:
        "w-auto h-auto py-4 px-6 bg-gradient-to-br from-[#8613A5] to-white text-white text-center font-WorkSans font-bold absolute bottom-0 left-0",
      profileAndLike: "w-full flex items-center justify-between",
      profile: "flex items-center gap-4 w-auto",
      profileImg: "w-10 h-10 rounded-full",
      profileName: "space-y-2 font-WorkSans text-lg text-white",
      artist: "text-gray-500 text-sm",
      like: "flex items-center gap-2 text-gray-500 font-WorkSans",

    },
  };

  return (
    <div className={className.container}>
      <h1 className={className.title}>Latest live auctions</h1>
      <ModCarousel show={3}>
        {Carousel1.map((data, index) => {
          return (
            <div key={index} className={className.cards.container}>
              <div className={className.cards.innerContainer}>
                <div className={className.cards.imgWthTimer}>
                  <img
                    src={data.src}
                    alt={data.alt}
                    className={className.cards.img}
                  />
                  <div className={className.cards.timer}>
                    <CountdownTimer targetDate={data.timer} />
                  </div>
                </div>
                <div className={className.cards.profileAndLike}>
                  <div className={className.cards.profile}>
                    <img
                      src={data.profPic}
                      alt="Artist's Profile Pic"
                      className={className.cards.profileImg}
                    />
                    <div className={className.cards.profileName}>
                      {data.title}
                      <p className={className.cards.artist}>
                        by @{data.artist}
                      </p>
                    </div>
                  </div>
                  <div className={className.cards.like}>
                    <button>
                      <AiOutlineHeart className="text-xl" />
                    </button>
                    {data.likers}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ModCarousel>
    </div>
  );
};

export default LiveAuctions;
