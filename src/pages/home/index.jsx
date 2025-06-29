import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAME, TABS, HOME_DESIGNATION_DATA } from '../../constant/data'
import SocialMediaIcon from '../../components/socialMediaIcon'
import AnimatedBg from '../../components/animatedBg/animatedBg';
import About from '../about'
import Resume from '../resume'
import Contact from '../contact'
import '../../App.css'

const Home = () => {
    const [currentTab, setCurrentTab] = useState("home")
    const [isNavBar, setIsNavBar] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleTabChange = (tabId) => {
        setCurrentTab(tabId)
        setIsNavBar(false)

        // Smooth scroll to section
        const section = document.getElementById(tabId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleNavbarToggle = () => setIsNavBar(!isNavBar)

    return (
        <>
            {/* Navbar */}
            <nav className="border-black-200 dark:bg-black-900 z-10 fixed top-0 left-0 w-full bg-black">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-2xl font-semibold text-white whitespace-nowrap">{NAME}</span>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={handleNavbarToggle}
                        className="text-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                        aria-label="Toggle navigation"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Nav Links */}
                    <AnimatePresence>
                        {(isNavBar || !isMobile) && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full md:block md:w-auto"
                                id="navbar-default"
                            >
                                <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 mt-4 md:mt-0 border border-black-100 rounded-lg md:border-0 dark:bg-black-800 md:dark:bg-black-900 dark:border-black-700">
                                    {TABS.map((item) => (
                                        <li key={item.id}>
                                            <p
                                                onClick={() => handleTabChange(item.id)}
                                                className={`cursor-pointer py-2 pl-3 pr-4 text-white text-xl hover:text-green-600 md:bg-transparent md:p-0 ${currentTab === item.id
                                                    ? 'underline underline-offset-8 decoration-4 decoration-green-700'
                                                    : ''
                                                    }`}
                                            >
                                                {item.title}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            {/* Hero */}
            <motion.div
                id="home"
                className="relative flex h-screen items-center pt-32 px-4 sm:px-10 bg-gradient-to-br from-black via-[#0f0f0f] to-[#071e1b] overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <AnimatedBg />
                <div className="ml-2 sm:ml-8 md:ml-20 lg:ml-40 z-10">
                    <motion.div className="text-2xl md:text-5xl text-white font-bold mb-4">
                        {NAME}
                    </motion.div>
                    <motion.div className="text-lg md:text-3xl text-slate-400 mb-4">
                        I'm a passionate <span className="underline decoration-4 underline-offset-8 decoration-green-700">{HOME_DESIGNATION_DATA}</span> from India
                    </motion.div>
                    <SocialMediaIcon />
                </div>
            </motion.div>

            {/* About */}
            <section
                id="about"
                className="border-t border-zinc-800 bg-gradient-to-br from-black via-[#0f0f0f] to-[#071e1b] text-white"
            >
                <About />
            </section>

            {/* Resume */}
            <section
                id="work"
                className="border-t border-zinc-800 bg-gradient-to-br from-black via-[#0f0f0f] to-[#071e1b] text-white"
            >
                <Resume />
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="border-t border-zinc-800 bg-gradient-to-br from-black via-[#0f0f0f] to-[#071e1b] text-white"
            >
                <Contact />
            </section>


        </>
    )
}

export default Home
