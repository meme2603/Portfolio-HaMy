import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
function Header() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    // Toggle class 'hidden' để ẩn/hiện menu
    mobileMenu.classList.toggle("hidden");
    // Thêm class 'flex' để các item dàn hàng dọc khi hiện
    mobileMenu.classList.toggle("flex");
  });

  // Tự động đóng menu khi bấm vào một link (để trang nó trượt xuống là menu đóng luôn)
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });

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
          id="menu-btn"
          class="block md:hidden text-primary focus:outline-none z-50"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          id="mobile-menu"
          class="hidden absolute top-[96px] left-0 w-full bg-primary-cream border-b border-gray-300 flex-col items-center py-8 space-y-6 shadow-lg md:hidden"
        >
          <a href="#about" class="text-primary text-2xl">
            About
          </a>
          <a href="#projects" class="text-primary text-2xl">
            Projects
          </a>
          <a href="#contact" class="text-primary text-2xl">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
