import ProjectCard from "./ProjectCard";

function ProjectSection({ title, description, projects }) {
  return (
    <section className="mb-32">
      <h2
        className="
          text-[40px]
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
          max-w-xl
          leading-relaxed
        "
      >
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard
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
