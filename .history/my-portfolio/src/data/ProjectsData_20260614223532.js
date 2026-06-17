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
    proposal:
      "家族の時間をやさしくつなぐ空間をコンセプトに、温かみのある茶色や柔らかなレイアウトを取り入れ、訪れる前から安心感を感じられるようなデザインを意識しています。",
    target: "子供連れの20代〜40代のファミリー層",
    objective:
      "家族連れを中心としたユーザーに店舗の魅力や安心感を伝え、\n来店前から親しみを感じてもらうことで、\n実際の来店につなげることを目的としました",
    designConcept:
      "サイト全体のコンセプトは、「安心感から生まれる笑顔」です。家族で過ごす時間の中で生まれる自然な笑顔や温かなコミュニケーションを大切にしたいと考えました。そのため、ユーザーがサイトを訪れた瞬間から安心感や親しみやすさを感じられるデザインを目指しています。温かみのある茶色を基調とし、柔らかな余白や丸みのあるデザインを取り入れることで、居心地の良い雰囲気を表現しました。また、スタッフやお客様の自然な表情が伝わる写真を活用し、店舗全体の温かな空気感が感じられるよう工夫しています。",
    problem:
      "ターゲットである家族層に対して、店舗の温かい雰囲気や安心感をどのように伝えるかが課題でした。また、来店前にメニューや店舗情報を確認したいユーザーが、必要な情報へ迷わずアクセスできる設計が求められました。\nそこで、店舗の雰囲気が伝わる写真を大きく配置するとともに、温かみのある茶色を基調とした配色を採用し、安心感や親しみやすさを表現しました。さらに、メニューや店舗情報、アクセス情報などをわかりやすく配置し、ユーザーが必要な情報に迷わずアクセスできるように工夫しました。",
    Learnings:
      "制作を通して、写真の見せ方によってサイト全体の印象が大きく変わることを学びました。\n特に今回は、店舗の雰囲気や人の表情が伝わる写真を選ぶことで、コンセプトである「笑顔」や「安心感」をより効果的に表現できました。",
    scope: "ディレクション / デザイン / コーディング",
    period: "企画・WF：３週間\nデザイン：４週間\nコーディング：5週間",
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
    proposal:
      "企業の採用担当者の方々に、自身の制作物やスキル、デザインに対する考え方を伝えることを目的として制作したポートフォリオサイトです。",
    target: "企業の採用担当者様",
    objective: "自分がデザイナーとして何ができるかを伝える",
    designConcept:
      "就職活動用のポートフォリオサイトとして、シンプルで見やすいデザインを心がけました。作品の魅力を引き立てるために、余白を活かしたレイアウトと、アクセントカラーの赤が持つ情熱と、黒が持つ信頼感を活かしながら、全体は見やすさを意識した配色にしています。",
    problem: "作品単体を見せるだけでは制作の背景や意図が伝わりにくい...",
    Learnings: "Home / Project Detail / About / Contact",
    scope: "ディレクション / デザイン / コーディング",
    period: "デザイン：5週間\nコンディング：５週間\n企画・WF：4週間",
    tools: "Figma / React / Tailwind CSS /",
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

    proposal:
      "新作スニーカーの魅力をダイナミックに伝えるため、タイポグラフィとコントラストの強い配色を活かしたデザインを心がけました。製品のスタイリッシュさを際立たせるために、余白を活かしたレイアウトと、動きのある要素を取り入れ、訪れるユーザーがワクワクするような体験を目指しました。",
    target: "スニッカーが好きな人",
    objective:
      "新作スニーカーの魅力をダイナミックに伝え、購買意欲を刺激する...",
    designConcept: "ダイナミックなタイポグラフィとコントラストの強い配色...",
    problem:
      "従来の商品LPは情報量が多く、製品のスタイリッシュさが埋もれがち...",
    Learnings:
      "製品の魅力を際立たせるための余白の活かし方や、動きのある要素の効果的な使い方を学びました。",
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

    proposal:
      "昔話「桃太郎」をテーマに、岡山の伝説・史実・文化を体験できる観光サイトを制作しました。",
    target: "歴史や文化に興味がある国内の旅行者・ファミリー層",
    objective: "岡山の伝統的な魅力と桃太郎の史実を新しい切り口で伝える...",
    designConcept: "和モダンを意識した、落ち着きのあるテクスチャと色彩設計...",
    problem:
      "一般的な観光パンフレット的な情報ばかりで、現地のストーリー性が伝わりにくい...",
    Learnings: "トップ / 伝説の背景 / おすすめスポット / アクセス",
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
    tags: ["Ruby", "TypeScript", "Kotlin", "Swift", "C"],
    img: easycookthumb,

    // page detail
    mockupHero: easycookmockupHero,
    mockupMobile: easycookmockupMobile,

    client: "チーム制作（モバイルアプリケーション設計）",
    proposal:
      "家族みんなで楽しくお弁当作りができるアプリとして、親しみやすさと使いやすさを両立したデザインを心がけました。",
    target: "毎日の子供のお弁当作りに悩む、忙しい共働きの親御さん",
    objective:
      "冷蔵庫の残り物で手軽に作れるレシピを提案し、お弁当作りの負担を軽減する...",
    designConcept:
      "親しみやすさと使いやすさを両立した、暖色系主体のUIデザイン...",
    problem: "献立を考える時間が足りず、いつも同じメニューになってしまう...",
    Learnings: "ホーム / レシピ検索 / お気に入り / 親子モード",
    scope: "UI/UX Design / Mobile Prototype",
    period: "約1.5ヶ月（チーム制作）",
    tools: "Figma / React Native (UI Prototyping)",
    URL: "https://okayama2026.vercel.app/",
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

    client: "チーム制作（モバイルアプリケーション設計）",
    poposal:
      "夜寝る前にスマホを見すぎて睡眠不足になりがちな現代のビジネスパーソン・学生向けに、画面を見ずに耳だけで今日の重要ニュースを効率よく消化できる体験を提供するアプリとして、睡眠を妨げない、深い夜をイメージしたダークブルーとパープルの世界観をデザインコンセプトにしました。",
    target:
      "夜寝る前にスマホを見すぎて睡眠不足になりがちな現代のビジネスパーソン・学生",
    objective:
      "画面を見ずに耳だけで今日の重要ニュースを効率よく消化できる体験...",
    designConcept:
      "睡眠を妨げない、深い夜をイメージしたダークブルーとパープルの世界観...",
    problem:
      "夜のスマホ画面のブルーライトが睡眠の質を下げ、不要な情報まで追ってしまう...",
    Learnings: "音声再生画面 / ニュースカテゴリ選択 / キャラクター設定",

    scope: "UI/UX Design (Lead) / Brand Identity",
    period: "約1.5ヶ月（チーム制作）",
    tools: "Figma / Illustrator / After Effects",
    URL: "https://nemura-ai-news.vercel.app/",
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
