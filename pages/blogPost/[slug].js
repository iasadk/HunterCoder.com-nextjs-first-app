import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router';
import fs from 'fs';

export async function getStaticPaths() {
  const fileList = await fs.promises.readdir('blogData');

  const paths = fileList.map(file => {
    return {
      params: {
        slug: file.split(".")[0]
      }
    }
  })
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const blogData = await fs.promises.readFile(`blogData/${slug}.json`, 'utf-8')
  return {
    props: { myBlog : JSON.parse(blogData) }
  }
}


const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog)
  return (
    <div className='w-screen'>

      <div className='mx-auto w-1/2 text-center mt-12 mb-3'>
        <h1 className='text-3xl font-semibold'>{blog.title}</h1>
      </div>
      <div className="text-md italic text-right w-1/2 px-28 mx-auto mb-6 ">~  {blog.author}</div>
      <div className="text-left text-xl w-5/6 mx-auto">
        <p className='leading-8 text-gray-900'>
          {blog.desc}
        </p>
      </div>
    </div>
  )
}


export default Slug