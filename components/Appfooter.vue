<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="widget1">
              <div class="logo">
                <h2>Model Bricks</h2>
              </div>
              <p>Welcome to the ModelBricks project, an effort focused on describing recurring patterns in biological networks that correspond to such biological concepts as metabolic reaction, catalysis, inhibition, protein phosphorylation, complex formation, transcription, translation etc.</p>
              <div class="socialLinks">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="widget2">
              <h5>Latest News</h5>
              <div class="media">
                <img class="img-fluid" src="../assets/img/e1.jpg" alt />
                <div class="media-body d-flex align-self-center">
                  <div class="content">
                    <a href="#">
                      <p>Vcell News and Events</p>
                    </a>
                    <span>Mar 23, 2020</span>
                  </div>
                </div>
              </div>
              <div class="media">
                <img class="img-fluid" src="../assets/img/e2.jpg" alt />
                <div class="media-body d-flex align-self-center">
                  <div class="content">
                    <a href="#">
                      <p>Vcell News and Events</p>
                    </a>
                    <span>Mar 23, 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-2">
            <div class="widget3">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Motivation</a>
                </li>
                <li>
                  <a href="#">Construction</a>
                </li>
                <li>
                  <a href="#">List</a>
                </li>
                <li>
                  <a href="#">EGFR</a>
                </li>
                <li>
                  <a href="#">Tools</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-2">
            <div class="widget4">
              <h5>Other Links</h5>
              <ul>
                <li>
                  <a href="#">Virtual Cell</a>
                </li>
                <li>
                  <a href="#">Model Bricks</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Uconn Health</a>
                </li>
                <li>
                  <a href="#">Contribute</a>
                </li>
                <li>
                  <a href="#">Donate</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyRightArea">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <p>&copy; Copyright Model Bricks 2020.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}

a,
a:active,
a:focus {
  color: #333;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
section {
  padding: 60px 0;
  min-height: 100vh;
}
.footer {
  padding: 100px 0px 0px;
  background-color: #edecec;
  margin-top: 100px;
}

.footer .widget1 p {
  font-size: 16px;
  /* color: rgba(255, 255, 255, 0.6); */
  margin-top: 26px;
  width: 89%;
}

.footer .socialLinks {
  margin-top: 28px;
}

.socialLinks ul li {
  display: inline-block;
}

.socialLinks ul li a i {
  display: block;
  margin: 0 2px;
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 50%;
  text-align: center;
  margin-right: 5px;
  line-height: 40px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.socialLinks ul li a .fa-facebook-f {
  color: #4267b2;
}

.socialLinks ul li a .fa-twitter {
  color: #1da1f2;
}

.socialLinks ul li a .fa-google-plus-g {
  color: #dd5044;
}

.socialLinks ul li a .fa-linkedin-in {
  color: #0177b5;
}

.socialLinks ul li a:hover i {
  color: #333;
}

.socialLinks ul li a:hover .fa-facebook-f {
  background: #4267b2;
}

.socialLinks ul li a:hover .fa-twitter {
  background: #1da1f2;
}

.socialLinks ul li a:hover .fa-google-plus-g {
  background: #dd5044;
}

.socialLinks ul li a:hover .fa-linkedin-in {
  background: #0177b5;
}
footer .logo {
  max-width: 200px;
  /* color: #222d36; */
  /* font-weight: bolder; */
}

.footer h5 {
  font-weight: 500;
  margin-bottom: 28px;
  text-transform: capitalize;
  font-weight: 600;
  color: #222d36;
  font-size: 21px;
}

.footer .widget2 .media img {
  margin-right: 20px;
  max-width: 100px;
}
.footer .widget2 .media p {
  font-size: 16px;
  /* color: rgba(255, 255, 255, 0.8); */
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  line-height: 26px;
}

.footer .widget2 .media span {
  font-size: 12px;
  /* color: #ffb606; */
  color: #247bb6;

  text-transform: uppercase;
  margin-top: 15px;
  display: block;
}

.footer .widget2 .media {
  margin-bottom: 20px;
}

.footer .widget3 ul li a,
.footer .widget4 ul li a {
  font-size: 16px;
  /* color: rgba(255, 255, 255, 0.6); */
  text-transform: capitalize;
  margin-bottom: 13px;
  display: block;
}

.footer .widget3 ul li a:hover,
.footer .widget4 ul li a:hover,
.footer .widget2 a:hover p {
  color: #247bb6;
}

.footer .widget3 h5 {
  margin-bottom: 22px;
  font-weight: 600;
  color: #222d36;
  font-size: 21px;
  line-height: 32px;
}

.footer .widget4 h5 {
  margin-bottom: 22px;
  font-weight: 600;
  color: #222d36;
  font-size: 21px;
}

.copyRightArea {
  margin-top: 33px;
  border-top: 1px solid #666;
  padding: 15px 0px 0px;
}

.copyRightArea p {
  /* color: rgba(255, 255, 255, 0.6); */
  /* color: white; */
  color: #222d36;
}
</style>