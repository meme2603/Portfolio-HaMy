// import React from "react";
import { useParams, Link } from "react-router-dom";
import { websiteProjects, appProjects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

function ProjectDetail() {
  const { id } = useParams();
  const allProjects = [...websiteProjects, ...appProjects];
  const project = allProjects.find((p) => p.id === id);
}

export default ProjectDetail;
