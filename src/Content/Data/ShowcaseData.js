import showcase2_1 from "../../Attachments/Image/Showcase/Showcase2/Image.png";
import showcase2_2 from "../../Attachments/Image/Showcase/Showcase2/Image-1.png";
import showcase2_3 from "../../Attachments/Image/Showcase/Showcase2/Image-2.png";
import showcase2_4 from "../../Attachments/Image/Showcase/Showcase2/Image-3.png";
import showcase2_5 from "../../Attachments/Image/Showcase/Showcase2/Image-4.png";
import showcase2_6 from "../../Attachments/Image/Showcase/Showcase2/Image-5.png";

const date = new Date();

const launchDate = (datetime) => new Date(datetime)

const subtSevenH = 7 * 60 * 60 * 1000;

const currenttime = (datetime) => date.setTime(launchDate(datetime).getTime());
console.log(currenttime)

const targetdate = date.setUTCHours(0, 0, 0, 0);

const targetmills = +targetdate - subtSevenH;


const Showcase1 = [
    {}
]

const Showcase2 = [
    {
        src:  showcase2_1 ,
        alt: "Faucibus habitasse at et platea massa mauris",
        title: "Faucibus habitasse at et platea massa mauris",
        timer: targetmills + currenttime('November 20, 2022, 11:00:00'),
        price: "2.55 ETH",
        bidders: 83
    },
    {
        src:  showcase2_2 ,
        alt: "Diam purus sagittis nisl erat mauris",
        title: "Diam purus sagittis nisl erat mauris",
        timer: targetmills + currenttime('November 19, 2022, 11:00:00'),
        price: "4.32 ETH",
        bidders: 143
    },
    {
        src:  showcase2_3 ,
        alt: "Nascetur mauris viverra vel id id sem leo",
        title: "Nascetur mauris viverra vel id id sem leo",
        timer: targetmills + currenttime('November 19, 2022, 04:00:00'),
        price: "1.34 ETH",
        bidders: 49
    },
    {
        src:  showcase2_4 ,
        alt: "Velit, fusce id non dui amet amet maecenas",
        title: "Velit, fusce id non dui amet amet maecenas",
        timer: targetmills + currenttime('November 05, 2022, 11:00:00'),
        price: "1.23 ETH",
        bidders: 340
    },
    {
        src:  showcase2_5 ,
        alt: "Tellus duis neque fringilla pulvinar gravida",
        title: "Tellus duis neque fringilla pulvinar gravida",
        timer: targetmills + currenttime('November 09, 2022, 11:00:00'),
        price: "1.89 ETH",
        bidders: 125
    },
    {
        src:  showcase2_6 ,
        alt: "Odio lacus neque ultrices purus eget",
        title: "Odio lacus neque ultrices purus eget",
        timer: targetmills + currenttime('November 22, 2022, 11:00:00'),
        price: "2.79 ETH",
        bidders: 352
    },
]

const Showcase3 = [
    {}
]

const Showcase4 = [
    {}
]

export { Showcase1, Showcase2, Showcase3, Showcase4 }