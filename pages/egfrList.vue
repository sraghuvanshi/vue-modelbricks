<template>
  <div>
    <div class="heading">
      <h2>EGFR Rule-based ModelBricks</h2>
    </div>

    <table class="container">
      <thead>
        <tr>
          <th>
            <h1>Publication</h1>
          </th>
          <th>
            <h1>PMID</h1>
          </th>

          <th>
            <h1>ModelBricks</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Binding & Phosphorylation of EGFR</td>
          <td>
            <a href="#">25863072</a>
          </td>
          <td>
            <ul>
              <li>
                <a href="#">Interactions related to Y998 tyrosine residue</a>
              </li>
              <li>
                <a href="#">Interactions related to Y1016 tyrosine residue</a>
              </li>
              <li>
                <a href="#">Interactions related to Y1092 tyrosine residue</a>
              </li>
              <li>
                <a href="#">Interactions related to Y1110 tyrosine residue</a>
              </li>
              <li>
                <a href="#">Interactions related to Y1172 tyrosine residue</a>
              </li>
              <li>
                <a href="#">Interactions related to Y1197 tyrosine residue</a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="section2">
      <h3>Contributors</h3>
      <p>
        <a href="#">Bushrah Khan</a>,
        <a href="#">Riley Steinberg</a>,
        <a href="#">Michael Blinov</a>
      </p>
    </div>
  </div>
</template>


<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color: #a7a1ae;
  background-color: #1f2739;
}

h2 {
  /* font-size: 1em; */
  font-weight: 300;
  text-align: center;
  display: block;
  line-height: 1em;
  margin: 2em;
  /* color: #fb667a; */
}

table {
  border-radius: 15px;
  -webkit-box-shadow: 0px 4px 13px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 13px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 13px -2px rgba(0, 0, 0, 0.75);
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #ffffff;
  text-align: center;
}

.container td {
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
  margin: 10px;
}

.container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td,
.container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
  border: 0.25px solid #ffffff;
}

td a {
  /* text-decoration: none; */
  color: #ffffff;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
  /* background-color: #323c50; */
  background-color: #404f6d;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
  background-color: #343f57;
}

.container th {
  /* background-color: #5161ce; */
  background-color: #1f2739;
  /* background-color: #ffffff; */
}
.container td {
  color: #ffffff;
}
.container td:first-child {
  color: #fb667a;
  font-weight: bold;
  width: 34%;
}

.container tr:hover {
  background-color: #464a52;
  -webkit-box-shadow: 0 6px 6px -6px #0e1119;
  -moz-box-shadow: 0 6px 6px -6px #0e1119;
  box-shadow: 0 6px 6px -6px #0e1119;
}

.container td:hover {
  background-color: #ffffff;
  color: #403e10;
  font-weight: bold;
  box-shadow: #999 -1px 1px, #999 -2px 2px, #999 -3px 3px, #999 -4px 4px,
    #999 -5px 5px, #999 -6px 6px;
  transform: translate3d(6px, -6px, 0);

  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: line;
}

.container td:hover a {
  color: #403e10;
}

.container td:hover a:hover {
  color: #272507;
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}

.section2 {
  margin: 45px;
  margin-left: 130px;
}

.section2 h3 {
  font-size: 2rem;
}

.section2 a {
  text-decoration: none;
}
</style>

