import { skillData } from "./ProjectsData";

function Skill() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 font-akshar">
      <h2 className="text-4xl font-bold mb-20 tracking-tight text-font uppercase">
        Skills
      </h2>

      <div className="space-y-24">
        {/* Vòng lặp 1: Lấy ra từng Nhóm (Design/Dev) */}
        {skillData.map((group, index) => (
          <div key={index}>
            {/* Tên nhóm to */}
            <h3 className="text-[10px] tracking-[4px] text-font/40 mb-12 uppercase font-bold flex items-center gap-4">
              <span className="w-12 h-[1px] bg-font/20"></span>
              {group.category}
            </h3>

            {/* Vòng lặp 2: Lấy ra từng Skill lẻ trong nhóm đó */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {group.skills.map((skill, sIndex) => (
                <div key={sIndex} className="flex items-start gap-8 group">
                  {/* Vòng tròn Icon */}
                  <div className="w-[100px] h-[100px] rounded-full bg-font/5 flex-shrink-0 border border-font/10 flex items-center justify-center transition-all group-hover:border-primary/40">
                    <span className="text-2xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">
                      {skill.name.charAt(0)}
                    </span>
                  </div>

                  {/* Thông tin Skill */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-xl font-bold text-font">
                        {skill.name}
                      </h4>

                      {/* Nhãn trạng thái (Status Badge) */}
                      <span
                        className={`text-[9px] px-2 py-[2px] rounded-full border font-bold uppercase ${
                          skill.status === "Learning"
                            ? "border-cyan-500/50 text-cyan-500"
                            : skill.status === "Advanced"
                              ? "border-primary text-primary"
                              : "border-font/20 text-font/40"
                        }`}
                      >
                        {skill.status}
                      </span>
                    </div>
                    <p className="text-sm text-font/60 leading-relaxed max-w-sm">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
