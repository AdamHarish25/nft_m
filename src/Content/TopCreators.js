import TopCreatorsData from "./Data/TopCreData";


const TopCreators = () => {
    const className = {
        container: "w-screen h-screen p-10 space-y-5",
        titleBox: "text-center w-full",
        title: "font-Sora font-bold text-3xl",
        sectiontitle: "font-Inter font-medium text-gray-400 tracking-widest text-sm",
        innerContainer: "w-full h-auto grid grid-cols-2 place-items-center gap-10 py-5",
        card: "w-[25rem] h-32 p-7 bg-[#302034] border-l border-l-red-600 flex items-center gap-5 text-white",
        img: "w-14 h-14 rounded-full",
        cardContent: "w-full h-full flex items-center justify-start gap-3 border-r-2 border-gray-400 pr-10",
        cardTitle: "font-Oxanium font-medium text-lg",
        cardPrice: "font-WorkSans font-medium text-sm text-gray-400",
        cardItems: "font-WorkSans font-bold text-lg text-center",
        ItemsSubtitle: "text-gray-400 font-medium text-sm",
        buttonBox: "w-full p-10 flex justify-center items-center",
        button:
            "w-fit py-3 px-5 h-fit rounded-xl text-lg font-semibold text-gray-400 border-2 border-gray-400",
    };

    return (
        <div className={ className.container }>
            <div className={ className.titleBox }>
                <p className={ className.sectiontitle }>OVERLINE</p>
                <h1 className={ className.title }>
                    Top Creators
                </h1>
            </div>
            <div className={ className.innerContainer }>
                {
                    TopCreatorsData.map((data, index) => {
                        return <div key={ index } className={ className.card }>
                            <div className={ className.cardContent }>
                                <img src={ data.profImg } alt={ data.alt } className={ className.img } title={ data.alt } />
                                <h1 className={ className.cardTitle }>
                                    { data.profName }
                                    <p className={ className.cardPrice }>
                                        { data.maxIncome } ETH
                                    </p>
                                </h1>
                            </div>
                            <h1 className={ className.cardItems }>
                                { data.items }
                                <p className={ className.ItemsSubtitle }>
                                    Items
                                </p>
                            </h1>
                        </div>;
                    })
                }
            </div>

            <div className={ className.buttonBox }>
                <button className={ className.button }>
                    Show me more
                </button>
            </div>
        </div>
    );
};


export default TopCreators;
