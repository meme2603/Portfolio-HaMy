import ProjectSection from "./ProjectSection";
import { websiteProjects, appProjects } from "./ProjectsData";

function Projects() {
  return (
    <section className="pt-20 bg-background">
      <div className="w-full bg-black py-16 md:py-24 mb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-akshar font-bold text-background tracking-tight">
            PROJECTS
          </h1>
        </div>
        <div className="w-[80px] md:w-[100px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1 mb-20"></div>
        <ProjectSection
          title="Website Design"
          description="学校で学んだ知識を活かし、企画からデザイン、コーディングまで一貫して制作したWebプロジェクトです。"
          projects={websiteProjects}
        />
        <ProjectSection
          title="Application Design"
          description="チームプロジェクトとして、企画からUI/UX設計までチームで共同制作したモバイルアプリです。"
          projects={appProjects}
        />
      </div>
    </section>
  );
}

export default Projects;
