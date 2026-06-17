// projectsData.js
// 1. Import ảnh ở đầu file để JS hiểu đường dẫn
import portfoliothumb from "../assets/portfoliothumb.jpg";
import coffeethumb from "../assets/coffeethumb.jpg";
import sneakerthumb from "../assets/sneakerthumb.jpg";
import okayamathumb from "../assets/okayamathumb.jpg";
import nemurathumb2 from "../assets/nemurathumb2.jpg";
import easycookthumb2 from "../assets/easycookthumb2.jpg";

export const websiteProjects = [
  {
    year: "2025",
    title: "Okayama kankou",
    titleJP: "観光サイト",
    desc: "昔話「桃太郎」をテーマに、岡山の伝説・史実・文化を体験できる観光サイトを制作しました。",
    tags: ["Figma", "UI/UX"],
    img: okayamathumb,
  },
  {
    year: "2025",
    title: "Coffee Shop",
    titleJP: "カフェショップサイト",
    desc: "家族みんなが安心して過ごせるカフェをテーマに、Webサイトを制作しました。",
    tags: ["Figma", "UI/UX"],
    img: coffeethumb,
  },
  {
    year: "2026",
    title: "Portfolio.",
    titleJP: "ポートフォリオ",
    desc: "就職活動のために制作したポートフォリオサイトです。",
    tags: ["React", "Tailwind"],
    img: portfoliothumb,
  },
  {
    year: "2025",
    title: "Sneaker LP",
    titleJP: "スニーカーLP",
    desc: "新作スニーカーの販売に向けた、ランディングページを制作しました。",
    tags: ["Figma", "UI/UX"],
    img: sneakerthumb,
  },
];

export const appProjects = [
  {
    year: "2025",
    title: "EASY COOK APP",
    titleJP: "お弁当を提案するアプリ",
    desc: "家にある食材を活用し、親子で楽しくお弁当作りができるアプリを企画・制作しました。忙しい日常の中でも、冷蔵庫の食材を無駄なく使いながら、親子のコミュニケーションを自然に深められる体験の提供を目的としています。",
    tags: ["React Native", "Firebase"],
    img: easycookthumb2,
  },
  {
    year: "2025",
    title: "Nemura APP",
    titleJP: "ニュースアプリ",
    desc: "本作は、SNSやニュースの情報をAIで要約し、 マスコットキャラクター「ねむら」が読み聞かせる形式で提供する。 一日寝落ち系AIニュースキュレーションアプリです。夜の短い時間で必要な内容だけを無理なく確認できるよう設計しました。",
    tags: ["React Native", "Firebase"],
    img: nemurathumb2,
  },
];
