import { useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import { NAME, TABS } from "../../constant/data"
import '../../App.css'
const NavBar = () => {
    const location = useLocation();
    const [currentTab, setCurrentTab] = useState()
    const [isNavBar, setIsNavBar] = useState(false)
    const handleTabChange = (e) => {
        setIsNavBar(false)
        setCurrentTab(e)
    }
    const handleNavabar = () => {
        setIsNavBar(!isNavBar)
    }
    useEffect(() => {
        setCurrentTab(location.pathname)
    }, [])
    useEffect(() => {

    },[isNavBar])
    return (
        <div className="container mx-auto px-4">
            <nav className="bg-black border-black-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center">
                        <span className="self-center text-2xl md:text-3xl font-semibold text-white">{NAME}</span>
                    </a>
                    <button
                        onClick={handleNavabar}
                        className="text-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${!isNavBar ? `hidden` : null}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black-100 rounded-lg bg-black-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-black-800 md:dark:bg-black-900 dark:border-black-700">
                            {TABS.map((item, ind) => (
                                <li key={item.id + ind}>
                                    <Link to={item.id}>
                                        <p
                                            onClick={() => handleTabChange(item.id)}
                                            className={`block py-2 pl-3 pr-4 text-grey text-xl hover:text-green-600 bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500 ${currentTab == item.id ? `underline underline-offset-8 decoration-4 decoration-green-700` : ''}`}
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
            </nav>
        </div>
    )
}
export default NavBar