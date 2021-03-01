import Link from "next/link";

const Assistance = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <div>
              <h3>ASSISTANCE</h3>
            </div>
            <div>
              <Link href="/stockist">
                <h4>STORE & STOCKIST</h4>
              </Link>
            </div>
            <div>
              <Link href="/privacy-policy">
                <h4>PRIVACY POLICY</h4>
              </Link>
            </div>
            <div>
              <Link href="/terms-conditions">
                <h4>TERMS & CONDITIONS</h4>
              </Link>
            </div>
            <div>
              <Link href="/faq">
                <h4>FAQ & HELP</h4>
              </Link>
            </div>
            <div>
              <Link href="/shipping-return">
                <h4>SHIPPING & RETURNS</h4>
              </Link>
            </div>
            <div>
              <Link href="/press">
                <h4>PRESS</h4>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default privacyPolicy;
