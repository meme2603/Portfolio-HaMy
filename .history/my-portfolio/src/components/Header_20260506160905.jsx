import { useState } from "react"; // 1. Gọi cái công tắc ra

function Header() {
  // 2. Tạo trạng thái isOpen (đóng/mở), mặc định là false (đang đóng)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-color-background border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
        <div className="shrink-0">
          <a
            href="/"
            className="text-4xl text-color-primary font-semibold font-logo"
          >
            HA MY
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            {" "}
            {/* Đã sửa space-x-[48px] thành space-x-12 cho bà */}
            <li>
              <a
                href="#about"
                className="text-color-primary text-xl relative group"
              >
                About
                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-color-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-color-primary text-xl relative group"
              >
                Projects
                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-color-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-color-primary text-xl relative group"
              >
                Contact
                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-color-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* 3. Nút bấm Mobile: Khi click vào thì đảo ngược trạng thái isOpen */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-color-primary focus:outline-none z-50"
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* 4. Mobile Menu: Nếu isOpen là true thì mới hiện class 'flex', không thì 'hidden' */}
        <div
          className={`${isOpen ? "flex" : "hidden"} absolute top-24 left-0 w-full bg-color-primary-cream border-b border-gray-300 flex-col items-center py-8 space-y-6 shadow-lg md:hidden`}
        >
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-color-primary text-2xl"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-color-primary text-2xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-color-primary text-2xl"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
