import Link from 'next/link'
import React from 'react'

function AllPost({post}:any) {
  return (
    <div>
      <Link 
      href={{
        pathname: `/product/${post._id}`,
        query: { post: encodeURIComponent(JSON.stringify(post)) },
      }}>
        <div className="card card-compact bg-base-100 shadow-xl mt-10">
          
          <figure>
            {/* <Image
                src={product?.photo}
                alt="Picture of the author"
                width={100}
                height={100}
                // className="hidden md:flex"
              ></Image> */}
            <img src={post?.img1} alt="Shoes" className="h-40 w-full" /> 
          </figure>
          <div className="card-body">
            <h2> {post?.title}</h2>
            <h2> {post?.district}</h2>
            <h2> {post?.rentType}</h2>
            <h2> {post?.email}</h2>
            <h2> {post.description.slice(0, 75)}...<span className="text-blue-500">see more</span></h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AllPost