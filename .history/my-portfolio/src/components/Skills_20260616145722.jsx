import { skillData } from "../data/ProjectsData";
function Skill() {
  const allSkills = skillData.flatMap((group) => group.skills);
  return (
    <section className="w-full pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-akshar text-font leading-none">
          SKILL
        </h2>
        <div className="w-[80px] md:w-[100px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-md p-6 border border-transparent hover:border-font/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex mb-4">
                <span className=" text-primary font-akshar font-semibold uppercase tracking-wider text-xs md:text-sm lg:text-base px-2 py-2 inline-block">
                  {skill.name}
                </span>
              </div>

              <p className="text-xs md:text-sm leading-relaxed text-font/70 font-light tracking-wide pt-2 flex-grow">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
