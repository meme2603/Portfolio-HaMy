// import React from "react";
import { useParams, Link } from "react-router-dom";
import { websiteProjects, appProjects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

function ProjectDetail() {
  const { id } = useParams();
  const allProjects = [...websiteProjects, ...appProjects];
  const project = allProjects.find((p) => p.id === id);

  return (
    // 👇 CẢ TRANG ĐƯỢC BỌC TRONG ĐÚNG 1 CÁI KHUNG CÓ PADDING 40PX ĐỀU CÁC GÓC
    <section className="w-full bg-background text-font py-10">
      <div className="w-full mx-auto">
        {/* ─── BLOCK 1: HERO IMAGE (Ảnh to tràn khung) ─── */}
        {project.mockupHero && (
          <div className="w-full max-w-7xl mx-auto mt-24 mb-10 flex justify-center">
            <img
              src={project.mockupHero}
              alt={`${project.title} Main Banner`}
              className="w-full h-auto object-cover shadow-sm"
            />
          </div>
        )}

        {/* ─── BLOCK 2: PROJECT OVERVIEW (2 Cột: Trái Text - Phải Mockup) ─── */}
        <div className="w-full max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Cột trái: Thông tin chữ */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-medium tracking-wider text-[#1A120B]/60 block">
                {project.titleJP}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-[#1A120B]">
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
                    サイトを見る
                  </a>
                </div>
              )}
            </div>

            <div className="md:col-span-7 flex justify-center">
              <img
                src={project.mockupIntro || project.img}
                alt="Device Combination Mockup"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {project.mockupConcept && (
          <div className="w-full mb-16">
            <img
              src={project.mockupConcept}
              alt="Perspective Showcase Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="w-full max-w-7xl m-auto bg-font text-background md:py-16 mb-16 shadow-md">
          <div className="max-w-4xl mx-auto px-8 md:px-12">
            {/* Danh sách các mục xếp theo dòng chảy từ trên xuống */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {/* 1. クライアント (Client) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  クライアント
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.client ||
                    "千葉県銚子市の水族館 銚子アクアワールド様（架空クライアント）"}
                </div>
              </div>

              {/* 2. ターゲット (Target) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  ターゲット
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.target || "未設定"}
                </div>
              </div>

              {/* 3. 目的 (Objective) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  目的
                </div>
                {/* Hỗ trợ hiển thị dạng xuống dòng nếu nội dung có dấu xuống dòng \n hoặc dấu đầu dòng */}
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                  {project.objective || "未設定"}
                </div>
              </div>

              {/* 4. 課題 (Problem) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  課題
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.problem || "未設定"}
                </div>
              </div>

              {/* 5. デザイン (Design Concept) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  デザイン
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.designConcept || "未設定"}
                </div>
              </div>

              {/* 6. 情報設計 (Information Architecture) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  情報設計
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.ia || "未設定"}
                </div>
              </div>

              {/* 7. 担当範囲 (Scope of Work) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  担当範囲
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.scope || "未設定"}
                </div>
              </div>

              {/* 8. 制作期間 (Production Period) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  制作期間
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                  {project.period || "未設定"}
                </div>
              </div>

              {/* 9. 使用ツール (Tools Used) */}
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

        {(project.mockupPC || project.mockupMobile) && (
          <div className="w-full max-w-[1440px] m-auto mb-24">
            <div className="grid grid-cols-12 gap-2 items-start">
              <div className="col-span-12 md:col-span-7">
                {project.mockupPC && (
                  <img
                    src={project.mockupPC}
                    alt="Desktop Full Layout View"
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>

              {/* Bản Mobile dài thượt (Chiếm 5 cột) - Không viền, không nền trắng */}
              <div className="col-span-12 md:col-span-5">
                {project.mockupMobile && (
                  <img
                    src={project.mockupMobile}
                    alt="Mobile Full Layout View"
                    className="w- h-auto object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        )}
        {/* ─── BLOCK 6: FOOTER NAVIGATION (他にも見る) ─── */}
        <div className="w-full border-t border-[#1A120B]/10 pt-16">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-lg md:text-xl font-bold text-amber-950 tracking-wide">
              他にも見る
            </h3>
            <div className="flex gap-2 text-[#1A120B]/40 text-xs font-mono">
              <span className="cursor-pointer hover:text-amber-800">&lt;</span>
              <span className="cursor-pointer hover:text-amber-800">&gt;</span>
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
      </div>
    </section>
  );
}

export default ProjectDetail;
