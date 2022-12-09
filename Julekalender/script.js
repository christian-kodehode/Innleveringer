// JULEKALENDER PROSJEKT - CHRISTIAN OG DAVID

const counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const expandOne = () => {
  counters[0]++;
  const lukeOne = document.getElementById("en");
  if (counters[0] % 2 == 1) {
    lukeOne.innerText = "";
    lukeOne.style.width = "48%";
    lukeOne.style.height = "250px";
    lukeOne.style.backgroundImage = "url(./pics/christmas_dog.png)";
    lukeOne.style.backgroundSize = "100%";
    lukeOne.style.backgroundRepeat = "no-repeat";
    lukeOne.style.backgroundPosition = "center";
  } else {
    lukeOne.style.backgroundImage = "";
    lukeOne.style.width = "18%";
    lukeOne.style.height = "60px";
    lukeOne.innerText = "1";
  }
};

const expandTwo = () => {
  counters[1]++;
  const lukeTwo = document.getElementById("to");
  if (counters[1] % 2 == 1) {
    lukeTwo.style.width = "48%";
    lukeTwo.style.height = "250px";
    lukeTwo.style.alignItems = "flex-start";
    lukeTwo.style.fontSize = "1.25em";
    lukeTwo.style.padding = "0 15px";
    lukeTwo.style.fontWeight = "400";
    lukeTwo.innerText = `En liten jente klatret opp på nissens fang. Julenissen spurte det vanlige: «Hva vil du ha til jul?» 
    Den lille jenta stirret på ham med åpen munn og forferdet et øyeblikk, og gispet: «Fikk du ikke e-posten min?»`;
  } else {
    lukeTwo.innerText = "2";
    lukeTwo.style.fontSize = "40px";
    lukeTwo.style.fontWeight = "700";
    lukeTwo.style.padding = "0";
    lukeTwo.style.alignItems = "center";
    lukeTwo.style.justifyContent = "center";
    lukeTwo.style.width = "18%";
    lukeTwo.style.height = "60px";
  }
};

const expandThree = () => {
  counters[2]++;
  const lukeThree = document.getElementById("tre");
  if (counters[2] % 2 == 1) {
    lukeThree.innerText = "";
    lukeThree.style.width = "48%";
    lukeThree.style.height = "250px";
    lukeThree.style.backgroundImage = "url(./pics/santa.jpg)";
    lukeThree.style.backgroundSize = "100%";
    lukeThree.style.backgroundRepeat = "no-repeat";
    lukeThree.style.backgroundPosition = "center";
  } else {
    lukeThree.style.backgroundImage = "";
    lukeThree.style.width = "18%";
    lukeThree.style.height = "60px";
    lukeThree.style.alignItems = "center";
    lukeThree.style.justifyContent = "center";
    lukeThree.innerText = "3";
  }
};

const expandFour = () => {
  counters[3]++;
  const lukeFour = document.getElementById("fire");
  if (counters[3] % 2 == 1) {
    lukeFour.innerText = "";
    lukeFour.style.width = "48%";
    lukeFour.style.height = "250px";
    lukeFour.style.backgroundImage = "url(./pics/snowman.png)";
    lukeFour.style.backgroundSize = "100%";
    lukeFour.style.backgroundRepeat = "no-repeat";
    lukeFour.style.backgroundPosition = "center";
  } else {
    lukeFour.style.backgroundImage = "";
    lukeFour.style.width = "18%";
    lukeFour.style.height = "60px";
    lukeFour.style.alignItems = "center";
    lukeFour.style.justifyContent = "center";
    lukeFour.innerText = "4";
  }
};

const expandFive = () => {
  counters[4]++;
  const lukeFive = document.getElementById("fem");
  if (counters[4] % 2 == 1) {
    lukeFive.innerText = "";
    lukeFive.style.width = "48%";
    lukeFive.style.height = "250px";
    lukeFive.style.backgroundImage = "url(./pics/snowglobe.png)";
    lukeFive.style.backgroundSize = "100%";
    lukeFive.style.backgroundRepeat = "no-repeat";
    lukeFive.style.backgroundPosition = "center";
  } else {
    lukeFive.style.backgroundImage = "";
    lukeFive.style.width = "18%";
    lukeFive.style.height = "60px";
    lukeFive.style.alignItems = "center";
    lukeFive.style.justifyContent = "center";
    lukeFive.innerText = "5";
  }
};

const expandSix = () => {
  counters[5]++;
  const lukeSix = document.getElementById("seks");
  if (counters[5] % 2 == 1) {
    lukeSix.innerText = "";
    lukeSix.style.width = "48%";
    lukeSix.style.height = "250px";
    lukeSix.style.backgroundImage = "url(./pics/biscuits.jpg)";
    lukeSix.style.backgroundSize = "100%";
    lukeSix.style.backgroundRepeat = "no-repeat";
    lukeSix.style.backgroundPosition = "center";
  } else {
    lukeSix.style.backgroundImage = "";
    lukeSix.style.width = "18%";
    lukeSix.style.height = "60px";
    lukeSix.style.alignItems = "center";
    lukeSix.style.justifyContent = "center";
    lukeSix.innerText = "6";
  }
};

const expandSeven = () => {
  counters[6]++;
  const lukeSeven = document.getElementById("syv");
  if (counters[6] % 2 == 1) {
    lukeSeven.innerText = "";
    lukeSeven.style.width = "48%";
    lukeSeven.style.height = "250px";
    lukeSeven.style.backgroundImage = "url(./pics/tree.png)";
    lukeSeven.style.backgroundSize = "100%";
    lukeSeven.style.backgroundRepeat = "no-repeat";
    lukeSeven.style.backgroundPosition = "center";
  } else {
    lukeSeven.style.backgroundImage = "";
    lukeSeven.style.width = "18%";
    lukeSeven.style.height = "60px";
    lukeSeven.style.alignItems = "center";
    lukeSeven.style.justifyContent = "center";
    lukeSeven.innerText = "7";
  }
};

const expandEight = () => {
  counters[7]++;
  const lukeEight = document.getElementById("åtte");
  if (counters[7] % 2 == 1) {
    lukeEight.innerText = "";
    lukeEight.style.width = "48%";
    lukeEight.style.height = "250px";
    lukeEight.style.backgroundImage = "url(./pics/presents.jpg)";
    lukeEight.style.backgroundSize = "100%";
    lukeEight.style.backgroundRepeat = "no-repeat";
    lukeEight.style.backgroundPosition = "center";
  } else {
    lukeEight.style.backgroundImage = "";
    lukeEight.style.width = "18%";
    lukeEight.style.height = "60px";
    lukeEight.style.alignItems = "center";
    lukeEight.style.justifyContent = "center";
    lukeEight.innerText = "8";
  }
};

const expandNine = () => {
  counters[8]++;
  const lukeNine = document.getElementById("ni");
  if (counters[8] % 2 == 1) {
    lukeNine.innerText = "";
    lukeNine.style.width = "48%";
    lukeNine.style.height = "250px";
    lukeNine.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeNine.style.backgroundSize = "100%";
    lukeNine.style.backgroundRepeat = "no-repeat";
    lukeNine.style.backgroundPosition = "center";
  } else {
    lukeNine.style.backgroundImage = "";
    lukeNine.style.width = "18%";
    lukeNine.style.height = "60px";
    lukeNine.style.alignItems = "center";
    lukeNine.style.justifyContent = "center";
    lukeNine.innerText = "9";
  }
};

const expandTen = () => {
  counters[9]++;
  const lukeTen = document.getElementById("ti");
  if (counters[9] % 2 == 1) {
    lukeTen.innerText = "";
    lukeTen.style.width = "48%";
    lukeTen.style.height = "250px";
    lukeTen.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeTen.style.backgroundSize = "100%";
    lukeTen.style.backgroundRepeat = "no-repeat";
    lukeTen.style.backgroundPosition = "center";
  } else {
    lukeTen.style.backgroundImage = "";
    lukeTen.style.width = "18%";
    lukeTen.style.height = "60px";
    lukeTen.style.alignItems = "center";
    lukeTen.style.justifyContent = "center";
    lukeTen.innerText = "10";
  }
};

const expandEleven = () => {
  counters[10]++;
  const lukeEleven = document.getElementById("elleve");
  if (counters[10] % 2 == 1) {
    lukeEleven.innerText = "";
    lukeEleven.style.width = "48%";
    lukeEleven.style.height = "250px";
    lukeEleven.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeEleven.style.backgroundSize = "100%";
    lukeEleven.style.backgroundRepeat = "no-repeat";
    lukeEleven.style.backgroundPosition = "center";
  } else {
    lukeEleven.style.backgroundImage = "";
    lukeEleven.style.width = "18%";
    lukeEleven.style.height = "60px";
    lukeEleven.style.alignItems = "center";
    lukeEleven.style.justifyContent = "center";
    lukeEleven.innerText = "11";
  }
};

const expandTwelve = () => {
  counters[11]++;
  const lukeTwelve = document.getElementById("tolv");
  if (counters[11] % 2 == 1) {
    lukeTwelve.innerText = "";
    lukeTwelve.style.width = "48%";
    lukeTwelve.style.height = "250px";
    lukeTwelve.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeTwelve.style.backgroundSize = "100%";
    lukeTwelve.style.backgroundRepeat = "no-repeat";
    lukeTwelve.style.backgroundPosition = "center";
  } else {
    lukeTwelve.style.backgroundImage = "";
    lukeTwelve.style.width = "18%";
    lukeTwelve.style.height = "60px";
    lukeTwelve.style.alignItems = "center";
    lukeTwelve.style.justifyContent = "center";
    lukeTwelve.innerText = "12";
  }
};

const expandThirteen = () => {
  counters[12]++;
  const lukeThirteen = document.getElementById("tretten");
  if (counters[12] % 2 == 1) {
    lukeThirteen.innerText = "";
    lukeThirteen.style.width = "48%";
    lukeThirteen.style.height = "250px";
    lukeThirteen.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeThirteen.style.backgroundSize = "100%";
    lukeThirteen.style.backgroundRepeat = "no-repeat";
    lukeThirteen.style.backgroundPosition = "center";
  } else {
    lukeThirteen.style.backgroundImage = "";
    lukeThirteen.style.width = "18%";
    lukeThirteen.style.height = "60px";
    lukeThirteen.style.alignItems = "center";
    lukeThirteen.style.justifyContent = "center";
    lukeThirteen.innerText = "13";
  }
};

const expandFourteen = () => {
  counters[13]++;
  const lukeFourteen = document.getElementById("fjorten");
  if (counters[13] % 2 == 1) {
    lukeFourteen.innerText = "";
    lukeFourteen.style.width = "48%";
    lukeFourteen.style.height = "250px";
    lukeFourteen.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeFourteen.style.backgroundSize = "100%";
    lukeFourteen.style.backgroundRepeat = "no-repeat";
    lukeFourteen.style.backgroundPosition = "center";
  } else {
    lukeFourteen.style.backgroundImage = "";
    lukeFourteen.style.width = "18%";
    lukeFourteen.style.height = "60px";
    lukeFourteen.style.alignItems = "center";
    lukeFourteen.style.justifyContent = "center";
    lukeFourteen.innerText = "14";
  }
};

const expandFifteen = () => {
  counters[14]++;
  const lukeFifteen = document.getElementById("femten");
  if (counters[14] % 2 == 1) {
    lukeFifteen.innerText = "";
    lukeFifteen.style.width = "48%";
    lukeFifteen.style.height = "250px";
    lukeFifteen.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeFifteen.style.backgroundSize = "100%";
    lukeFifteen.style.backgroundRepeat = "no-repeat";
    lukeFifteen.style.backgroundPosition = "center";
  } else {
    lukeFifteen.style.backgroundImage = "";
    lukeFifteen.style.width = "18%";
    lukeFifteen.style.height = "60px";
    lukeFifteen.style.alignItems = "center";
    lukeFifteen.style.justifyContent = "center";
    lukeFifteen.innerText = "15";
  }
};

const expandSixteen = () => {
  counters[15]++;
  const lukeSixteen = document.getElementById("seksten");
  if (counters[15] % 2 == 1) {
    lukeSixteen.innerText = "";
    lukeSixteen.style.width = "48%";
    lukeSixteen.style.height = "250px";
    lukeSixteen.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeSixteen.style.backgroundSize = "100%";
    lukeSixteen.style.backgroundRepeat = "no-repeat";
    lukeSixteen.style.backgroundPosition = "center";
  } else {
    lukeSixteen.style.backgroundImage = "";
    lukeSixteen.style.width = "18%";
    lukeSixteen.style.height = "60px";
    lukeSixteen.style.alignItems = "center";
    lukeSixteen.style.justifyContent = "center";
    lukeSixteen.innerText = "16";
  }
};

const expandSeventeen = () => {
  counters[16]++;
  const lukeSeventeen = document.getElementById("sytten");
  if (counters[16] % 2 == 1) {
    lukeSeventeen.innerText = "";
    lukeSeventeen.style.width = "48%";
    lukeSeventeen.style.height = "250px";
    lukeSeventeen.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeSeventeen.style.backgroundSize = "100%";
    lukeSeventeen.style.backgroundRepeat = "no-repeat";
    lukeSeventeen.style.backgroundPosition = "center";
  } else {
    lukeSeventeen.style.backgroundImage = "";
    lukeSeventeen.style.width = "18%";
    lukeSeventeen.style.height = "60px";
    lukeSeventeen.style.alignItems = "center";
    lukeSeventeen.style.justifyContent = "center";
    lukeSeventeen.innerText = "17";
  }
};

const expandEighteen = () => {
  counters[17]++;
  const lukeEighteen = document.getElementById("atten");
  if (counters[17] % 2 == 1) {
    lukeEighteen.innerText = "";
    lukeEighteen.style.width = "48%";
    lukeEighteen.style.height = "250px";
    lukeEighteen.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeEighteen.style.backgroundSize = "100%";
    lukeEighteen.style.backgroundRepeat = "no-repeat";
    lukeEighteen.style.backgroundPosition = "center";
  } else {
    lukeEighteen.style.backgroundImage = "";
    lukeEighteen.style.width = "18%";
    lukeEighteen.style.height = "60px";
    lukeEighteen.style.alignItems = "center";
    lukeEighteen.style.justifyContent = "center";
    lukeEighteen.innerText = "18";
  }
};

const expandNineteen = () => {
  counters[18]++;
  const lukeNineteen = document.getElementById("nitten");
  if (counters[18] % 2 == 1) {
    lukeNineteen.innerText = "";
    lukeNineteen.style.width = "48%";
    lukeNineteen.style.height = "250px";
    lukeNineteen.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeNineteen.style.backgroundSize = "100%";
    lukeNineteen.style.backgroundRepeat = "no-repeat";
    lukeNineteen.style.backgroundPosition = "center";
  } else {
    lukeNineteen.style.backgroundImage = "";
    lukeNineteen.style.width = "18%";
    lukeNineteen.style.height = "60px";
    lukeNineteen.style.alignItems = "center";
    lukeNineteen.style.justifyContent = "center";
    lukeNineteen.innerText = "19";
  }
};

const expandTwenty = () => {
  counters[19]++;
  const lukeTwenty = document.getElementById("tjue");
  if (counters[19] % 2 == 1) {
    lukeTwenty.innerText = "";
    lukeTwenty.style.width = "48%";
    lukeTwenty.style.height = "250px";
    lukeTwenty.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeTwenty.style.backgroundSize = "100%";
    lukeTwenty.style.backgroundRepeat = "no-repeat";
    lukeTwenty.style.backgroundPosition = "center";
  } else {
    lukeTwenty.style.backgroundImage = "";
    lukeTwenty.style.width = "18%";
    lukeTwenty.style.height = "60px";
    lukeTwenty.style.alignItems = "center";
    lukeTwenty.style.justifyContent = "center";
    lukeTwenty.innerText = "20";
  }
};

const expandTwentyone = () => {
  counters[20]++;
  const lukeTwentyone = document.getElementById("tjueen");
  if (counters[20] % 2 == 1) {
    lukeTwentyone.innerText = "";
    lukeTwentyone.style.width = "48%";
    lukeTwentyone.style.height = "250px";
    lukeTwentyone.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeTwentyone.style.backgroundSize = "100%";
    lukeTwentyone.style.backgroundRepeat = "no-repeat";
    lukeTwentyone.style.backgroundPosition = "center";
  } else {
    lukeTwentyone.style.backgroundImage = "";
    lukeTwentyone.style.width = "18%";
    lukeTwentyone.style.height = "60px";
    lukeTwentyone.style.alignItems = "center";
    lukeTwentyone.style.justifyContent = "center";
    lukeTwentyone.innerText = "21";
  }
};

const expandTwentytwo = () => {
  counters[21]++;
  const lukeTwentytwo = document.getElementById("tjueto");
  if (counters[21] % 2 == 1) {
    lukeTwentytwo.innerText = "";
    lukeTwentytwo.style.width = "48%";
    lukeTwentytwo.style.height = "250px";
    lukeTwentytwo.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeTwentytwo.style.backgroundSize = "100%";
    lukeTwentytwo.style.backgroundRepeat = "no-repeat";
    lukeTwentytwo.style.backgroundPosition = "center";
  } else {
    lukeTwentytwo.style.backgroundImage = "";
    lukeTwentytwo.style.width = "18%";
    lukeTwentytwo.style.height = "60px";
    lukeTwentytwo.style.alignItems = "center";
    lukeTwentytwo.style.justifyContent = "center";
    lukeTwentytwo.innerText = "22";
  }
};

const expandTwentythree = () => {
  counters[22]++;
  const lukeTwentythree = document.getElementById("tjuetre");
  if (counters[22] % 2 == 1) {
    lukeTwentythree.innerText = "";
    lukeTwentythree.style.width = "48%";
    lukeTwentythree.style.height = "250px";
    lukeTwentythree.style.backgroundImage = "url(./pics/placeholderpic.jpg)";
    lukeTwentythree.style.backgroundSize = "100%";
    lukeTwentythree.style.backgroundRepeat = "no-repeat";
    lukeTwentythree.style.backgroundPosition = "center";
  } else {
    lukeTwentythree.style.backgroundImage = "";
    lukeTwentythree.style.width = "18%";
    lukeTwentythree.style.height = "60px";
    lukeTwentythree.style.alignItems = "center";
    lukeTwentythree.style.justifyContent = "center";
    lukeTwentythree.innerText = "23";
  }
};

const expandChristmas = () => {
  counters[23]++;
  const lukeChristmas = document.getElementById("julaften");
  if (counters[23] % 2 == 1) {
    lukeChristmas.innerText = "GOD JUL!";
    lukeChristmas.style.width = "48%";
    lukeChristmas.style.height = "250px";
    lukeChristmas.style.fontSize = "100px";
    lukeChristmas.style.alignItems = "center";
    lukeChristmas.style.justifyContent = "center";
  } else {
    lukeChristmas.innerText = "24";
    lukeChristmas.style.fontSize = "40px";
    lukeChristmas.style.width = "38%";
    lukeChristmas.style.height = "60px";
    lukeChristmas.style.alignItems = "center";
    lukeChristmas.style.justifyContent = "center";
  }
};

const allFuncs = [
  expandOne,
  expandTwo,
  expandThree,
  expandFour,
  expandFive,
  expandSix,
  expandSeven,
  expandEight,
  expandNine,
  expandTen,
  expandEleven,
  expandTwelve,
  expandThirteen,
  expandFourteen,
  expandFifteen,
  expandSixteen,
  expandSeventeen,
  expandEighteen,
  expandNineteen,
  expandTwenty,
  expandTwentyone,
  expandTwentytwo,
  expandTwentythree,
  expandChristmas,
];

const apne = () => {
  for (let i = 0; i < counters.length; i++) {
    counters[i] = 0;
  }
  for (let j = 0; j < allFuncs.length; j++) {
    allFuncs[j]();
  }
};

const lukke = () => {
  for (let i = 0; i < counters.length; i++) {
    counters[i] = 1;
  }
  for (let j = 0; j < allFuncs.length; j++) {
    allFuncs[j]();
  }
};

/*

----- ET FORSØK PÅ FØRST Å LAGE LUKENE MED JAVASCRIPT -----

const cal = document.querySelector("div");
console.log(cal);
cal.style.padding = "1%";
document.body.style.backgroundColor = "#105e0e";

const lukeContainer = [];

for (i = 0; i < 24; i++) {
  let div = document.createElement("div");
  div.classList.add(`luke`);
  div.classList.add(`${i}`);
  div.style.background = "#5b1d61";
  div.style.margin = "1%";
  if (i > 22) {
    div.style.width = "38%";
  } else {
    div.style.width = "18%";
  }
  const txt = `${i + 1}`;
  div.style.color = "snow";
  div.style.fontSize = "50px";
  div.innerText = txt;
  div.style.textAlign = "center";
  div.style.fontFamily = "Mountains of Christmas";
  div.style.border = "1px solid snow";
  div.style.borderRadius = "5px";
  cal.append(div);
  lukeContainer[i] = div;
}
*/
