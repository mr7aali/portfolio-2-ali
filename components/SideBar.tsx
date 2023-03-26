import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
const SideBar = () => {
  let { theme, setTheme } = useTheme();
  
  const changeTheme = () => {
    if(theme=='light'){
      theme='dark'
    }
    else{
      theme='light'
    }
    setTheme(theme );
    console.log(theme);
    
  };
  return (
    <div>
      <img
        src="https://i.ibb.co/4JBGr3z/img-For-LIke-ID.jpg"
        alt="User abatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
        <span className="text-green">Mr</span> Aali
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Development</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download={""}
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green mdw-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Dhaka, Bangladesh</span>
        </div>
        <p className="my-2">mr7aali@gmail.com</p>
        <p className="my-2">+8801967519057</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={() => window.open("mailto:mr7aali@gmail.com")}
      >
        Email Me
      </button>
      <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Toggle Theme
      </button>
    </div>
  );
};

export default SideBar;
