import { FunctionComponent } from 'react'
import { Category } from 'type';

// export  function NavItem: FunctionComponent<{value:Category | 'all'}>=({value})=> {
//   return (
//     <li>{value}</li>
//   )
// }

const NavItem:FunctionComponent<{
    value: Category | 'all'
}>=({value})=>{
    return(
        <li>{value}</li>
    );
}

const ProjectNavBar = () => {
    return (
        <div>
            <NavItem value={'all'}/>
        </div>
    );
};

export default ProjectNavBar;