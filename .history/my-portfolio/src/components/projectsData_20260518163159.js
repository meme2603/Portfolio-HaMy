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
export const skillsData = [
  {
    name: "HTML5 / CSS",
    desc: "Tạo ra các trang web responsive, sử dụng Tailwind CSS để tối ưu hóa quy trình thiết kế và phát triển.",
    icon: "path_to_html_icon",
  },
  {
    name: "JavaScript",
    desc: "Nắm vững cơ bản về ES6+, xử lý các tương tác DOM và logic đơn giản cho website.",
    icon: "path_to_js_icon",
  },
  {
    name: "React / Vite",
    desc: "Đang học và ứng dụng vào việc xây dựng các Component tái sử dụng cho Portfolio cá nhân.",
    icon: "path_to_react_icon",
  },
  {
    name: "Figma",
    desc: "Sử dụng thành thạo Auto Layout, Component, Variables để xây dựng Design System hoàn chỉnh.",
    icon: "path_to_figma_icon",
  },
  {
    name: "Photoshop",
    desc: "Xử lý hình ảnh, cắt ghép và tối ưu hóa tài nguyên hình ảnh cho các dự án web.",
    icon: "path_to_ps_icon",
  },
  {
    name: "WordPress",
    desc: "Có khả năng quản lý nội dung và tùy chỉnh các giao diện cơ bản trên nền tảng WordPress.",
    icon: "path_to_wp_icon",
  },
];
