import img from "../Attachments/Image/FolderSection/Users.png";
import background from "../Attachments/Image/FolderSection/background.png";


const FolderSection = () => {
    const className = {
        container: "w-screen h-screen flex items-center justify-center p-10",
        innerContainer: "w-auto xl:w-[60vw] h-auto p-14 grid grid-cols-2 gap-5 relative place-items-center",
        titleBox:
            "w-[400px] h-fit text-left space-y-5 text-gray-500 font-Sora px-5 2xl:px-2 py-5",
        sectTitle: "tracking-widest font-Inter",
        title: "text-black font-semibold text-xl 2xl:text-3xl",
        description: "text-sm 2xl:text-base",
        buttonBox:
            "w-full h-fit flex justify-start items-center gap-5",
        button1:
            "w-fit text-sm h-fit px-6 py-4 text-white bg-gradient-to-br from-[#4745D0] to-[#2A27C9] rounded-xl",
        button2:
            "w-fit text-sm h-fit px-6 py-4 text-purple-500 border border-purple-500 rounded-xl",
        imageBox: "w-fit h-full",
        img: "w-auto h-96 lg:h-full object-contain",
    }
    
    return (
        <div className={ className.container }>
            <div className={ className.innerContainer }>
                <titlebox className={ className.titleBox }>
                    <p className={ className.sectTitle }>OVERLINE</p>
                    <h1 className={ className.title }>
                        Cursus vitae sollicitudin donec nascetur. Join now
                    </h1>
                    <p className={className.description}>
                        Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.
                    </p>
                    <buttonbox className={ className.buttonBox }>
                        <button className={ className.button1 }>Get Started</button>
                        <button className={ className.button2 }>Learn More</button>
                    </buttonbox>
                </titlebox>
                <imagebox className={ className.imageBox }>
                    <img
                        src={ img }
                        alt="Graphic Vector of a Spilled bucket and a Pie chart"
                        className={ className.img }
                    />
                </imagebox>
                <img src={ background } alt="Folder Background" className="w-full h-full absolute inset-0 object-contain -z-10" />
            </div>
        </div>
    )
};


export default FolderSection;
