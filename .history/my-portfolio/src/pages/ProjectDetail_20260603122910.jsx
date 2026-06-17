import React from "react";
import { useParams, Link } from "react-router-dom";
// Kết nối trực tiếp sang file dữ liệu thật full ảnh của Mini
import { websiteProjects, appProjects } from "../components/projectsData";
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
    <section className="w-full bg-[#FAF7F2] text-[#1A120B] pt-24 pb-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="text-[#1A120B]/40 text-xs hover:text-amber-800 transition-colors uppercase tracking-widest block mb-8"
        >
          ← Back to home
        </Link>

        {/* ─── 📸 MOCKUP 1: TRÊN CÙNG (Hero Mockup) ─── */}
        {project.mockupHero && (
          <div className="w-full bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-2xl p-4 md:p-8 shadow-sm mb-16 flex justify-center">
            <img
              src={project.mockupHero}
              alt={`${project.title} Hero Mockup`}
              className="w-full h-auto max-h-[65vh] object-contain rounded-lg shadow-md"
            />
          </div>
        )}

        {/* ─── KHỐI GIỚI THIỆU & MOCKUP 2 ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold text-amber-800/60 tracking-wider uppercase">
              {project.titleJP}
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
              {project.title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed font-light text-[#1A120B]/90 pt-4 border-t border-[#1A120B]/10">
              {project.desc}
            </p>
            {/* Thêm quả nút link chạy dự án thật nếu có */}
            {project.URL && (
              <a
                href={project.URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block pt-2 text-sm text-amber-800 underline tracking-wide hover:text-[#3C2A21]"
              >
                Visit Live Website →
              </a>
            )}
          </div>

          {/* ─── 📸 MOCKUP 2: ẢNH NHỎ BÊN CẠNH PHẦN GIỚI THIỆU ─── */}
          <div className="md:col-span-5 bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-xl p-4 shadow-sm">
            <img
              src={project.mockupIntro || project.img}
              alt="Introduction Mockup"
              className="w-full h-52 object-cover rounded shadow-inner"
            />
          </div>
        </div>

        {/* ─── 📸 MOCKUP 3: ẢNH TO GÓC CẠNH NGHỆ THUẬT (Giữa trang) ─── */}
        {project.mockupConcept && (
          <div className="w-full bg-[#1A120B] rounded-2xl p-6 md:p-12 mb-20 shadow-xl border border-white/5">
            <p className="text-white/30 text-[10px] tracking-[4px] uppercase mb-4 font-mono">
              - Concept Visual Display -
            </p>
            <img
              src={project.mockupConcept}
              alt="Concept Perspective Mockup"
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-lg mx-auto"
            />
          </div>
        )}

        {/* ─── 📝 KHỐI 4: PHẦN THÔNG TIN CHI TIẾT (企画・設計詳細) ─── */}
        <div className="bg-[#F5EFE6] rounded-2xl p-8 md:p-12 border border-[#3C2A21]/10 mb-20">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider border-b border-[#1A120B]/20 pb-4 mb-8 text-amber-900 uppercase">
            企画・設計詳細 / Project Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Cột trái */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  🎯 ターゲット (Target)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-3 border-l-2 border-amber-800/40">
                  {project.target}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  📌 目的 (Objective)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-3 border-l-2 border-amber-800/40">
                  {project.objective}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  ⚠️ 課題 (Problem)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-3 border-l-2 border-amber-800/40">
                  {project.problem}
                </p>
              </div>
            </div>

            {/* Cột phải */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  🎨 デザイン (Design Concept)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-3 border-l-2 border-amber-800/40">
                  {project.designConcept}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  🧱 情報設計 (Information Architecture)
                </h3>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-3 border-l-2 border-amber-800/40">
                  {project.ia}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A120B] uppercase tracking-wider mb-2">
                  💼 担当範囲 (Scope of Work)
                </h3>
                {/* Đổi từ project.role sang project.scope cho khớp với file data của bà nè 👇 */}
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-3 border-l-2 border-amber-800/40">
                  {project.scope}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 📸 MOCKUP 4 & 5: HAI MOCKUP CỦA SITE VÀ MOBILE ─── */}
        {(project.mockupPC || project.mockupMobile) && (
          <>
            <div className="text-center mb-8">
              <p className="text-xs tracking-[6px] text-[#1A120B]/40 uppercase mb-2">
                - Device Layout Previews -
              </p>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#1A120B]">
                全体レイアウト
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
              {/* 📸 MOCKUP 4: Bản Website PC dài (Nếu dự án nào khum có mockupPC như mảng App thì tự ẩn) */}
              {project.mockupPC ? (
                <div className="lg:col-span-8 bg-[#1A120B] p-3 rounded-xl shadow-md border border-[#1A120B]/10">
                  <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2 pl-2">
                    Desktop Version Layout
                  </p>
                  <div className="w-full rounded bg-[#FAF7F2] overflow-hidden">
                    <img
                      src={project.mockupPC}
                      alt="Desktop Full View"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ) : null}

              {/* 📸 MOCKUP 5: Bản Mobile dài (Nếu khum có bản PC thì đẩy chiều rộng ra full 12 cột cho đẹp) */}
              {project.mockupMobile ? (
                <div
                  className={`${project.mockupPC ? "lg:col-span-4 lg:sticky lg:top-24" : "lg:col-span-12 max-w-md mx-auto"} bg-[#1A120B] p-3 rounded-xl shadow-md border border-[#1A120B]/10`}
                >
                  <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2 pl-2">
                    Mobile Version Layout
                  </p>
                  <div className="w-full rounded bg-[#FAF7F2] overflow-hidden">
                    <img
                      src={project.mockupMobile}
                      alt="Mobile Full View"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </>
        )}

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
