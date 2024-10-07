const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;








// "use client"; // Ensure this is at the top

// import Link from "next/link";
// import { GrTechnology } from "react-icons/gr";
// import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
// import Headers from "./Headers";
// import styles from "./header.module.css";

// interface NavbarProps {
//   isAdmin: boolean;
// }

// const Navbar = ({ isAdmin }: NavbarProps) => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logoWrapper}>
//         <Link href="/" className={styles.logo}>
//           CLOUD
//           <GrTechnology />
//           HOSTING
//         </Link>
//         <div className={styles.menu} onClick={() => setToggle((prev) => !prev)}>
//           {toggle ? <IoMdClose /> : <AiOutlineMenu />}
//         </div>
//       </div>
//       <div
//         className={`${styles.navLinksWrapper}`}
//         style={{
//           clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
//       }}
//       >
//         <ul className={styles.navLinks}>
//           <li>
//             <Link
//               onClick={() => setToggle(false)}
//               className={styles.navLink}
//               href="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={() => setToggle(false)}
//               className={styles.navLink}
//               href="/articles?pageNumber=1"
//             >
//               Articles
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={() => setToggle(false)}
//               className={styles.navLink}
//               href="/about"
//             >
//               About
//             </Link>
//           </li>

//           <li>
//             <Link
//               onClick={() => setToggle(false)}
//               className={styles.navLink}
//               href="/admin"
//             >
//               Admin Dashboard
//             </Link>
//           </li>
//         </ul>
//         <Headers />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;