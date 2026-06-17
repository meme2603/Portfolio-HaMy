import { skillData } from "./ProjectsData";

function SkillSection() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6 font-akshar">
      {/* TIÊU ĐỀ SKILL TO ĐÙNG CÓ THANH ĐỎ DƯỚI CHÂN */}
      <div className="mb-14">
        <h2 className="text-5xl font-bold tracking-wider text-font uppercase mb-3">
          Skill
        </h2>
        {/* Thanh gạch ngang màu đỏ chạy dài */}
        <div className="h-[4px] w-full bg-primary"></div>
      </div>

      {/* Danh sách nhóm xếp hàng dọc */}
      <div className="space-y-12">
        {skillData.map((group, index) => (
          <div key={index}>
            {/* Tên nhóm xám nhỏ: Development / Design tool */}
            <h3 className="text-sm font-medium text-font/50 mb-6 tracking-wide">
              {group.category}
            </h3>

            {/* Danh sách dấu chấm đầu dòng */}
            <ul className="list-disc list-inside space-y-4 pl-2">
              {group.skills.map((skill, sIndex) => (
                <li
                  key={sIndex}
                  className="text-base text-font/90 leading-relaxed"
                >
                  {/* Tên kỹ năng in đậm */}
                  <span className="font-bold text-font">{skill.name}</span>
                  {/* Trạng thái và mô tả đi liền đằng sau */}
                  <span className="text-font/80">
                    :{" "}
                    {skill.status === "Advanced" ||
                    skill.status === "Intermediate"
                      ? ""
                      : `${skill.status.toLowerCase()} `}
                    ({skill.desc})
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

export default SkillSection;
