import React from 'react'
import Link from 'next/link'

const BlogPost = ({blogContent}) => {
    return (
        <Link href={`blogPost/${blogContent.slug}`}>
            <div className='my-3 bg-red-300 rounded p-5 w-full transition-colors duration-300 ease-in hover: hover:bg-red-400 hover:cursor-pointer'>
                <h3 className='text-xl font-bold text-gray-900'>{blogContent.title}</h3>
                <p className='text-gray-900'>{blogContent.desc.length > 120 ? blogContent.desc.slice(0,121)+"..." : blogContent.desc}</p>
            </div>
        </Link>
    )
}

export default BlogPost