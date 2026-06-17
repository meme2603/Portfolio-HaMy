// import React from "react";
import { useParams, Link } from "react-router-dom";
// Import file data và component ProjectCard của bà vào đây
import { websiteProjects, appProjects } from "./ProjectsData";
import ProjectCard from "./ProjectCard";

function ProjectDetail() {
  const { id } = useParams();
  const allProjects = [...websiteProjects, ...appProjects];

  // Tìm dự án thực tế dựa trên ID động trên URL
  const project = allProjects.find((p) => p.id === id);

  // Nếu khum tìm thấy dự án (đề phòng gõ đại URL)
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
    <section className="w-full bg-[#FAF7F2] text-[#1A120B] pt-24 pb-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        {/* Nút quay lại trang chủ nhỏ gọn ở góc trên */}
        <Link
          to="/"
          className="text-[#1A120B]/40 text-xs hover:text-amber-800 transition-colors uppercase tracking-widest block mb-8"
        >
          ← Back to home
        </Link>

        {/* ─── KHỐI 1: MOCKUP Ở TRÊN CÙNG (Hero Mockup) ─── */}
        <div className="w-full bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-2xl p-4 md:p-8 shadow-sm mb-16 flex justify-center">
          <img
            src={project.img} // Sau này đổi thành project.heroMockup nếu có ảnh riêng nha
            alt={`${project.title} Hero Mockup`}
            className="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-md"
          />
        </div>

        {/* ─── KHỐI 2: PHẦN GIỚI THIỆU & MOCKUP NHỎ ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20">
          {/* Text giới thiệu (7 cột) */}
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold text-amber-800/60 tracking-wider uppercase">
              {project.titleJP}
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              {project.title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed font-light text-[#1A120B]/90 pt-2 border-t border-[#1A120B]/10">
              {project.desc}
            </p>
          </div>
          {/* Mockup nhỏ kế bên (5 cột) */}
          <div className="md:col-span-5 bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-xl p-4">
            <img
              src={project.img} // Đổi thành project.smallMockup nếu có
              alt="Small Mockup"
              className="w-full h-48 object-cover rounded shadow-sm"
            />
          </div>
        </div>

        {/* ─── KHỐI 3: THÊM 1 ẢNH MOCKUP (Trưng bày layout góc cạnh) ─── */}
        <div className="w-full bg-[#1A120B] rounded-2xl p-6 md:p-12 mb-20 shadow-xl border border-white/5">
          <p className="text-white/30 text-[10px] tracking-[4px] uppercase mb-4 font-mono">
            - Concept Design Perspective -
          </p>
          <img
            src={project.img} // Đổi thành project.midMockup nếu có
            alt="Mid Mockup Display"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* ─── KHỐI 4: PHẦN THÔNG TIN CHI TIẾT (Target, 目的, 課題...) ─── */}
        <div className="bg-[#F5EFE6] rounded-2xl p-8 md:p-12 border border-[#3C2A21]/10 mb-20">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider border-b border-[#1A120B]/20 pb-4 mb-8 text-amber-900">
            DỰ ÁN CHI TIẾT / 企画・設計詳細
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Cột Trái */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  🎯 ターゲット (Target)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light">
                  {project.target || "Data đang cập nhật..."}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  📌 目的 (Objective)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light">
                  {project.objective || "Data đang cập nhật..."}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  ⚠️ 課題 (Problem)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light">
                  {project.problem || "Data đang cập nhật..."}
                </p>
              </div>
            </div>

            {/* Cột Phải */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  🎨 デザイン (Design Concept)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light">
                  {project.designConcept || "Data đang cập nhật..."}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  🧱 情報設計 (Information Architecture)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light">
                  {project.ia || "Data đang cập nhật..."}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  💼 担当範囲 (Scope of Work)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light">
                  {project.role || "Data đang cập nhật..."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── KHỐI 5: 2 MOCKUP CỦA SITE VÀ MOBILE ─── */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[6px] text-[#1A120B]/40 uppercase mb-2">
            - Device Layout Previews -
          </p>
          <h3 className="text-xl md:text-2xl font-extrabold text-[#1A120B]">
            全体レイアウト (PC & Mobile)
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          {/* Bản Website PC (Chiếm 8 cột) */}
          <div className="lg:col-span-8 bg-[#1A120B] p-3 rounded-xl shadow-md border border-[#1A120B]/10">
            <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2 pl-2">
              Desktop Version Layout
            </p>
            <div className="w-full rounded bg-[#FAF7F2] overflow-hidden">
              <img
                src={project.img}
                alt="Desktop Full View"
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Bản Mobile (Chiếm 4 cột) */}
          <div className="lg:col-span-4 bg-[#1A120B] p-3 rounded-xl shadow-md border border-[#1A120B]/10 lg:sticky lg:top-24">
            <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2 pl-2">
              Mobile Version Layout
            </p>
            <div className="w-full rounded bg-[#FAF7F2] overflow-hidden">
              <img
                src={project.img}
                alt="Mobile Full View"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* ─── KHỐI 6: 他にも見る (Dùng lại component ProjectCard) ─── */}
        <div className="w-full border-t border-[#1A120B]/10 pt-16">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-amber-900 font-sans tracking-wide">
              他にも見る
            </h3>
            <span className="text-xs tracking-widest text-[#1A120B]/40 uppercase font-bold">
              More projects
            </span>
          </div>

          {/* Grid in ra các card gợi ý sử dụng lại đúng Component ProjectCard của bà */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects
              .filter((p) => p.id !== id) // Lọc bỏ dự án hiện tại ra khum cho hiện trùng
              .slice(0, 3) // Chỉ lấy đúng 3 dự án khác để hiển thị
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
