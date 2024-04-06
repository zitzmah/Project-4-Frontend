import { Link } from "react-router-dom"

export default function Blog({blog}){
    const id = blog.url.split("/")[4]
    console.log(id, "<<one per blog")

    return(
        <div>
            <Link to={`/blogs/${id}`}>
                <div className="blog">
                    <h2>{blog.subject}</h2>
                    <div className="imageContainer">
                        <img src={blog.image_url} alt="Blog Image"/>
                    </div>
                    <p>{blog.details}</p>
                </div>
            </Link>
        </div>
    )
}