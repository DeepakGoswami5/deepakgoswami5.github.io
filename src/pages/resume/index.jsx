import { RESUME_PAGE, EDUCATION, EXPERIENCE } from "../../constant/data";
import PageHeader from "../../components/pageHeader";
import TimeLine from "../../components/timeLine";

const Resume = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10">
            <PageHeader data={RESUME_PAGE} />
            {/* Work Experience Section */}
            <div className="mt-16">
                <TimeLine
                    title={"Professional Experience"}
                    data={EXPERIENCE}
                />
            </div>
        </div>
    );
};

export default Resume;
