import { fadeInUp, routeAnimation } from "@/styles/animation/animation";
import Bar from "components/Bar";
import { languages, tools } from "data";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit='exit'
    >
      {/* education and ex */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science & Eng</h5>
            <p className="font-semibold ">Bangladesh University</p>
            <p className="my-3">i am currently stady here</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experiance</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">MERN Stack Developer</h5>
            <p className="font-semibold ">TCS </p>
            <p className="my-3">i am currently stady here</p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Freamwork</h5>
          <div className="my-2">
            {languages?.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwars</h5>
          <div className="my-2">
            {tools?.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
