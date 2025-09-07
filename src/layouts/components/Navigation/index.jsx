import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/news",
        title: "News",
    },
    {
        to: "/contact",
        title: "Contact",
    },
    {
        to: "/use-state",
        title: "UseState",
    },
];

function Navigation() {
    return (
        <nav className={styles.wrapper}>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            to={item.to}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
