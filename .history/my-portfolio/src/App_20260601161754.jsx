import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

// 3. Tạo tạm một cái Placeholder để test xem trang chi tiết có chạy khum
function ProjectDetailPlaceholder() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center font-akshar pt-24">
      <h1 className="text-4xl md:text-7xl font-bold tracking-[0.2em] mb-4">
        PROJECT DETAIL
      </h1>
      <p className="text-white/60 mb-8 font-light">
        Trang chi tiết dự án của Mini đang được kết nối...
      </p>
      <a
        href="/"
        className="text-red-500 underline text-sm tracking-wider uppercase"
      >
        ← Back to home
      </a>
    </div>
  );
}

function App() {
  return (
    // 4. Bọc thẻ Router ngoài cùng để làm "vũ trụ" định tuyến
    <Router>
      <div className="App">
        {/* Header nằm ngoài Routes để trang nào cũng hiển thị nó */}
        <Header />

        {/* Routes điều hướng: Ở trang nào thì lôi component đó ra */}
        <Routes>
          {/* Khi ở đường dẫn mặc định "/", hiển thị toàn bộ trang chủ */}
          <Route path="/" element={<Home />} />

          {/* Khi click vào project, nhảy sang trang chi tiết tạm thời này */}
          <Route path="/project/:id" element={<ProjectDetailPlaceholder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
