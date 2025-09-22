import { useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
    },
    list: {
        marginTop: 20,
    },
};

const productsApi = "https://api01.f8team.dev/api/products";

function Debounce() {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const keyword = useDebounce(searchValue, 600);

    useEffect(() => {
        fetch(`${productsApi}?q=${keyword}`)
            .then((res) => res.json())
            .then((result) => {
                setProducts(result.data.items);
            });
    }, [keyword]);

    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Debounce Demo</h1>

            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <ul style={styles.list}>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.id}. {product.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Debounce;
