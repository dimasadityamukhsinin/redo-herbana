import NavAssistance from "@/components/parts/navAssistance";
import styles from "styles/modules/assistance.module.scss";
import Head from "next/head";

const faq = () => {
  return (
    <section id={styles.assistance_wrappper}>
      <Head>
        <title>Faq - Herbana</title>
      </Head>
      <div>
        <NavAssistance active={"faq"} />
        <div id={styles.faq}>
          <h1>Faq</h1>
          <div>
            <div>
              <h4>WHAT IS HERBANA?</h4>
              <p>
                Herbana is an all-natural brand offering a range of herbal
                products aimed to make a healthy and balanced life effortlessly
                possible. We started herbana because living healthy should be
                simple and easy and yet everyday we are surrounded by chemicals
                and dangerous toxins that compromise our health. Here at
                herbana, we want to address this problem. We believe that nature
                offers the kind of simplicity and ease that we all need and so
                our job is to deliver nature's abundant healing powers straight
                to you.
              </p>
              <p>
                Our first line of products is called Relief Sari, we are
                currently cooking up more herbal goodness for you. Stay tuned!
              </p>
            </div>
            <div>
              <h4>WHAT IS RELIEF SARI?</h4>
              <p>
                <i>Relief Sari</i> is our line of highly concentrated extracts
                of individual herbs. Expanded into nine variants, each and every
                one of our herbs are locally sourced and expertly researched.
                Our standardized extraction process ensures that all of nature's
                goodness is delivered to you in its most potent form.
              </p>
              <p>
                Our first line of products is called Relief Sari, we are
                currently cooking up more herbal goodness for you. Stay tuned!
              </p>
            </div>
            <div>
              <h4>IS IT OKAY TO COMBINE YOUR HERBS?</h4>
              <p>
                Yes! We recommend finding the right balance for your body. Keep
                in mind that it's better to consume only one herb with similar
                functions (for example: pick either jahe merah or kunyit for
                your digestive health, but not both)
              </p>
            </div>
            <div>
              <h4>ARE YOUR HERBS VEGAN?</h4>
              <p>
                Yes. Our herbal extracts are 100% natural and our capsules are
                made out of algae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default faq;
