import PageHeader from "../../components/pageHeader";
import { ABOUT_PAGE, DESIGNATION, ABOUT_SUMMARY, SKILLS, INTERESTS } from "../../constant/data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <PageHeader data={ABOUT_PAGE} />

      {/* Summary Section */}
      <div className="text-white mt-8 sm:mt-10 mb-10 sm:mb-12">
        <motion.p
          className="text-xl sm:text-2xl font-semibold mb-2"
          style={{ color: "#18d26e" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {DESIGNATION}
        </motion.p>
        <motion.p
          className="text-sm text-gray-400 italic leading-6 sm:leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {ABOUT_SUMMARY}
        </motion.p>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
          What I am good at
          <div className="w-16 sm:w-20 h-1 bg-green-500 mt-1" />
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {SKILLS.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-center text-sm text-white mb-1">
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="text-green-400 text-lg" />}
                    <span className="text-green-400 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interests Section */}
      <div className="mt-16 sm:mt-20">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
          INTERESTS
          <div className="w-20 h-1 bg-green-500 mt-1" />
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {INTERESTS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-zinc-800 text-white border border-zinc-700 rounded-lg font-medium py-4 transition duration-300"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
