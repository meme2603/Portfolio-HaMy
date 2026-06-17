const designSkills = [
  {
    name: "Figma",
    level: "Advanced",
    desc: "Auto Layout, Variables, Design System",
  },
  {
    name: "UI/UX Design",
    level: "Intermediate",
    desc: "User Research, Wireframing, Prototyping",
  },
  { name: "Adobe Suite", level: "Basic", desc: "Photoshop, Illustrator" },
];

const devSkills = [
  {
    name: "HTML / CSS",
    level: "Intermediate",
    desc: "Responsive, Semantic Web",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    desc: "Utility-first, Custom Configuration",
  },
  { name: "JavaScript", level: "Basic", desc: "ES6+, DOM Manipulation" },
  {
    name: "React / Vite",
    level: "Learning",
    desc: "Component-based, State Management",
  },
];

function Skills() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* CỘT DESIGN */}
        <div>
          <h3 className="text-2xl font-akshar font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span> DESIGN
          </h3>
          <div className="space-y-8">
            {designSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="text-xl font-bold text-font">{skill.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-font/40">
                    {skill.level}
                  </span>
                </div>
                {/* Thanh progress bar chạy nhẹ cho nó nghệ */}
                <div className="h-[2px] w-full bg-font/10 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000 group-hover:w-full"
                    style={{
                      width:
                        skill.level === "Advanced"
                          ? "90%"
                          : skill.level === "Intermediate"
                            ? "60%"
                            : "30%",
                    }}
                  ></div>
                </div>
                <p className="text-xs text-font/50 mt-2">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CỘT DEVELOPMENT */}
        <div>
          <h3 className="text-2xl font-akshar font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span> DEVELOPMENT
          </h3>
          <div className="space-y-8">
            {devSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="text-xl font-bold text-font">{skill.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-font/40">
                    {skill.level}
                  </span>
                </div>
                <div className="h-[2px] w-full bg-font/10 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000 group-hover:w-full"
                    style={{
                      width:
                        skill.level === "Intermediate"
                          ? "65%"
                          : skill.level === "Basic"
                            ? "40%"
                            : "20%",
                    }}
                  ></div>
                </div>
                <p className="text-xs text-font/50 mt-2">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 Export default Skills;