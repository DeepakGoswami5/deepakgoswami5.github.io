import { motion } from 'framer-motion';
import '../../App.css';

const TimeLine = ({ data, title }) => {
    return (
        <>
            <h2 className="mb-8 font-extrabold text-3xl text-white tracking-wide">
                {title.toUpperCase()}
            </h2>

            <ol className="relative border-l-2 border-green-500 pl-6 sm:pl-8 ml-2 sm:ml-4">
                {data.map((item, idx) => (
                    <motion.li
                        key={item.id}
                        className="mb-12 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        {/* Dot */}
                        <span className="absolute left-[-41px] top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow" />

                        {/* Title & Duration */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-lg sm:text-xl font-bold text-green-400">
                                {item.title.toUpperCase()}
                            </h3>
                            <span className="mt-2 sm:mt-0 bg-zinc-800 text-white text-xs px-3 py-1 rounded border border-zinc-600 w-fit">
                                {item.duration}
                            </span>
                        </div>

                        {/* Subtitle */}
                        <p className="italic text-sm text-gray-300 mt-1">
                            <span className="font-semibold text-white">{item.subTitle}</span>
                            <span className="text-gray-400"> ({item.description})</span>
                        </p>

                        {/* Achievements */}
                        {item.achievement?.length > 0 && (
                            <ul className="list-disc ml-5 mt-4 space-y-2 text-sm text-gray-300">
                                {item.achievement.map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                ))}
                            </ul>
                        )}
                    </motion.li>
                ))}
            </ol>
        </>
    );
};

export default TimeLine;
