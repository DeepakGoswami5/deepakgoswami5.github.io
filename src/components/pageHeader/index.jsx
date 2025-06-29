import { motion } from 'framer-motion';

const PageHeader = ({ data }) => {
    return (
        <div className="mb-10">
            <motion.h2
                className="text-green-500 text-sm tracking-widest uppercase"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {data.title}
            </motion.h2>

            <motion.h1
                className="text-white text-3xl md:text-4xl font-bold mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {data.description}
            </motion.h1>

            <div className="w-24 h-1 bg-green-500 mt-3" />
        </div>
    )
}

export default PageHeader;
