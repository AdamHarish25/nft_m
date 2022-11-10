import first from "../../Attachments/Image/ListofNfts/Image.png";
import second from "../../Attachments/Image/ListofNfts/Image-1.png";
import third from "../../Attachments/Image/ListofNfts/Image-2.png";
import fourth from "../../Attachments/Image/ListofNfts/Image-3.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const date = new Date();
const targetdate = date.setUTCHours(0, 0, 0, 0);
const subtSevenH = 7 * 60 * 60 * 1000;
const targetmills = +targetdate - subtSevenH;
const currenttime = date.getTime();

export const ListofNft = [
  {
    src: first,
    alt: "Nft#1",
    title: "Vulputate velit viverra volutpat volutpat tristique",
    timer: targetmills + currenttime,
    icon: <AiFillHeart className="text-red-500" />,
    price: "1.25 ETH",
    bidders: "201",
  },
  {
    src: second,
    alt: "Nft#2",
    title: "Egestas blandit sit egestas non sed. Purus semper",
    timer: targetmills + currenttime,
    icon: <AiOutlineHeart />,
    price: "1.18 ETH",
    bidders: "320",
  },
  {
    src: third,
    alt: "Nft#3",
    title: "Id ut consequat netus nec vel amet ut porta in augue",
    timer: targetmills + currenttime,
    icon: <AiFillHeart className="text-red-500" />,
    price: "1.50 ETH",
    bidders: "130",
  },
  {
    src: fourth,
    alt: "Nft#4",
    title: "Sed et nibh felis integer tellus turpin",
    timer: targetmills + currenttime,
    icon: <AiOutlineHeart />,
    price: "1.02 ETH",
    bidders: "459",
  },
];
