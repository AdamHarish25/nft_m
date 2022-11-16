const Showcase = () => {
    const className ={
        container: "w-screen h-auto p-10",
    };
    return (
        <div className={className.container}>
            <h1>
                <p>
                    OVERLINE
                </p>
                Most popular live auctions
            </h1>
            <div>
                <button>Architecture</button>
                <button>Photography</button>
                <button>Games</button>
                <button>Music</button>
            </div>
        </div>
    )
}

export default Showcase;