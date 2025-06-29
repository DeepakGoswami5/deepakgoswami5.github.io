import { PROJECTS_PAGE } from "../../constant/data"
import PageHeader from "../../components/pageHeader"
const Projects = () => {
    return (
        <div className="border-solid border-2 border-green-800 bg-blend-screen md:bg-blend-darken max-w-screen-xl mx-auto p-4">
            <PageHeader
                data={PROJECTS_PAGE}
            />
        </div>
    )
}
export default Projects