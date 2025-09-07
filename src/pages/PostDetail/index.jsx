import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function PostDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res) => {
                if (!res.ok) {
                    navigate("/news", {
                        replace: true,
                    });
                    return;
                }
                return res.json();
            })
            .then((post) => {
                setPost(post);
            });
    }, []);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostDetail;
