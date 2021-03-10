import styles from "styles/modules/news.module.scss";
import Head from "next/head";
import FilterYear from "@/components/parts/FilterYear";
import newsData from "../newsData.example.json";

const news = () => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(newsData.length / 6); i++) {
    pageNumbers.push(i);
  }

  return (
    <section id={styles.news}>
      <Head>
        <title>News - page 1 - Herbana</title>
      </Head>
      <div>
        <div>
          <h1>News</h1>
        </div>
        <FilterYear />
      </div>
      <div>
        {newsData.slice(0, 6).map((data, id) => (
          <a href={data.link} key={id}>
            <div>
              <span>{data.source}</span>
              <span>{data.date}</span>
            </div>
            <div>
              <p>{data.title}</p>
              <img src={data.image} alt={data.title} />
              <span>
                <i>{data.sub_title}</i>
              </span>
              <p>
                {data.content}
                <span>Read more</span>
              </p>
            </div>
          </a>
        ))}
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

export default news;
