/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let domainName = '<h1 class="text-center" style="margin-top: 30px;">Dominios</h1>' +
    '<div class="container text-center mt-5"> <div class="col-md-12 ms-12">' +
    '<ul class="list-group list-group-flush">'
  '<footer class="mt-auto">' + '<p>This proyect is made by Michael.</p>';
  let pronoun = ["the", "our"];
  let adj = ["great", "lil", "big", "powerful"];
  let noun = ["magician", "hero", "warrior"];
  let domain = [".com", ".net", ".es"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName += `<li class="list-group-item list-group-item-info">${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}</li>`;
        }
      }
    }
  }
  domainName += "</ul>" + "</div>" + "</div>" + '<footer class="text-center" style="margin-top: 50px;"> <p>This proyect is made by Michael.</p> </footer>'
  console.log(domainName);
  document.querySelector("#list-domain").innerHTML = domainName;
};
