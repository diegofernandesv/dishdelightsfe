import styles from "./footer.module.css";
import logo from "../assets/logo.svg"; 

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      {/* Content Wrapper */}
      <div className={styles.footerContent}>
        {/* Logo */}
        <div className={styles.footerLogoContainer}>
          <img
            src={logo} // Replace with your logo path
            alt="DishDelights Logo"
            className={styles.footerLogo}
          />
          <p className={styles.footerTagline}>Delighting your taste buds, one recipe at a time.</p>
        </div>

        {/* Social Media Links */}
        <section className={styles.footerSection}>
          <h2 className={styles.footerSubheading}>Follow Us</h2>
          <div className={styles.footerSocialLinks}>
            <a
              href="https://facebook.com/dishdelights"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/dishdelights"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/dishdelights"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
            >
              Instagram
            </a>
          </div>
        </section>

        {/* Copyright */}
        <div className={styles.footerCopyright}>
          <p>2025®DishDelights. All rights reserved. Made by Diego Fernandes</p>
        </div>
      </div>
    </footer>
  );
}