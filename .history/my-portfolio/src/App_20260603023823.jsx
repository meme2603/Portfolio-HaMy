import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
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
