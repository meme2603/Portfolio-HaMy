// projectsData.js
// 1. Import ảnh ở đầu file để JS hiểu đường dẫn
import portthumb from "../assets/portthumb.jpg";
import coffeethumb from "../assets/coffeethumb.jpg";
import sneakerthumb from "../assets/sneakerthumb.jpg";
import okayamathumb from "../assets/okayamathumb.jpg";

export const websiteProjects = [
  {
    year: "2026",
    title: "Portfolio.",
    titleJP: "ポートフォリオ",
    desc: "就職活動のために制作したサイトです。",
    tags: ["React", "Tailwind"],
    img: portthumb,
  },
  {
    year: "2025",
    title: "Coffee Shop",
    titleJP: "カフェショップサイト",
    desc: "家族みんなが安心して過ごせるカフェをテーマに、Webサイトを制作しました。
キッズスペースやワークショップなど、家族で楽しめる魅力が伝わるよう、  やさしく温かみのあるデザインを意識しています。。",
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
    img: okayamathumb,
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
