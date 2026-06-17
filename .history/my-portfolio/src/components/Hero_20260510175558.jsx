import avatarImg from "../assets/avatar.png";
function Hero() {
  return (
    <section className="relative w-full min-w-[640px] h-[calc(100vh-88px)] mt-24 bg-background overflow-hidden flex flex-col items-center pb-16">
      <div className="w-full pt-6 md:pt-8 lg:pt-10 pb-3 lg:pb-5 z-20">
        <h1
          className="
          md:text-[180px]
          lg:text-[210px]
          text-[150px]
          font-bold 
          font-akshar 
          text-center 
          leading-[0.7] 
          text-font 
          tracking-tighter"
        >
          PORTFOLIO
        </h1>
      </div>

      <div className="relative w-full max-w-[1440px] flex items-end justify-center z-30 px-6 md:px-10">
        <div
          className="
        flex-1 
        flex 
        justify-center 
        lg:pb-80
        md:pb-60
        pb-40
        "
        >
          <div className="flex flex-col items-center text-center space-y-2">
            <p
              className="
            lg:text-lg 
            md:text-base
            text-sm
            font-poppins
            "
            >
              Hi!
            </p>

            <p
              className="
            lg:text-lg 
            md:text-base
            text-sm
            font-poppins
            "
            >
              My name is{" "}
              <span
                className="
              font-semibold 
              lg:text-xl 
              md:text-lg 
              text-base
              font-poppins"
              >
                NGUYEN THI HA MY
              </span>
            </p>

            <p
              className="
            lg:text-lg 
            md:text-base
            text-sm
            font-poppins
            font-light"
            >
              I'm from VietNam
            </p>
          </div>
        </div>

        <div className="relative hidden md:flex justify-center shrink-0">
          <img
            src={avatarImg}
            alt="Ha My"
            className="block h-[420px] md:h-[520px] lg:h-[601px]object-cover"
          />
        </div>

        <div className="flex-1 flex justify-center pb-40 md:p-60 lg:p-80">
          <div className="flex flex-col text-center space-y-2">
            <p
              className=" 
              font-light 
              lg:text-lg 
              md:text-base
              text-sm"
            >
              I'm
              <span className="font-semibold lg:text-xl md:text-lg text-base">
                UI/UX Designer
              </span>{" "}
              and
            </p>

            <p className="text-sm md:text-base lg:text-xl font-semibold font-poppins">
              Basic Frontend
            </p>

            <p className="text-sm md:text-base lg:text-xl font-light font-poppins">
              Now I'm living in Japan.
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative
                      w-full
                      -mt-24
                      md:-mt-32
                      lg:-mt-40
                      z-40"
      >
        <div className="relative flex justify-center leading-none -mb-8 lg:-mb-12">
          <span className="absolute left-[50.3%] top-[1%] -translate-x-1/2 text-[140px] md:text-[180px] lg:text-[200px]  font-bold font-akshar tracking-tighter text-font">
            DESIGNER
          </span>

          <h2 className="relative text-[140px] md:text-[180px] lg:text-[200px] font-bold font-akshar tracking-tighter text-primary">
            DESIGNER
          </h2>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-font py-4">
        <p className="text-background text-center text-sm font-light tracking-[2px]">
          This is my portfolio. Hope you enjoy it !
        </p>
      </div>
    </section>
  );
}

export default Hero;
