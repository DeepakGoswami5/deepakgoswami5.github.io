const Skills = ({data}) => {
    return (
        <>
            <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold font-medium text-blue-700 dark:text-white">{data.title.toUpperCase()}</span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">{data.rating}</span>
            </div>
            <div className="ease-linear	w-full grey-color-bg rounded-none h-2.5 opacity-100	dark:bg-gray-800">
                <div className="h-2.5 rounded-none green-color-bg" style={{width: data.rating}}></div>
            </div>
        </>
    )
}
export default Skills