import { skillData } from "./ProjectsData";

function Skill() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <div className="">
        <h2 className="text-[24px] md:text-[40px] lg:text-[60px] font-bold font-akshar text-font leading-none">
          SKILL
        </h2>

        <div className="w-[40px] md:w-[80px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1"></div>
      </div>

      <div className="space-y-16">
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
                    : {skill.status}... ({skill.desc})
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
