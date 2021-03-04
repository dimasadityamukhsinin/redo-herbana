import SwiperCore, {
  Pagination,
  Autoplay,
  EffectFade,
  Controller,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slideData from "../slide.example.json";
import slideData2 from "../slide2.example.json";
import slideInstagram from "../slideInstagram.example.json";
import slideTestimony from "../testimony.example.json";
import styles from "styles/modules/homepage.module.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { addWhite, removeWhite, goPrev, goNext } from "@/components/utils";
import Control from "@/components/parts/Control";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade, Controller]);

export default function Home() {
  const slider_1 = useRef(null);
  const slider_top = useRef([]);
  const slider_product = useRef(null);
  const slider_testimony = useRef(null);
  const instagram = useRef(null);

  const [swiper, setSwipe] = useState("");
  const [scrolling, setScrolliing] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const handleChangeImage = () => {
    const position = window.pageYOffset;

    let color = slideData[slider_1.current.swiper.activeIndex].color;
    document.querySelectorAll(".imageSlider").forEach((data) => {
      data.style.transform = `translateY(${
        position >= 600 ? 600 : position
      }px)`;
    });

    if (position > 140) {
      document
        .querySelectorAll(".navborder > div > div:nth-child(3) > ul > li > ul")
        .forEach((data) => {
          data.classList.remove("black");
        });
      document
        .querySelectorAll(".navborder > div > div:nth-child(3) > ul > li > ul")
        .forEach((data) => {
          data.classList.remove("white");
        });
      document
        .querySelectorAll(".navborder > div > div:nth-child(3) > ul > li > ul > li")
        .forEach((data) => {
          data.classList.remove("black");
        });
      if (document.querySelectorAll(".infoborder").length > 0) {
        if (
          document
            .querySelectorAll(".infoborder > div > div:first-child > a")[0]
            .classList.contains("white")
        ) {
          document.querySelectorAll(".discborder")[0].classList.remove("white");
          document.querySelectorAll(".infoborder")[0].classList.remove("white");
          document.querySelectorAll(".navborder")[0].classList.remove("white");

          removeWhite();
        }
      }

      document.querySelectorAll(".discount")[0].classList.remove("discborder");
      document.querySelectorAll(".info")[0].classList.remove("infoborder");
      document.querySelectorAll(".nav")[0].classList.remove("navborder");
    } else {
      document.querySelectorAll(".discount")[0].classList.add("discborder");
      document.querySelectorAll(".info")[0].classList.add("infoborder");
      document.querySelectorAll(".nav")[0].classList.add("navborder");
    }

    if (position < 140) {
      if (color === "white") {
        document
          .querySelectorAll(
            ".navborder > div > div:nth-child(3) > ul > li > ul"
          )
          .forEach((data) => {
            data.classList.remove("black");
          });
        document
          .querySelectorAll(".swiper-pagination-bullet")
          .forEach((data) => {
            data.classList.add("white-border");
          });
        document
          .querySelector(".swiper-pagination-bullet-active")
          .classList.add("white-bullet");
        console.log(document.getElementsByClassName("discborder")[0]);
        document.getElementsByClassName("discborder")[0].classList.add("white");
        document.getElementsByClassName("infoborder")[0].classList.add("white");
        document.getElementsByClassName("navborder")[0].classList.add("white");

        addWhite();
      } else {
        document
          .querySelectorAll(
            ".navborder > div > div:nth-child(3) > ul > li > ul"
          )
          .forEach((data) => {
            data.classList.add("black");
          });
        document
          .querySelectorAll(".swiper-pagination-bullet")
          .forEach((data) => {
            data.classList.remove("white-border");
            data.classList.remove("white-bullet");
          });

        document
          .getElementsByClassName("discborder")[0]
          .classList.remove("white");
        document
          .getElementsByClassName("infoborder")[0]
          .classList.remove("white");
        document
          .getElementsByClassName("navborder")[0]
          .classList.remove("white");

        removeWhite();
      }
    } else {
      document.querySelectorAll(".swiper-pagination-bullet").forEach((data) => {
        data.classList.remove("white-border");
        data.classList.remove("white-bullet");
      });
    }
  };

  const handleChangeProduct = () => {
    document
      .querySelectorAll(
        ".slider_2 > div:nth-child(2) > div > div > .swiper-slide"
      )
      .forEach((data) => {
        if (!data.classList.contains("swiper-slide-active")) {
          data.style.top = "-40px";
          data.style.opacity = 0;
          data.style.transition = "all 1.3s";
        } else {
          data.style.top = "0px";
          data.style.opacity = 1;
          data.style.transition = "all 1.3s";
        }
      });
  };

  const handleClick = (data) => {
    document.querySelectorAll(".herb_product > div").forEach((data) => {
      data.classList.remove("active");
    });
    document
      .querySelectorAll(".product_button > div > div > button")
      .forEach((data) => {
        data.classList.remove("active");
      });
    if (data === "energy") {
      document
        .querySelectorAll(".product_button > div > div > button")[0]
        .classList.add("active");
      setTimeout(() => {
        document
          .querySelectorAll(".herb_product > div")[0]
          .classList.add("active");
      }, 500);
    } else if (data === "immunity") {
      document
        .querySelectorAll(".product_button > div > div > button")[1]
        .classList.add("active");
      setTimeout(() => {
        document
          .querySelectorAll(".herb_product > div")[1]
          .classList.add("active");
      }, 500);
    } else if (data === "detox") {
      document
        .querySelectorAll(".product_button > div > div > button")[2]
        .classList.add("active");
      setTimeout(() => {
        document
          .querySelectorAll(".herb_product > div")[2]
          .classList.add("active");
      }, 500);
    } else if (data === "digestion") {
      document
        .querySelectorAll(".product_button > div > div > button")[3]
        .classList.add("active");
      setTimeout(() => {
        document
          .querySelectorAll(".herb_product > div")[3]
          .classList.add("active");
      }, 500);
    }
  };

  const handleEnter = () => {
    document
      .querySelectorAll(".our_background > img")[0]
      .classList.add("active");
  };

  const handleLeave = () => {
    document
      .querySelectorAll(".our_background > img")[0]
      .classList.remove("active");
  };

  const onMouseDown = (e) => {
    setScrolliing(true);
    instagram.current.classList.add("disable");
    setLeft(instagram.current.scrollLeft);
    setTop(instagram.current.scrollTop);
    setClientX(e.pageX);
    setClientY(e.pageY);
  };

  const onMouseUp = () => {
    setScrolliing(false);
    instagram.current.classList.remove("disable");
  };

  const onMouseMove = (e) => {
    if (scrolling) {
      const dx = e.pageX - clientX;
      const dy = e.pageY - clientY;
      instagram.current.scrollLeft = left - dx;
    }
  };

  useEffect(() => {
    handleChangeImage();
    handleChangeProduct();
    window.addEventListener("scroll", handleChangeImage);
    return () => {
      window.removeEventListener("scroll", handleChangeImage);
    };
  }, []);

  return (
    <>
      <section id={styles.slider_1}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          onSlideChange={handleChangeImage}
          ref={slider_1}
        >
          {slideData.map((data, index) => (
            <SwiperSlide key={index}>
              <div ref={(element) => slider_top.current.push(element)}>
                <div
                  className={`${styles.imageSlider} imageSlider`}
                  key={index}
                >
                  <img src={data.image} alt="a" />
                </div>
                <div className={`${styles.btnSlider} btnSlider`}>
                  <div>
                    {data.title ? (
                      <span>Introducing Balance Madia Cold Ease</span>
                    ) : null}
                    <Link href={data.url}>
                      <a>{data.titleButton}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section id={styles.slider_2} className="slider_2">
        <div className={styles.slider_background}>
          <Swiper
            spaceBetween={100}
            speed={800}
            slidesPerView={1}
            onSlideChange={handleChangeProduct}
            ref={slider_product}
            controller={{ control: swiper }}
          >
            {slideData2.map((data, index) => (
              <SwiperSlide key={index}>
                <div className={styles.background}>
                  <div className={styles.slider_left}>
                    <div>
                      <span>{data.title}</span>
                      <Link href="/">
                        <a>{data.button}</a>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.slider_right}>
                    <img src={data.background} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.slider_product}>
          <Swiper onSwiper={setSwipe}>
            {slideData2.map((data, index) => (
              <SwiperSlide key={index}>
                <div className={styles.product} key={index}>
                  <img src={data.image} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Control slider={slider_product} />
      </section>
      <section id={styles.product}>
        <div className="product_button">
          <div>
            <div>
              <button
                className="active"
                onClick={() => handleClick("energy")}
              />
            </div>
            <div>
              <button onClick={() => handleClick("immunity")} />
            </div>
            <div>
              <button onClick={() => handleClick("detox")} />
            </div>
            <div>
              <button onClick={() => handleClick("digestion")} />
            </div>
          </div>
        </div>
        <div>
          <span>HERBS FOR</span>
          <div className="herb_product">
            <div className="active">
              <div>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/9/product.png" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/10/product.png" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/14/product.png" />
                  </a>
                </Link>
              </div>
              <div className="herb_product_title">
                <span>ENERGY & MOOD</span>
              </div>
            </div>
            <div>
              <div>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/10/product.png" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/7/product.png" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/11/product.png" />
                  </a>
                </Link>
              </div>
              <div className="herb_product_title">
                <span>IMMUNITY</span>
              </div>
            </div>
            <div>
              <div>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/6/product.png" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/13/product.png" />
                  </a>
                </Link>
              </div>
              <div className="herb_product_title">
                <span>DETOXIFICATION</span>
              </div>
            </div>
            <div>
              <div>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/6/product.png" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="https://herbana.id/files/product/9/product.png" />
                  </a>
                </Link>
              </div>
              <div className="herb_product_title">
                <span>DIGESTION</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.our_product}>
        <div className="our_title">
          <span>Our products are</span>
          <div
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
          >
            <div>
              <div>
                <span>Locally</span>
                <img
                  src="https://herbana.id/files/home/features/icon_1.svg?1537500106"
                  alt="logo"
                />
                <span>Sourced</span>
              </div>
            </div>
            <div>
              <div>
                <span>Expertly</span>
                <img
                  src="https://herbana.id/files/home/features/icon_2.svg?1537500133"
                  alt="logo"
                />
                <span>Researched</span>
              </div>
            </div>
            <div>
              <div>
                <span>Standardized</span>
                <img
                  src="https://herbana.id/files/home/features/icon_3.svg?1537500163"
                  alt="logo"
                />
                <span>Extraction</span>
              </div>
            </div>
            <div>
              <div>
                <span>BPOM</span>
                <img
                  src="https://herbana.id/files/home/features/icon_4.svg?1537500173"
                  alt="logo"
                />
                <span>Approved</span>
              </div>
            </div>
            <div>
              <div>
                <span>100%</span>
                <img
                  src="https://herbana.id/files/home/features/icon_5.svg?1537500185"
                  alt="logo"
                />
                <span>Natural</span>
              </div>
            </div>
            <div>
              <div>
                <span>Halal</span>
                <img
                  src="https://herbana.id/files/home/features/icon_1.svg?1537500106"
                  alt="logo"
                />
                <span>MUI</span>
              </div>
            </div>
          </div>
        </div>
        <div className="our_background">
          <img
            src="https://herbana.id/files/home/features/bg_1.jpg?1537500106"
            alt="background"
          />
        </div>
      </section>
      <section id={styles.detail_product}>
        <div>
          <div className={styles.detail_left}>
            <img
              src="https://herbana.id/files/home/features2/bg_9.jpg?1533825226"
              alt="background"
            />
          </div>
          <div className={styles.detail_right}>
            <div>
              <img
                src="https://herbana.id/files/home/features/icon_1.svg?1537500106"
                alt="logo"
              />
              <span>Locally Sourced</span>
              <p>
                All of Herbana products are sourced and processed in Indonesia.
                We work closely with local farmers, so we can monitor and
                control the quality and freshness of our herbs.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.detail_left}>
            <img
              src="https://herbana.id/files/home/features2/bg_2.jpg?1533825226"
              alt="background"
            />
          </div>
          <div className={styles.detail_right}>
            <div>
              <img
                src="https://herbana.id/files/home/features2/icon_2.svg?1533825226"
                alt="logo"
              />
              <span>Expertly Researched</span>
              <p>
                Our herbs and formulations are researched, perfected and
                developed by experts with years of experience. We integrate
                ancient wisdom with modern technology to bring you the best that
                nature has to offer.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.detail_left}>
            <img
              src="https://herbana.id/files/home/features2/bg_3.jpg?1533825226"
              alt="background"
            />
          </div>
          <div className={styles.detail_right}>
            <div>
              <img
                src="https://herbana.id/files/home/features2/icon_3.svg?1533825226"
                alt="logo"
              />
              <span>Standardized Extraction</span>
              <p>
                We process each of our herbs using advanced technology called
                the Quadra Extraction System. Our low temperature, closed
                extraction process ensures that our extracts are not only potent
                but remains hygienic and free of outside contaminants.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.journal}>
        <div>
          <span>Journal</span>
          <div>
            <div>
              <Link href="/">
                <a>
                  <div>
                    <img
                      src="https://herbana.id/files/post/202/thumbnail.jpg"
                      alt="s"
                    />
                  </div>
                  <div>
                    <span>
                      Why You Should Consume Ginger During Rainy Season
                    </span>
                    <div>
                      <span>HEALTH</span>
                      <span>15 January 2021</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>
                  <div>
                    <img
                      src="https://herbana.id/files/post/202/thumbnail.jpg"
                      alt="s"
                    />
                  </div>
                  <div>
                    <span>
                      Why You Should Consume Ginger During Rainy Season
                    </span>
                    <div>
                      <span>HEALTH</span>
                      <span>15 January 2021</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>
                  <div>
                    <img
                      src="https://herbana.id/files/post/202/thumbnail.jpg"
                      alt="s"
                    />
                  </div>
                  <div>
                    <span>
                      Why You Should Consume Ginger During Rainy Season
                    </span>
                    <div>
                      <span>HEALTH</span>
                      <span>15 January 2021</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>
                  <div>
                    <img
                      src="https://herbana.id/files/post/202/thumbnail.jpg"
                      alt="s"
                    />
                  </div>
                  <div>
                    <span>
                      Why You Should Consume Ginger During Rainy Season
                    </span>
                    <div>
                      <span>HEALTH</span>
                      <span>15 January 2021</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <Link href="/">
            <a>VIEW MORE</a>
          </Link>
        </div>
      </section>
      <section id={styles.testimony}>
        <div>
          <span>Testimony</span>
          <img
            src="/image/pattern/testimony_border.png"
            alt="testimony_border"
          />
          <div>
            <div className={styles.wrapper_testimony}>
              <Swiper
                speed={800}
                slidesPerView={"auto"}
                ref={slider_testimony}
                loop={true}
              >
                {slideTestimony.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.testi}>
                      <div>
                        <p>{data.testimony}</p>
                        <span>{data.customer}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Control slider={slider_testimony} />
          </div>
        </div>
      </section>
      <section id={styles.instagram}>
        <div>
          <Link href="https://www.instagram.com/herbana.id/">
            <a target="_blank">Instagram</a>
          </Link>
          <div
            id="insta"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            ref={instagram}
          >
            {slideInstagram.map((data, index) => (
              <div key={index}>
                <Link href={data.url}>
                  <a>
                    <img src={data.image} alt="s" />
                    <p>{data.description}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
