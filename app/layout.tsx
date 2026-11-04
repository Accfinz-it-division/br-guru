import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from 'next'
import OrganizationSchema from "@/components/OrganizationSchema";


export const metadata: Metadata = {
  metadataBase: new URL('https://br-guru.vercel.app'),
  alternates: {
    canonical: '/',
  },

  title: {
    default: 'BR Guru | Business Registration Consultants',
    template: '%s | BR Guru',
  },

  description:
    'Professional business registration, company incorporation and corporate consultancy services in Sri Lanka.',

  applicationName: 'BR Guru',

  openGraph: {
    type: 'website',
    siteName: 'BR Guru',
    locale: 'en_LK',
    title: 'BR Guru | Business Registration Consultants',
    description:
      'Simplifying business registration and corporate services in Sri Lanka.',
    url: 'https://br-guru.vercel.app/',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BR Guru Business Registration Consultants',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <OrganizationSchema />
        <div className={styles.headers}>
          <a className={styles.brand} href="#" aria-label="BR Guru home">
            <Image src="/logo.png" alt="" width={160} height={60} className={styles.logo}/>
            {/* <span className={styles.brandMark} aria-hidden="true">br</span>
            <span className={styles.brandName}>br<span>guru</span><small>.lk</small></span> */}
          </a>
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="#about">Tools</Link>
          </nav>
        </div>
        <main>{children}</main>
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
        <div className={styles.offerPopup} role="status">
          <span className={styles.offerTitle}>Free of charge</span>
          <span className={styles.offerDescription}>Get in touch to learn more.</span>
        </div>
        <a
          className={styles.whatsAppLink}
          href="https://wa.me/+94718035537"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with BR Guru on WhatsApp"
        >
          <Image src="/whatsapp.gif" alt="" width={60} height={60} />
        </a>
      </div>
      </body>
    </html>
  );
}
