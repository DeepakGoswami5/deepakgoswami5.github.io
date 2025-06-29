import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { CONTACT_PAGE } from "../../constant/data";
import PageHeader from "../../components/pageHeader";
import ContactCard from "../../components/contactCard";

const SERVICE_ID = "service_btkt53f";
const TEMPLATE_ID_USER = "template_818g066";
const TEMPLATE_ID_SELF = "template_fa68274";
const PUBLIC_KEY = "aQQ120Ssvugts2fuL";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState("idle");

  const onSubmit = async (data) => {
    setStatus("loading");

    try {
      await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, data, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, TEMPLATE_ID_SELF, {
          from_name: data.from_name,
          from_email: data.from_email,
        }, PUBLIC_KEY)
      ]);
      setStatus("success");
      reset(); // ✅ Clear the form
    } catch (error) {
      setStatus("error");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <PageHeader data={CONTACT_PAGE} />

      <div className="sm:m-4 md:m-4">
        <ContactCard />
        <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-sm dark:bg-gray-800">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="from_name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
                  Your Name
                </label>
                <input
                  {...register("from_name", { required: "Name is required" })}
                  id="from_name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2.5 border rounded-md text-sm text-gray-900 dark:text-black"
                />
                {errors.from_name && <p className="text-red-500 text-xs mt-1">{errors.from_name.message}</p>}
              </div>

              <div>
                <label htmlFor="from_email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
                  Your Email
                </label>
                <input
                  {...register("from_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format"
                    }
                  })}
                  id="from_email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 border rounded-md text-sm text-gray-900 dark:text-black"
                />
                {errors.from_email && <p className="text-red-500 text-xs mt-1">{errors.from_email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="from_subject" className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
                Subject
              </label>
              <input
                {...register("from_subject", { required: "Subject is required" })}
                id="from_subject"
                type="text"
                placeholder="Subject"
                className="w-full p-2.5 border rounded-md text-sm text-gray-900 dark:text-black"
              />
              {errors.from_subject && <p className="text-red-500 text-xs mt-1">{errors.from_subject.message}</p>}
            </div>

            <div>
              <label htmlFor="from_message" className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
                Message
              </label>
              <textarea
                {...register("from_message", { required: "Message is required" })}
                id="from_message"
                rows={5}
                placeholder="Type your message here..."
                className="w-full p-2.5 border rounded-md text-sm text-gray-900 dark:text-black"
              />
              {errors.from_message && <p className="text-red-500 text-xs mt-1">{errors.from_message.message}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
              {status === "success" && (
                <p className="text-green-600 mt-3">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 mt-3">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
