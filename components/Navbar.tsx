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
            <span onClick={() => setActiveItems(name)}>{name}</span>
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
    <div>
      <span className="font-bold text-green">{activeItems}</span>
      <div className=" text-red font-lg flex space-x-3 text-red-400">


        {/* {activeItems !== "About" && (
          <Link href="/">
            <span onClick={() => setActiveItems("About")}>About</span>
          </Link>
        )}
        {activeItems !== "Projects" && (
          <Link href="/Project">
            <span onClick={() => setActiveItems("Projects")}>Projects</span>
          </Link>
        )}
        {activeItems !== "Resume" && (
          <Link href="/Resume">
            <span onClick={() => setActiveItems("Resume")}>Resume</span>
          </Link>
        )} */}

        <NavItem activeItems={activeItems} setActiveItems={setActiveItems } name={"About" }route={'/'}/>
        <NavItem activeItems={activeItems} setActiveItems={setActiveItems } name={"Projects" }route={'/Projects'}/>
        <NavItem activeItems={activeItems} setActiveItems={setActiveItems } name={"Resume" }route={'/Resume'}/>




      </div>


    </div>
  );
};

export default Navbar;
