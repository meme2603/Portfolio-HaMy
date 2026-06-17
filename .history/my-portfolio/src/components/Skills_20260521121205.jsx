import { skillData } from "./ProjectsData";

function Skill() {
  return (
    <section className="w-full pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-akshar text-font leading-none">
          SKILL
        </h2>

        <div className="w-[80px] md:w-[100px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-16 space-y-16">
        {skillData.map((group, index) => (
          <div key={index}>
            <h3 className="text-base font-medium text-font/50 mb-6 tracking-wide italic">
              {group.category}
            </h3>

            <ul className="space-y-4 pl-4">
              {group.skills.map((skill, sIndex) => (
                <li key={sIndex} className="list-disc text-font/90 text-lg">
                  <span className="font-bold text-font">{skill.name}</span>
                  <span className="text-font/80 font-light">
                    : {skill.status}... {skill.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
