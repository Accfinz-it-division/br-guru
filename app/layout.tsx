import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import OrganizationSchema from "@/components/OrganizationSchema";
import type { Metadata } from 'next';

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
      <body className={styles.layoutbody}>
        <div className={styles.topbar}>
          <p>+94 71 803 5537</p>
          <a className={styles.socialIcon} href="https://www.facebook.com/BRGurusrilanka" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>

        </div>
        <OrganizationSchema />
        {/* Naviagation */}
        <div className={styles.headers}>
          <a className={styles.brand} href="#" aria-label="BR Guru home">
            <Image src="/logo.png" alt="" width={160} height={60} className={styles.logo} />
          </a>

          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="brguru-incorporation.html" target="_blank" rel="noopener noreferrer">Registration</Link>
          </nav>

          <details className={styles.mobileNavigation}>
            <summary className={styles.mobileMenuSummary} aria-label="Toggle navigation menu">
              <span aria-hidden="true">☰</span>
              
            </summary>
            <nav className={styles.mobileMenuPanel} aria-label="Mobile navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/services">Services</Link>
              <Link href="brguru-incorporation.html" target="_blank" rel="noopener noreferrer">Registration</Link>
            </nav>
          </details>

        </div>
        {/* Body */}
        <div>{children}</div>
        <br />

        {/* Footer */}
        <footer >

          {/* <img className={styles.footerImage} src="/footer.jpg" alt="" /> */}
          <div className={styles.footer}>
            <p>Business registration &amp; corporate services in Sri Lanka.</p>
            <span className={styles.copyright}>© 2026 BR Guru. All rights reserved.</span>
          </div>

        </footer> {/* Popup || WhatsApp */}
        <div className={styles.popupWhatsApp}>

          {/* Popup */}
          <div className={styles.offerPopup} role="status">
            <span className={styles.offerTitle}>Free of charge</span>
            <span className={styles.offerDescription}>Get in touch to learn more.</span>
          </div>
          {/* WhatsApp Link */}
          <a
            className={styles.whatsAppLink}
            href="https://wa.me/+94718035537"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with BR Guru on WhatsApp"
          >
            <div className={styles.whatsAppStyleBlur}>  </div>
            <Image className={styles.whatsAppLinkImage} src="/whatsapp.gif" alt="" width={50} height={50} />
          </a>
        </div>

      </body>
    </html>
  );
}
