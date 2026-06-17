import { skillData } from "../data/ProjectsData";
// 🎯 Import bộ icon từ lucide-react (Bà nhớ chạy npm install lucide-react nếu chưa cài nha)
import { Figma, Layout, Code, Atom, HelpCircle } from "lucide-react";

// Hàm bổ trợ tự động lấy icon dựa trên tên Skill của bà trong data
const getSkillIcon = (name) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("figma")) return <Figma size={22} strokeWidth={1.5} />;
  if (lowerName.includes("ui") || lowerName.includes("ux"))
    return <Layout size={22} strokeWidth={1.5} />;
  if (
    lowerName.includes("html") ||
    lowerName.includes("css") ||
    lowerName.includes("tailwind")
  )
    return <Code size={22} strokeWidth={1.5} />;
  if (lowerName.includes("javascript") || lowerName.includes("react"))
    return <Atom size={22} strokeWidth={1.5} />;
  return <HelpCircle size={22} strokeWidth={1.5} />; // Icon mặc định nếu khum khớp tên
};

function Skill() {
  return (
    <section className="w-full pt-20 pb-16">
      {/* Khung Tiêu Đề Lớn (Giữ nguyên gốc của bà) */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-akshar text-font leading-none">
          SKILL
        </h2>
        <div className="w-[80px] md:w-[100px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1"></div>
      </div>

      {/* LƯỚI SKILLS BIẾN HÌNH THEO DATA CỦA BÀ */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-16">
        {skillData.map((group, index) => (
          <div key={index} className="space-y-6">
            {/* Tên danh mục lớn (Design Tool / Development) */}
            <div className="border-b border-font/10 pb-2">
              <h3 className="text-xl font-bold font-akshar text-primary tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                {group.category}
              </h3>
            </div>

            {/* Khung Grid chứa các Card con bên trong */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {group.skills.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  // Thiết kế Card nền bg-font (đen) bọc chữ màu nhạt giống hệt vibe trang Home
                  className="group flex flex-col justify-between bg-font text-background p-6 rounded-sm border border-font/5 shadow-sm hover:shadow-[0_10px_30px_rgba(217,119,6,0.1)] hover:border-primary/30 transition-all duration-500"
                >
                  <div>
                    {/* Header của Card: Gồm Tên + Tag trạng thái + Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        <h4 className="text-2xl font-bold font-akshar tracking-wide text-background">
                          {skill.name}
                        </h4>
                        {skill.status && (
                          <span className="inline-block text-[10px] font-mono border border-background/30 px-2 py-0.5 rounded-full text-background/60">
                            {skill.status.replace(/[:\s]+/g, "")}{" "}
                            {/* Xóa bớt dấu hai chấm nếu data bị thừa */}
                          </span>
                        )}
                      </div>

                      {/* Vòng tròn bọc Icon: Hover phát chuyển màu sang tông cam nổi bần bật */}
                      <div className="p-2.5 bg-background/10 rounded-sm text-background/80 group-hover:bg-primary group-hover:text-font transition-colors duration-300 flex-shrink-0">
                        {getSkillIcon(skill.name)}
                      </div>
                    </div>

                    {/* Nội dung tiếng Nhật dễ hiểu, mượt mà của bà */}
                    <p className="text-sm leading-relaxed text-background/80 font-light pt-1">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
