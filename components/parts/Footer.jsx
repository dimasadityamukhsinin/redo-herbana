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
                <a href="/account">Account</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/effortlessly-possible">Effortlessly-Possible</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/journal">Journal</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_link}>
            <span>ASSISTANCE</span>
            <ul>
              <li>
                <a href="/assistance/stockist">Store & stockist</a>
              </li>
              <li>
                <a href="/assistance/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/assistance/terms-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/assistance/faq">FAQ & Help</a>
              </li>
              <li>
                <a href="/assistance/shipping-return">Shipping & Returns</a>
              </li>
              <li>
                <a href="/assistance/press">Press</a>
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
