<template>
  <div>
    <div class="hero">
      <div class="header">
        <h1 class="headline">construction Of ModelBricks</h1>
        <h2 class="subheadline">A brief description</h2>
      </div>
    </div>
    <section class="panels">
      <div class="panel">
        <div>
          <img alt src="http://modelbricks.org/images/publications/CM_PM25628036_SBGN.PNG" />
        </div>
        <div>
          <h4>The Original Mode</h4>
          <p>
            The creation of ModelBricks begins with a full model. As an example, we can take this model of a Rho GTPase cycle, which was published by Ota et al. in 2015 (PMID: 25628036).
            <br />
            <br />In this publication, the authors are investigating possible positive regulation of Rho GTPase activity by RhoGDIs.
            <br />
            <b>Rho family GTPases:</b> Act as molecular switches, controlling processes including actin cytoskeletal organization, microtubule dynamics, and vesicle trafficking
            <br />
            <b>Guanine nucleotide exchange factors (GEFs):</b> Activate small G proteins by promoting the exchange of GDP for GTP
            <br />
            <b>GTPase activating proteins (GAPs):</b> Inactivate small G proteins by promoting GTP hydrolysis
            <br />
            <b>GDP-dissociation inhibitors (GDIs):</b> Negative role is to suppress overall Rho activity by inhibiting GEFs, while positive role is to sustain Rho activation by inhibiting GAPs.
          </p>
        </div>
      </div>

      <div class="panel">
        <div>
          <h4>Annotating the model</h4>
          <p>
            The model was then fully annotated to give the viewer a more thorough understanding of the model. Both textual and database annotations were added.
            <br />
            <br />Species were modified so that they were constructed of individual molecules. By completing this step, each species became much more comprehensive and the constituent parts were clearly displayed.
          </p>
        </div>
        <div>
          <img alt src="http://modelbricks.org/images/Vcellimages/CM_RhoGTP_VCellDiagram.PNG" />
        </div>
      </div>

      <div class="panel">
        <div>
          <img alt src="http://modelbricks.org/images/Vcellimages/CM_PM25628036_bricks1.png" />
        </div>
        <div>
          <h4>ModelBrick creation</h4>
          <p>The first ModelBrick derived from the full model describes the activation of GEF and the degradation of the activator. The remaining portion of the model is its own ModelBrick, but it was further broken into two additional ModelBricks as well.</p>
        </div>
      </div>

      <div class="panel">
        <div>
          <p>
            The two additional ModelBricks were created with one of them describing a much simpler Rho GTPase cycle and the other describing complex formation with GDIs and G proteins.
            <br />
            <br />All ModelBricks are independent entities that can be combined to construct full models that are fully annotated and computable.
          </p>
        </div>
        <div>
          <img alt src="http://modelbricks.org/images/Vcellimages/CM_PM25628036_bricks2.png" />
        </div>
      </div>
    </section>
  </div>
</template>


<script>
if (process.client) {
  require("../assets/js/construction");
}

export default {};
</script>

<style scoped>
:root {
  --transition: all 1s;
}

html {
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: lighter;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
}
.hero {
  width: 100%;
  height: 100vh;
  background-image: url(https://mocah.org/uploads/posts/5385206-wallpaper-desktop-wallpapers-desktop-background-desktop-backgrounds-wallpapers-amazing-wallpaper-building-tower-city-skyscraper-window-architecture-apartment-concrete-black-and-white-black-amp.jpg);
  background-position: center;
  background-size: contain;
}

.header {
  position: fixed;
  width: 100%;
  left: 50%;
  top: 50%;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: #fff;
  opacity: 1;
  transform: translate(-50%, -50%);

  transition: var(--transition);
}

.headline,
.subheadline {
  font-weight: lighter;
  transform: translateY(10%);
  opacity: 1;
  transition: var(--transition);
}
.headline {
  font-size: 4em;
  letter-spacing: 25px;
}
.subheadline {
  letter-spacing: 15px;
}

/* class added to header on first scroll */
.header-slide-in {
  transform: translate(0);
  opacity: 1;
}
.header-fade-out {
  opacity: 1;
}

.panels {
  width: 80%;
  margin: 10% auto;
  line-height: 1.5;
}

.panel {
  display: flex;
  margin: 2em 0;
  align-items: center;

  opacity: 1;
  transform: translateY(10%);

  transition: var(--transition);
}

.panel div {
  width: 50%;
  padding: 2em;
}

.panel img {
  width: 100%;
  box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.6);
}

.panel-fade-in {
  opacity: 1;
  transform: translate(0);
}
</style>