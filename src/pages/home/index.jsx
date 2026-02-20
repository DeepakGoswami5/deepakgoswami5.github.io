import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAME, TABS, HOME_DESIGNATION_DATA } from "../../constant/data";
import SocialMediaIcon from "../../components/socialMediaIcon";
import AnimatedBg from "../../components/animatedBg/animatedBg";
import About from "../about";
import Resume from "../resume";
import Contact from "../contact";
import "../../App.css";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [isNavBar, setIsNavBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = useCallback(tabId => {
    setCurrentTab(tabId);
    setIsNavBar(false);

    // Smooth scroll to section
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleTabClick = useCallback(
    e => {
      const tabId = e.currentTarget.dataset.tabId;
      handleTabChange(tabId);
    },
    [handleTabChange]
  );

  const handleNavbarToggle = useCallback(() => setIsNavBar(!isNavBar), [isNavBar]);

  return (
    <>
      {/* Glassmorphism Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-dark-900/90 border-b border-white/10 shadow-lg">
        <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with Glow Effect */}
            <motion.div
              className="flex items-center z-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl md:text-3xl font-bold gradient-text hover:text-glow transition-all duration-300 cursor-pointer">
                {NAME}
              </span>
            </motion.div>

            {/* Hamburger Button with Animation */}
            <motion.button
              onClick={handleNavbarToggle}
              className="text-white inline-flex items-center justify-center p-2 rounded-lg md:hidden hover:bg-primary-500/20 transition-all duration-300 z-50"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                animate={isNavBar ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isNavBar ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </motion.svg>
            </motion.button>

            {/* Nav Links with Smooth Animations */}
            <AnimatePresence>
              {(isNavBar || !isMobile) && (
                <motion.div
                  initial={isMobile ? { opacity: 0, y: -20 } : { opacity: 1 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute md:relative top-16 md:top-0 left-0 right-0 md:block md:w-auto bg-dark-900/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-t md:border-t-0 border-white/10 shadow-xl md:shadow-none"
                >
                  <ul className="flex flex-col md:flex-row md:space-x-1 p-4 md:p-0">
                    {TABS.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 1 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <button
                          data-tab-id={item.id}
                          onClick={handleTabClick}
                          className={`relative block w-full md:w-auto text-left md:text-center px-4 py-3 md:py-2 rounded-lg text-base md:text-lg font-medium transition-all duration-300 ${
                            currentTab === item.id
                              ? "text-primary-400 bg-primary-500/20 md:bg-white/10"
                              : "text-gray-300 hover:text-white hover:bg-primary-500/10"
                          }`}
                        >
                          {item.title}
                          {currentTab === item.id && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute bottom-0 left-4 right-4 md:left-0 md:right-0 h-0.5 bg-primary-500"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <motion.div
        id="home"
        className="relative flex h-screen items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background */}
        <AnimatedBg />

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          {/* Main Heading with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-primary-400 text-sm md:text-base font-semibold mb-2 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
              <span className="block text-white mb-2">Hi, I&apos;m</span>
              <span className="block gradient-text text-glow">{NAME}</span>
            </h1>
          </motion.div>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I&apos;m a passionate{" "}
            <span className="relative inline-block">
              <span className="text-primary-400 font-semibold">{HOME_DESIGNATION_DATA}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>{" "}
            from India
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SocialMediaIcon />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-xs mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Sections with Enhanced Backgrounds */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-white/5 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(24,210,110,0.05),transparent_50%)]" />
        <div className="relative">
          <About />
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-20 border-t border-white/5 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 text-white relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(24,210,110,0.05),transparent_50%)]" />
        <div className="relative">
          <Resume />
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-white/5 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,210,110,0.05),transparent_50%)]" />
        <div className="relative">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;
