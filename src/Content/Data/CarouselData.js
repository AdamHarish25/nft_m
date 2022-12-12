import first from "../../Attachments/Image/Carousel1/item.png";
import second from "../../Attachments/Image/Carousel1/item1.png";
import third from "../../Attachments/Image/Carousel1/item2.png";
import first2 from "../../Attachments/Image/Carousel2/item-2-1.png";
import second2 from "../../Attachments/Image/Carousel2/item-2-2.png";
import third2 from "../../Attachments/Image/Carousel2/item-2-3.png";
import Creator1 from '../../Attachments/Image/TopCreators/Creator1.png';
import Creator2 from '../../Attachments/Image/TopCreators/Creator2.png';
import Creator3 from '../../Attachments/Image/TopCreators/Creator3.png';
import Creator4 from '../../Attachments/Image/TopCreators/Creator4.png';

const date = new Date();

const targetdate = date.setUTCHours(0, 0, 0, 0);

const subtSevenH = 7 * 60 * 60 * 1000;

const targetmills = +targetdate - subtSevenH;

const currenttime = date.getTime();

console.log(currenttime);

export const Carousel1 = [
  {
    src: first,
    alt: "nft#1",
    title: "Vulputate felis purus",
    price: "3.19 ETH",
    artist: "wzard",
    profPic: Creator1,
    bidders: 54,
    likers: 93,
    timer: targetmills + currenttime,
  },
  {
    src: second,
    alt: "nft#2",
    title: "Tristique diam",
    price: "2.55 ETH",
    artist: "zacharts",
    profPic: Creator2,
    bidders: 32,
    likers: 450,
    timer: targetmills + currenttime,
  },
  {
    src: third,
    alt: "nft#3",
    title: "Dui accumsan leo",
    price: "1.11 ETH",
    artist: "kathdraws",
    profPic: Creator3,
    bidders: 65,
    likers: 349,
    timer: targetmills + currenttime,
  },
  {
    src: first,
    alt: "nft#4",
    title: "Mattis at diam",
    price: "3.19 ETH",
    artist: "kathdraws",
    profPic: Creator3,
    bidders: 23,
    likers: 49,
    timer: targetmills + currenttime,
  },
  {
    src: third,
    alt: "nft#5",
    title: "Senectus adipiscing",
    price: "1.63 ETH",
    artist: "johnartman",
    profPic: Creator4,
    bidders: 98,
    likers: 10,
    timer: targetmills + currenttime,
  },
];

export const Carousel2 = [
  {
    src: first2,
    alt: "nft-2#1",
    title: "Fames habitasse risus ultricies tortor sit",
    price: "2.55 ETH",
    bidders: 101,
    timer: targetmills + currenttime,
  },
  {
    src: second2,
    alt: "nft-2#2",
    title: "Senectus adipiscing nascetur accumsan etiam",
    price: "1.63 ETH",
    bidders: 98,
    timer: targetmills + currenttime,
  },
  {
    src: third2,
    alt: "nft-2#3",
    title: "Maecenas iaculis sem ut lacus tempor dapibus",
    price: "2.98 ETH",
    bidders: 135,
    timer: targetmills + currenttime,
  },
];
