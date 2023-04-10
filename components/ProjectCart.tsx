import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "type";
import { motion } from "framer-motion";
import { fadeInUp, staggerani } from "@/styles/animation/animation";
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
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
        layout="responsive"
        width="350"
        height="150"
      />
      <p className="my-2 text-center">{name}</p>

      {open && (
        <div className="grid md:grid-cols-2 p-2 absolute left-0 top-0 z-10 h-auto w-full gap-x-12 text-black dark:text-white bg-gray-100 dark:bg-dark-100">
          <motion.div variants={staggerani} initial="initial" animate="animate">
            {/* <img src={image_path} alt={name} /> */}
            <motion.div
            variants={fadeInUp}
            >
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                width="350"
                height="150"
              />
            </motion.div>
            <motion.div  variants={fadeInUp} className="flex justify-start my-4 space-x-3 ">
              <a
                href=""
                className="flex items-center px-4 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>GitHub</span>
              </a>
              <a
                href=""
                className="flex items-center px-4 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerani} initial="initial" animate="animate">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>

           {/* // <div> */}
          
              <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                {key_techs.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
           {/* // </div> */}
          </motion.div>
          <button
            onClick={() => setOpen(false)}
            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCart;
