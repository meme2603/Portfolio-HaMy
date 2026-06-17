// projectsData.js
// 1. Import ảnh ở đầu file để JS hiểu đường dẫn
import portfoliothumb from "../assets/portfoliothumb.jpg";
import coffeethumb from "../assets/coffeethumb.jpg";
import sneakerthumb from "../assets/sneakerthumb.jpg";
import okayamathumb from "../assets/okayamathumb.jpg";
import nemurathumb from "../assets/nemurathumb.jpg";
import easycookthumb from "../assets/easycookthumb.jpg";

export const websiteProjects = [
  {
    year: "2025",
    title: "Coffee Shop",
    titleJP: "カフェショップサイト",
    desc: "家族みんなが安心して過ごせるカフェをテーマに、Webサイトを制作しました。",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    img: coffeethumb,
  },
  {
    year: "2026",
    title: "Portfolio.",
    titleJP: "ポートフォリオ",
    desc: "就職活動のために制作したポートフォリオサイトです。",
    tags: ["Figma", "React", "Tailwind"],
    img: portfoliothumb,
  },
  {
    year: "2025",
    title: "Sneaker LP",
    titleJP: "スニーカーLP",
    desc: "新作スニーカーの販売に向けた、ランディングページを制作しました。",
    tags: ["Figma", "HTML", "SCSS"],
    img: sneakerthumb,
  },
  {
    year: "2025",
    title: "Okayama kankou",
    titleJP: "観光サイト",
    desc: "昔話「桃太郎」をテーマに、岡山の伝説・史実・文化を体験できる観光サイトを制作しました。",
    tags: ["Figma", "UI/UX"],
    img: okayamathumb,
  },
];

export const appProjects = [
  {
    year: "2025",
    title: "EASY COOK APP",
    titleJP: "お弁当を提案するアプリ",
    desc: "家にある食材を活用し、親子で楽しくお弁当作りができるアプリです。忙しい日常の中でも、親子のコミュニケーションを自然に深められる体験の提供を目的としています。",
    tags: ["React Native", "Firebase"],
    img: easycookthumb,
  },
  {
    year: "2025-2026",
    title: "Nemura APP",
    titleJP: "一日寝落ち系AIニュースキュレーションアプリです。",
    desc: "本作は、SNSやニュースの情報をAIで要約し、 マスコットキャラクター「ねむら」が読み聞かせる形式で提供する。夜の短い時間で必要な内容だけを無理なく確認できるよう設計しました。",
    tags: ["React Native", "Firebase"],
    img: nemurathumb,
  },
];

// skillsData.js
export const designSkills = [
  {
    name: "Figma",
    level: "Advanced",
    desc: "Auto Layout, Variables, Design System",
    icon: "/assets/icons/figma.svg",
  },
  {
    name: "UI/UX Design",
    level: "Intermediate",
    desc: "User Research, Wireframing, Prototyping",
    icon: "/assets/icons/uiux.svg",
  },
  {
    name: "Adobe Suite",
    level: "Basic",
    desc: "Photoshop, Illustrator",
    icon: "/assets/icons/adobe.svg",
  },
];

export const devSkills = [
  {
    name: "HTML / CSS",
    level: "Intermediate",
    desc: "Responsive, Semantic Web",
    icon: "/assets/icons/htmlcss.svg",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    desc: "Utility-first, Custom Configuration",
    icon: "/assets/icons/tailwind.svg",
  },
  // GOM JS & REACT LẠI ĐÂY NÈ
  {
    name: "JavaScript & React",
    level: "Learning",
    desc: "Nắm vững ES6+ và đang ứng dụng React/Vite để xây dựng các UI Components linh hoạt.",
    icon: "/assets/icons/reactjs.svg", // Bà có thể dùng icon ghép hoặc icon React cho nổi
  },
];
