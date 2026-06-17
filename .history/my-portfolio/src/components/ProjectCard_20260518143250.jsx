import portthumb from "../assets/portthumb.jpg";
// ProjectCard = component dùng để hiển thị 1 project card
// { image } = props nhận image từ bên ngoài truyền vào
function ProjectCard({ year, title, titleJP, description, tags, image }) {
  return (
    // group:dùng để khi hover vào card thì các element con bên trong cũng animate theo được
    <div className="group cursor-pointer">
      {/* IMAGE */}
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
      <div className="bg-font text-background px-6 py-6">
        {/* TOP */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] tracking-[2px] text-background/60">
              2026
            </p>

            <h3
              className="
                text-[52px]
                leading-none
                font-bold
                font-akshar
                tracking-tight
                mt-2
              "
            >
              Portfolio.
            </h3>

            <p className="text-sm text-background/70 mt-3">
              ポートフォリオ サイト
            </p>
            <p className="text-xs text-background/50 leading-relaxed mt-4">
              就職活動のためにポートフォリオサイトを制作しました。
            </p>
          </div>

          {/* ARROW */}
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

        {/* BOTTOM */}
        <div className="mt-8 flex items-center gap-3 flex-wrap">
          <span
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
            React
          </span>

          <span
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
            Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
