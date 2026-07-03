import { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => { setPosts(response.data);
            setLoading(false) }
    )
    },[])
    if (loading) return <p>Загрузка...</p>
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title} </li>
                
            ))
            }
        </ul>
    )
}

export default Posts