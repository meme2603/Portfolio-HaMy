import React from "react";
import { useParams, Link } from "react-router-dom";

// 📦 TỰ CHỨA DATA TRONG FILE LUÔN - KHÔNG SỢ LỖI IMPORT ĐƯỜNG DẪN NỮA NHA MINI!
const allProjectsData = {
  "coffee-shop": {
    id: "coffee-shop",
    title: "THE COFFEE HOUSE",
    titleJP: "カフェショップサイト",
    desc: "家族みんなが安心して過ごせるカフェをテーマに、Webサイトを制作しました。",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
    // Toàn bộ nội dung chi tiết theo đúng layout bà yêu cầu nè:
    target:
      "20代〜40代のファミリー層、週末に子どもと一緒にゆっくりカフェ時間を楽しみたい親御さん。",
    objective:
      "店舗の温かみのある雰囲気を伝え、新規のファミリー層の顧客を獲得すること。また、メニューやアクセス情報に迷わずたどり着けるようにすること。",
    problem:
      "既存のカフェサイトはスタイリッシュすぎて子連れが入Requestしづらい印象があり、スマートフォンでのメニュー閲覧も最適化されていなかった。",
    designConcept:
      "温かみのあるベージュ（#FAF7F2）と、珈琲を連想させる深いブラウン（#1A120B）を基調とし、親しみやすさと安心感を演出するシンプルなレイアウト。",
    ia: "ユーザーが最も知りたい『メニュー』『アクセス』『子連れ向けの設備』の情報へ、トップページから3クリック以内で直感的に到達できる動線設計。",
    role: "UI/UX Designer / Frontend Developer (Design to Code)",
  },
  "sneaker-lp": {
    id: "sneaker-lp",
    title: "SNEAKER LP",
    titleJP: "スニーカー特設ランディングページ",
    desc: "趣味のスニーカーコレクションを活かし、Atomic Designを取り入れたLP制作。",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    target:
      "10代〜30代のスニーカーコレクター、ストリートファッションが好きな若者層。",
    objective:
      "限定スニーカーの持つ躍動感やストリートカルチャーの魅力を最大限に伝え、特設サイトからの購入コンバージョン率を高めること。",
    problem:
      "通常の通販サイトではスニーカーの詳細なディテールや背景にあるストーリーが伝わりにくく index 価値が表現しきれていなかった。",
    designConcept:
      "ダークモード（#121212）をベースに、ネオンカラーのアクセントと大胆なタイポグラフィを採用し、エッジの効いた近未来的なストリート感を演出。",
    ia: "ファーストビューで圧倒的なビジュアルを見せ、スクロールに合わせて商品のストーリー、ディテール、サイズ展開、購入ボタンへと流れるストーリー型の1カラム構成。",
    role: "UI/UX Designer / Frontend Developer",
  },
};

function ProjectDetail() {
  const { id } = useParams();

  // Bốc đúng dữ liệu của dự án dựa trên ID, nếu khum tìm thấy thì mặc định lấy quán cafe cho an toàn
  const project = allProjectsData[id] || allProjectsData["coffee-shop"];

  return (
    <section className="w-full bg-[#FAF7F2] text-[#1A120B] pt-16 pb-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="text-[#1A120B]/40 text-xs hover:text-[#3C2A21] transition-colors uppercase tracking-widest block mb-8"
        >
          ← Back to home
        </Link>

        {/* ─── KHỐI 1: MOCKUP Ở TRÊN CÙNG (Hero Banner) ─── */}
        <div className="w-full h-[60vh] relative overflow-hidden bg-[#1A120B] rounded-2xl mb-16 shadow-lg">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 filter brightness-90"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 text-white">
            <p className="text-xs tracking-[4px] uppercase text-white/60 mb-2">
              Case Study
            </p>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase">
              {project.title}
            </h1>
            <p className="text-sm text-white/80 font-light">
              {project.titleJP}
            </p>
          </div>
        </div>

        {/* ─── KHỐI 2: PHẦN GIỚI THIỆU & MOCKUP NHỎ ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold text-amber-800/60 tracking-wider uppercase">
              Introduction
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              {project.title} について
            </h2>
            <p className="text-base leading-relaxed font-light text-[#1A120B]/90 pt-2 border-t border-[#1A120B]/10">
              {project.desc}
            </p>
          </div>
          <div className="md:col-span-5 bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-xl p-4 shadow-sm">
            <img
              src={project.img}
              alt="Small Preview"
              className="w-full h-44 object-cover rounded"
            />
          </div>
        </div>

        {/* ─── KHỐI 3: THÊM 1 ẢNH MOCKUP GÓC CẠNH ─── */}
        <div className="w-full bg-[#1A120B] rounded-2xl p-4 md:p-8 mb-20 shadow-xl border border-white/5">
          <p className="text-white/30 text-[10px] tracking-[4px] uppercase mb-4 font-mono pl-2">
            - Visual Overview -
          </p>
          <img
            src={project.img}
            alt="Mid Mockup"
            className="w-full h-auto max-h-[50vh] object-cover rounded-lg"
          />
        </div>

        {/* ─── KHỐI 4: PHẦN THÔNG TIN CHI TIẾT (Target, 目的, 課題...) ─── */}
        <div className="bg-[#F5EFE6] rounded-2xl p-6 md:p-10 border border-[#3C2A21]/10 mb-20">
          <h3 className="text-lg md:text-xl font-bold tracking-wider border-b border-[#1A120B]/10 pb-4 mb-8 text-amber-950 uppercase">
            企画・設計詳細 (Project Details)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-[#1A120B] mb-1.5 flex items-center gap-1.5">
                  🎯 ターゲット (Target)
                </h4>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-5">
                  {project.target}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A120B] mb-1.5 flex items-center gap-1.5">
                  📌 目的 (Objective)
                </h4>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-5">
                  {project.objective}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A120B] mb-1.5 flex items-center gap-1.5">
                  ⚠️ 課題 (Problem)
                </h4>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-5">
                  {project.problem}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-[#1A120B] mb-1.5 flex items-center gap-1.5">
                  🎨 デザイン (Design)
                </h4>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-5">
                  {project.designConcept}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A120B] mb-1.5 flex items-center gap-1.5">
                  🧱 情報設計 (IA)
                </h4>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-5">
                  {project.ia}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A120B] mb-1.5 flex items-center gap-1.5">
                  💼 担当範囲 (Scope)
                </h4>
                <p className="text-sm text-[#1A120B]/80 leading-relaxed font-light pl-5">
                  {project.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── KHỐI 5: 2 MOCKUP CỦA SITE VÀ MOBILE ─── */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[6px] text-[#1A120B]/40 uppercase mb-2">
            - Device Layout Previews -
          </p>
          <h3 className="text-xl md:text-2xl font-black text-[#1A120B]">
            全体レイアウト (PC & Mobile)
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          <div className="lg:col-span-8 bg-[#1A120B] p-3 rounded-xl shadow-md border border-[#1A120B]/5">
            <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2 pl-2">
              Desktop Version
            </p>
            <img
              src={project.img}
              alt="Desktop Layout"
              className="w-full h-auto rounded bg-[#FAF7F2]"
            />
          </div>
          <div className="lg:col-span-4 bg-[#1A120B] p-3 rounded-xl shadow-md border border-[#1A120B]/5 lg:sticky lg:top-24">
            <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2 pl-2">
              Mobile Version
            </p>
            <img
              src={project.img}
              alt="Mobile Layout"
              className="w-full h-auto rounded bg-[#FAF7F2]"
            />
          </div>
        </div>

        {/* ─── KHỐI 6: 他にも見る (Nút quay về Home nhanh gọn) ─── */}
        <div className="w-full border-t border-[#1A120B]/10 pt-16 text-center">
          <h3 className="text-2xl font-black text-amber-900 font-sans tracking-wide mb-4">
            他にも見る
          </h3>
          <Link
            to="/"
            className="inline-block bg-[#1A120B] text-white text-xs uppercase tracking-widest px-6 py-3 rounded-md hover:bg-amber-900 transition-colors"
          >
            ← Back to Home to view all projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
