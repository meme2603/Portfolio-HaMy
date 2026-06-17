import ProjectCard from "./ProjectCard";

function ProjectSection({ title, description, projects }) {
  return (
    <section className="mb-32">
      <h2
        className="
          text-[32px]
          leading-none
          font-bold
          font-akshar
          tracking-tight
          text-primary
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-4
          text-font/70
          leading-relaxed
        "
      >
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard
            id={project.id}
            key={index}
            year={project.year}
            title={project.title}
            titleJP={project.titleJP}
            description={project.desc}
            tags={project.tags}
            image={project.img}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
