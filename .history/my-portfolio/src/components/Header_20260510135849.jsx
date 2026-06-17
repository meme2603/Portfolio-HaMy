import { useState } from "react";
function MenuItem({ text }) {
  return (
    <li>
      <a
        href={`#${text.toLowerCase()}`}
        className="text-primary text-xl relative group transition-colors"
      >
        {text}
        <span
          className="
            absolute left-0 bottom-4px w-0 h-1px bg-primary
            transition-all duration-300 group-hover:w-full
          "
        ></span>
      </a>
    </li>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["About", "Projects", "Contact"];
  return (
      <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
        <div className="shrink-0">
          <a
            href="/"
            className="text-4xl text-primary font-semibold font-akshar"
          >
            HA MY
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            {menuItems.map((item) => (
              <MenuItem key={item} text={item} />
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-primary focus:outline-none z-50"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              // Hiệu ứng đổi icon từ Menu sang X khi mở
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`
            absolute top-24 left-0 w-full bg-background border-b border-gray-300 
            flex flex-col items-center shadow-lg md:hidden
            overflow-hidden transition-all duration-700 ease-in-out
            ${isOpen ? "max-h-96 opacity-100 py-8 space-y-6" : "max-h-0 opacity-0 py-0 space-y-0 border-none"}
          `}
        >
          <div className="flex flex-col items-center w-full py-6 space-y-6">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-primary text-2xl transition-opacity duration-700"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-primary text-2xl transition-opacity duration-700"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-primary text-2xl transition-opacity duration-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
