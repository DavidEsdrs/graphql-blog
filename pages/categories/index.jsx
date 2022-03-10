import React from 'react'
import { getPosts } from "../../services/getPosts";

const Categories = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts);
    }, []);
    

    return (
        <div>
            
        </div>
    )
}

export default Categories