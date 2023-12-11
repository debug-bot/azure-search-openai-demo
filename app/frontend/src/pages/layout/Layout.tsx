import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import logo from "../../assets/logo.png";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/upload" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Upload Documents</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://example.com" target={"_blank"} title="Example.com link">
                                    <img src={logo} alt="Logo" aria-label="Link to example.com" width="20px" height="20px" className={styles.logo} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>
                        <a href="https://example.com">
                            Powered by Example.com
                            <img src={logo} alt="Logo" aria-label="Link to example.com" width="20px" height="20px" className={styles.logo} />
                        </a>
                    </h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
