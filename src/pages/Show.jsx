import { Link, Form, useLoaderData } from "react-router-dom"
import Blog from '../components/Blog'
import '../show.css'

export default function Show(props) {
    const aBlog = useLoaderData()
    const id = aBlog?.url.split("/")[4]

    return(
        <div>
        <h1>{aBlog.subject}</h1>
        <p>{aBlog.content}</p>
        <div>
            <Form action={`/update/${id}/`} method="POST">
                <label htmlFor="subject">
                    Change the Title of the Post
                    <input type="text" id="subject" name="subject" defaultValue={aBlog.name}/>
                </label>

                <label htmlFor="details">
                    Edit the Post
                    <input type="details" id="details" name="details" defaultValue={aBlog.details} className="edit-box"/>
                </label>

                <label htmlFor="image_url">
                    Edit the Image URL
                    <input type="text" id="image_url" name="image_url" defaultValue={aBlog.image_url}/>
                </label>

                <button style={{"backgroundColor": "blue"}}>Update Your Post</button>
            </Form>

            <Form action={`/delete/${id}`} method="post">
                <button style={{"backgroundColor": "red"}}>Delete Post</button>
            </Form>
        </div>
        <Link to="/">
            <button style={{"backgroundColor": "blue"}}>Go Back</button>
        </Link>
        </div>
    )
}