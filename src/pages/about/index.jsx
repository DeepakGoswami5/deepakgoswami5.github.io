import PageHeader from "../../components/pageHeader";
import { ABOUT_PAGE, DESIGNATION, ABOUT_SUMMARY, SKILLS, INTERESTS } from "../../constant/data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="section-container">
      <PageHeader data={ABOUT_PAGE} />

      {/* Summary Section with Glassmorphism */}
      <motion.div
        className="glass-card glass-card-hover p-6 sm:p-8 mt-8 sm:mt-10 mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-xl sm:text-2xl font-semibold mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {DESIGNATION}
        </motion.p>
        <motion.p
          className="text-sm sm:text-base text-gray-300 leading-7 sm:leading-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {ABOUT_SUMMARY}
        </motion.p>
      </motion.div>

      {/* Skills Section */}
      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">What I&apos;m Good At</h3>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {SKILLS.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                className="glass-card glass-card-hover p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(24, 210, 110, 0.2)",
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="p-2 glass-card rounded-lg">
                        <Icon className="text-primary-400 text-xl" />
                      </div>
                    )}
                    <span className="text-white font-semibold text-base">{skill.name}</span>
                  </div>
                  <span className="text-primary-400 font-bold text-sm">{skill.level}%</span>
                </div>

                {/* Animated Progress Bar */}
                <div className="relative w-full bg-dark-700/50 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.05 + 0.2, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interests Section */}
      <div className="mt-20 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Interests</h3>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {INTERESTS.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-card glass-card-hover p-6 text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
            >
              <span className="text-white font-medium text-sm sm:text-base group-hover:text-primary-400 transition-colors duration-300">
                {item}
              </span>
              <motion.div className="w-0 h-0.5 bg-primary-500 mx-auto mt-2 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
