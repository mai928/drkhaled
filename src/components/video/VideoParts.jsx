'use client'
import React, { useState } from 'react'

const VideoParts = () => {

    const [show, SetShow] = useState(false);

    return (
        <div>
            <div className="w-full lg:w-1/2">
                <div className=" flex justify-center pt-10 lg:pt-28">
                    <div className="relative ">
                        <div
                            onClick={() => SetShow(true)}
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

            <div>
                {show && (
                    <div className="absolute inset-0 bg-black bg-opacity-85 w-full h-full overflow-hidden z-[9999]">
                        <div onClick={() => SetShow(false)} className="absolute top-10 right-20 text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} className="fill-primary-500 cursor-pointer" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                        </div>
                        <iframe
                            className="absolute  top-[30%] lg:top-[20%] right-[2%] lg:right-[30%]  lg:w-[650px]  lg:h-[350px]"
                            // https://www.youtube.com/embed/dXlqTljulP4
                            src={videos?.image_link}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VideoParts