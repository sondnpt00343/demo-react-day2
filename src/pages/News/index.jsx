import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import Link from "../../components/Link";

function News() {
    const [params, setParams] = useSearchParams();
    const [page, setPage] = useState(() => +params.get("page") || 1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=50&_page=${page}`
        )
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [page]);

    useEffect(() => {
        setParams(page <= 1 ? "" : { page });
    }, [page, setParams]);

    return (
        <div>
            <h1>News</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/news/${post.id}`}>
                            {post.id}. {post.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <h2>Pagination:</h2>
            <ul
                style={{
                    display: "flex",
                }}
            >
                {Array(2)
                    .fill()
                    .map((_, index) => {
                        const pageNum = index + 1;
                        const isActive = page === pageNum;
                        return (
                            <li
                                key={index}
                                style={{
                                    border: "1px solid #333",
                                    padding: "2px 4px",
                                    color: isActive ? "#fff" : "#333",
                                    background: isActive ? "#333" : "#fff",
                                }}
                                onClick={() => {
                                    console.log("Tai trang: ", pageNum);
                                    setPage(pageNum);
                                }}
                            >
                                {pageNum}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export default News;
