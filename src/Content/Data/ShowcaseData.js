import showcase2_1 from "../../Attachments/Image/Showcase/Showcase2/Image.png";
import showcase2_2 from "../../Attachments/Image/Showcase/Showcase2/Image-1.png";
import showcase2_3 from "../../Attachments/Image/Showcase/Showcase2/Image-2.png";
import showcase2_4 from "../../Attachments/Image/Showcase/Showcase2/Image-3.png";
import showcase2_5 from "../../Attachments/Image/Showcase/Showcase2/Image-4.png";
import showcase2_6 from "../../Attachments/Image/Showcase/Showcase2/Image-5.png";
import ran1 from "../../Attachments/Image/random/random1.jpg";
import ran2 from "../../Attachments/Image/random/random2.jpg";
import ran3 from "../../Attachments/Image/random/random3.jpg";
import ran5 from "../../Attachments/Image/random/random5.jpg";
import ran6 from "../../Attachments/Image/random/random6.jpg";
import ran7 from "../../Attachments/Image/random/random7.jpg";
import ran8 from "../../Attachments/Image/random/random8.jpg";
import ran9 from "../../Attachments/Image/random/random9.jpg";

const date = new Date();

const launchDate = (datetime) => new Date(datetime)

const subtSevenH = 7 * 60 * 60 * 1000;

const currenttime = (datetime) => date.setTime(launchDate(datetime).getTime());
console.log(currenttime)

const targetdate = date.setUTCHours(0, 0, 0, 0);

const targetmills = +targetdate - subtSevenH;




const ShowcaseData = [
    {
        src:  showcase2_1 ,
        alt: "Faucibus habitasse at et platea massa mauris",
        title: "Faucibus habitasse at et platea massa mauris",
        timer: targetmills + currenttime('November 20, 2022, 11:00:00'),
        people: [
            { src: ran2, alt: "pic1" },
            { src: ran7, alt: "pic2" },
        ],
        price: "2.55 ETH",
        bidders: 83,
        tag: "Architecture",
    },
    {
        src:  showcase2_2 ,
        alt: "Diam purus sagittis nisl erat mauris",
        title: "Diam purus sagittis nisl erat mauris",
        timer: targetmills + currenttime('November 19, 2022, 11:00:00'),
        people: [
            { src: ran3, alt: "pic1" },
            { src: ran1, alt: "pic2" },
        ],
        price: "4.32 ETH",
        bidders: 143,
        tag: "Architecture",

    },
    {
        src:  showcase2_3 ,
        alt: "Nascetur mauris viverra vel id id sem leo",
        title: "Nascetur mauris viverra vel id id sem leo",
        timer: targetmills + currenttime('November 19, 2022, 04:00:00'),
        people: [
            { src: ran5, alt: "pic1" },
            { src: ran7, alt: "pic2" },
        ],
        price: "1.34 ETH",
        bidders: 49,
        tag: "Photography",
    },
    {
        src:  showcase2_4 ,
        alt: "Velit, fusce id non dui amet amet maecenas",
        title: "Velit, fusce id non dui amet amet maecenas",
        timer: targetmills + currenttime('November 05, 2022, 11:00:00'),
        people: [
            { src: ran8, alt: "pic1" },
            { src: ran1, alt: "pic2" },
        ],
        price: "1.23 ETH",
        bidders: 340,
        tag: "Music",
    },
    {
        src:  showcase2_5 ,
        alt: "Tellus duis neque fringilla pulvinar gravida",
        title: "Tellus duis neque fringilla pulvinar gravida",
        timer: targetmills + currenttime('November 09, 2022, 11:00:00'),
        people: [
            { src: ran5, alt: "pic1" },
            { src: ran3, alt: "pic2" },
        ],
        price: "1.89 ETH",
        bidders: 125,
        tag: "Photography",
    },
    {
        src:  showcase2_6 ,
        alt: "Odio lacus neque ultrices purus eget",
        title: "Odio lacus neque ultrices purus eget",
        timer: targetmills + currenttime('November 22, 2022, 11:00:00'),
        people: [
            { src: ran9, alt: "pic1" },
            { src: ran6, alt: "pic2" },
        ],
        price: "2.79 ETH",
        bidders: 352,
        tag: "Games",
    },
]


export {ShowcaseData}