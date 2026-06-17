import { designSkills, devSkills } from "./ProjectsData";

function Skills() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-akshar font-bold text-font mb-20 tracking-tight">
        SKILLS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
        {/* CỘT 1: DESIGN */}
        <div className="space-y-12">
          <h3 className="text-sm tracking-[4px] text-font/40 mb-10 uppercase italic font-bold">
            / Design
          </h3>
          {designSkills.map((skill, index) => (
            <div key={index} className="flex items-start gap-6 group">
              {/* Hình tròn 100px như hình mẫu */}
              <div className="w-[100px] h-[100px] rounded-full bg-font/5 flex-shrink-0 border border-font/10 flex items-center justify-center transition-colors group-hover:border-primary/40">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold font-akshar">
                    {skill.name}
                  </h4>
                  <span className="text-[9px] border border-font/20 px-2 py-[1px] rounded-full opacity-50 uppercase">
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-font/60 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CỘT 2: DEVELOPMENT */}
        <div className="space-y-12">
          <h3 className="text-sm tracking-[4px] text-font/40 mb-10 uppercase italic font-bold">
            / Development
          </h3>
          {devSkills.map((skill, index) => (
            <div key={index} className="flex items-start gap-6 group">
              <div className="w-[100px] h-[100px] rounded-full bg-font/5 flex-shrink-0 border border-font/10 flex items-center justify-center transition-colors group-hover:border-primary/40">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold font-akshar">
                    {skill.name}
                  </h4>
                  <span className="text-[9px] border border-font/20 px-2 py-[1px] rounded-full opacity-50 uppercase">
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-font/60 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
