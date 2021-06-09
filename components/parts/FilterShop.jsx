import styles from "styles/modules/filterShop.module.scss";
import ArrowLink from "../icons/ArrowLink";

const FilterShop = () => {
  return (
    <div id={styles.filterShop}>
      <div className={styles.filter_block}>
        <span>
          <i>Ingredients</i>
        </span>
        <button>
          ALL <ArrowLink />
        </button>
        <ul>
          <li>
            <button>ALL</button>
          </li>
          <li>
            <button>DAUN KATUK</button>
          </li>
          <li>
            <button>DAUN KELOR</button>
          </li>
          <li>
            <button>JAHE</button>
          </li>
        </ul>
      </div>
      <div className={styles.filter_block}>
        <span>
          <i>Functions</i>
        </span>
        <button>
          ALL <ArrowLink />
        </button>
        <ul>
          <li>
            <button>ALL</button>
          </li>
          <li>
            <button>ANTI BACTERIAL</button>
          </li>
          <li>
            <button>ANTI INFLAMMATORY</button>
          </li>
          <li>
            <button>ANTI VIRAL</button>
          </li>
        </ul>
      </div>
      <div className={styles.filter_block}>
        <span>
          <i>Series</i>
        </span>
        <button>
          ALL <ArrowLink />
        </button>
        <ul>
          <li>
            <button>ALL</button>
          </li>
          <li>
            <button>BALANCEMEDIA</button>
          </li>
          <li>
            <button>HERBANA HAMPERS PACK</button>
          </li>
          <li>
            <button>HERBANA WELLNESS WORKBOOK</button>
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

export default FilterShop;
