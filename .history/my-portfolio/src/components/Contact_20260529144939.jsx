import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-font text-background py-16 overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-6">
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

                mt-6
                mb-16
                "
        >
          お問い合わせは、SNSかメールにてお願いいたします
        </p>
        <form className="max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Name"
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
          <input
            type="email"
            placeholder="Email"
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
            placeholder="Message"
            rows="6"
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
          <div className="flex justify-center mt-10">
            <button
              className="
                    bg-white
                    text-black
                    px-14
                    py-3
                    rounded-md
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    "
            >
              SEND
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-8 mt-20 text-4xl">
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

        {/* COPYRIGHT */}
        <p
          className="
                text-center
                text-sm
                text-white/70

                mt-12
                "
        >
          © Copyright by NguyenHaMy 2026
        </p>
      </div>
    </section>
  );
}

export default Contact;
