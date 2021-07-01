import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const CategoryDetail = ({ match }) => {
    const [category, setCategory] = useState([]);
    const [posts, setPosts] = useState([]);
    const id = match.params.id;

    useEffect(() => {
       axios({
           method: "GET",
           url: `http://127.0.0.1:8000/api/categories/${id}/`,
       }).then(response => {
           setCategory(response.data)
           setPosts(response.data.posts)
       })
    }, [id]);

    return (
        <div>
            <p>Category with ID {category.id}</p>
            <p>Category: <strong>{category.name}</strong></p>
            <hr/>

            <div className="row">
                {posts.map(post => (
                    <div className="col-md-4" key={post.id}>
                        <h4>{post.title} </h4>
                        <p>{post.content}</p>
                        <p>{post.id}</p>
                        <Link to={{ pathname: `/posts/${post.id}`}}>Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetail;
