import ProjectCard from "./ProjectCard";

function ProjectSection({ title, description, projects }) {
  return (
    <section>
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="grid grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
