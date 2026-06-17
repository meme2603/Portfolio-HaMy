// import React from "react";
import { useParams, Link } from "react-router-dom";
import { websiteProjects, appProjects } from "../data/ProjectsData";
import ProjectCard from "../components/ProjectCard";

function ProjectDetail() {
  const { id } = useParams();
  const allProjects = [...websiteProjects, ...appProjects];
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] text-[#1A120B]">
        <p className="mb-4 font-sans text-lg">
          Dự án này khum tồn tại rồi bà ơi...
        </p>
        <Link
          to="/"
          className="text-amber-800 underline uppercase tracking-wider text-sm"
        >
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    // 👇 FIX 1: Thêm padding 40px bọc đều toàn bộ trang theo yêu cầu của bà
    <section className="w-full bg-[#FAF7F2] text-[#1A120B] p-[40px] font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Nút quay lại trang chủ nhỏ gọn */}
        <div className="mb-8">
          <Link
            to="/"
            className="text-[#1A120B]/40 text-xs hover:text-amber-800 transition-colors uppercase tracking-widest inline-block"
          >
            ← Back to home
          </Link>
        </div>

        {/* ─── BLOCK 1: HERO IMAGE (Ảnh to tràn khung) ─── */}
        {project.mockupHero && (
          <div className="w-full mb-16 flex justify-center">
            <img
              src={project.mockupHero}
              alt={`${project.title} Hero Mockup`}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* ─── BLOCK 2: KHỐI GIỚI THIỆU & MOCKUP 2 (Xóa bỏ viền ngoài ảnh nhỏ) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-bold text-amber-800/60 tracking-wider uppercase block">
              {project.titleJP}
            </span>
            {/* 👇 FIX 2: Đổi từ project.title sang project.name theo đúng thuộc tính bà đã set thêm trong data */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-[#1A120B]">
              {project.name || project.title}
            </h1>
            <p className="text-xs md:text-sm leading-relaxed font-light text-[#1A120B]/70 pt-4 border-t border-[#1A120B]/10">
              {project.desc}
            </p>
            {project.URL && (
              <div className="pt-2">
                <a
                  href={project.URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-800 underline tracking-wide hover:text-[#3C2A21]"
                >
                  Visit Live Website →
                </a>
              </div>
            )}
          </div>

          {/* 📸 MOCKUP 2: Đã gỡ bỏ toàn bộ viền và nền xám rườm rà */}
          <div className="md:col-span-7 flex justify-center">
            <img
              src={project.mockupIntro || project.img}
              alt="Introduction Mockup"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* ─── BLOCK 3: MOCKUP 3 (Ảnh phối cảnh nghiêng tràn rộng khung hình) ─── */}
        {project.mockupConcept && (
          <div className="w-full mb-20">
            <img
              src={project.mockupConcept}
              alt="Concept Perspective Mockup"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* ─── BLOCK 4: PHẦN THÔNG TIN CHI TIẾT (Fix chuẩn đét 100% theo ảnh chụp màn hình Figma) ─── */}
        <div className="w-full bg-[#000000] text-[#FAF7F2] py-16 md:py-20 mb-20 rounded-2xl shadow-md">
          <div className="max-w-4xl mx-auto px-8 md:px-12">
            {/* Đường kẻ mờ chia dòng, không dùng icon, dóng chữ trái phải tinh tế */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10 font-sans">
              {/* 1. クライアント */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  クライアント
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.client || "未設定"}
                </div>
              </div>

              {/* 2. ターゲット */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  ターゲット
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.target || "未設定"}
                </div>
              </div>

              {/* 3. 目的 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  目的
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                  {project.objective || "未設定"}
                </div>
              </div>

              {/* 4. 課題 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  課題
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.problem || "未設定"}
                </div>
              </div>

              {/* 5. デザイン */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  デザイン
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.designConcept || "未設定"}
                </div>
              </div>

              {/* 6. 情報設計 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  情報設計
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.ia || "未設定"}
                </div>
              </div>

              {/* 7. 担当範囲 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  担当範囲
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.scope || "未設定"}
                </div>
              </div>

              {/* 8. 制作期間 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  制作期間
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                  {project.period || "未設定"}
                </div>
              </div>

              {/* 9. 使用ツール */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  使用ツール
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.tools || "Illustrator / Photoshop / Figma"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BLOCK 5: MOCKUP 4 & 5 (Xóa hoàn toàn viền hộp đen rườm rà, ảnh trải trực tiếp lên nền kem) ─── */}
        {(project.mockupPC || project.mockupMobile) && (
          <div className="w-full mb-28">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Bản Web PC dài thượt */}
              <div className="col-span-12 md:col-span-7">
                {project.mockupPC && (
                  <img
                    src={project.mockupPC}
                    alt="Desktop Full View"
                    className="w-full h-auto shadow-sm rounded-sm"
                  />
                )}
              </div>

              {/* Bản Mobile dài thượt */}
              <div className="col-span-12 md:col-span-5">
                {project.mockupMobile && (
                  <img
                    src={project.mockupMobile}
                    alt="Mobile Full View"
                    className="w-full h-auto shadow-sm rounded-sm"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* ─── BLOCK 6: 他にも見る ─── */}
        <div className="w-full border-t border-[#1A120B]/10 pt-16">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-amber-950 tracking-wide">
              他にも見る
            </h3>
            <span className="text-xs tracking-widest text-[#1A120B]/40 uppercase font-bold">
              More projects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects
              .filter((p) => p.id !== id)
              .slice(0, 3)
              .map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
