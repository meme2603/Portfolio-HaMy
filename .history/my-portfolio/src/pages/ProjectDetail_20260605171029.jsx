// import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import { websiteProjects, appProjects } from "../data/projectsData";
// import ProjectCard from "../components/ProjectCard";

function ProjectDetail() {
  const { id } = useParams();
  const scrollRef = useRef(null);

  const allProjects = [...websiteProjects, ...appProjects];
  const project = allProjects.find((p) => p.id === id);

  const isWebsite = websiteProjects.some((p) => p.id === id);
  if (!project) {
    return (
      <div className="text-center pt-24 text-primary">Dự án không tồn tại!</div>
    );
  }

  //  LAYOUT WEB (Viết riêng ở đây)
  const renderWebsiteLayout = () => {
    return (
      <div className="w-full">
        {/* Đống code giao diện Web hiện tại của bà */}
      </div>
    );
  };

  //  LAYOUT APP (Viết riêng ở đây)
  const renderAppLayout = () => {
    return (
      <div className="w-full">
        {/* Giao diện dành riêng cho App (easy-cook, nemura) bà sẽ viết ở đây */}
      </div>
    );
  };

  // 5. LỆNH RETURN CHÍNH (Nằm cuối cùng của file)
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* Tự động gọi phòng tương ứng */}
      {isWebsite ? renderWebsiteLayout() : renderAppLayout()}

      {/* BLOCK 6: "他にも見る" dùng chung cho cả 2 bên */}
      <div className="w-full pt-24 pb-4 px-20">
        {/* Thanh trượt 3 card bự tui với bà vừa chốt hạ */}
      </div>
    </div>
  );
}



export default ProjectDetail;
