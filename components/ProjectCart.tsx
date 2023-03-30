import { FunctionComponent } from "react";
import { IProject } from "type";

const ProjectCart: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
  },
}) => {
  return (
    <div>
      <img src={image_path} alt={name} className="cursor-pointer" />
      <p>{name}</p>
    </div>
  );
};

export default ProjectCart;
