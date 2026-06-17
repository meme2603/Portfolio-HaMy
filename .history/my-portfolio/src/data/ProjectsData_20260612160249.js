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
import portfoliomockupHero from "../assets/portfoliomockupHero.jpg";
import portfoliomockupConcept from "../assets/portfoliomockupConcept.jpg";

export const websiteProjects = [
  {
    id: "coffee-shop",
    year: "2025",
    title: "Coffee Shop",
    name: "THE COFFEE HOUSE",
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

    target: "子供連れの20代〜40代のファミリー層",
    objective: "店舗の温かみのある雰囲気をWEB上で表現し...",
    problem: "既存のカフェサイトはスタイリッシュすぎて...",
    designConcept: "温かみのあるベージュ（#FAF7F2）と...",
    ia: "ユーザーが最も知りたい『メニュー』...",
    scope: "UI/UX Designer / Frontend Developer",
    period: "企画・WF：3日\nデザイン：5日",
    tools: "Figma / HTML / CSS / JavaScript",
    URL: "https://the-coffee-house-eight.vercel.app/",
  },
  {
    id: "portfolio",
    year: "2026",
    title: "Portfolio.",
    name: "PORTFOLIO",
    titleJP: "ポートフォリオ",
    desc: "就職活動のために制作したポートフォリオサイトです。",
    tags: ["Figma", "React", "Tailwind"],
    img: portfoliothumb,

    // page detail
    mockupHero: portfoliomockupHero,
    mockupConcept: portfoliomockupConcept,

    client: "自主制作（就職活動用）",
    target: "Web制作会社・デザイン企業の採用担当者様",
    objective: "自身のスキル thấu đáo và tư duy thiết kế rõ ràng...",
    problem: "作品単体を見せるだけでは制作の背景や意図が伝わりにくい...",
    designConcept:
      "シンプルかつ視認性の高いダークモードとライトモードの融合...",
    ia: "Home / Project Detail / About / Contact",
    scope: "UI/UX Design / Front-end Development (React)",
    period: "デザイン：3日\nコンディング：5日",
    tools: "Figma / React / Tailwind CSS / Vite",
    URL: "https://portfolio.example.com",
  },
  {
    id: "sneaker-lp",
    year: "2025",
    title: "Sneaker LP",
    name: "SNEAKER LANDING PAGE",
    titleJP: "スニーカーLP",
    desc: "新作スニーカーの販売に向けた、ランディングページを制作しました。",
    tags: ["Figma", "HTML", "SCSS"],
    img: sneakerthumb,

    // page detail
    mockupHero: sneakermockupHero,
    mockupIntro: sneakermockupIntro,
    mockupConcept: sneakermockupConcept,

    target: "10代〜30代のスニーカーコレクター・ストリートファッション好き",
    objective:
      "新作スニーカーの魅力をダイナミックに伝え、購買意欲を刺激する...",
    problem:
      "従来の商品LPは情報量が多く、製品のスタイリッシュさが埋もれがち...",
    designConcept: "ダイナミックなタイポグラフィとコントラストの強い配色...",
    ia: "Hero / Concept / Features / Gallery / Buy Now",
    scope: "UI/UX Design / Coding",
    period: "1週間",
    tools: "Figma / HTML / SCSS / JavaScript",
    URL: "https://sneaker-lp-2025.vercel.app/",
  },
  {
    id: "okayama-kankou",
    year: "2025",
    title: "Okayama kankou",
    name: "OKAYAMA KANKOU",
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

    target: "歴史や文化に興味がある国内の旅行者・ファミリー層",
    objective: "岡山の伝統的な魅力と桃太郎の史実を新しい切り口で伝える...",
    problem:
      "一般的な観光パンフレット的な情報ばかりで、現地のストーリー性が伝わりにくい...",
    designConcept: "和モダンを意識した、落ち着きのあるテクスチャと色彩設計...",
    ia: "トップ / 伝説の背景 / おすすめスポット / アクセス",
    scope: "UI/UX Design / Information Architecture",
    period: "企画・WF：3日\nデザイン：5日",
    tools: "Figma / Illustrator",
    URL: "https://okayama2026.vercel.app/",
  },
];

export const appProjects = [
  {
    id: "easy-cook",
    year: "2025",
    title: "EASY COOK APP",
    name: "EASY COOK",
    titleJP: "お弁当を提案するアプリ",
    desc: "家にある食材を活用し、親子で楽しくお弁当作りができるアプリです。",
    tags: ["Ruby", "TypeScript", "Kotlin", ""],
    img: easycookthumb,

    // page detail
    mockupHero: easycookmockupHero,
    mockupMobile: easycookmockupMobile,

    client: "自主制作（モバイルアプリケーション設計）",
    target: "毎日の子供のお弁当作りに悩む、忙しい共働きの親御さん",
    objective:
      "冷蔵庫の残り物で手軽に作れるレシピを提案し、お弁当作りの負担を軽減する...",
    problem: "献立を考える時間が足りず、いつも同じメニューになってしまう...",
    designConcept:
      "親しみやすさと使いやすさを両立した、暖色系主体のUIデザイン...",
    ia: "ホーム / レシピ検索 / お気に入り / 親子モード",
    scope: "UI/UX Design / Mobile Prototype",
    period: "約1.5ヶ月（チーム制作）",
    tools: "Figma / React Native (UI Prototyping)",
    URL: "",
  },
  {
    id: "nemura-app",
    year: "2025-2026",
    title: "Nemura APP",
    name: "NEMURA AI NEWS",
    titleJP: "一日寝落ち系AIニュースキュレーションアプリです。",
    desc: "本作は、SNSやニュースの情報をAIで要約し、 マスコットキャラクター「ねむら」が読み聞かせる形式で提供する。夜の短い時間で必要な内容だけを無理なく確認できるよう設計しました。",
    tags: ["Tailwind", "Docker", "Firebase", "TypeScript", "NEXT API"],
    img: nemurathumb,

    // page detail
    mockupHero: nemuramockupHero,
    mockupMobile: nemuramockupMobile,

    client: "チーム制作（ECC EXPO 2026 一次審査通過作品）",
    target:
      "夜寝る前にスマホを見すぎて睡眠不足になりがちな現代のビジネスパーソン・学生",
    objective:
      "画面を見ずに耳だけで今日の重要ニュースを効率よく消化できる体験...",
    problem:
      "夜のスマホ画面のブルーライトが睡眠の質を下げ、不要な情報まで追ってしまう...",
    designConcept:
      "睡眠を妨げない、深い夜をイメージしたダークブルーとパープルの世界観...",
    ia: "音声再生画面 / ニュースカテゴリ選択 / キャラクター設定",
    scope: "UI/UX Design (Lead) / Brand Identity",
    period: "約1.5ヶ月（チーム制作）",
    tools: "Figma / Illustrator / After Effects",
    URL: "",
  },
];

// skillsData.js
export const skillData = [
  {
    category: "Design tool",
    skills: [
      {
        name: "Figma",
        desc: "Figmaを活用したUIデザインやデザインシステム設計を得意としています。",
      },
      {
        name: "UI/UX",
        desc: "情報設計やユーザビリティを意識したUIデザイン制作を得意としています。",
      },
    ],
  },
  {
    category: "Development",
    skills: [
      {
        name: "HTML/CSS/Tailwind",
        desc: "レスポンシブ対応やUI実装を中心に、使いやすいWebサイト制作に取り組んでいます。",
      },
      {
        name: "JavaScript/React",
        desc: "コンポーネントベースの開発や、状態管理、、動きのあるUI表現について学習しています。",
      },
    ],
  },
];
