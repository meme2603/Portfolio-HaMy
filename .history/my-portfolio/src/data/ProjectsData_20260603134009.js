// projectsData.js
// 1. Import ảnh ở đầu file để JS hiểu đường dẫn
import portfoliothumb from "../assets/portfoliothumb.jpg";
import coffeethumb from "../assets/coffeethumb.jpg";
import sneakerthumb from "../assets/sneakerthumb.jpg";
import okayamathumb from "../assets/okayamathumb.jpg";
import nemurathumb from "../assets/nemurathumb.jpg";
import easycookthumb from "../assets/easycookthumb.jpg";
import coffeemockupHero from "../assets/coffeemockupHero.jpg";
import coffeemockupIntro from "../assets/coffeemockupIntro.png";
import coffeemockupConcept from "../assets/coffeemockupConcept.jpg";
import coffeemockupPC from "../assets/coffeemockupPc.jpg";
import coffeemockupMobile from "../assets/coffeemockupMobile.jpg";
import sneakermockupHero from "../assets/sneakermockupHero.jpg";
import sneakermockupIntro from "../assets/sneakermockupIntro.png";
import sneakermockupConcept from "../assets/sneakermockupConcept.jpg";
import okayamamockupHero from "../assets/okayamamockupHero.jpg";
import okayamamockupIntro from "../assets/okayamamockupIntro.png";
import okayamamockupConcept from "../assets/okayamamockupConcept.jpg";
import okayamamockupPC from "../assets/okayamamockupPC.jpg";
import okayamamockupMobile from "../assets/okayamamockupMobile.jpg";
import nemuramockupHero from "../assets/nemuramockupHero.jpg";
import nemuramockupMobile from "../assets/nemuramockupMobile.jpg";
import easycookmockupHero from "../assets/easycookmockupHero.jpg";
import easycookmockupMobile from "../assets/easycookmockupMobile.jpg";

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
    mockupHero: coffeemockupHero,
    mockupIntro: coffeemockupIntro,
    mockupConcept: coffeemockupConcept,
    mockupPC: coffeemockupPC,
    mockupMobile: coffeemockupMobile,

    target: "20代〜40代のファミリー層...",
    objective: "店舗の温かみのある雰囲気をWEB上で表現し...",
    problem: "既存のカフェサイトはスタイリッシュすぎて...",
    designConcept: "温かみのあるベージュ（#FAF7F2）と...",
    ia: "ユーザーが最も知りたい『メニュー』...",
    scope: "UI/UX Designer / Frontend Developer",
    URL: "https://coffeeshop.example.com",
  },
  {
    id: "portfolio",
    year: "2026",
    title: "Portfolio.",
    titleJP: "ポートフォリオ",
    desc: "就職活動のために制作したポートフォリオサイトです。",
    tags: ["Figma", "React", "Tailwind"],
    img: portfoliothumb,

    // page detail
    mockupHero: coffeemockupHero,
    mockupIntro: coffeemockupIntro,
    mockupConcept: coffeemockupConcept,
    mockupPC: coffeemockupPC,
    mockupMobile: coffeemockupMobile,

    target: "20代〜40代のファミリー層...",
    objective: "店舗の温かみのある雰囲気をWEB上で表現し...",
    problem: "既存のカフェサイトはスタイリッシュすぎて...",
    designConcept: "温かみのあるベージュ（#FAF7F2）と...",
    ia: "ユーザーが最も知りたい『メニュー』...",
    scope: "UI/UX Designer / Frontend Developer",
    URL: "https://coffeeshop.example.com",
  },
  {
    id: "sneaker-lp",
    year: "2025",
    title: "Sneaker LP",
    titleJP: "スニーカーLP",
    desc: "新作スニーカーの販売に向けた、ランディングページを制作しました。",
    tags: ["Figma", "HTML", "SCSS"],
    img: sneakerthumb,

    // page detail
    mockupHero: sneakermockupHero,
    mockupIntro: sneakermockupIntro,
    mockupConcept: sneakermockupConcept,

    target: "20代〜40代のファミリー層...",
    objective: "店舗の温かみのある雰囲気をWEB上で表現し...",
    problem: "既存のカフェサイトはスタイリッシュすぎて...",
    designConcept: "温かみのあるベージュ（#FAF7F2）と...",
    ia: "ユーザーが最も知りたい『メニュー』...",
    scope: "UI/UX Designer / Frontend Developer",
    URL: "https://coffeeshop.example.com",
  },
  {
    id: "okayama-kankou",
    year: "2025",
    title: "Okayama kankou",
    titleJP: "観光サイト",
    desc: "昔話「桃太郎」をテーマに、岡山の伝説・史実・文化を体験できる観光サイトを制作しました。",
    tags: ["Figma", "UI/UX"],
    img: okayamathumb,

    // page detail
    mockupHero: okayamamockupHero,
    mockupIntro: okayamamockupIntro,
    mockupConcept: okayamamockupConcept,
    mockupPC: okayamamockupPC,
    mockupMobile: okayamamockupMobile,

    target: "20代〜40代のファミリー層...",
    objective: "店舗の温かみのある雰囲気をWEB上で表現し...",
    problem: "既存のカフェサイトはスタイリッシュすぎて...",
    designConcept: "温かみのあるベージュ（#FAF7F2）と...",
    ia: "ユーザーが最も知りたい『メニュー』...",
    scope: "UI/UX Designer / Frontend Developer",
    URL: "https://coffeeshop.example.com",
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

    // page detail
    mockupHero: easycookmockupHero,
    mockupMobile: easycookmockupMobile,

    target: "20代〜40代のファミリー層...",
    objective: "店舗の温かみのある雰囲気をWEB上で表現し...",
    problem: "既存のカフェサイトはスタイリッシュすぎて...",
    designConcept: "温かみのあるベージュ（#FAF7F2）と...",
    ia: "ユーザーが最も知りたい『メニュー』...",
    scope: "UI/UX Designer / Frontend Developer",
    URL: "https://coffeeshop.example.com",
  },
  {
    id: "nemura-app",
    year: "2025-2026",
    title: "Nemura APP",
    titleJP: "一日寝落ち系AIニュースキュレーションアプリです。",
    desc: "本作は、SNSやニュースの情報をAIで要約し、 マスコットキャラクター「ねむら」が読み聞かせる形式で提供する。夜の短い時間で必要な内容だけを無理なく確認できるよう設計しました。",
    tags: ["React Native", "Firebase"],
    img: nemurathumb,

    // page detail
    mockupHero: nemuramockupHero,
    mockupMobile: nemuramockupMobile,

    target: "20代〜40代のファミリー層...",
    objective: "店舗の温かみのある雰囲気をWEB上で表現し...",
    problem: "既存のカフェサイトはスタイリッシュすぎて...",
    designConcept: "温かみのあるベージュ（#FAF7F2）と...",
    ia: "ユーザーが最も知りたい『メニュー』...",
    scope: "UI/UX Designer / Frontend Developer",
    URL: "https://coffeeshop.example.com",
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
