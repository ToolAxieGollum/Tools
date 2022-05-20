var counter = document.getElementById("actualEnergy");
counter = 3;
var round = document.getElementById("roundNumber");
roundNumber = 1;

var currentCardsCounter = document.getElementById("currentCards");
currentCardsCounter = 6;

/**
 * Energy-round functions
 */
function subtract(){
  counter -= 1;
  
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("actualEnergy").innerHTML = counter;
}

function add(){
  counter += 1;
  
  if (counter >= 10) {
    counter = 10;
  }
  document.getElementById("actualEnergy").innerHTML = counter;
}

function nextRound(){
  roundNumber += 1;
  counter += 2;
  currentCardsCounter += 3;
  
  if (counter >= 10) {
    counter = 10;
  }
  
  if (roundNumber >= 10) {
    document.body.style.backgroundColor = "#b52930ad";
  } else {
    document.body.style.backgroundColor = "#c07f5aad";
  }
  
  if (currentCardsCounter >= 12) {
    currentCardsCounter = 12;
  }
  if (currentCardsCounter <= 0) {
    currentCardsCounter = 3;
  }
  
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

function reset(){
  document.body.style.backgroundColor = "#c07f5aad";
  counter = 3;
  roundNumber = 1;
  currentCardsCounter = 6;
  
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
  
  resetA1Parts();
  resetA2Parts();
  resetA3Parts(); 
}

/**
 * Cards functions
 */
function addCard() {
  currentCardsCounter += 1;
  
  if (currentCardsCounter >= 12) {
    currentCardsCounter = 12;
  }
  
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

function minusCard() {
  currentCardsCounter -= 1;
  
  if (currentCardsCounter <= 0) {
    currentCardsCounter = 0;
  }
  
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

/**
 * Axie parts functions
 */

// Changes axie grid background color
function changeAxieGridColor() {
  axie1ColorAndParts();
  axie2ColorAndParts();
  axie3ColorAndParts();
}

function axie1ColorAndParts() {
  let axie1Selection = document.getElementById("axie1Select").value;
  
  switch (axie1Selection) {
    case "plant":
      document.getElementById("axie1Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a1m").src = "assets/img/parts/plant/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/plant/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/plant/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie1Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a1m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie1Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a1m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie1Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a1m").src = "assets/img/parts/bird/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/bird/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/bird/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie1Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a1m").src = "assets/img/parts/bug/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/bug/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/bug/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie1Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a1m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie1Grid").style.backgroundColor = "#009091";
      document.getElementById("a1m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie1Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a1m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie1Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a1m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie1Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

function axie2ColorAndParts() {
  let axie2Selection = document.getElementById("axie2Select").value;
  
  switch (axie2Selection) {
    case "plant":
      document.getElementById("axie2Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a2m").src = "assets/img/parts/plant/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/plant/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/plant/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie2Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a2m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie2Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a2m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie2Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a2m").src = "assets/img/parts/bird/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/bird/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/bird/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie2Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a2m").src = "assets/img/parts/bug/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/bug/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/bug/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie2Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a2m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie2Grid").style.backgroundColor = "#009091";
      document.getElementById("a2m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie2Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a2m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie2Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a2m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie2Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

function axie3ColorAndParts() {
  let axie3Selection = document.getElementById("axie3Select").value;
  
  switch (axie3Selection) {
    case "plant":
      document.getElementById("axie3Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a3m").src = "assets/img/parts/plant/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/plant/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/plant/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie3Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a3m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie3Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a3m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie3Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a3m").src = "assets/img/parts/bird/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/bird/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/bird/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie3Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a3m").src = "assets/img/parts/bug/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/bug/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/bug/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie3Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a3m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie3Grid").style.backgroundColor = "#009091";
      document.getElementById("a3m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie3Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a3m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie3Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a3m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie3Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

/**
 * "Kills" axie, adds and resets parts used
 */
var axie1mouth = document.getElementById("a1mCounter");
var axie1horn = document.getElementById("a1hCounter");
var axie1back = document.getElementById("a1bCounter");
var axie1tail = document.getElementById("a1tCounter");
axie1mouth = 0;
axie1horn = 0;
axie1back = 0;
axie1tail = 0;

var axie2mouth = document.getElementById("a2mCounter");
var axie2horn = document.getElementById("a2hCounter");
var axie2back = document.getElementById("a2bCounter");
var axie2tail = document.getElementById("a2tCounter");
axie2mouth = 0;
axie2horn = 0;
axie2back = 0;
axie2tail = 0;

var axie3mouth = document.getElementById("a3mCounter");
var axie3horn = document.getElementById("a3hCounter");
var axie3back = document.getElementById("a3bCounter");
var axie3tail = document.getElementById("a3tCounter");
axie3mouth = 0;
axie3horn = 0;
axie3back = 0;
axie3tail = 0;

var axie1m = document.getElementById("lm1").innerText;
function usePartA1M() {

  var costo1m = document.getElementById("lm1").innerText;
  
  if (costo1m == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie1mouth += 1;
  
  if (axie1mouth >= 2) {
    axie1mouth = 2;
  }
  
  document.getElementById("a1mCounter").innerHTML = axie1mouth;
}
function substractPartA1M() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1mCounter").innerHTML = axie1mouth;
}
function substractEnergia1M() {  
  
  if (axie1m == 0) {
    axie1m = 1;
  }else {
    axie1m = 0;
  }
  
  document.getElementById("gEnergyM1").innerHTML = axie1m;
}
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

var axie1h = document.getElementById("lh1").innerText;
function usePartA1H() {
  
  var costo1h = document.getElementById("lh1").innerText;
  
  if (costo1h == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie1horn += 1;
  
  if (axie1horn >= 2) {
    axie1horn = 2;
  }
  
  document.getElementById("a1hCounter").innerHTML = axie1horn;
}

function substractPartA1H() {
  axie1horn -= 1;
  
  if (axie1horn <= 0) {
    axie1horn = 0;
  }
  
  document.getElementById("a1hCounter").innerHTML = axie1horn;
}
function substractEnergia1H() {  
  
  if (axie1h == 0) {
    axie1h = 1;
  }else {
    axie1h = 0;
  }
  
  document.getElementById("gEnergyH1").innerHTML = axie1h;
}
//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
var axie1b = document.getElementById("lb1").innerText;
function usePartA1B() {
  
  var costo1b = document.getElementById("lb1").innerText;
  
  if (costo1b == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }

  axie1back += 1;
  
  if (axie1back >= 2) {
    axie1back = 2;
  }
  
  document.getElementById("a1bCounter").innerHTML = axie1back;
}
function substractPartA1B() {
  axie1back -= 1;
  
  if (axie1back <= 0) {
    axie1back = 0;
  }
  
  document.getElementById("a1bCounter").innerHTML = axie1back;
}
function substractEnergia1B() {  
  
  if (axie1b == 0) {
    axie1b = 1;
  }else {
    axie1b = 0;
  }
  
  document.getElementById("gEnergyB1").innerHTML = axie1b;
}
//TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
var axie1t = document.getElementById("lt1").innerText;
function usePartA1T() {
  
  var costo1t = document.getElementById("lt1").innerText;
  
  if (costo1t == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie1tail += 1;
  
  if (axie1tail >= 2) {
    axie1tail = 2;
  }
  
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function substractPartA1T() {
  axie1tail -= 1;
  
  if (axie1tail <= 0) {
    axie1tail = 0;
  }
  
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}
function substractEnergia1T() {  
  
  if (axie1t == 0) {
    axie1t = 1;
  }else {
    axie1t = 0;
  }
  
  document.getElementById("gEnergyT1").innerHTML = axie1t;
}
//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
var axie2m = document.getElementById("lm2").innerText;
function usePartA2M() {

  var costo2m = document.getElementById("lm2").innerText;
  
  if (costo2m == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie2mouth += 1;
  
  if (axie2mouth >= 2) {
    axie2mouth = 2;
  }
  
  document.getElementById("a2mCounter").innerHTML = axie2mouth;
}
function substractPartA2M() {
  axie2mouth -= 1;
  
  if (axie2mouth <= 0) {
    axie2mouth = 0;
  }
  
  document.getElementById("a2mCounter").innerHTML = axie2mouth;
}
function substractEnergia2M() {  
  
  if (axie2m == 0) {
    axie2m = 1;
  }else {
    axie2m = 0;
  }
  
  document.getElementById("gEnergyM2").innerHTML = axie2m;
}
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

var axie2h = document.getElementById("lh2").innerText;
function usePartA2H() {
  
  var costo2h = document.getElementById("lh2").innerText;
  
  if (costo2h == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie2horn += 1;
  
  if (axie2horn >= 2) {
    axie2horn = 2;
  }
  
  document.getElementById("a2hCounter").innerHTML = axie2horn;
}

function substractPartA2H() {
  axie2horn -= 1;
  
  if (axie2horn <= 0) {
    axie2horn = 0;
  }
  
  document.getElementById("a2hCounter").innerHTML = axie2horn;
}
function substractEnergia2H() {  
  
  if (axie2h == 0) {
    axie2h = 1;
  }else {
    axie2h = 0;
  }
  
  document.getElementById("gEnergyH2").innerHTML = axie2h;
}
//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
var axie2b = document.getElementById("lb2").innerText;
function usePartA2B() {
  
  var costo2b = document.getElementById("lb2").innerText;
  
  if (costo2b == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }

  axie2back += 1;
  
  if (axie2back >= 2) {
    axie2back = 2;
  }
  
  document.getElementById("a2bCounter").innerHTML = axie2back;
}
function substractPartA2B() {
  axie2back -= 1;
  
  if (axie2back <= 0) {
    axie2back = 0;
  }
  
  document.getElementById("a2bCounter").innerHTML = axie2back;
}
function substractEnergia2B() {  
  
  if (axie2b == 0) {
    axie2b = 1;
  }else {
    axie2b = 0;
  }
  
  document.getElementById("gEnergyB2").innerHTML = axie2b;
}
//TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
var axie2t = document.getElementById("lt2").innerText;
function usePartA2T() {
  
  var costo2t = document.getElementById("lt2").innerText;
  
  if (costo2t == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie2tail += 1;
  
  if (axie2tail >= 2) {
    axie2tail = 2;
  }
  
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function substractPartA2T() {
  axie2tail -= 1;
  
  if (axie2tail <= 0) {
    axie2tail = 0;
  }
  
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}
function substractEnergia2T() {  
  
  if (axie2t == 0) {
    axie2t = 1;
  }else {
    axie2t = 0;
  }
  
  document.getElementById("gEnergyT2").innerHTML = axie2t;
}
//3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333

var axie3m = document.getElementById("lm3").innerText;
function usePartA3M() {

  var costo3m = document.getElementById("lm3").innerText;
  
  if (costo3m == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie3mouth += 1;
  
  if (axie3mouth >= 2) {
    axie3mouth = 2;
  }
  
  document.getElementById("a3mCounter").innerHTML = axie3mouth;
}
function substractPartA3M() {
  axie3mouth -= 1;
  
  if (axie3mouth <= 0) {
    axie3mouth = 0;
  }
  
  document.getElementById("a3mCounter").innerHTML = axie3mouth;
}
function substractEnergia3M() {  
  
  if (axie3m == 0) {
    axie3m = 1;
  }else {
    axie3m = 0;
  }
  
  document.getElementById("gEnergyM3").innerHTML = axie3m;
}
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

var axie3h = document.getElementById("lh3").innerText;
function usePartA3H() {
  
  var costo3h = document.getElementById("lh3").innerText;
  
  if (costo3h == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie3horn += 1;
  
  if (axie3horn >= 2) {
    axie3horn = 2;
  }
  
  document.getElementById("a3hCounter").innerHTML = axie3horn;
}

function substractPartA2H() {
  axie3horn -= 1;
  
  if (axie3horn <= 0) {
    axie3horn = 0;
  }
  
  document.getElementById("a3hCounter").innerHTML = axie3horn;
}
function substractEnergia3H() {  
  
  if (axie3h == 0) {
    axie3h = 1;
  }else {
    axie3h = 0;
  }
  
  document.getElementById("gEnergyH3").innerHTML = axie3h;
}
//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
var axie3b = document.getElementById("lb3").innerText;
function usePartA3B() {
  
  var costo3b = document.getElementById("lb3").innerText;
  
  if (costo3b == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }

  axie3back += 1;
  
  if (axie3back >= 2) {
    axie3back = 2;
  }
  
  document.getElementById("a3bCounter").innerHTML = axie3back;
}
function substractPartA3B() {
  axie3back -= 1;
  
  if (axie3back <= 0) {
    axie3back = 0;
  }
  
  document.getElementById("a3bCounter").innerHTML = axie3back;
}
function substractEnergia3B() {  
  
  if (axie3b == 0) {
    axie3b = 1;
  }else {
    axie3b = 0;
  }
  
  document.getElementById("gEnergyB3").innerHTML = axie3b;
}
//TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
var axie3t = document.getElementById("lt3").innerText;
function usePartA3T() {
  
  var costo3t = document.getElementById("lt3").innerText;
  
  if (costo3t == 0){
    minusCard();
  }else{
    subtract();
    minusCard();
  }
  
  axie3tail += 1;
  
  if (axie3tail >= 2) {
    axie3tail = 2;
  }
  
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function substractPartA3T() {
  axie3tail -= 1;
  
  if (axie3tail <= 0) {
    axie3tail = 0;
  }
  
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}
function substractEnergia3T() {  
  
  if (axie3t == 0) {
    axie3t = 1;
  }else {
    axie3t = 0;
  }
  
  document.getElementById("gEnergyT3").innerHTML = axie3t;
}


function resetA1Parts() {
  document.getElementById("a1mButton").classList.remove("disabled");
  document.getElementById("a1mLabel").classList.remove("disabled");
  document.getElementById("a1hButton").classList.remove("disabled");
  document.getElementById("a1hLabel").classList.remove("disabled");
  document.getElementById("a1bButton").classList.remove("disabled");
  document.getElementById("a1bLabel").classList.remove("disabled");
  document.getElementById("a1tButton").classList.remove("disabled");
  document.getElementById("a1tLabel").classList.remove("disabled");
  document.getElementById("a1DeadButton").classList.remove("disabled");
  
  axie1mouth = 0;
  axie1horn = 0;
  axie1back = 0;
  axie1tail = 0;

  document.getElementById("a1mCounter").innerHTML = axie1mouth;
  document.getElementById("a1hCounter").innerHTML = axie1horn;
  document.getElementById("a1bCounter").innerHTML = axie1back;
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}


function resetA2Parts() {
  document.getElementById("a2mButton").classList.remove("disabled");
  document.getElementById("a2mLabel").classList.remove("disabled");
  document.getElementById("a2hButton").classList.remove("disabled");
  document.getElementById("a2hLabel").classList.remove("disabled");
  document.getElementById("a2bButton").classList.remove("disabled");
  document.getElementById("a2bLabel").classList.remove("disabled");
  document.getElementById("a2tButton").classList.remove("disabled");
  document.getElementById("a2tLabel").classList.remove("disabled");
  document.getElementById("a2DeadButton").classList.remove("disabled");
  
  axie2mouth = 0;
  axie2horn = 0;
  axie2back = 0;
  axie2tail = 0;

  document.getElementById("a2mCounter").innerHTML = axie2mouth;
  document.getElementById("a2hCounter").innerHTML = axie2horn;
  document.getElementById("a2bCounter").innerHTML = axie2back;
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}


function resetA3Parts() {
  document.getElementById("a3mButton").classList.remove("disabled");
  document.getElementById("a3mLabel").classList.remove("disabled");
  document.getElementById("a3hButton").classList.remove("disabled");
  document.getElementById("a3hLabel").classList.remove("disabled");
  document.getElementById("a3bButton").classList.remove("disabled");
  document.getElementById("a3bLabel").classList.remove("disabled");
  document.getElementById("a3tButton").classList.remove("disabled");
  document.getElementById("a3tLabel").classList.remove("disabled");
  document.getElementById("a3DeadButton").classList.remove("disabled");
  
  axie3mouth = 0;
  axie3horn = 0;
  axie3back = 0;
  axie3tail = 0;

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function killAxie1 () {
  document.getElementById("a1mButton").classList.add("disabled");
  document.getElementById("a1mLabel").classList.add("disabled");
  document.getElementById("a1hButton").classList.add("disabled");
  document.getElementById("a1hLabel").classList.add("disabled");
  document.getElementById("a1bButton").classList.add("disabled");
  document.getElementById("a1bLabel").classList.add("disabled");
  document.getElementById("a1tButton").classList.add("disabled");
  document.getElementById("a1tLabel").classList.add("disabled");
  document.getElementById("a1DeadButton").classList.add("disabled");
  
  var axie1mouth = "-";
  var axie1horn = "-";
  var axie1back = "-";
  var axie1tail = "-";

  document.getElementById("a1mCounter").innerHTML = axie1mouth;
  document.getElementById("a1hCounter").innerHTML = axie1horn;
  document.getElementById("a1bCounter").innerHTML = axie1back;
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function killAxie2 () {
  document.getElementById("a2mButton").classList.add("disabled");
  document.getElementById("a2mLabel").classList.add("disabled");
  document.getElementById("a2hButton").classList.add("disabled");
  document.getElementById("a2hLabel").classList.add("disabled");
  document.getElementById("a2bButton").classList.add("disabled");
  document.getElementById("a2bLabel").classList.add("disabled");
  document.getElementById("a2tButton").classList.add("disabled");
  document.getElementById("a2tLabel").classList.add("disabled");
  document.getElementById("a2DeadButton").classList.add("disabled");
  
  var axie2mouth = "-";
  var axie2horn = "-";
  var axie2back = "-";
  var axie2tail = "-";

  document.getElementById("a2mCounter").innerHTML = axie2mouth;
  document.getElementById("a2hCounter").innerHTML = axie2horn;
  document.getElementById("a2bCounter").innerHTML = axie2back;
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function killAxie3 () {
  document.getElementById("a3mButton").classList.add("disabled");
  document.getElementById("a3mLabel").classList.add("disabled");
  document.getElementById("a3hButton").classList.add("disabled");
  document.getElementById("a3hLabel").classList.add("disabled");
  document.getElementById("a3bButton").classList.add("disabled");
  document.getElementById("a3bLabel").classList.add("disabled");
  document.getElementById("a3tButton").classList.add("disabled");
  document.getElementById("a3tLabel").classList.add("disabled");
  document.getElementById("a3DeadButton").classList.add("disabled");
  
  var axie3mouth = "-";
  var axie3horn = "-";
  var axie3back = "-";
  var axie3tail = "-";

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

// Calculator modal and functions
// Get the modal, btn and span
var modal = document.getElementById("calculatorModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

// Calculator Display
let realTimeScreenValue = [];

// To Clear
clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
});

// Get value of any button clicked and display to the screen
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value);
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        }
    });
});



