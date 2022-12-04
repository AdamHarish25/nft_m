import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../Attachments/Image/Logo.png';


const SocialsData = [
    {
        link: "https://Facebook.com",
        icon: <FaFacebook/>,
    },
    {
        link: "https://Instagram.com",
        icon: <FaInstagram />,
    },
    {
        link: "https://Twitter.com",
        icon: <FaTwitter />,
    },
    {
        link: "https://Linkedin.com",
        icon: <FaLinkedin />,
    },
    {
        link: "https://Github.com",
        icon: <FaGithub />,
    },
    {
        link: "https://Whatsapp.com",
        icon: <FaWhatsapp />,
    },
]


const Footer = () => {
    const className = {
        container: "w-screen h-auto lxl:h-[30rem] p-10 lxl:p-20 grid place-items-center mt-20",
        footerBox: "w-fit lxl:w-[80rem] 2xl:w-auto h-full rounded-xl border-2 border-gray-300 grid grid-cols-1 lxl:grid-cols-3 gap-2",
        box1: "w-full h-full p-10 space-y-10 lxl:flex flex-col justify-between",
        box2: "w-full h-full p-10 border-x-0 border-y-2 lxl:border-y-0 lxl:border-x-2 border-y-gray-300 lxl:border-x-gray-300 space-y-10",
        box3: "w-full h-full p-10 space-y-10 lxl:flex flex-col justify-between items-center",
        hLinks: "inline-flex items-center gap-4 text-gray-400 text-sm font-Inter",
        logos: "w-48 h-auto",
        paragraph: "font-Inter text-sm font-light w-fit lg:w-[50rem] lxl:w-auto",
        navigation: "space-y-3 font-Sora font-bold text-sm",
        button: "w-fit h-fit py-4 px-6 rounded-xl text-white bg-purple-600 font-Sora text-sm font-bold",
        socials: "flex items-center gap-3 text-gray-500",
        searchbox: "h-auto py-3 px-5 flex items-center justify-between w-80 shadow-xl rounded-xl",
        form: "placeholder-gray-400 font-Inter outline-none",
        submitbutton: "text-purple-600 font-Sora font-bold text-sm"
    };

    return (
        <div className={ className.container }>
            <div className={ className.footerBox }>
                <div className={ className.box1 }>
                    <img src={ logo } alt="Brand logo" className={ className.logos } />
                    <ul className={ className.hLinks }>
                        <li>
                            <a href='#'>Support</a>
                        </li>
                        <li>
                            <a href='#'>Term of service</a>
                        </li>
                        <li>
                            <a href='#'>License</a>
                        </li>
                    </ul>
                </div>
                <div className={ className.box2 }>
                    <ul className={ className.navigation }>
                        <li>
                            <a href='#'>Auctions</a>
                        </li>
                        <li>
                            <a href='#'>Roadmap</a>
                        </li>
                        <li>
                            <a href='#'>Discover</a>
                        </li>
                        <li>
                            <a href='#'>Community</a>
                        </li>
                    </ul>

                    <button className={className.button}>
                        My Account
                    </button>

                    <ul className={className.socials}>
                        {
                            SocialsData.map((data) => {
                                return (
                                <li>
                                    <a href={data.link}>
                                        {data.icon}
                                    </a>
                                </li>)
                            })
                        }
                    </ul>
                </div>
                <div className={ className.box1 }>
                    <p className={className.paragraph}>
                        Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. 
                    </p>
                    <form className={ className.searchbox }>
                        <input type={ "text" } placeholder="Newsletter" className={ className.form } />
                        <button className={className.submitbutton} type={"submit"}>
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;