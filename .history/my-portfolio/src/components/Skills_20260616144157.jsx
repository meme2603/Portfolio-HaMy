import { skillData } from "../data/ProjectsData";
function Skill() {
  const allSkills = skillData.flatMap((group) => group.skills);
  return (
    <section className="w-full pt-20 pb-16 bg-background">
      {/* Khối tiêu đề lớn giữ nguyên của bà nè */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-akshar text-font leading-none">
          SKILL
        </h2>
        <div className="w-[80px] md:w-[100px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1"></div>
      </div>

      {/* Khối nội dung được thiết kế lại hoàn toàn theo ảnh mẫu スクリーンショット 2026-06-16 午後2.31.07.png */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Lưới 12 cột: Mobile xếp dọc 1 cột, Desktop dàn ngang 4 cột (mỗi cột chiếm 3 ô) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className={`col-span-12 md:col-span-3 flex flex-col gap-3 md:pr-6 
                /* Tạo đường kẻ dọc mảnh phân cách giữa các cột trên Desktop giống ảnh mẫu */
                ${index !== allSkills.length - 1 ? "md:border-r md:border-font/10" : ""}
                /* Thụt lề trái cho các cột phía sau để chữ khum dính sát vào đường kẻ */
                ${index !== 0 ? "md:pl-6" : ""}
              `}
            >
              {/* Tên Skill: Ép chiều cao tối thiểu bằng nhau để phần mô tả bên dưới thẳng hàng chằn chặn */}
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-font font-akshar leading-tight min-h-[24px] md:min-h-[48px] flex items-center">
                {skill.name}
              </h3>

              {/* Nội dung mô tả tiếng Nhật chân thực */}
              <p className="text-xs md:text-sm leading-relaxed text-font/70 font-light tracking-wide">
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
