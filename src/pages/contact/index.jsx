import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_PAGE } from "../../constant/data";
import PageHeader from "../../components/pageHeader";
import ContactCard from "../../components/contactCard";

const SERVICE_ID = "service_btkt53f";
const TEMPLATE_ID_USER = "template_818g066";
const TEMPLATE_ID_SELF = "template_fa68274";
const PUBLIC_KEY = "aQQ120Ssvugts2fuL";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState("idle");

  const onSubmit = async data => {
    setStatus("loading");

    try {
      await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, data, PUBLIC_KEY),
        emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID_SELF,
          {
            from_name: data.from_name,
            from_email: data.from_email,
          },
          PUBLIC_KEY
        ),
      ]);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      console.error("EmailJS error:", error);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="section-container">
      <PageHeader data={CONTACT_PAGE} />

      <div className="mt-8 sm:mt-10">
        <ContactCard />

        {/* Enhanced Contact Form */}
        <motion.div
          className="glass-card p-6 sm:p-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Name <span className="text-primary-400">*</span>
                </label>
                <input
                  {...register("from_name", { required: "Name is required" })}
                  id="from_name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 outline-none"
                />
                {errors.from_name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2 flex items-center gap-1"
                  >
                    <span>⚠</span> {errors.from_name.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <label
                  htmlFor="from_email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your Email <span className="text-primary-400">*</span>
                </label>
                <input
                  {...register("from_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  id="from_email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 outline-none"
                />
                {errors.from_email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2 flex items-center gap-1"
                  >
                    <span>⚠</span> {errors.from_email.message}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Subject Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <label
                htmlFor="from_subject"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Subject <span className="text-primary-400">*</span>
              </label>
              <input
                {...register("from_subject", { required: "Subject is required" })}
                id="from_subject"
                type="text"
                placeholder="How can I help you?"
                className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 outline-none"
              />
              {errors.from_subject && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-2 flex items-center gap-1"
                >
                  <span>⚠</span> {errors.from_subject.message}
                </motion.p>
              )}
            </motion.div>

            {/* Message Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label
                htmlFor="from_message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Message <span className="text-primary-400">*</span>
              </label>
              <textarea
                {...register("from_message", { required: "Message is required" })}
                id="from_message"
                rows={6}
                placeholder="Tell me about your project or question..."
                className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 outline-none resize-none"
              />
              {errors.from_message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-2 flex items-center gap-1"
                >
                  <span>⚠</span> {errors.from_message.message}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.button
                type="submit"
                className="btn-primary w-full sm:w-auto px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2 justify-center">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card px-6 py-3 border-primary-500/50"
                >
                  <p className="text-primary-400 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Message sent successfully!
                  </p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card px-6 py-3 border-red-500/50"
                >
                  <p className="text-red-400 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Something went wrong. Please try again.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
