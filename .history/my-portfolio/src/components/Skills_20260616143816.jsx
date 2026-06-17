import { skillData } from "../data/ProjectsData";
function Skills() {
  {
    /* 🎯 Dùng flatMap để lôi hết tất cả skill từ các category ra thành 1 mảng phẳng 4 phần tử */
  }
  const allSkills = skillData.flatMap((group) => group.skills);

  return (
    <section className="w-full bg-background py-16 md:py-24 border-t border-[#1A120B]/10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Tiêu đề góc nhỏ chuẩn phong cách tối giản */}
        <h2 className="text-xs uppercase font-mono tracking-widest text-[#1A120B]/40 mb-12">
          // Capabilities & Tech Stack
        </h2>

        {/* Bản lưới 12 cột: Mỗi skill chiếm 3 cột trên Desktop (3 * 4 = 12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className={`col-span-12 md:col-span-3 flex flex-col gap-3 md:pr-6 
                /* Đường kẻ dọc mảnh mai phân tách giữa các cột giống y hệt ảnh mẫu */
                ${index !== allSkills.length - 1 ? "md:border-r md:border-[#1A120B]/10" : ""}
                /* Tạo khoảng thụt lề sang trọng cho các cột phía sau */
                ${index !== 0 ? "md:pl-6" : ""}
              `}
            >
              {/* Tiêu đề Skill: Ép min-height để dù tên ngắn hay dài vẫn bằng chằn chặn nhau */}
              <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-font font-akshar leading-tight min-h-[20px] md:min-h-[40px] flex items-center">
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
