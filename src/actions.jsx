import { redirect } from "react-router-dom"

const URL = import.meta.env.VITE_BASE_URL  

//Create Action
export const createAction = async ({ request }) => {
    console.log("here")
    const formData = await request.formData()

    const newBlog = {
        subject: formData.get("subject"),
        details: formData.get("details"),
        image_url: formData.get("image_url")
    }

    await fetch(`${URL}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBlog)
    })
    return redirect("/")
}

export async function updateAction({ request, params }) {
    const formData= await request.formData()
    const id = params.id
    const updatedBlog = {
        subject: formData.get("subject"),
        details: formData.get("details"),
        image: formData.get("image_url")
    }
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBlog)
    })
    return redirect(`./`)
}

//Delete Action
export const deleteAction = async ({params}) => {
    const id = params.id 
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    return redirect("/")
}