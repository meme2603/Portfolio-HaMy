// Thêm các props vào đây nè bà
function ProjectCard({ year, title, titleJP, description, tags, image }) {
  return (
    <div className="group cursor-pointer">
      {/* IMAGE */}
      <div className="overflow-hidden bg-font">
        <img
          src={image} // Dùng prop image thay vì portthumb cứng
          alt={title}
          className="w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
      </div>

      {/* INFO */}
      <div className="bg-font text-background px-6 py-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] tracking-[2px] text-background/60">
              {year} {/* Động hóa năm */}
            </p>

            <h3 className="text-[52px] leading-none font-bold font-akshar tracking-tight mt-2">
              {title} {/* Động hóa tiêu đề */}
            </h3>

            <p className="text-sm text-background/70 mt-3">
              {titleJP} {/* Tiếng Nhật cho nó nghệ nè */}
            </p>
            <p className="text-xs text-background/50 leading-relaxed mt-4">
              {description} {/* Mô tả dự án */}
            </p>
          </div>

          <div className="text-3xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </div>
        </div>

        {/* BOTTOM - Duyệt mảng tags để hiện border-full */}
        <div className="mt-8 flex items-center gap-3 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="border border-background/30 rounded-full px-3 py-1 text-xs tracking-wide"
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
