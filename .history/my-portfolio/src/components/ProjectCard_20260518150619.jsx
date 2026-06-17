// ProjectCard = component dùng để hiển thị 1 project card
function ProjectCard({ year, title, titleJP, description, tags, image }) {
  return (
    <div className="group cursor-pointer ">
      <div className="overflow-hidden bg-font">
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

      {/* INFO */}
      <div className="bg-font text-background px-6 py-6 ">
        <div className="flex items-start justify-between">
          <div>
            {/* ĐIỀN NĂM VÀO ĐÂY */}
            <p className="text-[12px] tracking-[2px] text-background/60 inline-block rounded-full px-4 py-1 border border-background/30">
              {year}
            </p>

            {/* ĐIỀN TIÊU ĐỀ VÀO ĐÂY */}
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

            {/* ĐIỀN TIẾNG NHẬT VÀO ĐÂY */}
            <p className="text-sm text-background/70 mt-2">{titleJP}</p>

            {/* ĐIỀN MÔ TẢ VÀO ĐÂY */}
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

        {/* BOTTOM - CHỖ NÀY ĐỂ HIỆN TAGS TỰ ĐỘNG NÈ */}
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
  );
}

export default ProjectCard;
