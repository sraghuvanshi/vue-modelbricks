<template>
  <div>
    <header id="home">
      <!-- <div class="header_text">
        <p>
          <a id="header_button" href="#intro">KNOW MORE</a>
        </p>
      </div>-->
    </header>

    <section id="intro">
      <h2>
        <b>ModelBricks</b>
      </h2>
      <p>Complex molecular networks often can be constructed from simpler modules that we call bricks. The adaptive behaviour of living cells is shown to be represented as a combination of functional motifs that reproduce different patterns of cell response to a signal – from simple linear and sigmoidal responses to more complex behaviours like toggle switches and oscillators. The topology of these modules can be captured in graphical form and represented as a wiring diagram in SBGN. However, to understand why these models work the way they do, one must develop a precise mathematical description of molecular circuitry and describe it in a different type of multiplex brick, that we call an executable brick or a model brick.</p>
    </section>

    <div class="section3">
      <div class="center">
        <img
          src="https://vcell.org/wp-content/uploads/2018/03/VCellFrontispieceKinematics-1.gif"
          alt
        />
      </div>
      <div class="center">
        <p>Multiplex bricks represent a rich source of information that could be leveraged to simplify model building and understanding by the community at-large. A computable ModelBrick is essentially a small model that is thoroughly annotated, and minted a DOI for a permanent reference. A computable ModelBrick is a small model derived from a Multiplex Brick. To enable reproducibility, it is thoroughly annotated, and minted a DOI for a permanent reference. Element annotations will include stable identifiers such as PubMedIDs for models and for individual component parameters, Gene Ontology, Systems Biology Ontology, Reactome and BioCyc as well as other public databases such as UniProt, and CheBi, etc. VCell BioModels will be interoperable with the SBML model composition standard. The project is a part of the Virtual Cell modeling and simulation framework (http://vcell.org) and led by Michael L Blinov and Ann E Cowan. VCell BioModels composed of ModelBricks will be interoperable with the (SBML Hierarchical Model Composition standard. Different modeling techniques can be used to link multiplex bricks to computable ModelBricks. A ModelBrick comprising a reaction network is a direct analogue of Multiplex Brick in SBGN-PD representation. Kinetic laws and numerical parameters need to be added to such brick in order to make it computable. Rule-based modeling enables identification of each species in a model as a composition of uniquely identifiable molecules, and accounts for internal species connectivity and posttranslational modifications.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*Stern bedeutet: gilt für alle Elemente*/
* {
  margin: 0;
}

body {
  color: white;
  /* background-color: #2b2b5f; */
  font-family: Arial, sans-serif;
  line-height: 2;
}

/* img {
  width: 100%;
} */
/* 
h1,
h2 {
  font-weight: normal;
} */

h1,
h2,
p {
  letter-spacing: 1px;
}

section {
  background-color: #247bb6;

  padding: 75px 30px;
  color: #ffffff;
  border-bottom-right-radius: 90px;
  border-top-left-radius: 90px;
}

section h2 {
  margin-bottom: 20px;
}

header {
  background-image: url("../assets/img/home.jpg");
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 100vh;
  position: relative;
  z-index: 1;
}

.header_text {
  /* text-align: center; */
  color: #3a3a9d;
  max-width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  /* margin: auto; */
  /* padding: 30px; */
}

.header_text p {
  margin-bottom: 50px;
  font-size: 0.8rem;
}

/* .header_text h1 {
  line-height: 1.5;
  font-weight: bolder;
  color: #000;
} */

#header_button {
  background-color: white;
  color: #3a3a9d;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8em;
  transition: padding 0.5s;
  border: 1px solid #3a3a9d;
  padding: 8px;
  /* position: fixed; */
}

#header_button:hover {
  color: white;
  padding: 5px;

  background-color: #3a3a9d;
}

#main_menu {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  padding: 0;
  width: 100%;
  background-color: #2b2b5f;
  display: flex;
  list-style-type: none;
}

.menu_link {
  color: white;
  display: block;
  padding: 10px;
  line-height: 10px;
  text-decoration: none;
  font-size: 0.65em;
}

#angebote h2 {
  color: #84c3ff;
}

.flex_list {
  padding: 0;
  list-style-type: none;
}

.flex_list li {
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #84c3ff;
  margin-bottom: 10px;
}

.flex_list li:hover {
  color: white;
  background-color: #84c3ff;
  border: 1px solid #84c3ff;
}

#gallerie {
  color: white;
}

#gallerie h2 {
  color: #ff8bc5;
}

footer {
  padding: 25px;
  text-align: center;
}

.box {
  position: relative;
}

.grid_container {
  margin-top: 20px;
}

@media screen and (min-width: 500px) {
  #main_menu {
    background: linear-gradient(
      to right,
      rgba(43, 43, 95, 1) 0%,
      rgba(43, 43, 95, 1) 50%,
      rgba(43, 43, 95, 0) 100%
    );
  }
}

@media screen and (min-width: 660px) {
  section {
    background-color: #247bb6;
    padding: 75px;
    /* border-top: 1px dashed #ff8bc5; */
  }

  .header_text h1 {
    font-size: 3em;
  }

  p {
    font-size: 1.25em;
  }

  #header_button {
    font-size: 1em;
  }

  .flex_container {
    display: flex;
  }

  .flex_item {
    margin-right: 10px;
  }

  .grid_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    line-height: 0;
  }

  .grid_item {
    grid-column: span 6;
  }
}

@media screen and (min-width: 900px) {
  .grid_item {
    grid-column: span 4;
  }
}

@media screen and (min-width: 1200px) {
  .grid_container {
    width: 80%;
    margin: 20px auto 0 auto;
  }
}

/* curved div  */
.col-xs-12 {
  padding: 0;
}

.corner {
  position: absolute;
  bottom: 100px;
  right: 0;
}
.corner img {
  height: 100px;
  width: auto;
}

.pull-up {
  margin-top: -100px;
  border-top-left-radius: 100px;
}

.blue,
.red {
  position: relative;
  width: 100%;
  height: 100vh;
  background: blue;
}

.red {
  background: white;
}

/* .section3 {
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.section3 img {
  /* border: 2px solid red; */
  width: 60%;
}

.section3 .center {
  display: flex;
  justify-content: center;
}

.section3 .center p {
  max-width: 80%;
}
</style>
