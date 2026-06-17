import { skillData } from "./ProjectsData";

function SkillSection() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6 font-akshar">
      {/* Tiêu đề lớn của trang */}
      <h2 className="text-4xl font-bold mb-20 tracking-tight text-font uppercase">
        Skills
      </h2>

      {/* Cụm danh mục xếp theo hàng dọc */}
      <div className="space-y-24">
        {skillData.map((group, index) => (
          <div
            key={index}
            className="border-b border-font/5 pb-16 last:border-none last:pb-0"
          >
            {/* Tên nhóm lớn: Design Tools / Development */}
            <h3 className="text-lg font-bold text-font mb-10 flex items-center gap-3 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {group.category}
            </h3>

            {/* Grid 2 cột chứa các skill, tự động đổ từ trái qua phải, từ trên xuống dưới */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {group.skills.map((skill, sIndex) => (
                <div key={sIndex} className="group">
                  {/* Phần tên Skill và Nhãn Level */}
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-bold text-font group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>

                    {/* Cái nhãn nhỏ hiển thị trạng thái */}
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

                  {/* Phần mô tả chi tiết phía dưới */}
                  <p className="text-sm text-font/60 leading-relaxed max-w-xl">
                    {skill.desc}
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
