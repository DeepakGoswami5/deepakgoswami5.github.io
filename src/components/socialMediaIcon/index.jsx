import { SOCIAL_MEDIA } from "../../constant/data"
const SocialMediaIcon = () => {
    return (
        <div className="flex">
            {SOCIAL_MEDIA.map((item, ind) => (
                <div className="p-1 m-1">
                    <a href={item.href} target="_blank">
                        <img src={item.imageLink}
                            className="bg-white max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            style={{
                                padding: '10px',
                                borderRadius: '25%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                            }} />
                    </a>
                </div>
            ))}
        </div>

    )
}
export default SocialMediaIcon