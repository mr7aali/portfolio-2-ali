import ProjectCart from "components/ProjectCart";
import { projects } from "data";

const Project = () => {
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{height:'60vh'}}>
      <nav>Project</nav>
      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project, i) => (
          <div key={project.name} className='col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg'>
            <ProjectCart project={project}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
