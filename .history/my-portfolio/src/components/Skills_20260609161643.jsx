import { skillData } from "../data/ProjectsData";

function Skill() {
  return (
    <section className="w-full bg-[#FAF7F2] text-[#1A120B] py-20 px-6 sm:px-12 md:px-20 border-t border-[#1A120B]/5">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề lớn của Section */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1A120B]/50 block mb-2">
            // Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins tracking-tight uppercase">
            Skills & Tools
          </h2>
        </div>

        {/* LƯỚI KHÔNG GIAN SKILLS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ─── CỘT 1: DESIGN TOOL (Chiếm 5 cột trên PC) ─── */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-b border-[#1A120B]/10 pb-4">
              <h3 className="text-xl font-bold font-poppins text-amber-900 tracking-wide uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-800"></span>
                Design Tool
              </h3>
            </div>

            <div className="space-y-6">
              {/* Figma Card */}
              <div className="group bg-white p-6 rounded-sm border border-[#1A120B]/5 shadow-sm hover:shadow-md hover:border-amber-800/30 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold font-poppins tracking-wide">
                    Figma
                  </h4>
                  <span className="text-[10px] font-mono bg-[#1A120B]/5 px-2 py-0.5 rounded-full text-[#1A120B]/60">
                    Expertise
                  </span>
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-[#1A120B]/80 font-light">
                  Figmaを活用したUIデザインやデザインシステム設計を得意としています。
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="text-[11px] text-[#1A120B]/60 bg-[#FAF7F2] px-2 py-1 rounded-sm font-sans">
                    Auto Layout
                  </span>
                  <span className="text-[11px] text-[#1A120B]/60 bg-[#FAF7F2] px-2 py-1 rounded-sm font-sans">
                    Design System
                  </span>
                </div>
              </div>

              {/* UI/UX Card */}
              <div className="group bg-white p-6 rounded-sm border border-[#1A120B]/5 shadow-sm hover:shadow-md hover:border-amber-800/30 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold font-poppins tracking-wide">
                    UI/UX
                  </h4>
                  <span className="text-[10px] font-mono bg-[#1A120B]/5 px-2 py-0.5 rounded-full text-[#1A120B]/60">
                    Core
                  </span>
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-[#1A120B]/80 font-light">
                  情報設計やユーザビリティを意識したUIデザイン制作を得意としています。
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="text-[11px] text-[#1A120B]/60 bg-[#FAF7F2] px-2 py-1 rounded-sm font-sans">
                    IA (情報設計)
                  </span>
                  <span className="text-[11px] text-[#1A120B]/60 bg-[#FAF7F2] px-2 py-1 rounded-sm font-sans">
                    Usability
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── CỘT 2: DEVELOPMENT (Chiếm 7 cột trên PC - Rộng hơn để cân bằng text) ─── */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-[#1A120B]/10 pb-4">
              <h3 className="text-xl font-bold font-poppins text-amber-900 tracking-wide uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-800"></span>
                Development
              </h3>
            </div>

            <div className="space-y-6">
              {/* HTML/CSS/Tailwind Card */}
              <div className="group bg-white p-6 rounded-sm border border-[#1A120B]/5 shadow-sm hover:shadow-md hover:border-amber-800/30 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold font-poppins tracking-wide">
                    HTML / CSS / Tailwind CSS
                  </h4>
                  <span className="text-[10px] font-mono bg-[#1A120B]/5 px-2 py-0.5 rounded-full text-[#1A120B]/60">
                    Responsive
                  </span>
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-[#1A120B]/80 font-light">
                  レスポンシブ対応やUI実装を中心に、使いやすいWebサイト制作に取り組んでいます。
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="text-[11px] text-[#1A120B]/60 bg-[#FAF7F2] px-2 py-1 rounded-sm font-sans">
                    Tailwind CSS
                  </span>
                  <span className="text-[11px] text-[#1A120B]/60 bg-[#FAF7F2] px-2 py-1 rounded-sm font-sans">
                    Responsive Design
                  </span>
                </div>
              </div>

              {/* JavaScript/React Card */}
              <div className="group bg-white p-6 rounded-sm border border-[#1A120B]/5 shadow-sm hover:shadow-md hover:border-amber-800/30 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold font-poppins tracking-wide">
                    JavaScript / React
                  </h4>
                  <span className="text-[10px] font-mono bg-[#1A120B]/5 px-2 py-0.5 rounded-full text-[#1A120B]/60">
                    Learning
                  </span>
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-[#1A120B]/80 font-light">
                  コンポーネントベースの開発や、状態管理、動きのあるUI表現について学習しています。
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="text-[11px] text-[#1A120B]/60 bg-[#FAF7F2] px-2 py-1 rounded-sm font-sans">
                    React.js
                  </span>
                  <span className="text-[11px] text-[#1A120B]/60 bg-[#FAF7F2] px-2 py-1 rounded-sm font-sans">
                    Component-driven
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
