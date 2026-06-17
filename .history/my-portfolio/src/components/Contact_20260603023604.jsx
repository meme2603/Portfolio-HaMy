import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-font text-background py-6 overflow-hidden mt-20"
    >
      <div className="max-w-7xl mx-auto pt-6">
        <h1
          className="
                text-center
                font-akshar
                font-bold
                leading-none
                tracking-tight
                text-[70px]
                sm:text-[100px]
                md:text-[140px]
                lg:text-[180px]
                "
        >
          CONTACT ME
        </h1>
        <p
          className="
                text-center
                text-sm
                md:text-base
                text-white/80
                mt-4
                mb-10
                "
        >
          ご質問やご依頼など、お気軽にご連絡ください。
        </p>

        <form
          action="https://formspree.io/f/xnjzqegr"
          method="POST"
          className="max-w-3xl mx-auto px-6 md:px-0"
        >
          <input
            type="text"
            name="name"
            placeholder="お名前 (Name)"
            required
            className="
                    w-full
                    bg-background
                    text-font   
                    rounded-md
                    px-6
                    py-4
                    mb-4
                    outline-none
                "
          />
          <input
            type="email"
            name="email"
            placeholder="メールアドレス (Email)"
            required
            className="
                    w-full
                    bg-white
                    text-black
                    rounded-md
                    px-6
                    py-4
                    mb-4
                    outline-none
                "
          />
          <textarea
            name="message"
            placeholder="メッセージ内容 (Message)"
            rows="5"
            className="
                    w-full
                    bg-white
                    text-black
                    rounded-md
                    px-6
                    py-4
                    outline-none
                    resize-none
                "
          ></textarea>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="
                    bg-background
                    text-primary
                    px-14
                    py-3
                    rounded-md
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    "
            >
              送信する
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-8 mt-14 text-4xl">
          <a href="/" className="hover:scale-110 transition-all duration-300">
            <FaFacebook />
          </a>

          <a href="/" className="hover:scale-110 transition-all duration-300">
            <FaInstagram />
          </a>

          <a href="/" className="hover:scale-110 transition-all duration-300">
            <FaGithub />
          </a>
        </div>

        <p
          className="
                text-center
                text-sm
                text-background/70
                mt-4
                "
        >
          © Copyright by NguyenHaMy 2026
        </p>
      </div>
    </section>
  );
}

export default Contact;
