import { CONTACT_ME } from "../../constant/data"
import '../../App.css'
const ContactCard = () => {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                    {CONTACT_ME.map((item) => (
                        <div key={item.id} className="ease-in duration-300 bg-grey-08 font-bold text-base p-5">
                            <p className="text-left" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                {item.title}
                            </p>
                            <p className="text-left text-white">
                                {item.details}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ContactCard