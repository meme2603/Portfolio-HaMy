import { useParams, Link } from "react-router-dom";

// Data dự phòng chuẩn tone màu và chữ nghĩa theo ảnh "coffee_2.jpg"
const fallbackProject = {
  id: "coffee-shop",
  title: "THE COFFEE HOUSE",
  titleJP: "カフェショップサイト",
  concept:
    "家族みんなが安心して過ごせるカフェをテーマに、Webサイトを制作しました。ターゲット層が親しみやすさを感じられるよう、温かみのあるカラーパレットとシンプルなレイアウトを意識してデザインしました。",
  workflow:
    "FigmaのAuto LayoutやVariablesを活用してデザインシステムを構築。コンポーネント指向を意識した設計データを作成することで、開発フェーズへのハンドオフをスムーズにしました。",
  role: "UI/UX Designer / Frontend Developer",
  tags: ["Figma", "HTML5", "CSS3", "JavaScript"],
  // Lấy tạm ảnh unplash làm nền banner
  img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
};

function ProjectDetail() {
  const { id } = useParams();

  // Tạm thời mình lấy data fallback làm chuẩn theo ảnh coffee_2.jpg để lên layout cho đẹp nha
  const project = fallbackProject;

  return (
    <section className="w-full bg-[#FAF7F2] text-[#1A120B] pt-16 pb-24 font-sans antialiased">
      {/* ─── KHỐI 1: HERO BANNER (Top of coffee_2.jpg) ─── */}
      <div className="w-full h-[70vh] relative overflow-hidden bg-[#1A120B]">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover opacity-40 filter brightness-90"
        />
        {/* Nội dung đè lên giữa hoặc góc trái banner */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 max-w-7xl mx-auto text-white">
          <p className="text-xs tracking-[4px] uppercase text-white/60 mb-3">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-4 drop-shadow-md">
            {project.title}
          </h1>
          <div className="w-20 h-[2px] bg-white/40 mb-4"></div>
          <p className="text-sm md:text-base text-white/80 max-w-xl font-light leading-relaxed">
            {project.titleJP} — Design to Code Portfolio Project
          </p>
        </div>
      </div>

      {/* ─── KHỐI 2: OVERVIEW & MOCKUP DISPLAY ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Cột chữ bên trái */}
        <div className="lg:col-span-5 space-y-6">
          <Link
            to="/"
            className="text-[#1A120B]/40 text-xs hover:text-[#3C2A21] transition-colors uppercase tracking-widest block"
          >
            ← Back to home
          </Link>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#3C2A21]/60 tracking-wider uppercase">
              {project.titleJP}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {project.title}
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#1A120B]/80 leading-relaxed font-light">
            {project.concept}
          </p>
          <div className="pt-6 border-t border-[#1A120B]/10 space-y-2 text-xs text-[#1A120B]/60">
            <p>
              <span className="font-bold text-[#1A120B] mr-2">ROLE:</span>{" "}
              {project.role}
            </p>
            <p>
              <span className="font-bold text-[#1A120B] mr-2">TECH:</span>{" "}
              {project.tags.join(", ")}
            </p>
          </div>
        </div>

        {/* Cột ảnh Mockup song song PC + Mobile bên phải */}
        <div className="lg:col-span-7 bg-[#3C2A21]/5 rounded-2xl p-6 md:p-10 border border-[#3C2A21]/10 shadow-sm flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            {/* Giả lập cái ảnh thiết bị phối cảnh */}
            <img
              src={project.img}
              alt="Mockup devices"
              className="w-full h-auto rounded-lg shadow-xl border border-white/20"
            />
          </div>
        </div>
      </div>

      {/* ─── KHỐI 3: DESIGN SYSTEM GALLERY (Khối ảnh xéo nghệ thuật ở giữa coffee_2.jpg) ─── */}
      <div className="w-full bg-[#1A120B] py-24 overflow-hidden relative my-10">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-white/90">
          <p className="text-xs tracking-[6px] text-white/40 uppercase mb-2">
            / 02. Design System & Components
          </p>
          <h3 className="text-2xl font-bold font-sans">デザインシステム</h3>
        </div>

        {/* Dải ảnh nghiêng nghệ thuật chạy ngang */}
        <div className="flex gap-6 overflow-x-auto pb-8 px-6 scrollbar-none transform -rotate-2 scale-102 origin-center">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex-shrink-0 w-72 md:w-96 bg-[#FAF7F2] p-3 rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={project.img}
                alt="Design layout grid"
                className="w-full h-48 md:h-64 object-cover rounded mb-2"
              />
              <p className="text-[10px] uppercase tracking-widest text-[#1A120B]/40 font-bold">
                Layout Card 0{item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── KHỐI 4: FULL LAYOUT DISPLAY (Bản PC & Mobile dài sọc như trong coffee_2.jpg) ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[6px] text-[#1A120B]/40 uppercase mb-2">
            - Full Layout Preview -
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A120B]">
            全体レイアウト
          </h3>
        </div>

        {/* Chia 2 cột: Cột trái hiện bản PC dài, cột phải hiện bản Mobile dài */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bản PC (Chiếm 8 cột) */}
          <div className="lg:col-span-8 bg-[#1A120B] p-3 rounded-xl shadow-xl border border-[#1A120B]/10">
            <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2 pl-2">
              Desktop Version
            </p>
            <div className="w-full rounded bg-[#FAF7F2] overflow-hidden border border-[#1A120B]/5">
              <img
                src={project.img}
                alt="Desktop Full Layout"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Bản Mobile (Chiếm 4 cột) */}
          <div className="lg:col-span-4 bg-[#1A120B] p-3 rounded-xl shadow-xl border border-[#1A120B]/10 lg:sticky lg:top-24">
            <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2 pl-2">
              Mobile Version
            </p>
            <div className="w-full rounded bg-[#FAF7F2] overflow-hidden border border-[#1A120B]/5">
              <img
                src={project.img}
                alt="Mobile Full Layout"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── KHỐI 5: OTHERS WORKS (他にも見る) ─── */}
      <div className="w-full border-t border-[#1A120B]/10 pt-20 bg-[#F5EFE6]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-3xl font-black text-[#8B0000] font-sans tracking-wide">
              他にも見る
            </h3>
            <span className="text-xs tracking-widest text-[#1A120B]/40 uppercase font-bold">
              More projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Link to="/" key={i} className="group block space-y-3">
                <div className="w-full h-44 overflow-hidden rounded-lg shadow-sm bg-[#1A120B]/5 border border-[#1A120B]/10">
                  <img
                    src={project.img}
                    alt="Next work"
                    className="w-full h-full object-cover filter contrast-[95%] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h4 className="font-bold text-[#1A120B] group-hover:text-[#3C2A21] transition-colors text-sm tracking-wide uppercase">
                  ← Back to home to explore more works
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
