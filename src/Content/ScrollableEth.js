import EthData from "./Data/EthDatas";

const ScrollableEth = () => {
    const className = {
        container: "w-screen h-auto p-5 flex items-center overflow-x-auto overflow-y-hidden gap-4",
        box: "w-fit h-auto text-center space-y-2",
        price: "text-[10px] lg:text-xs 2xl:text-sm font-Sora text-gray-400 font-light",
        img: "shadow-lg",
    }

    return (
        <div className={className.container}>
            {
                EthData.map(({ src, alt, price }) => {
                    return (
                        <div className={className.box}>
                            <img className={className.img} src={ src } alt={ alt } />
                            <p className={className.price}>
                                { price } ETH
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ScrollableEth;