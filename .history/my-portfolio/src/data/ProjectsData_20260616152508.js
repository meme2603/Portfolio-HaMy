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
      "転職活動のためのポートフォリオサイトを制作しました。デザイン全体で自分自身を表し,作品としても魅力的に見ていただけるようなデザインを心がけました。",
    target: "企業の採用担当者様",
    objective:
      "自分がデザイナーとして何ができるかを伝える、\n「会ってみたい」と思っていただけるようなポートフォリオサイトを目指しました。",
    designConcept:
      "就職活動用のポートフォリオサイトとして、シンプルでありながら自分らしさが伝わるデザインを目指しました。余白を活かしたレイアウトと大胆なタイポグラフィを取り入れ、作品が引き立つ構成にしています。また、また、黒をベースにすることで全体をすっきりとまとめ、アクセントとして赤を取り入れることで視線が集まるポイントを作りました。さらに、作品をWebサイトとアプリケーションに分類し、閲覧者が興味のある分野の作品を探しやすい構成にしています。",
    problem:
      "ポートフォリオ制作において、「限られた時間で採用担当者の印象に残ること」と「自分らしいデザイナーとしての個性を表現すること」の両立に難しさを感じました。",
    Learnings:
      "ポートフォリオ制作を通して、「見る人の気持ちになって、いかにストレスなく読んでもらうか」の大切さを学びました。忙しい採用担当者の方の視点に立ち、文字ばかりで読ませるのではなく、写真やモックアップを組み合わせて直感的に伝わるように工夫しました。",
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
      "新作スニーカーの魅力を伝えるランディングページです。ブランド特有の世界観を大切にしながらも、ユーザーが知りたい情報にすぐたどり着き、\n心地よくショッピングができるような分かりやすい情報設計を意識しました。",
    target: "20代〜30代の男女スニッカーが好きな人",
    objective:
      "新作スニーカーの魅力を視覚的に伝え、ユーザーの「欲しい」という気持ちを刺激して、商品の購入へスムーズに誘導すること。",
    designConcept:
      "新作スニーカーの持つカッコよさや熱量を伝えるために全体を「赤色」にするという大胆なデザインに挑戦しました。派手な赤色の中でも、商品のスニーカーや文字がちゃんと目立つように、「黒と白」をうまく使ってメリハリをつけています。ブランドの世界観に一瞬で引き込みつつも、商品の情報や購入ボタンがパッと目に入り,お買い物をスムーズに楽しめ設計を意識しました。",
    problem:
      "見た目のカッコよさばかりに集中してしまい、内容のつながりが薄く、全体的に少しバラバラな印象になってしまいました。また、一番ピーアルしたいはずの「新商品」が十分に目立っておらず、パッと見た瞬間に「何を一番伝えたいのか」が分かりにくい画面になってしまったことが大きな反省点です。",
    Learnings:
      "今回の制作を通して、ただ見た目を派手にするだけでは、一番ピーアルしたい商品が埋もれてしまい、内容もバラバラになってしまうと気づきました。今後は、パッと見て商品が目立つ工夫をすること、そして上から下までストーリーのようにつながるレイアウトを最初にしっかり組み立ててから、デザインを作り込んでいく大切さを学びました。",
    scope: "デザイン / コーディング",
    period: "1週間",
    tools: "Figma / HTML / SCSS /",
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
      "昔話「桃太郎伝説」をテーマに、岡山の伝説・史実・文化を体験できる観光サイトを制作しました。「物語をたどりながら巡る岡山の旅」をコンセプトに、昔話の世界観と実際の観光地を重ね合わせ、まるで物語の中に入り込むような体験ができる構成を意識しています。物語を楽しみながら、自然と岡山の魅力に触れられる観光体験の提供を目指しています。",
    target: "30ー50代：大人向け観光サイト",
    objective:
      "桃太郎伝説を通して、岡山の歴史や文化、観光地とのつながりを知ってもらうことを目的としました",
    designConcept:
      "桃太郎伝説を入口として、歴史や文化、観光地へと興味を広げられる構成を意識しています。観光情報を一度に詰め込むのではなく、段階的に情報を見せることで、物語を読み進めるように自然と岡山を巡れる体験を目指しました。また、自然をイメージしたグリーンを基調とし、親しみやすく落ち着いた世界観を表現しています。",
    problem:
      "留学生として岡山を訪れた際、桃太郎伝説は知っていましたが、その背景にある文化や歴史については十分に理解できていませんでした。そのため、桃太郎伝説ならではの魅力や世界観をどのようにデザインで表現するかが課題でした。",
    Learnings:
      "桃太郎伝説について調査を進める中で、知識として理解することと、それをデザインで表現することは別だと気づきました。文化や歴史への理解を深め、それを伝わる形に落とし込むことの大切さを学びました。",
    scope: "ディレクション / デザイン ",
    period: "企画・WF：４週間\nデザイン：5週間",
    tools: "Figma / Photoshop",
    // URL: "https://okayama2026.vercel.app/",
  },
];

export const appProjects = [
  {
    id: "easy-cook",
    year: "2025",
    title: "EASY COOK APP",
    name: "EASY COOK",
    titleJP: "お弁当を提案するアプリ",
    desc: "家にある食材を使って、親子で楽しくお弁当を作ることをサポートするアプリ",
    tags: ["Ruby", "TypeScript", "Kotlin", "Swift", "C"],
    img: easycookthumb,

    // page detail
    mockupHero: easycookmockupHero,
    mockupMobile: easycookmockupMobile,

    client: "チーム制作（モバイルアプリケーション設計）",
    proposal:
      "家にある食材を活用しながら、親子で楽しくお弁当作りができるアプリを企画しました。忙しい日常の中でも、親子でコミュニケーションを取りながら料理を楽しみ、お弁当作りの負担をできる体験を目指しています。",
    target: "親子（子供は中学生以下）",
    objective:
      "冷蔵庫にある食材を活用しながら、親子で無理なくお弁当作りを楽しめる環境を提供することを目的としました。",
    designConcept:
      "親子が一緒に料理を進められるよう、文字だけでなくアイコンも活用し、子どもでも直感的に理解できるデザインを意識しています。また、手順を「1画面1アクション」で構成することで、次に何をすればよいか迷わず進められるUIを設計しました。さらに、キャラクターと完成したお弁当の記録機能を取り入れ、親子で楽しみながら継続して利用できる体験を目指しました。",
    problem:
      "親子で一緒に使うアプリであるため、親にとっての使いやすさと、子どもにとっての楽しさを両立させることが課題でした。特に、子どもが途中で飽きずに料理へ参加し続けられるよう、分かりやすい操作性と達成感を感じられる仕組みをどのように設計するかを意識しました。",
    Learnings:
      "今回の制作を通して、子ども向けのデザインでは「分かりやすいこと」と同じくらい「楽しいこと」が大切だと学びました。どれだけ使いやすくても、子どもが楽しめなければ続けて使ってもらえないため、続けたくなる体験を設計することの大切さを実感しました。",
    scope: "ディレクション / デザイン",
    period: "約2.5ヶ月（チーム制作）",
    tools: "Figma",
    URL: "https://okayama2026.vercel.app/",
  },
  {
    id: "nemura-app",
    year: "2025-2026",
    title: "Nemura APP",
    name: "NEMURA AI NEWS",
    titleJP: "聴きながら眠れちゃうAIニュースキュレーションアプリ",
    desc: "夜のリラックスタイムに最適な一日のまとめアプリ。マスコットキャラクター「ねむら」がSNSやニュースを要約して読み聞かせてくれます。",
    tags: ["Tailwind", "Docker", "Firebase", "TypeScript", "NEXT API"],
    img: nemurathumb,

    // page detail
    mockupHero: nemuramockupHero,
    mockupMobile: nemuramockupMobile,

    client: "チーム制作（モバイルアプリケーション設計）",
    poposal:
      "本作は、SNSやニュースの情報を要約し、マスコットキャラクター「ねむら」が読み聞かせる形式で提供する一日まとめアプリです。情報量の多さに負担を感じる方が、夜の短い時間で必要な内容だけを確認できるよう設計しました。落ち着いて一日を整理したい方に向けた作品です。",
    target: "忙しい20代〜40代の男女",
    objective:
      "夜の限られた時間の中で、ユーザーが画面を見ずに必要な情報を効率よく取得できる体験を提供することを目的としました。",
    designConcept:
      "Nemuraは忙しい一日の後に目と心を休めることを目的に、柔らかく、優しく、低刺激の方向性で設計しました。\n配色は純色を使用せず、暗い環境での発光による目の痛みを避けるため、純白や純黒を排除しています。その代わりに、目に刺さらず疲れにくい柔らかなホワイト（#f1f1f1）と、完全な黒よりも安心感のあるネイビーブラック（#14171C）を採用し、目と心への優しさを優先しています。また、夜空の静けさと広がりを表現するために、ブラックからブルーへのグラデーションを用いて落ち着いた印象を演出しています。\nタイポグラフィにはZen丸ゴシックを選択し、角を丸くすることで文字が情報を強調しすぎず、夜の静かな世界観に合わせてユーザーの気持ちをゆっくりと落ち着かせます。グラフィックでは夜空のグラデーションに月や星、雲、ねむらを配置し、画面の硬さを取り除き、ふんわりとした寝具のような柔らかさを視覚的に伝えています。\n本作のかわいいマスコットキャラクター、ねむらに注目してほしいです！ねむらの構成は、アプリの柔らかく、落ち着いた雰囲気と、夜空の星を組み合わせて行いました。夜間に利用が多いアプリなので、目に優しい配色にし、柔らかいイメージを持ってもらうために、耳や体を含めた全体のフォルムは角をなくし、丸みのあるデザインを意識しています。",
    problem:
      "ニュースアプリとして情報を届けながらも、ユーザーが自然にリラックスし、眠りへ移行できる体験をどのように設計するかが課題でした。",
    Learnings:
      "制作を進める中で、ユーザーが自然に眠りへ移行できるようにするためには、情報設計や画面遷移、キャラクターの役割まで含めて一貫して考える必要があると実感しました。",

    scope: "ディレクション / デザイン",
    period: "約3ヶ月（チーム制作）",
    tools: "Figma / Illustrator ",
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
        desc: "Figmaを活用したUX/UIデザインや、コンポーネント、バリアブルを意識したデザインシステムの構築を得意としています。",
      },
      {
        name: "UX/UI Design",
        desc: "ユーザー視点に立ち、情報設計やユーザビリティを意識した、直感的で使いやすいUX/UIデザインを制作しています。",
      },
    ],
  },
  {
    category: "Development",
    skills: [
      {
        name: "HTML/CSS/Tailwind",
        desc: "Figmaデザインの再現するコーディングや、Tailwind CSSを用いたレスポンシブ実装を中心に",
      },
      {
        name: "JavaScript/React",
        desc: "コンポーネントベースの開発や、状態管理、、動きのあるUI表現について学習しています。",
      },
    ],
  },
];
