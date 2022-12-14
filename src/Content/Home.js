import frame from "../Attachments/Image/Home/Frame.png";
import frame2 from "../Attachments/Image/Home/Frame2.png";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import brandsData from "./Data/BrandsData";
import { useState } from "react";

const dropdownData = [
  {
    title: "Fantasy",
  },
  {
    title: "Cartoon",
  },
  {
    title: "Anime",
  },
  {
    title: "General",
  },
];

const Home = () => {
  const [ openDropdown, setOpenDropdown ] = useState(false);
  const [ dropdownChoice, setDropdownChoice ] = useState("Category");

  const onClickMenu = (choice) => {
    setOpenDropdown(!openDropdown);
    setDropdownChoice(choice);
  };

  const className = {
    container:
      "w-screen h-auto lg:h-screen bg-homeBackground bg-cover p-10 mb-40",
    wrapper:
      "h-full w-auto flex flex-col justify-center items-center gap-20 pt-[190px] lg:pt-[240px]",
    searchNtitleBox:
      "h-fit flex flex-col items-center text-center gap-7 font-Sora",
    smlTitle: "font-medium text-gray-400 text-sm tracking-widest",
    vector: "w-7 lg:w-10 h-fit",
    vector2: "w-12 lg:w-16 h-fit",
    title: "flex gap-10",
    fontTitle: "text-5xl lg:text-[65px] xl:text-7xl font-bold",
    subtitle: "text-gray-400 font-Inter text-lg",
    brandsBox: "w-fit h-fit p-10 flex gap-8 items-center",
    searchBox:
      "w-fit p-5 flex gap-5 items-center rounded-lg shadow-lg bg-white",
    searchBar: "p-6 w-80 h-16 font-Sora placeholder-gray-400 outline-none",
    dropdown:
      "w-36 h-8 p-3 border-l border-l-gray-400 text-gray-400 flex items-center text-sm gap-10 cursor-pointer",
    dropBox: "w-fit h-fit p-5 flex items-center gap-5 relative",
    dropdownMenu: `bg-white space-y-4 w-auto absolute inset-x-0 top-14 p-8 shadow-xl rounded-xl list-none text-start ${ openDropdown ? "visible opacity-100" : "invisible opacity-0"
      } transition-opacity duration-200`,
    menu: "cursor-pointer text-gray-400 font-medium hover:bg-gray-400 hover:text-white p-2 rounded-md transition-color duration-200",
  };

  return (
    <header className={ className.container }>
      <div className={ className.wrapper }>
        <div className={ className.searchNtitleBox }>
          <h6 className={ className.smlTitle }>NON FUNGIBLE TOKENS</h6>
          <h1 className={ className.fontTitle }>
            <div className={ className.title }>
              A new NFT{ " " }
              <span>
                <img
                  src={ frame }
                  alt="right sided vector"
                  className={ className.vector }
                />
              </span>
            </div>
            <div className={ className.title }>
              <span>
                <img
                  src={ frame2 }
                  alt="left sided vector"
                  className={ className.vector2 }
                />
              </span>
              Experience
            </div>
          </h1>
          <p className={ className.subtitle }>Discover, collect and sell</p>
          <form className={ className.searchBox }>
            <input
              className={ className.searchBar }
              placeholder="Items, collections and creators"
              type={ "text" }
            />
            <div className={ className.dropBox }>
              <div
                onClick={ () => {
                  setOpenDropdown(!openDropdown);
                } }
                className={ className.dropdown }
              >
                { dropdownChoice } <FaChevronDown />
              </div>
              <button type={ "submit" }>
                <FaSearch className="text-[#2A27C9] text-xl" />
              </button>
              <div className={ className.dropdownMenu }>
                { dropdownData.map(({ title }, index) => {
                  return (
                    <li
                      key={ index }
                      className={ className.menu }
                      onClick={ () => onClickMenu(title) }
                    >
                      { title }
                    </li>
                  );
                }) }
              </div>
            </div>
          </form>
        </div>
        <div className={ className.brandsBox }>
          { brandsData.map(({ src, alt }, index) => {
            return <img src={ src } alt={ alt } key={ index } />;
          }) }
        </div>
      </div>
    </header>
  );
};

export default Home;
