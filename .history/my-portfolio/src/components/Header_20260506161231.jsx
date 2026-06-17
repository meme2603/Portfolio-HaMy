import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-background border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
        <div className="shrink-0">
          <a href="/" className="text-4xl text-primary font-semibold font-logo">
            HA MY
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="
              text-primary
                text-xl
                relative
                group
                transition-colors"
              >
                About
                <span
                  class="
                absolute 
                left-0 
                bottom-[-4px] 
                w-0 
                h-[1px] 
                bg-primary
                transition-all 
                duration-300
                group-hover:w-full
                "
                ></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary
                text-xl
                relative
                group
                transition-colors"
              >
                Projects
                <span
                  class="
                absolute 
                left-0 
                bottom-[-4px] 
                w-0 
                h-[1px] 
                bg-primary
                transition-all 
                duration-300
                group-hover:w-full
                "
                ></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-primary text-xl relative
                group
                transition-colors"
              >
                Contact
                <span
                  class="
                absolute 
                left-0 
                bottom-[-4px] 
                w-0 
                h-[1px] 
                bg-primary
                transition-all 
                duration-300
                group-hover:w-full
                "
                ></span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-color-primary focus:outline-none z-50"
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

        {/* MOBILE MENU - Giữ nguyên style cũ của bà */}
        <div
          className={`
            ${isOpen ? "flex" : "hidden"} 
            absolute top-24 left-0 w-full bg-color-primary-cream border-b border-gray-300 
            flex-col items-center py-8 space-y-6 shadow-lg md:hidden
          `}
        >
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-primary text-2xl"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-primary text-2xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-primary text-2xl"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
