import avatarImg from "../assets/avatar.png";
function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] mt-24 bg-background overflow-hidden flex flex-col items-center">
      <div className="w-full pt-10 pb-5 z-20">
        <h1 className="text-[210px] font-bold font-akshar text-center leading-[0.7] text-font tracking-tighter">
          PORTFOLIO
        </h1>
      </div>

      <div className="relative w-full max-w-[1440px] grid grid-cols-3 items-center z-30">
        <div className="flex flex-col items-center text-center space-y-2">
          <p className="text-lg font-poppins">Hi!</p>
          <p className="text-lg font-poppins">
            My name is{" "}
            <span className="font-semibold text-xl font-poppins">
              NGUYEN THI HA MY
            </span>
          </p>
          <p className="text-xl font-light">I'm from VietNam</p>
        </div>

        <div className="relative flex justify-center">
          <img
            src={avatarImg}
            alt="Ha My"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col text-center space-y-2">
          <p className="text-xl font-light">
            I'm <span className="font-semibold text-xl">UI/UX Designer</span>{" "}
            and
          </p>
          <p className="text-xl font-semibold font-poppins">Basic Frontend</p>
          <p className="text-lg font-light font-poppins">
            Now I'm living in Japan.
          </p>
        </div>
      </div>

      <div className="relative w-full -mt-48 z-40">
        <div className="relative flex justify-center leading-none -mb-12">
          <span className="absolute left-[50.3%] top-[1%] -translate-x-1/2 text-[230px] font-bold font-akshar tracking-tighter text-font">
            DESIGNER
          </span>

          <h2 className="relative  text-[230px] font-bold font-akshar  tracking-tighter text-primary">
            DESIGNER
          </h2>
        </div>
      </div>

      <div className="w-full bg-font py-[17px] ">
        <p className="text-background text-center text-sm font-light tracking-[2px]">
          This is my portfolio. Hope you enjoy it !
        </p>
      </div>
    </section>
  );
}

export default Hero;
