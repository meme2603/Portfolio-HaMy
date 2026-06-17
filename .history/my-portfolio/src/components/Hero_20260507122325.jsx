function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] mt-24 bg-background overflow-hidden flex flex-col items-center">
      {/* 1. LỚP CHỮ PORTFOLIO (Nằm trên cùng) */}
      <div className="w-full pt-10 z-20">
        <h1 className="text-[230px] font-bold font-akshar text-center leading-[0.7] text-font tracking-tighter">
          PORTFOLIO
        </h1>
      </div>

      {/* 2. LỚP GIỮA: CHỨA TEXT 2 BÊN VÀ ẢNH CHÂN DUNG */}
      {/* Dùng Grid 3 cột để chia không gian: Text trái - Ảnh giữa - Text phải */}
      <div className="relative w-full max-w-[1440px] grid grid-cols-3 items-center px-10 -mt-10 z-30">
        {/* Khối chữ bên trái */}
        <div className="text-left space-y-2">
          <p className="text-xl font-light">Hi!</p>
          <p className="text-xl font-light">
            My name is{" "}
            <span className="font-bold text-2xl">NGUYEN THI HA MY</span>
          </p>
          <p className="text-xl font-light">I'm from Vietnam</p>
        </div>

        {/* ẢNH CHÂN DUNG (Nằm ở cột giữa) */}
        <div className="relative flex justify-center z-10">
          <img
            src="/avatar.jpg" // Thay link ảnh của bà vào đây nha
            alt="Ha My"
            className="w-[120%] h-auto object-cover scale-110"
          />
        </div>

        {/* Khối chữ bên phải */}
        <div className="text-right space-y-2">
          <p className="text-xl font-light">
            I'm <span className="font-bold text-2xl">UI/UX Designer</span> and
          </p>
          <p className="text-2xl font-bold">Basic Frontend</p>
          <p className="text-xl font-light">Now I'm living in Japan.</p>
        </div>
      </div>

      <div className="relative w-full mt-auto z-0">
        <div className="relative flex justify-center leading-none -mb-12">
          <span className="absolute left-[50.4%] top-[1%] -translate-x-1/2 text-[250px] font-bold font-akshar tracking-tighter text-font">
            DESIGNER
          </span>

          <h2 className="relative  text-[250px] font-bold font-akshar  tracking-tighter text-primary">
            DESIGNER
          </h2>
        </div>
      </div>

      {/* 4. FOOTER MESSAGE */}
      <div className="w-full bg-font py-4 ">
        <p className="text-background text-center text-sm font-light tracking-[2px]">
          This is my portfolio. Hope you enjoy it !
        </p>
      </div>
    </section>
  );
}

export default Hero;
