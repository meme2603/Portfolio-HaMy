import ProjectSection from "./ProjectSection";
import coffeethumb from "../assets/coffeethumb.jpg";

function Projects() {
  const websiteProjects = [
    {
      title: "Portfolio Website",
      //   image: project1,
    },
    {
      title: "Cafe Website",
      image: coffeethumb,
    },
    {
      title: "Cafe Website",
      //   image: project1,
    },
    {
      title: "Cafe Website",
      //   image: project1,
    },
  ];
  const Application = [
    {
      title: "Portfolio Website",
      //   image: project1,
    },
    {
      title: "Cafe Website",
      image: coffeethumb,
    },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-7xl font-akshar font-bold text-font">PROJECTS</h1>
        <div className="w-[40px] md:w-[80px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1 mb-20"></div>
        <ProjectSection
          title="Website Design"
          description="Web design and frontend development projects."
          projects={websiteProjects}
        />
        <ProjectSection
          title="Applicaition"
          description="Application and frontend development projects."
          projects={Application}
        />
      </div>
    </section>
  );
}

export default Projects;
