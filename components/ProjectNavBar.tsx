import { FunctionComponent } from "react";
import { Category } from "type";

const NavItem: FunctionComponent<{
  value: Category | "all";
  FilterCategory: Function;
  active: string;
}> = ({ value, FilterCategory, active }) => {
  let activeClassName = "capitalize cursor-pointer hover:text-green";
  if ( active === value) {
    activeClassName = activeClassName + " text-green";
  }
  return (
    <li className={activeClassName} onClick={() => FilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavBar: FunctionComponent<{
  FilterCategory: Function;
  active: string;
}> = ({ FilterCategory, active }) => {
  return (
    <div className="flex px-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" FilterCategory={FilterCategory} active={active} />
      <NavItem value="react" FilterCategory={FilterCategory} active={active} />
      <NavItem value="mongo" FilterCategory={FilterCategory} active={active} />
      <NavItem value="django" FilterCategory={FilterCategory} active={active} />
      <NavItem value="node" FilterCategory={FilterCategory} active={active} />
    </div>
  );
};

export default ProjectNavBar;
