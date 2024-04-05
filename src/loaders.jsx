//Base URL
const URL = import.meta.env.VITE_BASE_URL

//Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allBlogs = await response.json()
    return allBlogs
}

//Show Loader
export const showLoader = async ({params}) => {
    const response= await fetch(`${URL}${params.id}/`)
    const aBlog = await response.json()
    return aBlog
}