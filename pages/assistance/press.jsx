import NavAssistance from "@/components/parts/navAssistance";
import styles from "styles/modules/assistance.module.scss";
import Head from "next/head";

const press = () => {
  return (
    <section id={styles.assistance_wrappper}>
      <Head>
        <title>Press - Herbana</title>
      </Head>
      <div>
        <NavAssistance active={"press"} />
        <div id={styles.press}>
          <h1>Press</h1>
          <div>
            <div>
              <p>
                For press and media invitation, contact us at
                <a href="mailto:hello@herbana.id">hello@herbana.id</a>
              </p>
              <form>
                <span>PLEASE FILL ALL FIELDS</span>
                <div>
                  <div>
                    <span>First Name</span>
                    <input type="text" name="first_name" />
                    <span>Last Name</span>
                    <input type="text" name="last_name" />
                    <span>Mobile Phone</span>
                    <input type="text" name="mobile" />
                    <span>Email Address</span>
                    <input type="text" name="email" />
                  </div>
                  <div>
                    <span>City/Area</span>
                    <input type="text" name="city" />
                    <span>Country</span>
                    <select name="country">
                      <option value="indonesia">Indonesia</option>
                      <option value="malaysia">Malaysia</option>
                    </select>
                    <span>Publication</span>
                    <input type="text" name="publication" />
                  </div>
                  <div>
                    <span>Inquiry</span>
                    <textarea name="inquiry" rows="5"></textarea>
                  </div>
                  <div>
                    <div>
                      <input type="submit" name="submit" value="Submit" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default press;
