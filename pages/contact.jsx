import styles from "styles/modules/contact.module.scss";
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <section id={styles.contact}>
        <Head>
          <title>Contact - Herbana</title>
        </Head>
        <div>
          <div>
            <div>
              <h2>Herbana</h2>
              <div>
                <h4>PHONE</h4>
                <span>021 53170123</span>
              </div>
              <div>
                <h4>ADDRESS</h4>
                <span>PT. DELTOMED LABORATORIES (OFFICE)</span>
                <span>The Mahitala</span>
                <span>Jl. Alam Utama no. 6</span>
                <span>Alam Sutera</span>
                <span>Kota Tangerang, Banten 15320</span>
              </div>
              <div>
                <h4>EMAIL</h4>
                <a href="">hello@herbana.id</a>
              </div>
              <div>
                <a href="">
                  <img src="/image/icons/fb_icon.svg" alt="facebook" />
                </a>
                <a href="">
                  <img src="/image/icons/ig_icon.svg" alt="instagram" />
                </a>
                <a href="">
                  <img src="/image/icons/msg_icon.svg" alt="email" />
                </a>
              </div>
            </div>
            <div>
              <h2>Deltomed Factory</h2>
              <div>
                <h4>PHONE</h4>
                <span>0273 322 566</span>
              </div>
              <div>
                <h4>ADDRESS</h4>
                <span>PT. DELTOMED LABORATORIES (FACTORY)</span>
                <span>Dusun Nangger RT.05 / RW.05</span>
                <span>Nambangan, Selogiri</span>
                <span>Wonogiri 57601</span>
              </div>
              <div>
                <h4>EMAIL</h4>
                <a href="">contact@deltomed.com</a>
              </div>
              <div>
                <a href="">
                  <img src="/image/icons/fb_icon.svg" alt="facebook" />
                </a>
                <a href="">
                  <img src="/image/icons/ig_icon.svg" alt="instagram" />
                </a>
                <a href="">
                  <img src="/image/icons/msg_icon.svg" alt="email" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1>Get in Touch</h1>
              <div>
                <span>Learn more about Herbana, ask us anything.</span>
                <form action="/">
                  <input type="text" placeholder="NAME" />
                  <input type="text" placeholder="PHONE" />
                  <input type="text" placeholder="EMAIL ADDRESS" />
                  <textarea
                    name="Message"
                    id="message"
                    rows="5"
                    placeholder="MESSAGE"
                  />
                  <input type="submit" value="SUBMIT"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
