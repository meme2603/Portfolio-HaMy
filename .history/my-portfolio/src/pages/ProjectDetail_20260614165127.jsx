// import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { websiteProjects, appProjects } from "../data/projectsData";
// import ProjectCard from "../components/ProjectCard";

function ProjectDetail() {
  const { id } = useParams();
  const scrollRef = useRef(null);

  const allProjects = [...websiteProjects, ...appProjects];
  const project = allProjects.find((p) => p.id === id);
  const isWebsite = websiteProjects.some((p) => p.id === id);
  const isPortfolio = id === "portfolio";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderWebsiteLayout = () => {
    return (
      <section className="w-full bg-background text-font py-10">
        <div className="w-full mx-auto">
          {project.mockupHero && (
            <div className="w-full max-w-7xl mx-auto mt-24 mb-10 flex justify-center">
              <img
                src={project.mockupHero}
                alt={`${project.title} Main Banner`}
                className="w-full h-auto object-cover shadow-sm"
              />
            </div>
          )}

          <div className="w-full max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 space-y-4">
                <span className="text-xs font-medium tracking-wider text-[#1A120B]/60 block">
                  {project.titleJP}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-[#4B2E2B]">
                  {project.name}
                </h1>
                <p className="text-xs md:text-sm leading-relaxed text-[#1A120B]/70 font-light pt-2">
                  {project.proposal || project.desc}
                </p>
                {project.URL && (
                  <div className="pt-2">
                    <a
                      href={project.URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-2xl text-amber-800 underline tracking-wide hover:text-[#3C2A21]"
                    >
                      サイトを見る
                    </a>
                  </div>
                )}
              </div>

              <div className="md:col-span-7 flex justify-center">
                <img
                  src={project.mockupIntro}
                  // alt="Device Combination Mockup"
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
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    企画
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.proposal || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    ターゲット
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.target || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    目的
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                    {project.objective || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    デザイン
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.designConcept || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    問題点・課題点
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.problem || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    気づき・学び
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.Learnings || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    担当範囲
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.scope || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    制作期間
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                    {project.period || "未設定"}
                  </div>
                </div>

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
            <div className="w-full max-w-7xl mx-auto mb-24">
              <div className="grid grid-cols-12 gap-10 items-start">
                <div className="col-span-12 md:col-span-7">
                  {project.mockupPC && (
                    <img
                      src={project.mockupPC}
                      alt="Desktop Full Layout View"
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>

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
        </div>
      </section>
    );
  };

  const renderAppLayout = () => {
    return (
      <section className="w-full bg-font text-background py-10">
        <div className="w-full mx-auto">
          {project.mockupHero && (
            <div className="w-full max-w-7xl mx-auto mt-24 mb-10 flex justify-center">
              <img
                src={project.mockupHero}
                alt={`${project.title} Main Banner`}
                className="w-full h-auto object-cover shadow-sm"
              />
            </div>
          )}

          <div className="w-full max-w-7xl mx-auto mb-20 px-8 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-medium tracking-wider text-background block">
                  {project.titleJP}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-background font-poppins">
                  {project.title}
                </h1>
                <p className="text-xs md:text-sm leading-relaxed text-background font-light pt-2">
                  {project.proposal || project.desc}
                </p>
                {project.URL && (
                  <div className="pt-2">
                    <a
                      href={project.URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-2xl text-background underline tracking-wide hover:text-[#3C2A21]"
                    >
                      サイトを見る
                    </a>
                  </div>
                )}
              </div>

              <div className="md:col-span-6 bg-background/5 p-8 rounded-sm border border-background/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-background mb-3 font-poppins">
                  ーー 制作 メンバー (Members)
                </h3>
                <div className="text-xs md:text-sm text-background/80 leading-relaxed font-light whitespace-pre-line">
                  {/* Nếu dự án có trường member trong data thì hiện, khum thì mặc định là cá nhân制作 */}
                  {project.member
                    ? project.member
                    : "個人制作\nUI/UX Design & Prototype: Mini"}
                </div>
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
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    クライアント
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.client || "自主制作"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    ターゲット
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.target || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    目的
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                    {project.objective || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    課題
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.problem || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    デザイン
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.designConcept || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    情報設計
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.ia || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    担当範囲
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.scope || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    制作期間
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                    {project.period || "未設定"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                  <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                    使用ツール
                  </div>
                  <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                    {project.tools || "Figma"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {project.mockupMobile && (
            <div className="w-full max-w-4xl mx-auto mb-24 px-8 flex justify-center">
              <div className="w-full  shadow-sm border border-[#1A120B]/5 rounded-sm overflow-hidden">
                <img
                  src={project.mockupMobile}
                  alt="Mobile App Full Layout View"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  const renderPortfolioLayout = () => {
    return (
      <section className="w-full bg-[#FAF7F2] text-[#1A120B] py-10">
        <div className="w-full mx-auto">
          {project.mockupHero && (
            <div className="w-full max-w-7xl mx-auto mt-24 mb-10 flex justify-center bg-zinc-200/40 p-4 rounded-sm">
              <img
                src={project.mockupHero}
                alt="Portfolio Premium Banner"
                className="w-full h-fit object-contain shadow-md block"
              />
            </div>
          )}

          <div className="w-full max-w-7xl mx-auto mb-20 px-6 md:px-0">
            <div className="space-y-4 max-w-3xl">
              <span className="text-xs font-medium tracking-wider text-[#1A120B]/60 block">
                {project.titleJP}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-[#1A120B] font-poppins">
                {project.title}
              </h1>
              <p className="text-xs md:text-sm leading-relaxed text-[#1A120B]/70 font-light pt-2">
                {project.proposal || project.desc}
              </p>
              {project.URL && (
                <div className="pt-2">
                  <a
                    href={project.URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl text-primary underline tracking-wide hover:text-[#3C2A21]"
                  >
                    サイトを見る
                  </a>
                </div>
              )}
            </div>
          </div>

          {project.mockupConcept && (
            <div className="w-full max-w-7xl mx-auto mb-24 px-6 md:px-0 flex justify-center">
              <img
                src={project.mockupConcept}
                alt="Portfolio Concept Showcase"
                className="w-full h-auto object-cover shadow-sm rounded-sm"
              />
            </div>
          )}
        </div>
        <div className="w-full max-w-7xl m-auto bg-font text-background md:py-16 mb-16 shadow-md">
          <div className="max-w-4xl mx-auto px-8 md:px-12">
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  ターゲット
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.target || "未設定"}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  目的
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                  {project.objective || "未設定"}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  デザイン
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.designConcept || "未設定"}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  情報設計
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.ia || "未設定"}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  担当範囲
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {project.scope || "未設定"}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 items-start">
                <div className="md:col-span-3 text-xs md:text-sm font-bold tracking-wider text-white/90">
                  制作期間
                </div>
                <div className="md:col-span-9 text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                  {project.period || "未設定"}
                </div>
              </div>

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
      </section>
    );
  };

  return (
    <div className="w-full min-h-screen">
      {isWebsite
        ? renderWebsiteLayout()
        : isPortfolio
          ? renderPortfolioLayout()
          : renderAppLayout()}

      <div className="w-full pt-16 md:pt-24 pb-6 px-6 sm:px-12 md:px-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-8 md:mb-12">
          <h3 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold text-primary tracking-tight font-poppins leading-none">
            他にも見る
          </h3>

          <div className="hidden sm:flex gap-4 text-[#1A120B] pr-2 select-none">
            <button
              onClick={() => {
                if (scrollRef.current) scrollRef.current.scrollLeft -= 390;
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1A120B]/5 active:scale-95 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-3xl font-light">
                arrow_back_ios_new
              </span>
            </button>
            <button
              onClick={() => {
                if (scrollRef.current) scrollRef.current.scrollLeft += 390;
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1A120B]/5 active:scale-95 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-3xl font-light">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth mb-20 snap-x snap-mandatory pb-4 no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allProjects
            .filter((item) => item.id !== id)
            .map((item) => (
              <Link
                key={item.id}
                to={`/project/${item.id}`}
                className="min-w-[290px] sm:min-w-[340px] md:min-w-[380px] flex-1 snap-start group block"
              >
                <div className="w-full aspect-[5/4]  overflow-hidden bg-[#1A120B]/5 shadow-sm border border-[#1A120B]/5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
            ))}
        </div>

        <div className="w-full border-t border-[#1A120B]/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm font-light text-[#1A120B]/80 tracking-wide">
          <div className="flex items-center gap-2 font-sans">
            <Link to="/" className="hover:underline text-[#1A120B]/60">
              Top
            </Link>
            <span className="text-font/40">&gt;</span>
            <span className="text-font/60">Projects</span>
            <span className="text-font/40">&gt;</span>
            <span className="font-medium text-font">{project.title}</span>
          </div>

          <div className="font-sans text-[#1A120B]/70">
            © 2026 Ha My All Rights Reserver.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
