function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-background border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
        {/* Logo của bà nè */}
        <div className="shrink-0">
          <a href="/" className="text-7 text-brand-red font-semibold">
            HA MY
          </a>
        </div>

        {/* Menu chữ */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="text-brand-red text-[20px]">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-brand-red text-[20px]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-brand-red text-[20px]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
