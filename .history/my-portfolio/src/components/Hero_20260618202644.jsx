import avatarImg from "../assets/avatar.png";

function Hero() {
  return (
    // Giữ nguyên cấu trúc ẩn phần thừa của bà
    <section className="relative w-full h-[calc(100vh-88px)] mt-24 bg-background overflow-hidden flex flex-col items-center justify-between pb-4">
      {/* 1. CHỮ PORTFOLIO TRÊN CÙNG */}
      <div className="w-full pt-4 z-20 shrink-0">
        <h1
          className="
            text-[80px]
            md:text-[130px]
            lg:text-[200px]
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

      {/* 2. KHỐI GIỮA: THÊM flex-1 VÀ min-h-0 ĐỂ ÉP ĐỐNG NÀY TỰ CO GIÃN THÔNG MINH */}
      <div className="relative w-full max-w-[1440px] flex flex-col md:flex-row items-center md:items-end justify-center z-30">
        {/* LEFT */}
        <div className="flex-1 flex justify-center pb-8 md:pb-48 lg:pb-64">
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

        {/* AVATAR: Trả lại chiều cao gốc lg:h-[601px] to vật vã như cũ */}
        <div className="relative flex justify-center shrink-0 mb-4">
          <img
            src={avatarImg}
            alt="Ha My"
            className="
              block
              h-[300px]
              md:h-[550px]
              lg:h-[650px] 
              object-cover
              
            "
          />
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center pb-8 md:pb-48 lg:pb-64">
          <div className="flex flex-col text-center space-y-2">
            <p className="text-base md:text-lg lg:text-xl font-light">
              I'm{" "}
              <span className="font-semibold text-base md:text-lg lg:text-xl">
                UX/UI Designer
              </span>{" "}
              and
            </p>
            <p className="text-base md:text-lg lg:text-xl font-semibold font-poppins">
              Design Engineer
            </p>
            <p className="text-sm md:text-base lg:text-lg font-light font-poppins">
              Now I'm living in Japan.
            </p>
          </div>
        </div>
      </div>

      {/* 3. THANH ĐEN ĐÁY TRANG */}
      <div className="absolute h-14 bottom-0 left-0 w-full bg-font py-3 md:py-4 z-40"></div>

      {/* 4. CHỮ DESIGNER CỐ ĐỊNH Ở ĐÁY */}
      <div className="relative w-full mt-0 md:mt-0 lg:-mt-40 z-40 pointer-events-none">
        <div className="relative flex justify-center leading-none">
          <span
            className="
              absolute
              inset-0
              flex
              justify-center
              translate-x-[4px]
              translate-y-[4px]
              text-[60px]
              sm:text-[80px]
              md:text-[110px]
              lg:text-[180px]
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
              text-[60px]
              sm:text-[80px]
              md:text-[110px]
              lg:text-[180px]
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
    </section>
  );
}

export default Hero;
