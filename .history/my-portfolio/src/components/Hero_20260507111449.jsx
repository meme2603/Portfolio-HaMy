function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col items-center">
      {/* 1. PORTFOLIO - Nằm trên cùng, z-index cao để đè lên ảnh nếu cần */}
      <div className="w-full pt-20 md:pt-10 z-20">
        <h1 className="text-[15vw] md:text-[18vw] font-bold font-logo text-center leading-[0.8] tracking-tighter text-primary">
          PORTFOLIO
        </h1>
      </div>

      {/* 2. PHẦN THÂN GIỮA - Chứa ảnh và 2 khối text 2 bên */}
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-10 md:mt-[-50px]">
        {/* Khối chữ bên trái */}
        <div className="hidden md:block w-1/3 text-left space-y-2 z-30">
          <p className="text-xl">Hi!</p>
          <p className="text-xl">
            My name is{" "}
            <span className="font-bold text-2xl">NGUYEN THI HA MY</span>
          </p>
          <p className="text-xl">I'm from Vietnam</p>
        </div>

        {/* ẢNH CHÂN DUNG - Nằm chính giữa, dùng absolute để căn chỉnh chuẩn */}
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 w-[80%] md:w-[450px] z-10">
          <img
            src="/path-to-your-photo.png"
            alt="Ha My"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Khối chữ bên phải */}
        <div className="hidden md:block w-1/3 text-right space-y-2 z-30">
          <p className="text-xl">
            I'm <span className="font-bold text-2xl">UI/UX Designer</span> and
          </p>
          <p className="text-2xl font-bold">Basic Frontend</p>
          <p className="text-xl">Now I'm living in Japan.</p>
        </div>
      </div>

      {/* 3. DESIGNER - Chữ đỏ khổng lồ nằm dưới cùng */}
      <div className="relative w-full mt-auto mb-10 md:mb-0 z-0">
        <div className="relative flex justify-center">
          {/* Lớp bóng đen */}
          <span className="absolute top-[4px] left-[50.5%] -translate-x-1/2 text-[18vw] font-bold font-logo leading-none tracking-tighter text-primary">
            DESIGNER
          </span>
          {/* Chữ đỏ chính */}
          <h2 className="relative text-[18vw] font-bold font-logo leading-none tracking-tighter text-secondary-red">
            DESIGNER
          </h2>
        </div>
      </div>

      {/* 4. Footer đen (Full width) */}
      <div className="w-full bg-primary py-4 z-40">
        <p className="text-background text-center text-sm font-light tracking-widest uppercase">
          This is my portfolio. Hope you enjoy it !
        </p>
      </div>
    </section>
  );
}
