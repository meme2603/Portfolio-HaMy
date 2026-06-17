import { skillsData } from "./ProjectsData";

function SkillSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-akshar font-bold text-font mb-20 tracking-tight">
        SKILLS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {/* ĐÂY NÈ BÀ NỘI: Dùng map để tự tạo ra các dòng skill */}
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center gap-8">
            {/* Vòng tròn Icon */}
            <div className="flex-shrink-0 w-[100px] h-[100px] rounded-full bg-font/5 flex items-center justify-center border border-font/10">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain grayscale opacity-50 hover:opacity-100 transition-all"
              />
            </div>

            {/* Chữ bên phải */}
            <div className="flex-1">
              <h3 className="text-xl font-bold font-akshar text-font mb-2 uppercase">
                {skill.name}
              </h3>
              <p className="text-sm text-font/60 leading-relaxed max-w-sm">
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
