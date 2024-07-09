'use client'
import React, { useState } from 'react'
import BlogCard from '../blogCard/BlogCard';

const BlogsParts = ({ data }) => {
    const [isHover, setHovered] = useState(false);
    const [Id, setID] = useState("");

    const handleHoverOn = (id) => {
        setHovered(true);
        setID(id);
    };
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                data.map((item, index) => (
                    <div
                        onMouseMove={() => handleHoverOn(item.name)}
                        onMouseOut={() => setHovered(false)}
                        className={` border-[1px] ${isHover && Id === item.name ? "bg-white-300" : ""
                            } border-gray-300 rounded-xl `}
                        key={item.id}
                    >
                        <BlogCard style={'start-[29%] '} item={item} isHover={isHover} Id={Id} index={index} />
                    </div>
                ))
            }
        </div>
    )
}

export default BlogsParts