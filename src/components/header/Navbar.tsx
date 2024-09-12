"use client"; // Ensure this is at the top

import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Headers from "./Headers";
import styles from "./header.module.css";

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          CLOUD
          <GrTechnology />
          HOSTING
        </Link>
        <div className={styles.menu} onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <IoMdClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <div
        className={`${styles.navLinksWrapper}`}
        style={{
          clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
      }}
      >
        <ul className={styles.navLinks}>
          <li>
            <Link
              onClick={() => setToggle(false)}
              className={styles.navLink}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              className={styles.navLink}
              href="/articles?pageNumber=1"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              className={styles.navLink}
              href="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setToggle(false)}
              className={styles.navLink}
              href="/admin"
            >
              Admin Dashboard
            </Link>
          </li>
        </ul>
        <Headers />
      </div>
    </nav>
  );
};

export default Navbar;
