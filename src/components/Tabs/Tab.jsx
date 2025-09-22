import clsx from "clsx";
import styles from "./Tabs.module.scss";

function Tab({ className, children, active = false, onClick }) {
    return (
        <div
            className={clsx(styles.tabItem, className, {
                [styles.active]: active,
            })}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Tab;
