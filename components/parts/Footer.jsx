import styles from "styles/modules/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  return (
    <footer id={styles.footer}>
      <div>
        <div className={styles.footer_left}>
          <div className={styles.footer_link}>
            <span>GENERAL</span>
            <ul>
              <li>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a>Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/effortlessly-possible">
                  <a>Effortlessly-Possible</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a>News</a>
                </Link>
              </li>
              <li>
                <Link href="/journal">
                  <a>Journal</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_link}>
            <span>ASSISTANCE</span>
            <ul>
              <li>
                <Link href="/assistance/stockist">
                  <a>Store & stockist</a>
                </Link>
              </li>
              <li>
                <Link href="/assistance/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/assistance/terms-conditions">
                  <a>Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/assistance/faq">
                  <a>FAQ & Help</a>
                </Link>
              </li>
              <li>
                <Link href="/assistance/shipping-return">
                  <a>Shipping & Returns</a>
                </Link>
              </li>
              <li>
                <Link href="/assistance/press">
                  <a>Press</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_copyright}>
            <span>©</span> HERBANA {d.getFullYear()}. All rights reserved.
          </div>
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_newsletter}>
            <span>SIGN UP FOR NEWSLETTER</span>
            <span>
              Receive updates about our products, lifestyle tips, exclusive
              offers and more!
            </span>
            <form>
              <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" />
              <input type="submit" value="SUBMIT" />
            </form>
          </div>
          <div className={styles.footer_socmed}>
            <Link href="/">
              <a>
                <img src="/image/icons/fb_icon.svg" alt="facebook" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img src="/image/icons/ig_icon.svg" alt="instagram" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img src="/image/icons/msg_icon.svg" alt="email" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
