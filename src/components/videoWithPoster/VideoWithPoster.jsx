'use client'
const { useState } = require("react");


const VideoWithPoster = ({ videoUrl, posterImage, text }) => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePosterClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="video-wrapper">
            {!showVideo && (
                <div>
                    <div className="poster" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, .68)),url(${posterImage})` }} onClick={handlePosterClick}></div>
                    <div className='overalayPoster'>
                        <p className=' px-10 text-center text-white-400 text-2xl font-bold'>{text}</p>

                        <div className=" flex justify-center pt-10 lg:pt-16">
                            <div className="relative ">
                                <div
                                    onClick={() => setShowVideo(true)}
                                    className="p-4 bg-white-400 rounded-full btn-video  cursor-pointer "
                                >
                                    <svg
                                        className="fill-primary-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
              {showVideo && (
                <iframe
                    className="video-iframe"
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};


export default VideoWithPoster