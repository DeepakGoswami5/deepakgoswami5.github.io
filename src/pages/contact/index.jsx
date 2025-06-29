import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { CONTACT_PAGE } from "../../constant/data"
import PageHeader from "../../components/pageHeader"
import ContactCard from "../../components/contactCard"
const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        emailjs.send('service_btkt53f', 'template_818g066', data, 'aQQ120Ssvugts2fuL')
            .then((result) => {
                // console.log("result",result);
            }, (error) => {
                // console.log("error",error);
            });
        emailjs.send('service_btkt53f', 'template_fa68274', {
            from_name: data.from_name,
            from_email: data.from_email
        }, 'aQQ120Ssvugts2fuL')
            .then((result) => {
                // console.log("result",result);
            }, (error) => {
                // console.log("error",error);
            });
    };
    return (
        <div className="bg-black md:bg-blend-darken max-w-screen-xl md:mx-auto p-4 mt-5">
            <PageHeader
                data={CONTACT_PAGE}
            />
            <div className="sm:m-4 md:m-4">
                <ContactCard />
                <br />
                <div className="ease-in duration-300 bg-grey-08 font-bold text-base p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="from_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Name
                                </label>
                                <input
                                    {...register("from_name")}
                                    type="text"
                                    id="from_name"
                                    className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="from_email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Email
                                </label>
                                <input
                                    {...register("from_email")}
                                    type="email"
                                    id="from_email"
                                    className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="from_subject"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Subject
                            </label>
                            <input
                                {...register("from_subject")}
                                type="text"
                                id="from_subject"
                                className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="from_message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Message
                            </label>
                            <textarea
                                {...register("from_message")}
                                type="text"
                                id="from_message"
                                className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-grey-08 text-white p-3 rounded-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact