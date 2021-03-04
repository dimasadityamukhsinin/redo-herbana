import NavAssistance from "@/components/parts/navAssistance";
import styles from "styles/modules/assistance.module.scss";
import Head from "next/head";

const shippingReturn = () => {
  return (
    <section id={styles.assistance_wrappper}>
      <Head>
        <title>Shipping & Return - Herbana</title>
      </Head>
      <div>
        <NavAssistance active={"shipping-return"} />
        <div id={styles.shippingReturn}>
          <h1>Shipping & Return</h1>
          <div>
            <div>
              <h4>WHAT IS HERBANA?</h4>
              <p>
                We will send an order receipt with payment instructions after
                you’ve confirmed your order.
              </p>
              <p>
                Payment should be made within 48 hours after check out. We will
                send you a reminder if payment has not been made within 24
                hours. Your order will automatically expire after the given time
                period. You may place a new order but we cannot guarantee the
                availability of products.
              </p>
              <p>
                For payment via transfer, please confirm your order through link
                on our website or link sent via email after you have completed
                payment. Payment with credit card of Paypal will be
                automatically confirmed.
              </p>
              <p>
                Once we are able to verify your payment, you will automatically
                receive an email with your order details confirming that your
                order has been processed.
              </p>
              <p>
                We reserve the right to not process your order if items are out
                of stock. We will refund in full.
              </p>
            </div>
            <div>
              <h4>ORDER PROCESSING TIME</h4>
              <p>
                Please allow two business days for us to process your order
                before shipping. Once order has been shipped, you will receive
                an email with tracking details.
              </p>
              <p>
                We ship on Monday-Friday. Payment confirmation received on
                Friday-Sunday and on holidays will be shipped within the next
                two business days.
              </p>
            </div>
            <div>
              <h4>RULES AND RESTRICTIONS</h4>
              <p>
                We reserve the right to not process your order, if we are unable
                to verify your payment, due to incorrect information or
                incomplete payment.
              </p>
              <p>
                We are not responsible for late delivery or failure of delivery
                due to customer’s error, such as incomplete address, no
                recipient at the given address or rejection of goods by
                recipient. In case of delivery failure, two attempts of phone
                call will be made before your order is sent back to our
                warehouse.
              </p>
              <p>
                If you wish to return your order, you are responsible for the
                shipping fee.
              </p>
              <p>
                If shipping error is on us, we will provide free re-shipping.
              </p>
              <p>
                We are not responsible for any additional taxes and duties
                charged.
              </p>
            </div>
            <div>
              <h4>DELIVERY RATES AND ETA</h4>
              <p>Jabodetabek: 10,000 flat rate (1-3 working days)</p>
              <p>
                Outside Jabodetabek: calculated upon order (4-14 working days)
              </p>
            </div>
            <div>
              <h4>INTERNATIONAL DELIVERIES</h4>
              <p>
                For international orders please email us at
                <a href="mailto:hello@herbana.id">hello@herbana.id</a>
              </p>
            </div>
            <div>
              <h4>EXCHANGE AND RETURNS</h4>
              <p>We do not accept exchange and returns,</p>
              <p>
                We will send replacements only if products are damaged due to
                shipping. Complaints must be filed within 3 days of receiving
                the products (via email or hotline). Approval of complaints is
                at our discretion. If complaints are approved we will ship
                replacement item within 1 week of approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default shippingReturn;
