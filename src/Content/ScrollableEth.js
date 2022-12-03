import EthData from "./Data/EthDatas";

const ScrollableEth = () => {
    const className = {
        container: "w-screen h-auto p-5 inline-flex overflow-x-auto whitespace-nowrap gap-4 hidescrollbar",
        box: "w-auto h-16 lg:h-20 text-center flex flex-col justify-between",
        price: "text-[10px] lg:text-xs 2xl:text-sm font-Sora text-gray-400 font-light",
        img: "shadow-lg rounded-xl xl:rounded-2xl",
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