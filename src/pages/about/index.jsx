import PageHeader from "../../components/pageHeader"
import Skills from '../../components/skills'
import Carousel from "../../components/carousel"
import { ABOUT_PAGE, DESIGNATION, ABOUT_SUMMARY, SKILLS, INTERESTS } from "../../constant/data"
const About = () => {
    return (
        <div className="bg-black md:bg-blend-darken max-w-screen-xl md:mx-auto p-4 mt-5">
            <PageHeader
                data={ABOUT_PAGE}
            />
            <div className="sm:m-4 md:m-12 text-white font-semibold text-gray-500">
                <div className="mt-10 mb-10">
                    <p style={{ color: '#18d26e' }} className="text-2xl ont-family-segoe font-semibold">{DESIGNATION}</p>
                    <p className="text-sm font-family-segoe leading-6 italic">{ABOUT_SUMMARY}</p>
                </div>
                <div className="text-xl	grey-sub font-semibold text-gray-500 mt-4">
                    SKILLS
                    <div className="line"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {SKILLS.map((item) => (
                        <div>
                            <Skills
                                data={item}
                            />
                        </div>
                    ))}
                </div>
                <div className="text-xl	grey-sub font-semibold text-gray-500 mt-20">
                    INTERESTS
                    <div className="line"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    {INTERESTS.map((item) => (
                        <div className="text-center ease-in duration-300 bg-grey-08 font-bold text-base p-5">
                            {item}
                        </div>
                    ))}
                </div>
                {/* <div className="text-xl	grey-sub font-semibold text-gray-500 mt-20">
                    TESTIMONIALS
                    <div className="line"></div>
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    {/* <Carousel /> */}
                </div>
            </div>

        </div>
    )
}
export default About