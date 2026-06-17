function Hero() {
  return (
    <section className="w-[375px] mx-auto bg-background min-h-screen flex flex-col justify-between items-center text-center overflow-hidden">
      <h1 className="w-full text-[15vw] font-bold font-logo leading-none tracking-tighter text-font pt-4">
        PORTFOLIO
      </h1>

      <div className="flex-1 flex flex-col justify-center space-y-6 px-6 py-12 font-poppins">
        <div className="space-y-1">
          <p className="text-xl font-light">Hi!</p>
          <p className="text-xl font-light">
            My name is <span className="font-bold">NGUYEN THI HA MY</span>
          </p>
          <p className="text-xl font-light">I'm from Vietnam</p>
        </div>

        <div className="space-y-1 pt-4">
          <p className="text-xl">
            I'm <span className="font-bold">UI/UX Designer</span> and
          </p>
          <p className="text-xl font-bold">Basic Frontend</p>
          <p className="text-xl font-light ">Now I'm living in Japan.</p>
        </div>
      </div>

      <div className="w-full relative py-4">
        <h2 className="text-[18vw] font-bold font-logo leading-none tracking-tighter text-primary relative inline-block">
          DESIGNER
          <span className="absolute top-[6px] left-[8px] -z-10 text-font opacity-100">
            DESIGNER
          </span>
        </h2>
      </div>

      <div className="w-full bg-font py-4">
        <p className="text-background text-xs font-light tracking-wide">
          This is my portfolio. Hope you enjoy it!
        </p>
      </div>
    </section>
  );
}
export default Hero;
