import styles from "styles/modules/journal.module.scss";
import Head from "next/head";
import FilterYear from "@/components/parts/FilterYear";
import journalData from "../journalData.example.json";

const journal = () => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(journalData.length / 6); i++) {
    pageNumbers.push(i);
  }

  return (
    <section id={styles.journal}>
      <Head>
        <title>Jounal - page 1 - Herbana</title>
      </Head>
      <div>
        <div>
          <h1>Journal</h1>
        </div>
        <FilterYear />
      </div>
      <div>
        <a href="/">
          <div>
            <img
              src="https://herbana.id/files/post/200/thumbnail.jpg"
              alt="simple ways"
            />
          </div>
          <div>
            <div>
              <span>HEALTH</span>
              <span>4 JANUARY 2021</span>
            </div>
            <div>
              <span>Simple Ways to Maintain Immunity during Rainy Season</span>
            </div>
          </div>
        </a>
        <a href="/">
          <div>
            <img
              src="https://herbana.id/files/post/200/thumbnail.jpg"
              alt="simple ways"
            />
          </div>
          <div>
            <div>
              <span>HEALTH</span>
              <span>4 JANUARY 2021</span>
            </div>
            <div>
              <span>Simple Ways to Maintain Immunity during Rainy Season</span>
            </div>
          </div>
        </a>
        <a href="/">
          <div>
            <img
              src="https://herbana.id/files/post/200/thumbnail.jpg"
              alt="simple ways"
            />
          </div>
          <div>
            <div>
              <span>HEALTH</span>
              <span>4 JANUARY 2021</span>
            </div>
            <div>
              <span>Simple Ways to Maintain Immunity during Rainy Season</span>
            </div>
          </div>
        </a>
        <a href="/">
          <div>
            <img
              src="https://herbana.id/files/post/200/thumbnail.jpg"
              alt="simple ways"
            />
          </div>
          <div>
            <div>
              <span>HEALTH</span>
              <span>4 JANUARY 2021</span>
            </div>
            <div>
              <span>Simple Ways to Maintain Immunity during Rainy Season</span>
            </div>
          </div>
        </a>
        <a href="/">
          <div>
            <img
              src="https://herbana.id/files/post/200/thumbnail.jpg"
              alt="simple ways"
            />
          </div>
          <div>
            <div>
              <span>HEALTH</span>
              <span>4 JANUARY 2021</span>
            </div>
            <div>
              <span>Simple Ways to Maintain Immunity during Rainy Season</span>
            </div>
          </div>
        </a>
        <a href="/">
          <div>
            <img
              src="https://herbana.id/files/post/200/thumbnail.jpg"
              alt="simple ways"
            />
          </div>
          <div>
            <div>
              <span>HEALTH</span>
              <span>4 JANUARY 2021</span>
            </div>
            <div>
              <span>Simple Ways to Maintain Immunity during Rainy Season</span>
            </div>
          </div>
        </a>
        <a href="/">
          <div>
            <img
              src="https://herbana.id/files/post/200/thumbnail.jpg"
              alt="simple ways"
            />
          </div>
          <div>
            <div>
              <span>HEALTH</span>
              <span>4 JANUARY 2021</span>
            </div>
            <div>
              <span>Simple Ways to Maintain Immunity during Rainy Season</span>
            </div>
          </div>
        </a>
      </div>
      <div>
        {pageNumbers.map((data) => (
          <a className={styles.page} href={data} key={data}>
            {data}
          </a>
        ))}
        {pageNumbers.length > 1 ? (
          <a href="news/2" className={styles.arrow}>
            <img src="/image/icons/right_arrow.svg" alt="arrow" />
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default journal;
