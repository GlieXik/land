import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-scroll";
const Nav = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <>
      <ul className={styles.nav__list}>
        <li>
          <Link
            activeClass={styles.active}
            to="home"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onSetActive={handleSetActive}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onSetActive={handleSetActive}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="cases"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onSetActive={handleSetActive}
          >
            Cases
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="blog"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onSetActive={handleSetActive}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="contact"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onSetActive={handleSetActive}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
