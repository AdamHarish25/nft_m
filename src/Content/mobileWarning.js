import img1 from "../Attachments/Image/badRequestVector.png";

const MobileWarning = () => {

    const className = {
        container: "w-screen h-auto grid place-items-center p-5",
        innerBox: "w-full flex flex-col justify-center items-center text-center",
        title: "font-Sora font-medium text-xl sm:text-2xl w-[450px]",
        titleHeader: "font-normal text-base font-Inter text-gray-500",
        img: "w-auto h-[450px]"
    }
    
    return (
        <div className={className.container}>
            <div className={className.innerBox}>
                <img src={img1} alt="A confused bean reading an instruction vector" className={className.img}/>
                <h1 className={className.title}>
                    <p className={className.titleHeader}>
                        We are truly sorry that
                    </p>
                    Your device seems to not support Our website
                </h1>
            </div>
        </div>
    )
}

export default MobileWarning;