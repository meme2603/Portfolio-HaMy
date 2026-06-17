import avatarImg from "../assets/avatar.png";
function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-88px)] mt-24 bg-background overflow-hidden flex flex-col items-center pb-16">
      <div className="w-full pt-10 pb-5 z-20">
        <h1
          className="
            text-[90px]
            md:text-[140px]
            lg:text-[210px]
            font-bold
            font-akshar
            text-center
            leading-[0.7]
            text-font
            tracking-tighter
          "
        >
          PORTFOLIO
        </h1>
      </div>

      <div className="relative w-full max-w-[1440px] flex flex-col md:flex-row items-center md:items-end justify-center z-30">
        {/* LEFT */}
        <div className="flex-1 flex justify-center pb-8 md:pb-60 lg:pb-80">
          <div className="flex flex-col items-center text-center space-y-2">
            <p className="text-sm md:text-base lg:text-lg font-poppins">Hi!</p>

            <p className="text-sm md:text-base lg:text-lg font-poppins">
              My name is{" "}
              <span className="font-semibold text-base md:text-lg lg:text-xl font-poppins">
                NGUYEN THI HA MY
              </span>
            </p>

            <p className="text-base md:text-lg lg:text-xl font-light">
              I'm from VietNam
            </p>
          </div>
        </div>

        <div className="relative flex justify-center shrink-0">
          <img
            src={avatarImg}
            alt="Ha My"
            className="
              block
              h-[320px]
              md:h-[460px]
              lg:h-[601px]
              object-cover
            
            "
          />
        </div>

        <div className="flex-1 flex justify-center pb-8 md:pb-60 lg:pb-80">
          <div className="flex flex-col text-center space-y-2">
            <p className="text-base md:text-lg lg:text-xl font-light">
              I'm{" "}
              <span className="font-semibold text-base md:text-lg lg:text-xl">
                UI/UX Designer
              </span>{" "}
              and
            </p>

            <p className="text-base md:text-lg lg:text-xl font-semibold font-poppins">
              Design Engeneer
            </p>

            <p className="text-sm md:text-base lg:text-lg font-light font-poppins">
              Now I'm living in Japan.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-13 bottom-0 left-0 w-full bg-font py-3 md:py-4"></div>
      <div className="relative w-full mt-6 md:mt-10 lg:-mt-25 z-40">
        <div className="relative flex justify-center leading-none -mb-8 lg:-mb-12">
          <span
            className="
              absolute
              inset-0
              flex
              justify-center
              translate-x-[4px]
              translate-y-[4px]
              text-[70px]
              md:text-[100px]
              lg:text-[130px]
              font-bold
              font-akshar
              tracking-tighter
              text-font
            "
          >
            Designer
          </span>

          <h2
            className="
              relative
              text-[70px]
              md:text-[100px]
              lg:text-[130px]
              font-bold
              font-akshar
              tracking-tighter
              text-primary
            "
          >
            Designer
          </h2>
        </div>
      </div>

      <div
        className="absolute
                  bottom-3
                  left-1/2
                  -translate-x-1/2
                  z-50
                  bg-font
                  px-10
                  py-0.5"
      >
        {/* <p className="text-background text-center text-[10px] md:text-xs font-light tracking-[2px]">
          This is my portfolio. Hope you enjoy it !
        </p> */}
      </div>
    </section>
  );
}

export default Hero;
