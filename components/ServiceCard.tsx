import { FunctionComponent } from "react";

import { IService } from "../type";
const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about
    }
  };

  return (
    <div className="p-2 flex items-center space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  );
};

export default ServiceCard;
