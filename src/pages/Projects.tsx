import ProjectCart from "components/ProjectCart";
import { projects } from "data";

const Project = () => {
  return (
    <div className="p-4">
      <nav>Project</nav>
      <div className="grid grid-cols-12 gap-4 my-3">
        {projects.map((project, i) => (
          <div key={project.name} className='col-span-12 sm:col-span-6 lg:col-span-4 p-2'>
            <ProjectCart project={project}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
