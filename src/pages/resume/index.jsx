import { RESUME_PAGE, EDUCATION, EXPERIENCE } from "../../constant/data"
import PageHeader from "../../components/pageHeader"
import TimeLine from "../../components/timeLine"
const Resume = () => {
    return (
        <div className="bg-black bg-blend-screen md:bg-blend-darken max-w-screen-xl mx-auto p-4 mt-5">
            <PageHeader
                data={RESUME_PAGE}
            />
            <div className="sm:m-4 md:m-12">
                <TimeLine
                    title={"Education"}
                    data={EDUCATION}
                />
            </div>
            <div className="sm:m-4 md:m-12">
                <TimeLine
                    title={"Professional Experience"}
                    data={EXPERIENCE}
                />
            </div>
        </div>
    )
}
export default Resume