import { Component } from "react";
import styles from "./NavBar.module.css";
import { CgCoffee } from "react-icons/cg";
import Link from "next/link";

export default function NavBar() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.apply_transition}>
          <CgCoffee className={styles.logo} />
        </div>
        <nav>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
              <Link href="/home">Home</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/menu">Speisekarte</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.apply_transition}>
          <Link href="/home" className={styles.apply_transition}>
            Kontakt
          </Link>
        </div>
      </header>
    </main>
  );
}
