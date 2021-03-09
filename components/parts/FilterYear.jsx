import styles from "styles/modules/news.module.scss";
import ArrowLink from "../icons/ArrowLink";

const FilterYear = () => {
  return (
    <div id={styles.filterYear}>
      <div className={styles.year}>
        <span>
          <i>Year</i>
        </span>
        <button>
          ALL <ArrowLink />
        </button>
        <ul>
          <li>
            <button>ALL</button>
          </li>
          <li>
            <button>2019</button>
          </li>
          <li>
            <button>2020</button>
          </li>
          <li>
            <button>2021</button>
          </li>
        </ul>
      </div>
      <div className={styles.month}>
        <span>
          <i>Month</i>
        </span>
        <button>
          ALL <ArrowLink />
        </button>
        <ul>
          <li>
            <button>ALL</button>
          </li>
          <li>
            <button>JANUARY</button>
          </li>
          <li>
            <button>FEBRUARY</button>
          </li>
          <li>
            <button>MARCH</button>
          </li>
          <li>
            <button>APRIL</button>
          </li>
          <li>
            <button>MAY</button>
          </li>
          <li>
            <button>JUNE</button>
          </li>
          <li>
            <button>JULY</button>
          </li>
          <li>
            <button>AUGUST</button>
          </li>
          <li>
            <button>SEPTEMBER</button>
          </li>
          <li>
            <button>OCTOBER</button>
          </li>
          <li>
            <button>NOVERMBER</button>
          </li>
          <li>
            <button>DECEMBER</button>
          </li>
        </ul>
      </div>
      <div className={styles.sort}>
        <span>
          <i>Sort By</i>
        </span>
        <button>NEWEST <ArrowLink /></button>
        <ul>
          <li>
            <button>NEWEST</button>
          </li>
          <li>
            <button>OLDEST</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterYear;
