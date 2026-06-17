// projectsData.js
// 1. Import ảnh ở đầu file để JS hiểu đường dẫn
import portthumb from "../assets/portthumb.jpg";
import coffeethumb from "../assets/coffeethumb.jpg";
import sneakerthumb from "../assets/sneakerthumb.jpg";

export const websiteProjects = [
  {
    year: "2026",
    title: "Portfolio.",
    titleJP: "ポートフォリオ",
    desc: "就職活動のために制作したサイトです。",
    tags: ["React", "Tailwind", "Vite"],
    img: portthumb,
  },
  {
    year: "2025",
    title: "Coffee Shop",
    titleJP: "カフェショップサイト",
    desc: "スニーカーコレクションをテーマにしたLP。",
    tags: ["Figma", "UI/UX"],
    img: coffeethumb,
  },
  {
    year: "2025",
    title: "Sneaker Landingpage",
    titleJP: "スニーカーLP",
    desc: "スニーカーコレクションをテーマにしたLP。",
    tags: ["Figma", "UI/UX"],
    img: sneakerthumb,
  },
  {
    year: "2025",
    title: "Okayama kankou",
    titleJP: "観光サイト",
    desc: "スニーカーコレクションをテーマにしたLP。",
    tags: ["Figma", "UI/UX"],
    img: sneakerthumb,
  },
];

export const appProjects = [
  {
    year: "2025",
    title: "Easy-Cook.",
    titleJP: "料理アプリ",
    desc: "毎日の料理を簡単にするアプリプロジェクト。",
    tags: ["React Native", "Firebase"],
    img: "/path/to/app-img.jpg",
  },
  {
    year: "2025",
    title: "Nemura",
    titleJP: "ニュースアプリ",
    desc: "毎日の料理を簡単にするアプリプロジェクト。",
    tags: ["React Native", "Firebase"],
    img: "/path/to/app-img.jpg",
  },
];
