import styles from "./page.module.css";
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
       <div className={styles.headers}>
        <a className={styles.brand} href="#" aria-label="BR Guru home">
          <img src="/logo.png" alt="" className={styles.logo}/>
          {/* <span className={styles.brandMark} aria-hidden="true">br</span>
          <span className={styles.brandName}>br<span>guru</span><small>.lk</small></span> */}
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="#services">Services</a>
          <a href="#about">Tools</a>
        </nav>
      </div>
      {children}</body>
    </html>
  );
}
