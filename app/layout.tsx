"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
       <div className={styles.headers}>
        <a className={styles.brand} href="#" aria-label="BR Guru home">
          <Image src="/logo.png" alt="" width={160} height={60} className={styles.logo}/>
          {/* <span className={styles.brandMark} aria-hidden="true">br</span>
          <span className={styles.brandName}>br<span>guru</span><small>.lk</small></span> */}
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <Link href="/" data-active={pathname === "/"}>Home</Link>
          <Link href="/about" data-active={pathname === "/about"}>About us</Link>
          <Link href="/services" data-active={pathname === "/services"}>Services</Link>
          <Link href="#about" data-active={pathname === "/abs"}>Tools</Link>
        </nav>
      </div>
      {children}
      <br />
      <footer className={styles.footer} style={{ marginTop: "auto" }}>
        {/* <a className={styles.brand} href="#" aria-label="BR Guru home">
          <span className={styles.brandMark} aria-hidden="true">br</span>
          <span className={styles.brandName}>br<span>guru</span><small>.lk</small></span>
        </a> */}
        <p>Business registration &amp; corporate services in Sri Lanka.</p>
        <span className={styles.copyright}>© 2026 BR Guru. All rights reserved.</span>
      </footer>
      <div className={styles.popupWhatsApp}>
        <a href="https://wa.me/+94718035537" target="_blank">
          <img src="/whatsapp.gif" alt="WhatsApp" width={60} height={60} />
        </a>
      </div>
      </body>
    </html>
  );
}
