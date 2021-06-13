import { useState } from "react";
import styles from "styles/modules/filterShop.module.scss";
import ArrowLink from "../icons/ArrowLink";

const FilterShop = () => {
  const [click, setClick] = useState(false);

  return (
    <div id={styles.filterShop}>
      <div className={styles.filter_block}>
        <span>
          <i>Ingredients</i>
        </span>
        <button onClick={() => {
          if(!click){
            setClick(true);
            document.getElementById("ingredients").style.opacity = 1;
          }else {
            setClick(false);
            document.getElementById("ingredients").removeAttribute("style")
          }
        }}>
          ALL <ArrowLink />
        </button>
        <ul id="ingredients">
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
        <button onClick={() => {
          if(!click){
            setClick(true);
            document.getElementById("functions").style.opacity = 1;
          }else {
            setClick(false);
            document.getElementById("functions").removeAttribute("style")
            document.getElementById("series").removeAttribute("style")
            document.getElementById("sort").removeAttribute("style")
          }
        }}>
          ALL <ArrowLink />
        </button>
        <ul id="functions">
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
        <button onClick={() => {
          if(!click){
            setClick(true);
            document.getElementById("series").style.opacity = 1;
          }else {
            setClick(false);
            document.getElementById("series").removeAttribute("style")
            document.getElementById("functions").removeAttribute("style")
            document.getElementById("series").removeAttribute("style")
            document.getElementById("sort").removeAttribute("style")
          }
        }}>
          ALL <ArrowLink />
        </button>
        <ul id="series">
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
        <button onClick={() => {
          if(!click){
            setClick(true);
            document.getElementById("sort").style.opacity = 1;
          }else {
            setClick(false);
            document.getElementById("sort").removeAttribute("style")
            document.getElementById("functions").removeAttribute("style")
            document.getElementById("series").removeAttribute("style")
            document.getElementById("ingredients").removeAttribute("style")
          }
        }}>NEWEST <ArrowLink /></button>
        <ul id="sort">
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
