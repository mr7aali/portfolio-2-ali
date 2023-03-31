import ProjectCart from "components/ProjectCart";
import ProjectNavBar from "components/ProjectNavBar";
import { projects as projectsData } from "data";
import { useState } from "react";
import { Category } from "type";

const Project = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const FilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      console.log("all filter");
    } else {
      const newProjects = projectsData.filter((p) => p.category.includes(category));
      setProjects(newProjects);
      setActive(category);
      console.log("category filter");
    }
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "60vh" }}>
      <ProjectNavBar FilterCategory={FilterCategory} active={active}/>
      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
          >
            <ProjectCart project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
