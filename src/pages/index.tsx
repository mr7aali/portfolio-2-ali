import ServiceCard from "components/ServiceCard";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";

import { services } from "../../data";
import { motion, stagger } from "framer-motion";
import {
  fadeInUp,
  routeAnimation,
  staggerani,
} from "@/styles/animation/animation";
const index = () => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit='exit'
    >
      <h5 className="my-3 font-medium">
      I am a full-stack developer with a passion for building dynamic, responsive web applications.  I specialize in the MERN stack and have extensive knowledge of React.js, Node.js, MongoDB, and Express.js. <br/>
      In addition to my technical skills, I am a strong communicator and team player, with experience collaborating with designers, project managers, and other developers. I am always eager to learn and grow in my role, and I am currently seeking new opportunities to expand my skill set and take on new challenges in web development.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-500 flex-grow"
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
        }}
      >
        <h5 className="my-3 text-xl font-bold tracking-wide">What i offer</h5>
        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={staggerani}
          initial="initial"
          animate="animate"
        >
          {services?.map((s) => (
            <motion.div
              variants={fadeInUp}
              // initial="initial"
              // animate="animate"
              key={s.title}
              className="bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

export const getServerSideProps = async (
  constex: GetServerSidePropsContext
) => {
  const res = await fetch("http://localhost:3000/api/Services");
  const data = await res.json();
  console.log("Server", services);
  return {
    props: {
      services: data.services,
    },
  };
};

// export const getStaticPropsContext = async(constex: GetStaticPropsContext) => {

//   const res = await fetch('http://localhost:3000/api/Services')
//   const data = await res.json();
//   console.log("Server" , services);
//   return {
//     props:{
//       services: data.services
//     }
//   }
// };
