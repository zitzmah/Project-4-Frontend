import Blog from "../components/Blog";
import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";
import '../index.css';

export default function Index(props) {
    const allBlogs = useLoaderData();
    const [image, setImage] = useState('app.logomakr.com/3EC6KR');

    return (
        <div className="section-container">
            <section className="relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center">
                <img priority fill quality={100} style={{ width: '100%', objectFit: 'cover' }} className='pointer-events-none select-none' src='https://www.denverhealthmedicalplan.org/sites/default/files/banner-images/elevate-current01web.jpeg' alt="Banner Image" />
            </section>


            <div className="content">
            <h1 style={{ color: '#2B375A', fontSize: '7rem', textAlign: 'center' }}>Strong Body Strong Mind</h1>

            <hr />
            <h3 style={{ color: '#2B375A', fontSize: '3rem', textAlign: 'left' }}>Add a Post</h3>
            <Form action="/create" method="post">
                <label htmlFor="subject">
                    Title:
                    <input type="text" name="subject" id="subject" />
                </label>
                <label htmlFor="details">
                    Write your post here:
                    <textarea name="details" id="details"></textarea>
                </label>
                <label htmlFor="image_url">
                    Image Link:
                    <input type="text" name="image_url" id="image_url" />
                </label>
                <button>Add a New Post</button>
            </Form>
            <hr />

            <div className="blog-container">
                <div className="blog">
                    {allBlogs.map((blog, i) => <Blog blog={blog} key={i} />)}
                </div>
            </div>
        </div>
        </div>
    );
}
