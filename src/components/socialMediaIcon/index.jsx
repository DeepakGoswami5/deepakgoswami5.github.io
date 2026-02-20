import { motion } from "framer-motion";
import { SOCIAL_MEDIA } from "../../constant/data";

const SocialMediaIcon = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {SOCIAL_MEDIA.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="block"
            aria-label={`Visit ${item.id} profile`}
          >
            <div className="glass-card p-3 rounded-xl hover:bg-primary-500/20 transition-all duration-300 hover:shadow-glow group">
              <img
                src={item.imageLink}
                alt={`${item.id} social media icon`}
                className="w-7 h-7 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMediaIcon;
