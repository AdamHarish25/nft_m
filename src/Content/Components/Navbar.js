/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../Attachments/Image/Logo.png";

const Navbar = () => {
  const className = {
    container:
      "w-screen h-fit py-5 px-20 grid grid-cols-3 place-items-center gap-10 font-Sora fixed top-0 inset-x-0",
    logoBox: "w-full h-full flex items-center",
    logo: "w-fit h-[30px]",
    navBox:
      "w-full h-full inline-flex gap-10 items-center text-gray-400 font-medium",
    buttonsBox: "w-full h-full inline-flex gap-5 items-center justify-end",
    buttons: {
      button1:
        "w-36 h-auto p-5 rounded-xl border-2 border-[#7189e2] text-[#7189e2]",
      button2:
        "w-36 h-auto p-5 rounded-xl bg-gradient-to-br from-[#4745D0] to-[#2A27C9] text-white",
    },
  };

  return (
    <nav className={className.container}>
      <section className={className.logoBox}>
        <img src={logo} alt="logo" className={className.logo} />
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
      <section className={className.buttonsBox}>
        <button className={className.buttons.button1}>Contact</button>
        <button className={className.buttons.button2}>My Account</button>
      </section>
    </nav>
  );
};

export default Navbar;
