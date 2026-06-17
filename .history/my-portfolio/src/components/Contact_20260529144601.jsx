import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h1
          className="
            text-center
            font-akshar
            font-bold
            leading-none
            tracking-tight

            text-[70px]
            sm:text-[110px]
            md:text-[160px]
            lg:text-[180px]
          "
        >
          CONTACT ME
        </h1>

        {/* SUB TEXT */}
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

        {/* FORM */}
        <form className="max-w-3xl mx-auto">
          {/* NAME */}
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

          {/* EMAIL */}
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

          {/* MESSAGE */}
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

          {/* BUTTON */}
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

        {/* SOCIAL */}
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
