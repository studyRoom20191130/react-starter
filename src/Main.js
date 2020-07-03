import React from "react";
import ReactDOM from "react-dom";

import { formatAmount } from "./utils.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBolt } from "@fortawesome/free-solid-svg-icons";

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      member: [
        { name: "风行" },
        { name: "秋天" },
        { name: "肥皂" },
        { name: "allen" },
        { name: "面" },
      ],
    };
  }

  render() {
    return (
      <>
        <nav className="navbar is-white topNav">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="../">
                <img src="../images/logo.jpg" width="50" height="50" />
              </a>
              <div className="navbar-burger burger" data-target="topNav">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="topNav" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="cover.html">
                  自习室
                </a>
                <a className="navbar-item" href="landing.html">
                  地底竞技场
                </a>
                <a className="navbar-item" href="blog.html">
                  文章分享
                </a>
                <a className="navbar-item" href="instaAlbum.html">
                  相册
                </a>
                <a className="navbar-item" href="kanban[search].html">
                  看板
                </a>
                <a className="navbar-item" href="search.html">
                  搜索
                </a>
                {/*<a className="navbar-item" href="tabs.html">Tabs</a>*/}
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <a className="button is-small">
                        <span className="icon">
                          <i className="fa fa-user-plus"></i>
                        </span>
                        <span>注册</span>
                      </a>
                    </p>
                    <p className="control">
                      <a className="button is-small is-info is-outlined">
                        <span className="icon">
                          <i className="fa fa-user"></i>
                        </span>
                        <span>登录</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar is-white">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item is-active" href="#">
                  热门
                </a>
                <a className="navbar-item" href="#">
                  最新
                </a>
                <a className="navbar-item" href="#">
                  好评
                </a>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <input
                    className="input"
                    type="search"
                    placeholder="搜索..."
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="container">
          <div className="columns">
            <div className="column is-3">
              <a
                className="button is-primary is-block is-alt is-large"
                href="#"
              >
                发篇文章
              </a>
              <aside className="menu">
                <p className="menu-label">Tags</p>
                <ul className="menu-list">
                  <li>
                    <span className="tag is-primary is-medium ">膜就完事</span>
                  </li>
                  <li>
                    <span className="tag is-link is-medium ">在摸鱼</span>
                  </li>
                  <li>
                    <span className="tag is-light is-danger is-medium ">
                      今天水群了吗
                    </span>
                  </li>
                  <li>
                    <span className="tag is-dark is-medium ">人生相谈</span>
                  </li>
                  <li>
                    <span className="tag is-success is-medium ">买</span>
                  </li>
                  <li>
                    <span className="tag is-warning is-medium ">摸</span>
                  </li>
                  <li>
                    <span className="tag is-medium ">问题</span>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="column is-9">
              <div className="box content">
                {this.state.member.map((c) => (
                  <article className="post">
                    <h4>什么时候才能像josh那么强?</h4>
                    <div className="media">
                      <div className="media-left">
                        <p className="image is-32x32">
                          <img src="http://bulma.io/images/placeholders/128x128.png" />
                        </p>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <a href="#">@{c.name}</a> replied 34 minutes ago
                            &nbsp;
                            <span className="tag">人生相谈</span>
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <span className="has-text-grey-light">
                          <i className="fa fa-comments"></i> 1
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      {/*  <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <div className="columns is-mobile is-centered">
                <div className="field is-grouped is-grouped-multiline">
                  <div className="control">
                    <div className="tags has-addons">

                    </div>
                  </div>
                  <div className="control">
                    <div className="tags has-addons">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>*/}
      </>
    );
  }
}
