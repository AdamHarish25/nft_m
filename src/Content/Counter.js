import CounterData from "./Data/CounterData"

const Counter = () => {
    const className = {
        container: "w-screen h-auto p-10 grid grid-cols-2 xl:grid-cols-4 place-items-center",
        box: "p-4 text-center w-80 space-y-5",
        counter: "font-Sora font-semibold text-2xl 2xl:text-4xl",
        iconBox: "w-full flex items-center justify-center",
        title: "font-Inter font-medium text-xs 2xl:text-lg text-gray-400",
    }

    return (
        <div className={ className.container }>
            {
                CounterData.map(({ icon, counts, title }, index) => {
                    return (
                        <div key={index} className={ className.box }>
                            <div className={ className.iconBox }>
                                <img src={ icon.src } alt={ icon.alt } />
                            </div>
                            <h1 className={ className.counter }>
                                { counts }
                            </h1>
                            <p className={ className.title }>
                                { title }
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Counter