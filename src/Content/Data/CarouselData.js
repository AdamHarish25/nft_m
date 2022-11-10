import first from "../../Attachments/Image/Carousel1/Item.png";
import second from "../../Attachments/Image/Carousel1/Item1.png";
import third from "../../Attachments/Image/Carousel1/Item2.png";
import fourth from "../../Attachments/Image/Carousel1/Item3.png";
import fifth from "../../Attachments/Image/Carousel1/Item4.png";
import first2 from "../../Attachments/Image/Carousel2/item-2-1.png";
import second2 from "../../Attachments/Image/Carousel2/item-2-2.png";
import ran1 from "../../Attachments/Image/random/random1.jpg";
import ran2 from "../../Attachments/Image/random/random2.jpg";
import ran3 from "../../Attachments/Image/random/random3.jpg";
import ran5 from "../../Attachments/Image/random/random5.jpg";
import ran6 from "../../Attachments/Image/random/random6.jpg";
import ran7 from "../../Attachments/Image/random/random7.jpg";
import ran8 from "../../Attachments/Image/random/random8.jpg";
import ran9 from "../../Attachments/Image/random/random9.jpg";

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
    title: "Vulputate felis purus viverra morbi facilisi eget",
    price: "3.19 ETH",
    people: [
      { src: ran1, alt: "pic1" },
      { src: ran3, alt: "pic2" },
      { src: ran5, alt: "pic3" },
      { src: ran7, alt: "pic4" },
    ],
    bidders: 54,
    likers: 93,
    timer: targetmills + currenttime,
  },
  {
    src: second,
    alt: "nft#2",
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    price: "2.55 ETH",
    people: [
      { src: ran2, alt: "pic1" },
      { src: ran7, alt: "pic2" },
      { src: ran6, alt: "pic3" },
      { src: ran8, alt: "pic4" },
    ],
    bidders: 32,
    likers: 450,
    timer: targetmills + currenttime,
  },
  {
    src: third,
    alt: "nft#3",
    title: "Dui accumsan leo vestibulum ornare eu",
    price: "1.11 ETH",
    people: [
      { src: ran1, alt: "pic1" },
      { src: ran5, alt: "pic2" },
      { src: ran9, alt: "pic3" },
      { src: ran6, alt: "pic4" },
    ],
    bidders: 65,
    likers: 349,
    timer: targetmills + currenttime,
  },
  {
    src: fourth,
    alt: "nft#4",
    title: "Mattis at diam lorem nisl nam sed sociis",
    price: "3.19 ETH",
    people: [
      { src: ran6, alt: "pic1" },
      { src: ran1, alt: "pic2" },
      { src: ran9, alt: "pic3" },
      { src: ran5, alt: "pic4" },
    ],
    bidders: 23,
    likers: 49,
    timer: targetmills + currenttime,
  },
  {
    src: fifth,
    alt: "nft#5",
    title: "Senectus adipiscing nascetur accumsan etiam",
    price: "1.63 ETH",
    people: [
      { src: ran3, alt: "pic1" },
      { src: ran6, alt: "pic2" },
      { src: ran9, alt: "pic3" },
      { src: ran5, alt: "pic4" },
    ],
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
];
