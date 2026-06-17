// import React from "react";
import { useParams, Link } from "react-router-dom";

// Tui bọc trong try-catch để nếu bà chưa có file ProjectsData thì app vẫn khum bị sập
let websiteProjects = [];
let appProjects = [];
try {
  // Bà check lại nếu file data tên khác hoặc nằm chỗ khác thì sửa đường dẫn này nhé
  const data = require("./ProjectsData");
  websiteProjects = data.websiteProjects || [];
  appProjects = data.appProjects || [];
} catch (e) {
  console.log(
    "Chưa kết nối được file data, hệ thống sẽ dùng data dự phòng xịn xò!",
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const allProjects = [...websiteProjects, ...appProjects];

  // Tìm dự án thực tế trong data của bà
  let project = allProjects.find((p) => p.id === id);

  // 🎯 DATA DỰ PHÒNG THẦN THÁNH: Nếu khum tìm thấy id, tự động lấy thông tin quán Cafe làm chuẩn để hiện giao diện!
  if (!project) {
    project = {
      id: "coffee-shop",
      year: "2025",
      title: "COFFEE SHOP",
      titleJP: "カフェショップ Webサイト",
      desc: "家族みんなが安心して過ごせるカフェをテーマに、Webサイトを制作しました。",
      tags: ["Figma", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop", // Ảnh quán cafe xịn lấy từ Unsplash
      role: "UI/UX Designer / Frontend Developer",
      concept:
        "家族みんなが安心して過ごせるカフェをテーマに、Webサイトを制作しました。ターゲット層が親しみやすさを感じられるよう、温かみのあるカラーパレットとシンプルなレイアウトを意識してデザインしました。情報設計の段階から、ユーザーが迷わず店舗情報やメニューに辿り着ける動線を意識しています。",
      workflow:
        "FigmaのAuto LayoutやVariablesを活用してデザインシステムを構築。コンポーネント指向を意識した設計データを作成することで、開発フェーズへのハンドオフをスムーズにしました。実装ではセマンティックなHTMLコーディングとレスポンシブ対応を徹底しています。",
    };
  }

  return (
    <section className="w-full bg-[#121212] text-white pt-20 pb-24 font-akshar min-h-screen">
      {/* KHỐI 1: HERO BANNER TO ĐÙNG TRÀN VIỀN */}
      <div className="w-full h-[60vh] relative overflow-hidden bg-neutral-900 mb-16">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        {/* Tên dự án đè lên góc dưới */}
        <div className="absolute bottom-12 left-6 md:left-12">
          <p className="text-sm tracking-[3px] text-white/60 uppercase mb-2">
            {project.titleJP}
          </p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight uppercase leading-none">
            {project.title}
          </h1>
        </div>
      </div>

      {/* KHỐI 2: OVERVIEW CHI TIẾT (Chia 2 cột chuẩn thiết kế) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
        {/* Cột trái: Phân tích quy trình */}
        <div className="space-y-10">
          <Link
            to="/"
            className="text-white/40 text-xs hover:text-white transition-colors uppercase tracking-widest block mb-4"
          >
            ← Back to home
          </Link>

          <div>
            <h3 className="text-xs tracking-[4px] text-white/40 mb-3 uppercase font-bold italic">
              / 01. Concept & Background
            </h3>
            <p className="text-base md:text-lg leading-[1.8] font-light text-white/80 pl-4 border-l border-white/20 font-sans">
              {project.concept}
            </p>
          </div>

          <div>
            <h3 className="text-xs tracking-[4px] text-white/40 mb-3 uppercase font-bold italic">
              / 02. Design to Code Workflow
            </h3>
            <p className="text-base md:text-lg leading-[1.8] font-light text-white/80 pl-4 border-l border-white/20 font-sans">
              {project.workflow}
            </p>
          </div>

          {/* Thông số mộc mạc dạng tài liệu */}
          <div className="pt-8 border-t border-white/10 text-sm space-y-3 text-white/60">
            <p>
              <span className="font-bold text-white uppercase tracking-wider mr-2">
                Role:
              </span>{" "}
              {project.role}
            </p>
            <p>
              <span className="font-bold text-white uppercase tracking-wider mr-2">
                Tech Stack:
              </span>
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block bg-white/10 text-white text-xs px-2 py-0.5 rounded mr-1.5 font-sans"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Cột phải: Ảnh Mockup lồng nhau */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/5 shadow-2xl">
          <p className="text-white/30 text-[10px] tracking-[3px] uppercase mb-4">
            - Mockup Preview -
          </p>
          <img
            src={project.img}
            alt={`${project.title} mockup`}
            className="w-full h-auto object-contain rounded shadow-lg grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* KHỐI 3: LONG SCREENSHOT DISPLAY */}
      <div className="w-full bg-white/[0.02] py-20 border-t border-b border-white/5 mb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-xs tracking-[6px] text-white/30 uppercase mb-12 font-bold">
            - Full Layout Preview -
          </p>
          <div className="p-2 bg-neutral-900 rounded-md shadow-2xl border border-white/10">
            <img
              src={project.img}
              alt={`${project.title} full layout`}
              className="w-full h-auto bg-[#121212]"
            />
          </div>
        </div>
      </div>

      {/* KHỐI 4: OTHER PROJECTS (他にも見る) */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between border-b border-white/10 pb-4 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold tracking-wider font-sans">
            他にも見る
          </h3>
          <p className="text-white/40 text-xs uppercase tracking-widest">
            Other Works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/" className="group block space-y-3">
            <div className="w-full h-48 overflow-hidden bg-white/5 border border-white/10 rounded">
              <img
                src={project.img}
                alt="Next project"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500"
              />
            </div>
            <h4 className="font-bold text-lg group-hover:text-neutral-400 transition-colors uppercase tracking-wide">
              ← Back to home to view more
            </h4>
          </Link>
        </div>
      </div>
    </section>
  );
}

// 3. Đảm bảo có dòng export default thần thánh này ở cuối file!
export default ProjectDetail;
