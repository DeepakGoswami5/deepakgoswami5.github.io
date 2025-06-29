import { Link } from 'react-router-dom'
import { useState } from 'react'
import { NAME, TABS, HOME_DESIGNATION_DATA } from "../../constant/data"
import SocialMediaIcon from '../../components/socialMediaIcon/index.jsx'
import '../../App.css'
const Home = () => {
    const [currentTab, setCurrentTab] = useState("/home")
    const [isNavBar, setIsNavBar] = useState(false)
    const handleTabChange = (e) => {
        setCurrentTab(e)
    }
    const handleNavabar = () => {
        setIsNavBar(!isNavBar)
    }
    return (
        <>
            <nav className="border-black-200 dark:bg-black-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <button
                        onClick={handleNavabar}
                        className="text-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    {isNavBar && (
                        <div className={`w-full md:block md:w-auto ${!isNavBar ? `hidden` : null}`} id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-black-800 md:dark:bg-black-900 dark:border-black-700">
                                {TABS.map((item, ind) => (
                                    <li key={item.id + ind}>
                                        <Link to={item.id}>
                                            <p
                                                onClick={() => handleTabChange(item.id)}
                                                className={`block py-2 pl-3 pr-4 text-grey text-xl hover:text-green-600 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500 ${currentTab == item.id ? `underline underline-offset-8 decoration-4 decoration-green-700` : ''}`}
                                                aria-current="page"
                                            >
                                                {item.title}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
            <div className="flex h-screen items-center p-10">
                <div className='lg:ml-40 md:ml-40 sm:ml-1'>
                    <div className="text-2xl md:text-5xl text-white	font-bold p-2">{NAME}</div>
                    <div className="text-1xl md:text-3xl text-white p-2 text-slate-400">
                        I'm a passionate <span className="underline decoration-4 underline-offset-8 decoration-green-700">{HOME_DESIGNATION_DATA}</span> from India
                    </div>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-2 p-4">
                        <div className="w-full md:block md:w-auto hidden" id="navbar-default">
                            <ul className="font-medium flex flex-col border border-black-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-black-800 md:dark:bg-black-900 dark:border-black-700">
                                {TABS.map((item, ind) => (
                                    <li key={item.id + ind}>
                                        <Link to={item.id}>
                                            <p
                                                onClick={() => handleTabChange(item.id)}
                                                className={`block py-2 pl-3 pr-4 text-grey text-xl hover:text-green-600 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500 ${currentTab == item.id ? `underline underline-offset-8 decoration-4  decoration-green-700` : ''}`}
                                                aria-current="page"
                                            >
                                                {item.title}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <SocialMediaIcon />
                </div>
            </div>
        </>
    )
}
export default Home