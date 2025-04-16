import type { FC } from "react";
import Button from "../Button/Button";
import { navbarItems, navbarTopItems } from "../../constants/constants";
import styles from "./navbar.module.css";
import { NavLink } from "react-router";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className={styles.navbar}>
      {/* Top section of the navbar */}
      <ul className={styles.listTop}>
        {navbarTopItems.map((item) => (
          <NavLink
            to={item.icon === "routineWork" ? "/" : item.icon}
            key={item.text}
            className={styles.item}
          >
            <Button text={item.text} icon={item.icon} />
          </NavLink>
        ))}
      </ul>
      {/* Main section of the navbar (secondary actions) */}
      <ul className={styles.list}>
        {navbarItems.map((item) => (
          <li key={item.icon} className={styles.item}>
            <Button text={item.text} icon={item.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
