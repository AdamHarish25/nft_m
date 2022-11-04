import frame from "../Attachments/Image/Frame.png";
import frame2 from "../Attachments/Image/Frame2.png";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import brandsData from "./Data/BrandsData";

const Home = () => {
  const className = {
    container: "w-screen h-auto lg:h-screen bg-homeBackground bg-cover p-10",
    wrapper:
      "h-full w-auto flex flex-col justify-center items-center gap-20 pt-40",
    searchNtitleBox:
      "h-fit flex flex-col items-center text-center gap-7 font-Sora",
    smlTitle: "font-medium text-gray-400 text-sm tracking-widest",
    vector: "w-10 h-fit",
    vector2: "w-16 h-fit",
    title: "flex gap-10",
    fontTitle: "text-7xl font-bold",
    subtitle: "text-gray-400 font-Inter text-lg",
    brandsBox: "w-fit h-fit p-10 flex gap-8 items-center",
    searchBox:
      "w-fit p-5 flex gap-5 items-center rounded-lg shadow-lg bg-white",
    searchBar: "p-6 w-80 h-16 font-Sora placeholder-gray-400 outline-none",
    dropdown:
      "w-36 h-8 p-3 border-l border-l-gray-400 text-gray-400 flex items-center text-sm gap-10",
    dropBox: "w-fit h-fit p-5 flex items-center gap-5",
  };
  return (
    <header className={className.container}>
      <div className={className.wrapper}>
        <div className={className.searchNtitleBox}>
          <h6 className={className.smlTitle}>NON FUNGIBLE TOKENS</h6>
          <h1 className={className.fontTitle}>
            <section1 className={className.title}>
              A new NFT{" "}
              <span>
                <img
                  src={frame}
                  alt="right sided vector"
                  className={className.vector}
                />
              </span>
            </section1>
            <section2 className={className.title}>
              <span>
                <img
                  src={frame2}
                  alt="left sided vector"
                  className={className.vector2}
                />
              </span>
              Experience
            </section2>
          </h1>
          <p className={className.subtitle}>Discover, collect and sell</p>
          <searchbar className={className.searchBox}>
            <input
              className={className.searchBar}
              placeholder="Items, collections and creators"
              type={"text"}
            />
            <section className={className.dropBox}>
              <dropdown className={className.dropdown}>
                Category <FaChevronDown />
              </dropdown>
              <button>
                <FaSearch className="text-[#2A27C9] text-xl" />
              </button>
            </section>
          </searchbar>
        </div>
        <brands className={className.brandsBox}>
          {brandsData.map(({ src, alt }, index) => {
            return <img src={src} alt={alt} key={index} />;
          })}
        </brands>
      </div>
    </header>
  );
};

export default Home;
