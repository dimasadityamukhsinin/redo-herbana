import FilterShop from "@/components/parts/FilterShop";
import Head from "next/head";
import styles from "styles/modules/shop.module.scss";
import ArrowLink from "@/components/icons/ArrowLink";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ControlShop from "@/components/parts/ControlShop";

const Shop = () => {
  const swiper = useRef();

  return (
    <section id={styles.shop}>
      <Head>
        <title>Shop - Herbana</title>
      </Head>
      <div>
        <FilterShop />
      </div>
      <div className={styles.product}>
        <div>
          <a href="/">
            <img
              src="https://herbana.id/files/product/38/product.png?1621787641"
              alt="Herbana"
            />
          </a>
          <div>
            <a href="/">
              <img
                src="https://herbana.id/files/product-series/24.svg"
                alt="Herbana"
              />
              <span>Herbana Gift Box</span>
            </a>
            <div>
              <span>IDR 60.000</span>
              <span>ADD TO CART</span>
            </div>
            <div>
              <span>
                Purchasing Herbana as a gift? Add our gift box to your cart and
                we'll pack your order in our special, eco-friendly gift box.
              </span>
            </div>
          </div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://herbana.id/files/product/38/product.png?1621787641"
              alt="Herbana"
            />
          </a>
          <div>
            <a href="/">
              <img
                src="https://herbana.id/files/product-series/24.svg"
                alt="Herbana"
              />
              <span>Herbana Gift Box</span>
            </a>
            <div>
              <span>IDR 60.000</span>
              <span>ADD TO CART</span>
            </div>
            <div>
              <span>
                Purchasing Herbana as a gift? Add our gift box to your cart and
                we'll pack your order in our special, eco-friendly gift box.
              </span>
            </div>
          </div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://herbana.id/files/product/38/product.png?1621787641"
              alt="Herbana"
            />
          </a>
          <div>
            <a href="/">
              <img
                src="https://herbana.id/files/product-series/24.svg"
                alt="Herbana"
              />
              <span>Herbana Gift Box</span>
            </a>
            <div>
              <span>IDR 60.000</span>
              <span>ADD TO CART</span>
            </div>
            <div>
              <span>
                Purchasing Herbana as a gift? Add our gift box to your cart and
                we'll pack your order in our special, eco-friendly gift box.
              </span>
            </div>
          </div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://herbana.id/files/product/38/product.png?1621787641"
              alt="Herbana"
            />
          </a>
          <div>
            <a href="/">
              <img
                src="https://herbana.id/files/product-series/24.svg"
                alt="Herbana"
              />
              <span>Herbana Gift Box</span>
            </a>
            <div>
              <span>IDR 60.000</span>
              <span>ADD TO CART</span>
            </div>
            <div>
              <span>
                Purchasing Herbana as a gift? Add our gift box to your cart and
                we'll pack your order in our special, eco-friendly gift box.
              </span>
            </div>
          </div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://herbana.id/files/product/38/product.png?1621787641"
              alt="Herbana"
            />
          </a>
          <div>
            <a href="/">
              <img
                src="https://herbana.id/files/product-series/24.svg"
                alt="Herbana"
              />
              <span>Herbana Gift Box</span>
            </a>
            <div>
              <span>IDR 60.000</span>
              <span>ADD TO CART</span>
            </div>
            <div>
              <span>
                Purchasing Herbana as a gift? Add our gift box to your cart and
                we'll pack your order in our special, eco-friendly gift box.
              </span>
            </div>
          </div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://herbana.id/files/product/38/product.png?1621787641"
              alt="Herbana"
            />
          </a>
          <div>
            <a href="/">
              <img
                src="https://herbana.id/files/product-series/24.svg"
                alt="Herbana"
              />
              <span>Herbana Gift Box</span>
            </a>
            <div>
              <span>IDR 60.000</span>
              <span>ADD TO CART</span>
            </div>
            <div>
              <span>
                Purchasing Herbana as a gift? Add our gift box to your cart and
                we'll pack your order in our special, eco-friendly gift box.
              </span>
            </div>
          </div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://herbana.id/files/product/38/product.png?1621787641"
              alt="Herbana"
            />
          </a>
          <div>
            <a href="/">
              <img
                src="https://herbana.id/files/product-series/24.svg"
                alt="Herbana"
              />
              <span>Herbana Gift Box</span>
            </a>
            <div>
              <span>IDR 60.000</span>
              <span>ADD TO CART</span>
            </div>
            <div>
              <span>
                Purchasing Herbana as a gift? Add our gift box to your cart and
                we'll pack your order in our special, eco-friendly gift box.
              </span>
            </div>
          </div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://herbana.id/files/product/38/product.png?1621787641"
              alt="Herbana"
            />
          </a>
          <div>
            <a href="/">
              <img
                src="https://herbana.id/files/product-series/24.svg"
                alt="Herbana"
              />
              <span>Herbana Gift Box</span>
            </a>
            <div>
              <span>IDR 60.000</span>
              <span>ADD TO CART</span>
            </div>
            <div>
              <span>
                Purchasing Herbana as a gift? Add our gift box to your cart and
                we'll pack your order in our special, eco-friendly gift box.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.package}>
        <div>
          <span>
            <u>Special Packages</u>
          </span>
          <div>
            <span>
              Breastfeeding Support Package <ArrowLink />
            </span>
            <ul>
              <li>Breastfeeding Support Package</li>
              <li>Over the Weather Kit</li>
              <li>Travel Kit Special Pack</li>
              <li>Travel Kit Pack</li>
              <li>Complete Wellness Pack</li>
              <li>Digestive Health Pack</li>
              <li>Immune Booster Pack</li>
            </ul>
          </div>
          <div>
            <a href="/">
              <i>View Package</i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.slidePackage}>
        <div>
          <Swiper ref={swiper} spaceBetween={60} slidesPerView={1}>
            <SwiperSlide>
              <div className={styles.package}>
                <div>
                  <img
                    src="https://herbana.id/files/product/54/large.jpg?1576071224"
                    alt="Herbana"
                  />
                </div>
                <div>
                  <div>
                    <a>Travel Kit Special Pack</a>
                    <span>ADD TO CART</span>
                  </div>
                  <div>
                    <p>
                      Common health problems such as jet-lag, muscle sore,
                      common cold, and fatigue, may occur during traveling. We
                      have good news! You can counter them naturally with our
                      Travel Kit Pack.
                      <br />
                      Includes:
                      <br />
                      - reliefSARI Jahe Merah to maintain digestive health and
                      pain relief,
                      <br />
                      - balanceMADIA Cold Ease to relieve common cold symptoms,
                      <br />
                      - balanceMADIA Good Night to improve quality of sleep,
                      <br />
                      - balanceMADIA Muscle Ease to relieve muscle fatigue,
                      soreness, and backpain
                      <br />- Special Travel Pouch
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.package}>
                <div>
                  <img
                    src="https://herbana.id/files/product/54/large.jpg?1576071224"
                    alt="Herbana"
                  />
                </div>
                <div>
                  <div>
                    <a>Travel Kit Special Pack</a>
                    <span>ADD TO CART</span>
                  </div>
                  <div>
                    <p>
                      Common health problems such as jet-lag, muscle sore,
                      common cold, and fatigue, may occur during traveling. We
                      have good news! You can counter them naturally with our
                      Travel Kit Pack.
                      <br />
                      Includes:
                      <br />
                      - reliefSARI Jahe Merah to maintain digestive health and
                      pain relief,
                      <br />
                      - balanceMADIA Cold Ease to relieve common cold symptoms,
                      <br />
                      - balanceMADIA Good Night to improve quality of sleep,
                      <br />
                      - balanceMADIA Muscle Ease to relieve muscle fatigue,
                      soreness, and backpain
                      <br />- Special Travel Pouch
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.package}>
                <div>
                  <img
                    src="https://herbana.id/files/product/54/large.jpg?1576071224"
                    alt="Herbana"
                  />
                </div>
                <div>
                  <div>
                    <a>Travel Kit Special Pack</a>
                    <span>ADD TO CART</span>
                  </div>
                  <div>
                    <p>
                      Common health problems such as jet-lag, muscle sore,
                      common cold, and fatigue, may occur during traveling. We
                      have good news! You can counter them naturally with our
                      Travel Kit Pack.
                      <br />
                      Includes:
                      <br />
                      - reliefSARI Jahe Merah to maintain digestive health and
                      pain relief,
                      <br />
                      - balanceMADIA Cold Ease to relieve common cold symptoms,
                      <br />
                      - balanceMADIA Good Night to improve quality of sleep,
                      <br />
                      - balanceMADIA Muscle Ease to relieve muscle fatigue,
                      soreness, and backpain
                      <br />- Special Travel Pouch
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                    <span>
                      <img src="https://herbana.id/img/icons/plus_icon.svg" />
                    </span>
                    <img
                      src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                      alt="Herbana"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <ControlShop slider={swiper} />
        {/* <div>
          <div>
            <img
              src="https://herbana.id/files/product/54/large.jpg?1576071224"
              alt="Herbana"
            />
          </div>
          <div>
            <div>
              <a>Travel Kit Special Pack</a>
              <span>ADD TO CART</span>
            </div>
            <div>
              <p>
                Common health problems such as jet-lag, muscle sore, common
                cold, and fatigue, may occur during traveling. We have good
                news! You can counter them naturally with our Travel Kit Pack.
                <br />
                Includes:
                <br />
                - reliefSARI Jahe Merah to maintain digestive health and pain
                relief,
                <br />
                - balanceMADIA Cold Ease to relieve common cold symptoms,
                <br />
                - balanceMADIA Good Night to improve quality of sleep,
                <br />
                - balanceMADIA Muscle Ease to relieve muscle fatigue, soreness,
                and backpain
                <br />- Special Travel Pouch
              </p>
            </div>
            <div>
              <img
                src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                alt="Herbana"
              />
              <span>
                <img src="https://herbana.id/img/icons/plus_icon.svg" />
              </span>
              <img
                src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                alt="Herbana"
              />
              <span>
                <img src="https://herbana.id/img/icons/plus_icon.svg" />
              </span>
              <img
                src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                alt="Herbana"
              />
              <span>
                <img src="https://herbana.id/img/icons/plus_icon.svg" />
              </span>
              <img
                src="https://herbana.id/files/product/30/thumbnail.png?1576071224"
                alt="Herbana"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Shop;
