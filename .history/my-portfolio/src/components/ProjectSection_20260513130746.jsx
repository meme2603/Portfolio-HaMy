import ProjectCard from "./ProjectCard";
function ProjectSection({ title, description, projects }) {
  return (
    <section className="mb-32">
      {/* TITLE */}
      <div className="mb-10">
        <h2 className="text-5xl font-akshar font-bold text-primary">{title}</h2>

        <p className="mt-3 text-font/70">{description}</p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
