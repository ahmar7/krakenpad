import React from "react";
import "./custom.css";
import "./main.css";
import "./style.css";
import {
  Logo,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Banner,
} from "../../utils/allImg";
const Launchpad = () => {
  window.addEventListener("scroll", function () {
    let header = this.document.querySelector("#header");

    if (window.scrollY > 150) {
      header.classList.add("sticky-menu");
    } else {
      header.classList.remove("sticky-menu");
    }
  });
  return (
    <div>
      <>
        <div className="Toastify" />
        <section className="ant-layout public-layout">
          <div className="sc-bBrHrO dbXRIG">
            <div className="header-top">
              Always make sure the URL is krakenpad.io - bookmark it to be safe.
            </div>
            <div className="content">
              <div className="sidebar-menu ">
                <div className="logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="menu " id="header">
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a>
                        <img src={One} alt="Exchage" />
                        <p>Exchage</p>
                      </a>
                    </div>
                    <div className="sc-kgflAQ bDwgSc active">
                      <div className="menu-child">
                        <p>
                          <a
                            href="https://swap.krakenpad.io/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Swap
                          </a>
                        </p>
                        <p>
                          <a
                            href="https://swap.krakenpad.io/pool"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Liquidity
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a target="_blank" rel="noreferrer" className="active">
                        <img src={Two} alt="LaunchPad" />
                        <p>LaunchPad</p>
                      </a>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a
                        href="https://farm.krakenpad.io"
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <img src={Three} alt="Yield Farming" />
                        <p>Yield Farming</p>
                      </a>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a href="">
                        <img src={Four} alt="Staking" />
                        <p>Staking</p>{" "}
                        <span style={{ marginLeft: 10, fontSize: 9 }}>
                          Upcoming
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a href="">
                        <img src={Five} alt="Prediction" />
                        <p>Prediction</p>{" "}
                        <span style={{ marginLeft: 10, fontSize: 9 }}>
                          Upcoming
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a href="">
                        <img src={Six} alt="Lottery" />
                        <p>Lottery</p>{" "}
                        <span style={{ marginLeft: 10, fontSize: 9 }}>
                          Upcoming
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-toggle ">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="menu-toggle ">
                <span />
                <span />
                <span />
              </div>
              <div className="content-page">
                <div className="button-connect">
                  <button
                    type="button"
                    data-loading="false"
                    data-hover="false"
                    className="sc-hKMtZM liMtFV"
                  >
                    <div>
                      <div>CONNECT WALLET</div>
                    </div>
                  </button>
                </div>
                <div>
                  <div>
                    <div className="sc-ezWOiH gulgLz">
                      <div className="sc-bZkfAO hYqWJp">
                        <div className="banner-text">
                          <p>
                            LauncPad platform across all main blockchain
                            networks
                          </p>

                          <p>
                            Kraken Launchpad enables $KRP token holders to take
                            part in some of the most exclusive opportunities in
                            the crypto industry.
                          </p>
                        </div>
                        <div className="content-right">
                          <div className="wrap-image">
                            <img src={Banner} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="wrapper-menu-control-view">
                        <div className="menu-control-view">
                          <ul>
                            <li>
                              <button className="active">All (1)</button>
                            </li>
                            <li>
                              <button className="">On Going (0)</button>
                            </li>
                            <li>
                              <button className="">Upcoming (1)</button>
                            </li>
                            <li>
                              <button className="">Completed (0)</button>
                            </li>
                            <li>
                              <button className="">Participated (0)</button>
                            </li>
                            <li>
                              <button className="">BNB Chain</button>
                            </li>
                            <li>
                              <div
                                className="ant-select ant-select-single ant-select-show-arrow"
                                style={{ width: 145 }}
                              >
                                <div className="ant-select-selector">
                                  <span className="ant-select-selection-search">
                                    <input
                                      type="search"
                                      autoComplete="off"
                                      className="ant-select-selection-search-input"
                                      role="combobox"
                                      aria-haspopup="listbox"
                                      aria-owns="rc_select_0_list"
                                      aria-autocomplete="list"
                                      aria-controls="rc_select_0_list"
                                      aria-activedescendant="rc_select_0_list_0"
                                      readOnly=""
                                      unselectable="on"
                                      defaultValue=""
                                      style={{ opacity: 0 }}
                                      id="rc_select_0"
                                    />
                                  </span>
                                  <span className="ant-select-selection-item">
                                    <img
                                      src="https://launch.krakenpad.io/images/icons/1.png"
                                      alt=""
                                    />{" "}
                                    Ethereum
                                  </span>
                                </div>
                                <span
                                  className="ant-select-arrow"
                                  unselectable="on"
                                  aria-hidden="true"
                                  style={{ userSelect: "none" }}
                                >
                                  <span
                                    role="img"
                                    aria-label="down"
                                    className="anticon anticon-down ant-select-suffix"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      data-icon="down"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="content-launch-pad">
                        <div className="sc-cxabCf jxZjhP">
                          <div
                            className="ant-row"
                            style={{
                              marginLeft: "-16px",
                              marginRight: "-16px",
                              rowGap: 32,
                            }}
                          >
                            <div
                              className="ant-col ant-col-24 ant-col-lg-8"
                              style={{ paddingLeft: 16, paddingRight: 16 }}
                            >
                              <div className="sc-llJcti kIJdNj">
                                <div className="item-pool">
                                  <div className="header-info">
                                    <div className="logo">
                                      <img
                                        src="https://launch.krakenpad.io/images/main-deploy/logo.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="name">
                                      <p>ANNOUNCEMENT SOON</p>
                                      <p className="upcoming">Upcoming</p>
                                    </div>
                                  </div>
                                  <div className="item-body">
                                    <div>
                                      <p>Total Raise</p>
                                      <p className="total">---</p>
                                    </div>
                                    <div>
                                      <p>Sale Price</p>
                                      <p className="price">---</p>
                                    </div>
                                    <div>
                                      <p>Sale Start In</p>
                                      <p className="time">---</p>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        data-loading="false"
                                        data-hover="false"
                                        className="sc-hKMtZM liMtFV"
                                      >
                                        <div>View Pool</div>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wrapper-footer" style={{ marginTop: 60 }}>
                        <p>Kraken Launchpad V1.0.4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-ivTmOn edajDw" />
        </section>
      </>
    </div>
  );
};

export default Launchpad;
