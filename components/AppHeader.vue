<template>
  <nav class="navbar navbar-expand-lg navbar-mainbg">
    <a class="navbar-brand navbar-logo" href="/">
      <b>Model Bricks</b>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >--------</button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <div class="hori-selector">
          <div class="left"></div>
          <div class="right"></div>
        </div>

        <li class="nav-item active">
          <nuxt-link class="nlink" to="/">
            <a class="nav-link" href="/">
              <i class="fas fa-tachometer-alt"></i>Home
            </a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nlink" to="/motivation">
            <a class="nav-link" href="/motivation">
              <i class="far fa-address-book"></i>Motivation
            </a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nlink" to="/construction">
            <a class="nav-link" href="/construction">
              <i class="far fa-clone"></i>Construction
            </a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nlink" to="/modelBricksList">
            <a class="nav-link" href="/modelBricksList">
              <i class="far fa-calendar-alt"></i>List
            </a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nlink" to="/egfrList">
            <a class="nav-link" href="/egfrList">
              <i class="far fa-chart-bar"></i>EGFR
            </a>
          </nuxt-link>
        </li>
        <!-- <li class="nav-item">
          <nuxt-link class="nlink" to="/tools">
            <a class="nav-link" href="/tools">
              <i class="far fa-copy"></i>tools
            </a>
          </nuxt-link>
        </li>-->
        <li class="nav-item">
          <nuxt-link class="nlink" to="/about">
            <a class="nav-link" href="/about">
              <i class="far fa-copy"></i>About
            </a>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
if (process.client) {
  require("../assets/js/navbar");
}

export default {
  name: "AppHeader",
  head: {
    script: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }
    ]
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");

body {
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
i {
  margin-right: 10px;
}
.nlink:hover {
  text-decoration: none;
}
/*----------multi-level-accordian-menu------------*/
.navbar-logo {
  padding: 15px;
  color: #fff;
}
.navbar-mainbg {
  background-color: #237bb6;
  padding: 0px;
}
#navbarSupportedContent {
  overflow: hidden;
  position: relative;
}
#navbarSupportedContent ul {
  padding: 0px;
  margin: 0px;
}
#navbarSupportedContent ul li .nlink a i {
  margin-right: 10px;
}
#navbarSupportedContent li {
  list-style-type: none;
  float: left;
}
#navbarSupportedContent ul li .nlink a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 15px;
  display: block;
  padding: 20px 20px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}
#navbarSupportedContent > ul > li.active > .nlink > a {
  color: #237bb6;
  background-color: transparent;
  transition: all 0.7s;
}
#navbarSupportedContent .nlink a:not(:only-child):after {
  content: "\f105";
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 14px;
  font-family: "Font Awesome 5 Free";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  transition: 0.5s;
}
#navbarSupportedContent .active > .nlink > a:not(:only-child):after {
  transform: rotate(90deg);
}
.hori-selector {
  display: inline-block;
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 10px;
}
.hori-selector .right,
.hori-selector .left {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #fff;
  bottom: 10px;
}
.hori-selector .right {
  right: -25px;
}
.hori-selector .left {
  left: -25px;
}
.hori-selector .right:before,
.hori-selector .left:before {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #237bb6;
}
.hori-selector .right:before {
  bottom: 0;
  right: -25px;
}
.hori-selector .left:before {
  bottom: 0;
  left: -25px;
}

@media (max-width: 991px) {
  #navbarSupportedContent ul li .nlink a {
    padding: 12px 30px;
  }
  .hori-selector {
    margin-top: 0px;
    margin-left: 10px;
    border-radius: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .hori-selector .left,
  .hori-selector .right {
    right: 10px;
  }
  .hori-selector .left {
    top: -25px;
    left: auto;
  }
  .hori-selector .right {
    bottom: -25px;
  }
  .hori-selector .left:before {
    left: -25px;
    top: -25px;
  }
  .hori-selector .right:before {
    bottom: -25px;
    left: -25px;
  }
}
</style>