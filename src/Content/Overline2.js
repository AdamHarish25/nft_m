import overline2 from "../Attachments/Image/Section5.png";
import Icon1 from "../Attachments/Image/Icon/Icon.png";
import Icon2 from "../Attachments/Image/Icon/Icon-1.png";

const Overline2 = () => {
    const className = {
        container: "w-screen h-auto lg:h-screen p-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 my-10 place-items-center",
        imagebox: "w-fit h-full",
        img: "w-fit h-96 lg:h-full object-contain",
        descriptionBox: "h-fit w-full p-5 space-y-10 flex flex-col items-center lg:items-start",
        titleBox: "w-[400px] lg:w-auto gap-2 lg:gap-5 flex flex-col text-2xl lg:text-3xl xl:text-5xl font-Sora font-semibold text-center lg:text-start",
        sectiontitle: "font-Inter font-medium text-gray-400 tracking-widest text-sm",
        description: "font-Inter text-gray-400 text-sm font-normal",
        box: 'w-full h-auto flex items-center justify-center lg:justify-start gap-6',
        advantage: "flex flex-col gap-3",
        iconBox: "w-full h-10 flex items-center justify-center lg:justify-start",
        titleBox2: "flex flex-col gap-1 font-Sora font-semibold text-lg lg:text-xl text-center lg:text-start",
        sectiontitle2: "font-Inter font-normal text-gray-400 text-sm",
        buttonBox: "w-full lg:w-fit justify-center lg:justify-start flex items-center gap-4 font-Sora",
        button1: "w-fit p-5 rounded-xl text-white bg-gradient-to-br from-[#4745D0] to-[#2A27C9]",
        button2: "w-fit p-5 rounded-xl text-[#4745D0] bg-transparent border border-gray-400",
    }

    const advantageData = [
        {
            icon: Icon1,
            title: "Sollicitudin sapien",
            subtitle: "Cursus fermentum",
        },
        {
            icon: Icon2,
            title: "Pulvinar metus",
            subtitle: "Nunc sed",
        },
    ]

    return (
        <div className={className.container}>
            <div className={className.imagebox}>
                <img src={overline2} alt="Graphic Vector of a Suspected emote and an Aeroplane in the cloud" className={className.img}/>
            </div>
            
            <div className={className.descriptionBox}>
                <h1 className={className.titleBox}>
                    <p className={className.sectiontitle}>OVERLINE</p> 
                    Habitant tristique aliquam in vel scelerisque
                    
                    <p className={className.description}>
                    Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
                    </p>
                </h1>

                <div className={className.box}>
                    {
                        advantageData.map((data, index) => {
                            return (
                                <div key={index} className={className.advantage}>
                                    <div className={className.iconBox}>
                                        <img draggable={false} src={data.icon} alt={data.title}/>
                                    </div>
                                    <h1 className={className.titleBox2}>
                                        {data.title}
                                        <p className={className.sectiontitle2}>
                                            {data.subtitle}
                                        </p>
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={className.buttonBox}>
                    <button className={className.button1}>
                        Get Started
                    </button>
                    <button className={className.button2}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Overline2;