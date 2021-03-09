import styles from "styles/modules/news.module.scss";
import Head from "next/head";
import FilterYear from "@/components/parts/FilterYear";
import newsData from "../../newsData.example.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const News = () => {
  const router = useRouter();
  const { page } = router.query;

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const [newsPerPage] = useState(6);

  //get current news
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(newsData.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section id={styles.news}>
      <Head>
        <title>News - page {page} - Herbana</title>
      </Head>
      <div>
        <div>
          <h1>News</h1>
        </div>
        <FilterYear />
      </div>
      <div>
        {currentNews.map((data, id) => (
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
        {currentPage > 1 ? (
          <a href={currentPage - 1} className={styles.arrow}>
            <img src="/image/icons/left_arrow.svg" alt="arrow" />
          </a>
        ) : null}
        {pageNumbers.map((data) => (
          <a className={styles.page} href={data} key={data}>
            {data}
          </a>
        ))}
        {pageNumbers.length > 1 ? (
          <a href={currentPage + 1} className={styles.arrow}>
            <img src="/image/icons/right_arrow.svg" alt="arrow" />
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default News;
