import { Link } from "react-router-dom"

export default function Blog({blog}){
    const id = blog.url.split("/")[4]
    console.log(id, "<<one per blog")

    return(
        <div>
            <Link to={`/blogs/${id}`}>
                <h1>{blog.subject}</h1>
            </Link>
        </div>
    )
}