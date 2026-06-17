import avatarImg from "../assets/avatar.png";
function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] mt-24 bg-background overflow-hidden flex flex-col items-center">
      <div className="w-full pt-10 pb-5 z-20">
        <h1 className="text-[210px] font-bold font-akshar text-center leading-[0.7] text-font tracking-tighter">
          PORTFOLIO
        </h1>
      </div>

      {/* 2. KHỐI GIỮA - CHUYỂN SANG FLEX ĐỂ DÓNG HÀNG CHUẨN ĐÉT */}
      <div className="relative w-full max-w-[1440px] flex justify-between items-center px-10 z-30 min-h-[450px]">
        {/* Khối chữ bên trái - Căn chỉnh thoải mái */}
        <div className="w-[350px] flex flex-col items-center text-center space-y-2">
          <p className="text-lg font-poppins">Hi!</p>
          <p className="text-lg font-poppins leading-tight">
            My name is <br />
            <span className="font-semibold text-xl">NGUYEN THI HA MY</span>
          </p>
          <p className="text-xl font-light">I'm from VietNam</p>
        </div>

        {/* PHẦN GIỮA - CHỈ ĐỂ CHỨA ẢNH ABSOLUTE */}
        <div className="relative flex-1 flex justify-center items-center">
          <img
            src={avatarImg}
            alt="Ha My"
            className="absolute w-[480px] h-auto object-cover left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[-1]"
          />
        </div>

        {/* Khối chữ bên phải */}
        <div className="w-[350px] flex flex-col items-center text-center space-y-2">
          <p className="text-xl font-light leading-tight">
            I'm <span className="font-semibold text-xl">UI/UX Designer</span>{" "}
            <br /> and
          </p>
          <p className="text-xl font-semibold font-poppins uppercase tracking-wide">
            Basic Frontend
          </p>
          <p className="text-lg font-light font-poppins italic">
            Now I'm living in Japan.
          </p>
        </div>
      </div>

      <div className="relative w-full mt-auto z-40">
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
