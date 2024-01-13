import "./App.css";
import { Icon } from "@iconify/react";
import Footer from "./Components/Footer";
import Tags from "./Components/Tags";
import Section from "./Components/Section";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import { useEffect, useState } from "react";
import Filters from "./Components/Filters";

function App() {
  const linkArray = [
    {
      icon: "majesticons:search-line",
      link: "http://localhost:3000",
      name: "Search",
    },
    {
      icon: "bxs:offer",
      link: "http://localhost:3000",
      name: "Offers",
    },
    {
      icon: "solar:help-linear",
      link: "http://localhost:3000",
      name: "Help",
    },
    {
      icon: "akar-icons:person",
      link: "http://localhost:3000",
      name: "Sign In",
    },
    {
      icon: "streamline:shopping-cart-basket-2-shopping-basket",
      link: "http://localhost:3000",
      name: "Cart",
    },
  ];
  const [filteNav, setFilteNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var elementTarget = document.getElementById("filters");
      if (window.scrollY > elementTarget.offsetTop + elementTarget.offsetHeight) {
        setFilteNav(true);
      } 
      else{
        setFilteNav(false);
      }
    });
  }, [])
  
  return (
    <div className="App">
      <header className="App-header center">
          {filteNav ? (
            <div className="filter_nav center">
              <Filters nav/>
              <div className="search">
                <input type="text" className="search_input" placeholder="Search for restaurant and food"/>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.6)" fillColor="rgba(2, 6, 12, 0.6)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0998 8.84232C13.0998 11.7418 10.7493 14.0922 7.84989 14.0922C4.95046 14.0922 2.6 11.7418 2.6 8.84232C2.6 5.94289 4.95046 3.59243 7.84989 3.59243C10.7493 3.59243 13.0998 5.94289 13.0998 8.84232ZM12.1431 14.1802C10.9686 15.1261 9.47534 15.6922 7.84989 15.6922C4.0668 15.6922 1 12.6254 1 8.84232C1 5.05923 4.0668 1.99243 7.84989 1.99243C11.633 1.99243 14.6998 5.05923 14.6998 8.84232C14.6998 10.4974 14.1128 12.0153 13.1357 13.1993L18.319 17.9606C18.7226 18.3313 18.7359 18.9637 18.3483 19.3511C17.9634 19.7357 17.3365 19.7254 16.9645 19.3282L12.1431 14.1802Z" fill="rgba(2, 6, 12, 0.6)" fill-opacity="0.92"></path></svg>
              </div>
            </div>
          ) : (
            <nav className="center">
              <div className="center main_head">
                <a href="http://localhost:3000">
                  <svg
                    class="_8pSp-"
                    viewBox="0 0 559 825"
                    height="49"
                    width="34"
                    fill="#fc8019"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                      fill="url(#paint0_linear_19447_66107)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_19447_66107"
                        x1="445.629"
                        y1="63.8626"
                        x2="160.773"
                        y2="537.598"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF993A"></stop>
                        <stop offset="1" stop-color="#F15700"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <div className="center">
                  <h3>Chandni chauk</h3>
                  <p>
                    {"Lal Qila, Chandni Chowk, Delhi, 110006, India".slice(
                      0,
                      26
                    )}
                    {"..."}
                  </p>
                  <Icon
                    icon="iconamoon:arrow-down-2-light"
                    fontSize={24}
                    color="var(--hover-color)"
                  />
                </div>
              </div>
              <div className="links center">
                {linkArray.map((item, index) => (
                  <a
                    href={item.link}
                    key={`link-${item.name}-${index}`}
                    className="center"
                  >
                    <span className="center" style={{ position: "relative" }}>
                      <Icon icon={item.icon} fontSize={20} fontWeight={700} />
                      {index === 4 && <span className="sub">0</span>}
                    </span>
                    <p>{item.name}</p>
                    {index === 1 && <span className="sup">NEW</span>}
                  </a>
                ))}
              </div>
            </nav>
          )}
      </header>
      <div style={{ height: "80px", visibility: "hidden" }} />

      {/* <div style={{width:'100%',height:'64px'}}/> */}
      <Section />
      <Section2 />
      <Section3 />
      <div style={{ width: "100%", height: "64px" }} />
      <Tags
        header={"Best Places to Eat Across Cities"}
        array={[
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kota",
          "Best Restaurants in Kotaa",
        ]}
      />
      <div style={{ width: "100%", height: "64px" }} />
      <Tags
        header={"Best Cuisines Near Me"}
        array={[
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
          "Thai Restaurant Near Me",
        ]}
      />
      <div style={{ width: "100%", height: "64px" }} />
      <Tags
        header={"Explore Every Restaurants Near Me"}
        array={["Explore Restaurants Near Me", "Explore Restaurants Near Me"]}
      />
      <div style={{ width: "100%", height: "64px" }} />
      <Footer />
    </div>
  );
}

export default App;
