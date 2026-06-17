// projectsData.js
// 1. Import ảnh ở đầu file để JS hiểu đường dẫn
import portfoliothumb from "../assets/portfoliothumb.jpg";
import coffeethumb from "../assets/coffeethumb.jpg";
import sneakerthumb from "../assets/sneakerthumb.jpg";
import okayamathumb from "../assets/okayamathumb.jpg";
import nemurathumb from "../assets/nemurathumb.jpg";
import easycookthumb from "../assets/easycookthumb.jpg";
import 

export const websiteProjects = [
  {
    id: "coffee-shop",
    year: "2025",
    title: "Coffee Shop",
    titleJP: "カフェショップサイト",
    desc: "家族みんなが安心して過ごせるカフェをテーマに、Webサイトを制作しました。",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    img: coffeethumb,

    // page detail
    mockupHero: coffeethumb,       // Mockup 1: Trên cùng
    mockupIntro: coffeethumb,      // Mockup 2: Nhỏ cạnh phần giới thiệu
    mockupConcept: coffeethumb,    // Mockup 3: Ảnh to ở giữa (Visual Concept)
    mockupPC: coffeethumb,         // Mockup 4: Bản Website PC dài ở dưới
    mockupMobile: coffeethumb,     // Mockup 5: Bản Mobile dài ở dưới
  },
  {
    id: "portfolio",
    year: "2026",
    title: "Portfolio.",
    titleJP: "ポートフォリオ",
    desc: "就職活動のために制作したポートフォリオサイトです。",
    tags: ["Figma", "React", "Tailwind"],
    img: portfoliothumb,
  },
  {
    id: "sneaker-lp",
    year: "2025",
    title: "Sneaker LP",
    titleJP: "スニーカーLP",
    desc: "新作スニーカーの販売に向けた、ランディングページを制作しました。",
    tags: ["Figma", "HTML", "SCSS"],
    img: sneakerthumb,
  },
  {
    id: "okayama-kankou",
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
    id: "easy-cook",
    year: "2025",
    title: "EASY COOK APP",
    titleJP: "お弁当を提案するアプリ",
    desc: "家にある食材を活用し、親子で楽しくお弁当作りができるアプリです。忙しい日常の中でも、親子のコミュニケーションを自然に深められる体験の提供を目的としています。",
    tags: ["React Native", "Firebase"],
    img: easycookthumb,
  },
  {
    id: "nemura-app",
    year: "2025-2026",
    title: "Nemura APP",
    titleJP: "一日寝落ち系AIニュースキュレーションアプリです。",
    desc: "本作は、SNSやニュースの情報をAIで要約し、 マスコットキャラクター「ねむら」が読み聞かせる形式で提供する。夜の短い時間で必要な内容だけを無理なく確認できるよう設計しました。",
    tags: ["React Native", "Firebase"],
    img: nemurathumb,
  },
];

// skillsData.js
export const skillData = [
  {
    category: "Design tool",
    skills: [
      {
        name: "Figma",
        // status: "上級",
        desc: "Figmaを活用したUIデザインやデザインシステム設計を得意としています。",
      },
      {
        name: "UI/UX",
        // status: "上級",
        desc: "情報設計やユーザビリティを意識したUIデザイン制作を得意としています。",
      },
    ],
  },
  {
    category: "Development",
    skills: [
      {
        name: "HTML/CSS/Tailwind",
        // status: "基礎レベル",
        desc: "レスポンシブ対応やUI実装を中心に、使いやすいWebサイト制作に取り組んでいます。",
      },
      {
        name: "JavaScript/React",
        // status: "基礎知識・学習中",
        desc: "コンポーネントベースの開発や、状態管理、、動きのあるUI表現について学習しています。",
      },
    ],
  },
];
