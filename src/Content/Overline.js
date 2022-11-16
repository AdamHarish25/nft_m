import img from "../Attachments/Image/Section3.png";

const Overline = () => {
  const className = {
    container:
      "w-screen h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 p-20 place-items-center",
    titleBox:
      "w-[400px] h-full text-center lg:text-left space-y-5 text-gray-500 font-Sora order-2 lg:order-1",
    sectTitle: "tracking-widest font-Inter",
    title: "text-black font-semibold text-2xl lg:text-3xl xl:text-5xl",
    buttonBox:
      "w-full h-fit flex justify-center lg:justify-start items-center gap-5",
    button1:
      "w-fit text-sm h-fit px-6 py-4 text-white bg-gradient-to-br from-[#4745D0] to-[#2A27C9] rounded-xl",
    button2:
      "w-fit text-sm h-fit px-6 py-4 text-purple-500 border border-purple-500 rounded-xl",
    imageBox: "w-fit h-full order-1 lg:order-2",
    img: "w-fit h-96 lg:h-full object-cover",
  };

  return (
    <div className={className.container}>
      <titlebox className={className.titleBox}>
        <p className={className.sectTitle}>OVERLINE</p>
        <h1 className={className.title}>
          Sapien ipsum scelerisque convallis fusce
        </h1>
        <p>
          Ut amet vulputate faucibus vitae semper eget auctor. Diam
          tempor pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <buttonbox className={className.buttonBox}>
          <button className={className.button1}>Get Started</button>
          <button className={className.button2}>Learn More</button>
        </buttonbox>
      </titlebox>
      <imagebox className={className.imageBox}>
        <img
          src={img}
          alt="Graphic Vector of a Spilled bucket and a Pie chart"
          className={className.img}
        />
      </imagebox>
    </div>
  );
};

export default Overline;
