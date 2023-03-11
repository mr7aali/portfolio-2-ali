import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";



const NavItem:FunctionComponent<{
    activeItems:string,
    setActiveItems:Function ,
    name:string,
    route:string   
}> =({activeItems,name,setActiveItems,route})=>{
    return (
         activeItems !== name ? (
            <Link href={route}>
            <span  onClick={() => setActiveItems(name)} className='hover:text-green'>{name}</span>
          </Link>
          ): null

        
    )
}

const Navbar = () => {
  const [activeItems, setActiveItems] = useState<string>("");

  const { pathname } = useRouter();
  useEffect(()=>{
    if(pathname === "/")setActiveItems('About');
    if(pathname === "/Projects")setActiveItems('Projects');
    if(pathname === "/Resume")setActiveItems('Resume');
    
  },[])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green text-xl border-b-4 border-green md:text-2xl">{activeItems}</span>
      <div className=" text-red text-lg flex space-x-3 text-red-400">

        <NavItem activeItems={activeItems} setActiveItems={setActiveItems } name={"About" }route={'/'}/>
        <NavItem activeItems={activeItems} setActiveItems={setActiveItems } name={"Projects" }route={'/Projects'}/>
        <NavItem activeItems={activeItems} setActiveItems={setActiveItems } name={"Resume" }route={'/Resume'}/>

      </div>


    </div>
  );
};

export default Navbar;
