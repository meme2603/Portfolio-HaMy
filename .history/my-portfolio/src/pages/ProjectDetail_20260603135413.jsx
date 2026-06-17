// import React from "react";
import { useParams, Link } from "react-router-dom";
import { websiteProjects, appProjects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

function ProjectDetail() {
  const { id } = useParams();
  const allProjects = [...websiteProjects, ...appProjects];
  const project = allProjects.find((p) => p.id === id);

  return (
    <section className="w-full bg-background text-font p-10 antialiased ">
      {project.mockupHero && (
        <div className="w-full m-20">
          <img
            src={project.mockupHero}
            alt={`${project.title} Main Banner`}
            className="w-full h-auto object-cover "
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Cột trái: Thông tin chữ */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs font-medium tracking-wider text-[#1A120B]/60 block">
              {project.titleJP}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-[#1A120B]">
              {project.title}
            </h1>
            <p className="text-xs md:text-sm leading-relaxed text-[#1A120B]/70 font-light pt-2 max-w-sm">
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
                  サイトを見る →
                </a>
              </div>
            )}
          </div>

          {/* Cột phải: Mockup phối cảnh PC/Mobile lồng nhau */}
          <div className="md:col-span-7 flex justify-center">
            <img
              src={project.mockupIntro || project.img}
              alt="Device Combination Mockup"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ─── BLOCK 3: CONCEPT DISPLAY (Ảnh các màn hình nằm nghiêng trải dài) ─── */}
      {project.mockupConcept && (
        <div className="w-full mb-16">
          <img
            src={project.mockupConcept}
            alt="Perspective Showcase Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* ─── BLOCK 4: 企画・設計詳細 (Khối đen huyền bí ăn điểm chiến lược) ─── */}
      <div className="w-full bg-[#1A120B] text-[#FAF7F2] py-16 md:py-20 mb-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-widest text-center uppercase border-b border-white/10 pb-6 mb-12">
            企画・設計詳細 / PROJECT DESIGN DETAILS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Cột trái */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500/90 mb-2">
                  🎯 ターゲット (Target)
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light pl-4 border-l border-white/10">
                  {project.target || "未設定"}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500/90 mb-2">
                  📌 目的 (Objective)
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light pl-4 border-l border-white/10">
                  {project.objective || "未設定"}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500/90 mb-2">
                  ⚠️ 課題 (Problem)
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light pl-4 border-l border-white/10">
                  {project.problem || "未設定"}
                </p>
              </div>
            </div>

            {/* Cột phải */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500/90 mb-2">
                  🎨 デザイン (Design Concept)
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light pl-4 border-l border-white/10">
                  {project.designConcept || "未設定"}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500/90 mb-2">
                  🧱 情報設計 (Information Architecture)
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light pl-4 border-l border-white/10">
                  {project.ia || "未設定"}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500/90 mb-2">
                  💼 担当範囲 (Scope of Work)
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light pl-4 border-l border-white/10">
                  {project.scope || "未設定"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BLOCK 5: FULL LAYOUT SHOWCASE (2 Dải ảnh PC & Mobile chạy dọc sát nhau) ─── */}
      {(project.mockupPC || project.mockupMobile) && (
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Cột trái: Bản Web PC dài thượt (Chiếm 7 cột) */}
            <div className="col-span-12 md:col-span-7">
              {project.mockupPC ? (
                <div className="w-full bg-white p-2 rounded shadow-sm">
                  <img
                    src={project.mockupPC}
                    alt="Desktop Full Layout"
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="w-full h-96 bg-[#3C2A21]/5 border border-dashed border-[#1A120B]/10 rounded flex items-center justify-center text-xs text-[#1A120B]/40">
                  No Desktop Mockup available
                </div>
              )}
            </div>

            {/* Cột phải: Bản Mobile dài thượt (Chiếm 5 cột) */}
            <div className="col-span-12 md:col-span-5">
              {project.mockupMobile ? (
                <div className="w-full bg-white p-2 rounded shadow-sm">
                  <img
                    src={project.mockupMobile}
                    alt="Mobile Full Layout"
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="w-full h-96 bg-[#3C2A21]/5 border border-dashed border-[#1A120B]/10 rounded flex items-center justify-center text-xs text-[#1A120B]/40">
                  No Mobile Mockup available
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── BLOCK 6: FOOTER NAVIGATION (他にも見る) ─── */}
      <div className="max-w-6xl mx-auto px-6 border-t border-[#1A120B]/10 pt-16">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-xl md:text-2xl font-black text-amber-950 font-sans tracking-wide">
            他にも見る
          </h3>
          <div className="flex gap-2 text-[#1A120B]/40 text-xs font-mono">
            <span>&lt;</span> <span>&gt;</span>
          </div>
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
    </section>
  );
}

export default ProjectDetail;
