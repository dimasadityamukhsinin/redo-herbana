import Link from "next/link";
import styles from "styles/modules/assistance.module.scss";

const NavAssistance = ({ active }) => {
  return (
    <div id={styles.navAssistance}>
      <h3>ASSISTANCE</h3>
      <div>
        {" "}
        <div>
          <Link href="stockist">
            <a className={active === "stockist" ? `active` : null}>
              <h4>STORE & STOCKIST</h4>
            </a>
          </Link>
        </div>
        <div>
          <Link href="privacy-policy">
            <a className={active === "privacy-policy" ? `active` : null}>
              <h4>PRIVACY POLICY</h4>
            </a>
          </Link>
        </div>
        <div>
          <Link href="terms-conditions">
            <a className={active === "terms-conditions" ? `active` : null}>
              <h4>TERMS & CONDITIONS</h4>
            </a>
          </Link>
        </div>
        <div>
          <Link href="faq">
            <a className={active === "faq" ? `active` : null}>
              <h4>FAQ & HELP</h4>
            </a>
          </Link>
        </div>
        <div>
          <Link href="shipping-return">
            <a className={active === "shipping-return" ? `active` : null}>
              <h4>SHIPPING & RETURNS</h4>
            </a>
          </Link>
        </div>
        <div>
          <Link href="press">
            <a className={active === "press" ? `active` : null}>
              <h4>PRESS</h4>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavAssistance;
