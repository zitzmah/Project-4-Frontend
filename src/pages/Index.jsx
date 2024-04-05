import Blog from "../components/Blog"
import { Form, useLoaderData } from "react-router-dom"
import { useState } from "react"

export default function Index(props) {
    const allBlogs=useLoaderData()
    const [image, setImage] = useState('app.logomakr.com/3EC6KR')

    const handleInputChange = (event) => {
        setImage(event.target.value)
    }

    return(
        <>
        <h1>Index</h1>
        <hr/>
        <h1>Add a Post</h1>
        <Form action="/create" method="post">
            
            <label htmlFor="subject">
                Title:
                <input type="text" subject="subject" id="subject"/>
            </label>

            <label htmlFor="details">
                Write your post here:
                <input type="textarea" name="details" id="details"/>
            </label>

            <label htmlFor="image_url">
                    Image Link:
                    <input type="text" name="image_url" id="image_url"/>
            </label>

            <button>Add a New Post</button>

            </Form>
            <hr />
            {allBlogs.map((blog, i)=> <Blog blog={blog} key={i}/>)}
        </>
    )
}