import ProjectSection from "./ProjectSection";
function Projects() {
  const websiteProjects = [
    {
      title: "Portfolio Website",
      //   image: project1,
    },
    {
      title: "Cafe Website",
      //   image: project1,
    },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-8xl font-akshar font-bold text-font mb-20">
          PROJECTS
        </h1>

        <ProjectSection
          title="Website Design"
          description="Web design and frontend development projects."
          projects={websiteProjects}
        />
      </div>
    </section>
  );
}

export default Projects;
