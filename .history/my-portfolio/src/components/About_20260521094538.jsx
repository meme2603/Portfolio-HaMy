import aboutImg from "../assets/about.jpg";
function About() {
  return (
    <section className="relative w-full h-auto py-24 bg-background overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* TITLE */}
        <div className="mb-16">
          <h1 className="text-[24px] md:text-[40px] lg:text-[60px] font-bold font-akshar text-font leading-none">
            ABOUT ME
          </h1>

          <div className="w-[40px] md:w-[80px] lg:w-[120px] lg:h-[6px] md:h-[5px] h-[4px] bg-primary mt-1"></div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          {/* LEFT */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <img
                src={aboutImg}
                alt="About Me"
                className="w-full  h-[300px] object-cover rounded-xl"
              />

              <div className="mt-5">
                <h2 className="text-3xl font-akshar font-bold tracking-wide text-font">
                  NGUYEN THI HA MY
                </h2>

                <p className="text-font/70 text-lg mt-1">2001.03.30</p>
              </div>

              <div className="flex gap-3 mt-6">
                <span className="border border-font rounded-full px-4 py-2 text-sm">
                  UI/UX Designer
                </span>

                <span className="border border-font rounded-full px-4 py-2 text-sm">
                  Bridge Engineer
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 max-w-[760px]">
            <h2 className="text-2xl md:text-3xl font-semibold font-akshar text-primary tracking-[4px] mb-8">
              PROFILE!!
            </h2>

            <div className="space-y-6 text-font leading-[2.2] text-sm md:text-base lg:text-lg">
              <p>
                ベトナム出身の
                <span className="font-semibold">
                  グエン ティ ハ ミー（Ha My）
                </span>
                です。
              </p>

              <p>
                現在は専門学校で、
                <span className="font-semibold">デザイン・コーディング</span>
                について学びながら,Web制作やフロントエンド技術の基礎を学んでおります。
              </p>

              <p>
                2021年に来日しました。最初の1年間は日本語学校で日本語を学びました。
                <br />
                その後、ビジネス専門学校に進学し、日本の文化やビジネスマナー、コミュニケーション力を身につけてまいりました。
                その中で、コンピュータの授業を通して、ITという職業があることを初めて知り、興味を持つようになりました。
              </p>

              <p>
                留学生として日本とベトナム両方の文化に触れてきた経験を活かし、
                将来は開発チームとお客様をつなぐ架け橋となれる
                <span className="font-semibold text-primary text-2xl">
                  Bridge Engineer
                </span>
                を目指しております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
