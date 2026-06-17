function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] mt-24 bg-background overflow-hidden flex flex-col items-center">
      {/* 1. LỚP CHỮ PORTFOLIO (Nằm trên cùng) */}
      <div className="w-full pt-10 z-20">
        <h1 className="text-[280px] font-bold font-akshar text-center leading-[0.8] text-font">
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

      {/* 3. DESIGNER - ÉP SÁT XUỐNG DƯỚI */}
      <div className="relative w-full mt-auto z-0 flex flex-col items-center">
        <div className="relative flex justify-center ">
          {" "}
          {/* Thêm leading-none ở đây nè bà */}
          <span className="absolute left-[50.3%] -translate-x-1/2 text-[18vw] font-bold font-akshar tracking-tighter text-font ">
            DESIGNER
          </span>
          <h2 className="relative text-[18vw] font-bold font-akshar tracking-tighter text-primary">
            DESIGNER
          </h2>
        </div>
      </div>

      {/* 4. FOOTER MESSAGE - THANH ĐEN SÁT RẠT CHỮ */}
      <div className="w-full bg-font py-4 z-40 relative">
        <p className="text-background text-center text-sm font-light tracking-[0.2em]">
          This is my portfolio. Hope you enjoy it !
        </p>
      </div>
    </section>
  );
}

export default Hero;
