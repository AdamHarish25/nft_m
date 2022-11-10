/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import logo from "../../Attachments/Image/Logo.png";
import { useViewport } from "./Viewport";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const viewPort = useViewport().windowSize;
  const [navbar, setNavbar] = useState(false);

  if (openMenu === true && viewPort.innerWidth > 1280) {
    setOpenMenu(false);
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const className = {
    container: `w-screen h-fit py-5 px-20 font-Sora fixed top-0 inset-x-0 ${
      openMenu || navbar ? "bg-white shadow-xl" : "bg-transparent shadow-none"
    } transition-colors duration-200`,
    desktopNav:
      "w-full h-fit hidden xl:grid grid-cols-3 place-items-center gap-20",
    mobileNav: `w-full block xl:hidden ${openMenu ? "h-fit" : "h-28"}`,
    navigation: "w-full h-full flex justify-between items-center px-10 py-2",
    logoBox: "w-fit h-full flex items-center justify-start",
    logo: "w-fit h-[30px]",
    navBox:
      "w-fit h-full inline-flex flex-col xl:flex-row gap-10 items-start xl:items-center text-gray-400 font-medium",
    buttonMenu: "w-fit h-fit p-10 rounded-lg text-2xl",
    buttonBox: "h-fit p-10 flex justify-center items-center",
    menuBox: `p-7 flex justify-evenly items-center ${
      openMenu ? "visible h-fit opacity-100" : "invisible h-0 opacity-0"
    } transition-opacity duration-200`,
    box: "w-fit xl:w-full h-full inline-flex flex-col xl:flex-row gap-5 items-end xl:items-center justify-center xl:justify-end",
    buttons: {
      button1:
        "w-36 h-auto p-5 rounded-xl border-2 border-[#7189e2] text-[#7189e2]",
      button2:
        "w-36 h-auto p-5 rounded-xl bg-gradient-to-br from-[#4745D0] to-[#2A27C9] text-white",
    },
  };

  return (
    <nav className={className.container}>
      <desktopNav className={className.desktopNav}>
        <section className={className.logoBox}>
          <a href="#">
            <img src={logo} alt="logo" className={className.logo} />
          </a>
        </section>
        <ul className={className.navBox}>
          <li>
            <a href="#">Auction</a>
          </li>
          <li>
            <a href="#Roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#Discover">Discover</a>
          </li>
          <li>
            <a href="#Community">Community</a>
          </li>
        </ul>
        <section className={className.box}>
          <button className={className.buttons.button1}>Contact</button>
          <button className={className.buttons.button2}>My Account</button>
        </section>
      </desktopNav>

      <mobileNav className={className.mobileNav}>
        <navigation className={className.navigation}>
          <section className={className.logoBox}>
            <a href="#">
              <img src={logo} alt="logo" className={className.logo} />
            </a>
          </section>
          <button
            className={className.buttonMenu}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <BiMenuAltRight />
          </button>
        </navigation>
        <menuBox className={className.menuBox}>
          <ul className={className.navBox}>
            <li>
              <a onClick={() => setOpenMenu(!openMenu)} href="#">
                Auction
              </a>
            </li>
            <li>
              <a onClick={() => setOpenMenu(!openMenu)} href="#Roadmap">
                Roadmap
              </a>
            </li>
            <li>
              <a onClick={() => setOpenMenu(!openMenu)} href="#Discover">
                Discover
              </a>
            </li>
            <li>
              <a onClick={() => setOpenMenu(!openMenu)} href="#Community">
                Community
              </a>
            </li>
          </ul>
          <section className={className.box}>
            <button className={className.buttons.button1}>Contact</button>
            <button className={className.buttons.button2}>My Account</button>
          </section>
        </menuBox>
      </mobileNav>
    </nav>
  );
};

export default Navbar;
