import axios from "axios"
import { useEffect, useState } from "react"



const Home = () => {


    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    const [isError, setIsError] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = async () => {

        axios.get(`http://hn.algolia.com/api/v1/search?tags=${search}`)
            .then((res) => setResult(res.data))
            .catch((error) => setIsError(error.message))

    }

    useEffect(() => {
        handleSearch()
    }, [search])


    console.log(search)
    console.log(result)

    return (
        <div className=" flex justify-center items-center m-2" >
            <div className=" m-2 pl-12 shadow-lg rounded-full border w-2/6" > 
                <form className="p-2" >
                    <select className=" border-r-2 w-1/6 " name="Criteria">
                        <option value="users">Users</option>
                        <option value="story">Story</option>
                        <option value="comment">Comment</option>
                        <option value="poll">Poll</option>
                        <option value="author">Author</option>

                    </select>
                    <input className=" border shadow w-4/6 ml-2  " ></input>
                </form>
            </div>
        </div>
    )


}

export default Home