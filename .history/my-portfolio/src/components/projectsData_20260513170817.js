// projectsData.js
// 1. Import ảnh ở đầu file để JS hiểu đường dẫn
import portthumb from "../assets/portthumb.jpg";
import coffeethumb from "../assets/coffeethumb.jpg";

// 2. Export các mảng dữ liệu để file khác "mượn" dùng được
export const websiteProjects = [
  {
    year: "2026",
    title: "Portfolio.",
    titleJP: "ポートフォリオ",
    desc: "就職活動のために制作したサイトです。",
    tags: ["React", "Tailwind", "Vite"],
    img: portthumb, // Dùng biến đã import ở trên
  },
  {
    year: "2026",
    title: "Coffee Shop",
    titleJP: "スニーカーLP",
    desc: "スニーカーコレクションをテーマにしたLP。",
    tags: ["Figma", "UI/UX"],
    img: coffeethumb,
  },
];

export const appProjects = [
  {
    year: "2026",
    title: "Easy-Cook.",
    titleJP: "料理アプリ",
    desc: "毎日の料理を簡単にするアプリプロジェクト。",
    tags: ["React Native", "Firebase"],
    img: "/path/to/app-img.jpg", // Hoặc import như trên
  },
];
