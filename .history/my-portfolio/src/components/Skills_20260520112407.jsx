import { skillData } from "./ProjectsData";

function SkillSection() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6 font-akshar">
      {/* Tiêu đề lớn */}
      <h2 className="text-4xl font-bold mb-20 tracking-tight text-font uppercase">
        Skills
      </h2>

      {/* Cụm danh mục xếp theo hàng dọc */}
      <div className="space-y-20">
        {skillData.map((group, index) => (
          <div
            key={index}
            className="border-b border-font/5 pb-12 last:border-none last:pb-0"
          >
            {/* TÊN TIÊU ĐỀ ĐÃ ĐỔI SANG CHỮ XÁM NHỎ NÈ BÀ NỘI */}
            <h3 className="text-xs tracking-[3px] text-font/40 mb-10 uppercase font-bold italic">
              / {group.category}
            </h3>

            {/* Danh sách skill: Mỗi cái 1 hàng, dóng hàng ngang */}
            <div className="space-y-6">
              {group.skills.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group py-2 border-b border-font/[0.02] last:border-none"
                >
                  {/* Cụm bên trái: Tên và Nhãn */}
                  <div className="flex items-center gap-3 min-w-[240px] flex-shrink-0">
                    <h4 className="text-lg font-bold text-font group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>

                    {/* Nhãn trạng thái */}
                    <span
                      className={`text-[9px] px-2 py-[1px] rounded-full border font-bold uppercase tracking-wider ${
                        skill.status === "Learning"
                          ? "border-cyan-500/40 text-cyan-500 bg-cyan-500/5"
                          : skill.status === "Advanced"
                            ? "border-primary/50 text-primary bg-primary/5"
                            : "border-font/20 text-font/50 bg-font/5"
                      }`}
                    >
                      {skill.status}
                    </span>
                  </div>

                  {/* Chú thích ở sau */}
                  <p className="text-sm text-font/60 leading-relaxed flex-1">
                    — {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
