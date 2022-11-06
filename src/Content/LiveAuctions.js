import { RiTimerFill } from "react-icons/ri";
import Carousel from "./Components/Carousel/Carousel";
import { Carousel1 } from "./Data/CarouselData";

const LiveAuctions = () => {
  const className = {
    container:
      "w-screen h-auto p-10 flex flex-col justify-center items-center font-Sora",
    title: "text-3xl mb-10",
    cardContainer: "flex justify-center xl:justify-start",
    card: "w-80 p-10 h-fit ",
    cardHeader: "w-full h-fit",
    headerImg: "w-full h-fit object-cover",
    cardBody: "w-full h-fit",
    headerBox: "h-fit flex items-center justify-between my-5",
    cardTitle: "font-semibold w-[250px] text-sm xl:text-base",
    price:
      "bg-[#2A27C9]/20 text-[#2A27C9] w-fit h-fit p-2 rounded-lg text-center font-semibold text-sm xl:text-base",
    countDown: "flex items-center gap-5 font-semibold",
  };

  return (
    <div className={className.container}>
      <h1 className={className.title}>Latest live auctions</h1>
      <Carousel show={3}>
        {Carousel1.map(({ src, alt, title, price }, index) => {
          return (
            <div key={index} className={className.cardContainer}>
              <card>
                <cardHeader className={className.cardHeader}>
                  <img src={src} alt={alt} className={className.headerImg} />
                </cardHeader>
                <cardBody className={className.cardBody}>
                  <headerBox className={className.headerBox}>
                    <h1 className={className.cardTitle}>{title}</h1>
                    <price className={className.price}>{price}</price>
                  </headerBox>
                  <h1 className={className.countDown}>
                    <RiTimerFill className="w-6 h-6" /> 57:15 min left
                  </h1>
                </cardBody>
                <cardFooter></cardFooter>
              </card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default LiveAuctions;
