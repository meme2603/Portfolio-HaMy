import { skillData } from "../data/ProjectsData";
function Skill() {
  const allSkills = skillData.flatMap((group) => group.skills);
  return (
    <section className="w-full pt-20 pb-16 bg-background">
      {/* Khối tiêu đề lớn giữ nguyên sự hoành tráng */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-akshar text-font leading-none">
          SKILL
        </h2>
        <div className="w-[80px] md:w-[100px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1"></div>
      </div>

      {/* Khối nội dung: Dàn hàng ngang các Card đồng bộ với trang About */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Lưới thích ứng: 4 cột trên Desktop, 2 cột trên Tablet, 1 cột trên Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-md p-6 border border-transparent hover:border-font/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Thẻ Tag tên Skill: Bo tròn trịa, viền mảnh chuẩn bài như tag "UI/UX Designer" bên About */}
              <div className="flex mb-4">
                <span className="border border-font text-font font-akshar font-bold uppercase tracking-wider text-xs md:text-sm rounded-full px-4 py-1.5 inline-block group-hover:bg-font group-hover:text-background transition-colors duration-300">
                  {skill.name}
                </span>
              </div>

              {/* Nội dung mô tả tiếng Nhật chân thực: Font mỏng, dãn dòng mượt mà */}
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
