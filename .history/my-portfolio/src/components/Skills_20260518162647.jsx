import { skillsData } from "./ProjectsData";

function SkillSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-akshar font-bold text-font mb-16 tracking-tight">
        SKILL
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Vòng tròn Icon (150px như trong hình bà gửi) */}
            <div className="flex-shrink-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-font/5 flex items-center justify-center overflow-hidden border border-font/10">
              {/* Thay icon vào đây nha bà */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain grayscale opacity-70 group-hover:grayscale-0"
              />
            </div>

            {/* Nội dung bên cạnh */}
            <div className="flex-1">
              <h3 className="text-xl font-bold font-akshar text-font mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-font/60 leading-relaxed">
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
