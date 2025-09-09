import { useEffect, useState } from "react";

import defaultAvatar from "../../assets/img/avatar-placeholder.png";

const styles = {
    avatar: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        objectFit: "cover",
        margin: 20,
    },
};

function Cleanup2() {
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        // Closure
        return () => {
            URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const handleChange = (e) => {
        const image = e.target.files[0];
        const previewUrl = URL.createObjectURL(image);
        setPreviewUrl(previewUrl);
    };

    return (
        <label>
            <input type="file" hidden onChange={handleChange} />
            <img
                style={styles.avatar}
                src={previewUrl || defaultAvatar}
                alt=""
            />
        </label>
    );
}

export default Cleanup2;
