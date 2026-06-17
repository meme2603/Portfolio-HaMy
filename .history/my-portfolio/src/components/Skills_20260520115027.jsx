import { skillData } from "./ProjectsData";

function Skill() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      {/* TIÊU ĐỀ ĐỒNG BỘ VỚI PROJECT/ABOUT */}
      <div className="mb-16">
        <h2 className="text-[24px] md:text-[40px] lg:text-[60px] font-bold font-akshar text-font leading-none">
          SKILL
        </h2>
        {/* Thanh gạch ngang màu đỏ (primary) chạy dài theo layout */}
        <div className="h-[4px] w-full bg-primary"></div>
      </div>

      {/* NỘI DUNG CHIA THEO HÀNG DỌC NHƯ HÌNH VẼ */}
      <div className="space-y-16">
        {skillData.map((group, index) => (
          <div key={index}>
            {/* Tên nhóm (Development / Design tool) - Chữ xám nhẹ */}
            <h3 className="text-base font-medium text-font/50 mb-6 tracking-wide italic">
              {group.category}
            </h3>

            {/* Danh sách kỹ năng - Có dấu chấm đầu dòng */}
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
