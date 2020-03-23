<template>
  <div>
    <div class="container">
      <div class="row" id="block1">
        <div class="col-md-5 col-lg-6 animated" id="block1__photo">
          <img src="../assets/img/team.jpg" alt="Django Reinhardt - William P. Gottlieb" />
        </div>
        <!-- /.col-md-5 col-lg-6 #block1__photo -->

        <div class="col-md-7 col-lg-6 animated" id="block1__elements">
          <div class="row" style="display:none;">
            <div class="col-md-12 text-right">
              <i class="fa fa-volume-up" aria-hidden="true" id="sound-icon"></i>
            </div>
            <!-- /.col-md-12 text-right -->
          </div>
          <!-- /.row -->

          <div class="row" id="block1__elements__text">
            <div class="col-lg-3 col-xl-2"></div>
            <!-- /.col-lg-3 col-xl-2 -->

            <div class="col-lg-9 col-xl-10">
              <h1>
                Team
                <br />Model Bricks
              </h1>
              <h2>
                The
                <span class="mark-block">most astonishing</span> opensource&nbsp;team ever.
              </h2>
              <p>Welcome to the ModelBricks project, an effort focused on describing recurring patterns in biological networks that correspond to such biological concepts as metabolic reaction, catalysis, inhibition, protein phosphorylation, complex formation, transcription, translation etc.</p>
            </div>
            <!-- /.col-lg-9 col-xl-10 -->
          </div>
          <!-- /.row #block1__elements__text -->
        </div>
        <!-- /.col-md-7 col-lg-6 #block1__elements -->
      </div>
      <!-- /row #block1 -->

      <div class="row" id="block2">
        <div class="push-lg-8 col-md-5 col-lg-4 animated" id="block2__photo">
          <img
            src="https://health.uconn.edu/blinov-lab/wp-content/uploads/sites/183/2017/11/Blinov.jpg"
            alt="Django Reinhardt"
          />
        </div>
        <!-- /.push-lg-8 col-md-5 col-lg-4 text-center #block2__photo -->

        <div class="pull-lg-4 col-md-7 col-lg-8 animated" id="block2__text">
          <h2>Michael Blinov</h2>

          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1220116/line-green.png"
            alt="Graphic separator"
            id="block2__text__line"
          />
          <p>
            <em>UConn School of Medicine, Farmington, USA</em>
            <br />Welcome to the ModelBricks project, an effort focused on describing recurring patterns in biological networks that correspond to such biological concepts as metabolic reaction, catalysis, inhibition, protein phosphorylation, complex formation, transcription, translation etc.
          </p>
        </div>
        <!-- /.pull-lg-4 col-md-7 col-lg-8 #block2__text -->
      </div>
      <!-- /row #block2 -->

      <div class="row" id="block3">
        <div class="col-md-5 col-lg-4 text-center animated" id="block3__photo">
          <img src="http://modelbricks.org/images/team/ann.png" />
        </div>
        <!-- /.col-md-5 col-lg-4 text-center #block3__photo -->

        <div class="col-md-7 col-xl-8 animated" id="block3__text">
          <h2>Ann Cowan</h2>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1220116/line-blue.png"
            id="block3__text__line"
            alt="Graphic separator"
          />
          <p>
            <em>UConn School of Medicine, Farmington, USA</em>
            <br />Welcome to the ModelBricks project, an effort focused on describing recurring patterns in biological networks that correspond to such biological concepts as metabolic reaction, catalysis, inhibition, protein phosphorylation, complex formation, transcription, translation etc.
          </p>

          <p>The library of ModelBricks to rapidly grow from community contributions. DOI registration can provide persistent citable references. This will incentivize model creators to contribute components of their models back as new ModelBricks, and users to add back to the library modified or extended ModelBricks.</p>
        </div>
        <!-- /.col-md-7 col-xl-8 #block3__text -->
      </div>

      <div id="block3">
        <div class="col-md-7 col-xl-8 animated" id="block3__text">
          <h2>Contributors</h2>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1220116/line-blue.png"
            id="block3__text__line"
            alt="Graphic separator"
          />
        </div>
        <div class="contributors">
          <div class="col-md-5 col-lg-4 animated" id="block3__photo">
            <img class="contributor" src="http://modelbricks.org/images/team/MariaHeredia.jpg" />
            <h4>Maria del Carmen Heredia</h4>
            <p>UConn, Storrs, USA</p>
          </div>

          <div class="push-lg-8 col-md-5 col-lg-4 animated" id="block2__photo">
            <img class="contributor" src="http://modelbricks.org/images/team/JackAlbanese.png" />
            <h4>John Albanese</h4>
            <p>
              Trinity College,
              Hartford, USA
            </p>
          </div>
        </div>

        <!-- /.col-md-5 col-lg-4 text-center #block3__photo -->

        <!-- /.col-md-7 col-xl-8 #block3__text -->
      </div>
      <!-- /row #block3 -->

      <div class="row animated" id="button-more">
        <div class="text-center" id="button-more__block">
          <a
            class="btn btn-lg"
            role="button"
            href="https://en.wikipedia.org/wiki/Django_Reinhardt"
            title="Read more about Django"
            rel="external nofollow"
            target="_blank"
          >know more about us</a>
        </div>
      </div>
      <!-- /.row animated #button-more -->
    </div>
    <!-- /.container -->
  </div>
</template>


<style scoped>
/*------------------------------------*\
    $INDEX - Search with $ sign
\*------------------------------------*/
/**
 * VARIABLES......................
 * BASIC PROPERTIES...............
 * ANIMATION PROPERTIES...........
 * BLOCKS PROPERTIES..............
 * BLOCK2 - BLOCK3................
 * BUTTON.........................
 * STICKY FOOTER..................
 * RESPONSIVE.....................
 */
/*------------------------------------*\
    $VARIABLES
\*------------------------------------*/
/* Dark blue */
/* Light green */
/*------------------------------------*\
    $BASIC PROPERTIES
\*------------------------------------*/
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

html,
body,
.container {
  /* height: 100%; */
  font-family: "Heebo", Arial, sans-serif;
  font-weight: 400;
}

body {
  background: #ffffff
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1220116/background-border.jpg");
  font-size: 18px;
  margin-top: 60px;
}

h1 {
  font-weight: 700;
  margin-bottom: 0;
}

h2 {
  font-weight: 500;
  font-size: 1.6em;
  margin: 0.7em 0;
}

.container {
  margin-top: 60px;
}

.mark-block {
  position: relative;
}

.mark-block::before {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 10px;
  width: 100%;
  height: 50%;
  background: #80dd81;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}

.active::before {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}

/* Mark animation inspired by https://tympanus.net/Development/MenuHoverEffects */
::-moz-selection {
  background: #1f216b;
  color: #ffffff;
}
::selection {
  background: #1f216b;
  color: #ffffff;
}

::-moz-selection {
  background: #1f216b;
  color: #ffffff;
}

/*------------------------------------*\
    $ANIMATION PROPERTIES
\*------------------------------------*/
#block1__photo {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

#block2__text,
#block3__photo {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

#block1__elements {
  -webkit-animation-duration: 1.5;
  animation-duration: 1.5;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

#block2__photo,
#block3__text {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

#button-more {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

/*------------------------------------*\
    $BLOCKS PROPERTIES
\*------------------------------------*/
#block1 {
  margin-bottom: 2.3em;
}

#block2,
#block3 {
  margin-bottom: 5em;
}

#block1 img,
#block2 img,
#block3 img {
  max-width: 100%;
}

/*------------------------------------*\
    $BLOCK1
\*------------------------------------*/
#block1__photo {
  z-index: 5;
}

#block1__elements {
  background-color: #ededed;
  z-index: 0;
  position: relative;
  top: -60px;
  margin-top: 100px;
}

#block1__elements__text {
  padding-top: 80px;
}

/*------------------------------------*\
    $BLOCK2 - $BLOCK3
\*------------------------------------*/
#block2__photo,
#block3__photo {
  /* text-align: center; */
  margin-bottom: 1.5em;
}

#block3__photo {
  margin-bottom: 0;
}

#block2__photo img,
#block3__photo img {
  max-width: 100%;
  box-shadow: 15px 15px #1f216b;
  margin-left: 150px;
}

#block3__photo img {
  box-shadow: -15px -15px #80dd81;
}

#block2__photo img.contributor,
#block3__photo img.contributor {
  margin-top: 50px;
  width: 200px;
  margin-left: 0;
  box-shadow: -15px -15px #1f216b;
}

.contributors {
  display: flex;
  justify-content: center;
}

/* #block2__photo img.mb {
  margin-left: 45px;
} */

#block2__text__line,
#block3__text__line {
  margin-bottom: 1.4em;
}

/*------------------------------------*\
    $BUTTON
\*------------------------------------*/
#button-more {
  margin: 0;
}

#button-more__block {
  /* height: 220px; */
  margin: 0 auto;
}

#button-more a.btn {
  color: #000000;
  background-color: rgba(255, 255, 255, 0);
  border: 3px solid #000000;
  border-radius: 0;
  font-size: 1.1em;
}

#button-more a.btn:hover {
  box-shadow: 10px 10px #1f216b;
}

/*------------------------------------*\
    $STICKY FOOTER
\*------------------------------------*/
#footer-by {
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  font-weight: 400;
  height: 60px;
  line-height: 60px;
  background-color: #edecec;
}

#footer-by .source {
  text-align: center;
}

#footer-by p {
  font-size: 0.78em;
  line-height: 4.3em;
}

#footer-by__footer__social {
  display: none;
}

#footer-by__footer__social i {
  font-size: 22px;
  margin: 0 0.1em;
  line-height: 2.8em;
}

#footer-by__footer__social a {
  color: #000000;
}

#footer-by__footer__social a:hover {
  color: #1f216b;
}

a.footer-by__footer__link {
  color: #000000;
  text-decoration: underline;
}

a.footer-by__footer__link:hover {
  color: #1f216b;
}

/*------------------------------------*\
    $RESPONSIVE
\*------------------------------------*/
@media (min-width: 576px) {
  h1 {
    font-size: 2.8em;
  }

  h2 {
    font-size: 1.7em;
  }

  #footer-by__footer__social {
    display: block;
  }

  #footer-by p {
    font-size: 0.78em;
    line-height: 4.3em;
  }

  #button-more a.btn {
    font-size: 1.3em;
  }
}
@media (min-width: 768px) {
  h1 {
    font-size: 3em;
  }

  #block1 {
    height: 500px;
    margin-bottom: 5em;
  }

  #block1__elements {
    top: 0;
  }

  #block1__elements__text {
    padding: 20px 20px 0 20px;
  }

  #block3__photo img {
    max-width: 85%;
  }

  #footer-by p {
    font-size: 0.9em;
    line-height: 4em;
  }
}
@media (min-width: 992px) {
  h1 {
    font-size: 3.2em;
  }

  h2 {
    font-size: 2em;
  }

  #block1 {
    height: 640px;
  }

  #block1__elements {
    max-width: 630px;
    height: 580px;
    position: absolute;
    right: 0;
    top: 60px;
    margin-bottom: 0;
  }

  #block1__elements__text {
    padding-top: 40px;
  }

  #block2__text,
  #block3__text {
    padding-left: 50px;
  }

  #block2__text__line {
    position: absolute;
    top: 40px;
    right: 0;
  }

  #block2__photo img {
    box-shadow: 20px 15px #1f216b;
  }

  #block3__text__line {
    position: absolute;
    top: 40px;
    left: -40px;
  }

  #block3__photo img {
    max-width: 65%;
    box-shadow: -20px -15px #80dd81;
  }

  #button-more a.btn {
    font-size: 1.7em;
  }
}
@media (min-width: 1200px) {
  h1 {
    font-size: 4.4em;
  }

  h2 {
    font-size: 2.4em;
  }

  #block1 {
    height: 750px;
  }

  #block1__elements {
    max-width: 720px;
    height: 690px;
  }

  #block1__elements__text .col-xl-10 {
    padding-left: 50px;
  }

  #block2__text__line {
    top: 52px;
    right: 50px;
  }

  #block3__text__line {
    top: 50px;
    left: -12px;
  }

  #block2__photo {
    text-align: left;
  }

  #block2__photo img,
  #block3__photo img {
    max-width: 100%;
    box-shadow: -30px -20px #80dd81;
  }

  #block2__photo img {
    max-width: 87%;
    box-shadow: 30px 20px #1f216b;
  }

  #block2__text,
  #block3__text {
    padding-right: 50px;
    padding-left: 80px;
  }
}
</style>