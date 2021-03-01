import { useEffect, useRef } from "react";
import styles from "styles/modules/navigation.module.scss";
import Link from "next/link";
import LogoNavigation from "../icons/LogoNavigation";
import { removeWhite } from "@/components/utils";
import ArrowLink from "../icons/ArrowLink";

const Navigation = () => {
  const discount = useRef(null);
  const info = useRef(null);
  const nav = useRef(null);
  const mobileLink = useRef(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 60) {
      discount.current.classList.add("mintop");
      info.current.classList.add("top");
      nav.current.classList.add("linktop");
    } else {
      discount.current.classList.remove("mintop");
      info.current.classList.remove("top");
      nav.current.classList.remove("linktop");
    }
  };

  const handleMobile = () => {
    if (nav.current.classList.contains("active")) {
      nav.current.classList.remove("active");
      mobileLink.current.classList.remove("active");
    } else {
      nav.current.classList.add("active");
      mobileLink.current.classList.add("active");
    }
  };

  const removeClass = () => {
    setTimeout(() => {
      discount.current.classList.remove("discborder");
      discount.current.classList.remove("white");
      info.current.classList.remove("infoborder");
      info.current.classList.remove("white");
      nav.current.classList.remove("navborder");
      nav.current.classList.remove("white");
    }, 1500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <section id={styles.discount} ref={discount} className="discount">
          <span>GET 20% OFF WITH A MINIMUM PURCHASE OF IDR 350K</span>
        </section>
        <section id={styles.info} ref={info} className="info">
          <div>
            <div className={styles.language}>
              <Link href="/">
                <a>EN</a>
              </Link>
              <Link href="/id">
                <a>ID</a>
              </Link>
            </div>
            <div className={styles.account}>
              <Link href="/account">
                <a>Account</a>
              </Link>
            </div>
            <div className={styles.cart}>
              <Link href="/cart">
                <a>
                  Cart <span>(0)</span>
                </a>
              </Link>
            </div>
            <div className={styles.wa}>
              <Link href="http://whatsapp.coom">
                <a>
                  <div></div>
                  <span>0821 2310 0111</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section id={styles.nav} ref={nav} className="nav">
          <div>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <LogoNavigation />
                </a>
              </Link>
            </div>
            <div className={styles.search}>
              <form>
                <input type="text" />
                <button type="submit" />
              </form>
            </div>
            <div className={styles.link}>
              <ul>
                <li>
                  <a href="/" onClick={() => removeClass()}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={() => removeClass()}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/shop" onClick={() => removeClass()}>
                    Shop
                  </a>
                </li>
                <li className={styles.story}>
                  <a onClick={null}>
                    Story <ArrowLink />
                  </a>
                  <ul>
                    <li>
                      <a href="/">Effortlessly-Possible</a>
                    </li>
                    <li>
                      <a href="/">News</a>
                    </li>
                    <li>
                      <a href="/">Journal</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact" onClick={() => removeClass()}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div id={styles.mobile_nav} className="mobile_nav">
              <div>
                <div className={styles.logo}>
                  <a href="/">
                    <LogoNavigation />
                  </a>
                </div>
                <div className={styles.mobile_button}>
                  <button onClick={() => handleMobile()}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
                <div className={styles.mobile_search}>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <section id={styles.mobile_link} className="mobile_link" ref={mobileLink}>
        <div>
          <Link href="/">
            <a>EN</a>
          </Link>
          <Link href="/id">
            <a>ID</a>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Story</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Cart (0)</a>
            </li>
            <li>
              <a href="/">Account</a>
            </li>
            <li>
              <a href="/">
                <img src="/image/icons/wa.svg" alt="WhatsApp" />
                0821 2310 0111
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navigation;
