export const addWhite = () => {
  document.querySelectorAll(".btnSlider > div > span").forEach((data) => {
    data.classList.add("white");
  });
  document.querySelectorAll(".btnSlider > div > a").forEach((data) => {
    data.classList.add("white");
  });

  //Mobile
  document
    .querySelectorAll(".mobile_nav > div > div:nth-child(2) > button > span")
    .forEach((data) => {
      data.classList.add("white");
    });
  document
    .querySelectorAll(".mobile_nav > div > div:last-child > button")[0]
    .classList.add("white");

  //Info Border
  document
    .querySelectorAll(".infoborder > div > div:first-child > a")
    .forEach((data) => {
      data.classList.add("white");
    });
  document
    .querySelectorAll(".infoborder > div > div:nth-child(2) > a")[0]
    .classList.add("white");
  document
    .querySelectorAll(".infoborder > div > div:nth-child(3) > a")[0]
    .classList.add("white");
  document
    .querySelectorAll(".infoborder > div > div:nth-child(4) > a > span")[0]
    .classList.add("white");
  document
    .querySelectorAll(".infoborder > div > div:nth-child(4) > a > div")[0]
    .classList.add("white");

  //Nav Border
  document
    .querySelectorAll(".navborder > div > div:nth-child(3) > ul > li > a")
    .forEach((data) => {
      data.classList.add("white");
    });
  document.querySelectorAll("#logo_navigation > g > path").forEach((data) => {
    data.classList.add("white");
  });
  document.querySelectorAll("#arrow_link > g > g > path").forEach((data) => {
    data.classList.add("white");
  });
  document
    .querySelectorAll(".navborder > div > div:nth-child(2) > form > input")[0]
    .classList.add("white");
  document
    .querySelectorAll(".navborder > div > div:nth-child(2) > form > button")[0]
    .classList.add("white");
};

export const removeWhite = () => {
  document.querySelectorAll(".btnSlider > div > span").forEach((data) => {
    data.classList.remove("white");
  });
  document.querySelectorAll(".btnSlider > div > a").forEach((data) => {
    data.classList.remove("white");
  });

  //Mobile
  document
    .querySelectorAll(".mobile_nav > div > div:nth-child(2) > button > span")
    .forEach((data) => {
      data.classList.remove("white");
    });
  document
    .querySelectorAll(".mobile_nav > div > div:last-child > button")[0]
    .classList.remove("white");

  //Info Border
  document
    .querySelectorAll(".infoborder > div > div:first-child > a")
    .forEach((data) => {
      data.classList.remove("white");
    });
  document
    .querySelectorAll(".infoborder > div > div:nth-child(2) > a")[0]
    .classList.remove("white");
  document
    .querySelectorAll(".infoborder > div > div:nth-child(3) > a")[0]
    .classList.remove("white");
  document
    .querySelectorAll(".infoborder > div > div:nth-child(4) > a > span")[0]
    .classList.remove("white");
  document
    .querySelectorAll(".infoborder > div > div:nth-child(4) > a > div")[0]
    .classList.remove("white");

  //Nav Border
  document
    .querySelectorAll(".navborder > div > div:nth-child(3) > ul > li > a")
    .forEach((data) => {
      data.classList.remove("white");
    });
  document.querySelectorAll("#logo_navigation > g > path").forEach((data) => {
    data.classList.remove("white");
  });
  document.querySelectorAll("#arrow_link > g > g > path").forEach((data) => {
    data.classList.remove("white");
  });
  document
    .querySelectorAll(".navborder > div > div:nth-child(2) > form > input")[0]
    .classList.remove("white");
  document
    .querySelectorAll(".navborder > div > div:nth-child(2) > form > button")[0]
    .classList.remove("white");
};
