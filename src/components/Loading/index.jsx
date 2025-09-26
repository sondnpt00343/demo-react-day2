import styles from "./Loading.module.scss";
import { useLoading } from "@/store/ui";

function Loading() {
    const loading = useLoading();

    if (!loading) return null;

    return <div className={styles.wrapper} />;
}

export default Loading;
