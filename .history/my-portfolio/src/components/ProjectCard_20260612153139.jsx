import { Link } from "react-router-dom";

// ProjectCard = component dùng để hiển thị 1 project card
function ProjectCard({ id, year, title, titleJP, description, tags, image }) {
  return (
    <Link to={`/project/${id}`} className="block flex flex-col h-full group">
      <div className="group flex flex-col h-full cursor-pointer ">
        <div className="overflow-hidden bg-font aspect-[5/4] w-full">
          <img
            src={image}
            alt={title}
            className="
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
            group-hover:opacity-90
          "
          />
        </div>

        <div className="bg-font text-background px-6 py-6 ">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[12px] tracking-[2px] text-background/60 ">
                {year}
              </p>

              <h3
                className="
                text-[40px]
                leading-none
                font-bold
                font-akshar
                tracking-tight
                mt-2
              "
              >
                {title}
              </h3>

              <p className="text-sm text-background/70 mt-2">{titleJP}</p>

              <p className="text-xs text-background/50 leading-relaxed mt-4">
                {description}
              </p>
            </div>

            <div
              className="
              text-3xl
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
            >
              ↗
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="
                border
                border-background/30
                rounded-full
                px-3
                py-1
                text-xs
                tracking-wide
              "
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
