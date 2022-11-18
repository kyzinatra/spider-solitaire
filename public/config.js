let candyCounter = 990;
let chocoCounter = 999990;
let clickCounter = 0;
let factor = 1;
let rand = 24.5 + Math.random() * 96 * factor;
rand = Math.round(rand);
let Dialog = 1;
let waitTime = 2000;
let Lolli = 9999999990;

var fight = new Audio();
var loose = new Audio();
fight.src = "audio/fly.mp3";
loose.src = "audio/score.mp3";

//confirm("Приветствуем тебя в Candy clicker! \nПеред тем как мы начнем, рекомендуем установить размер экрана \nтак, чтобы кнопки 'Руководство' и 'Пожертвовать' \nполностью помещались, с помощью с помощью клавиш ctrl+-");
//Оганичение на клики + увелечение числа конфет

function manyClick() {
  clickCounter += 1 * factor;
  candyCounter += 1 * factor;
  if (clickCounter >= rand) {
    clickCounter = 0;
    let stringClick = document.getElementById("btnClick");
    stringClick.innerHTML = "Wait!";
    stringClick.disabled = true;
    stringClick.style.cursor = "wait";
    rand = 24.5 + Math.random() * 96 * factor * 2;
    setTimeout(function () {
      stringClick.innerHTML = "Get candy!";
      stringClick.disabled = false;
      stringClick.style.cursor = "pointer";
    }, waitTime);
  }
}
//Считает конфеты
function candyCounterFun() {
  let candiesCounterVar = document.getElementById("candiesCounter");
  candiesCounterVar.innerHTML = candyCounter;
}
//Появление торговца и ферм и надписей!!
let seller1Factor = true; //Переменные чтобы фермы дважды не появлялись.
let candyFarmFactor = true;
let chocoFarmFactor = true;

let candyFactor = true;
let chocoFactor = true;
let lolliFactor = true;
let swordFactor = true;
let netFactor = true;

function CheckShop() {
  //Торговец
  if (candyCounter >= 101 && seller1Factor === true) {
    let seller = document.getElementById("seller");
    seller.style.display = "block";
    seller1Factor = false;
  }
  //Ферма конфет
  if (candyCounter >= 500 && candyFarmFactor == true) {
    candyFarmFactor = false;
    let farmDisplay = document.getElementById("farmCandy1");
    farmDisplay.style.display = "block";
  }
  //Стата с конфетами

  if (candyFactor == true) {
    candyFactor = false;
    let candyStatDisplay = document.getElementById("candyStat");
    candyStatDisplay.style.display = "block";
  }
}
// Кнопки в диалогах
function next() {
  let next = document.getElementById("DialoguesIcn");
  Dialog++;
  switch (Dialog) {
    case 1:
      next.innerHTML = "Привет! Я проходил мимо и увидел твои конфеты!";
      break;
    case 2:
      next.innerHTML = "Я торговец из соседних стран, проходил мимо и увидал тут тебя.";
      break;
    case 3:
      next.innerHTML = "У меня есть немного товара, что я вёз.";
      break;
    case 4:
      next.innerHTML = "Xочешь посмотреть?";
      break;
  }
  if (Dialog >= 5) {
    let shop = document.getElementById("firstShop");
    let seller = document.getElementById("seller");
    seller.style.display = "none";
    shop.style.display = "block";
  }
}

// Покупки!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let Sword = 0;
let Net = 0;

// шоколад
function buyFunChoco(quantity) {
  if (candyCounter - 1 >= 20 && quantity !== 10) {
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    let candiesBuyCounterVar = document.getElementById("candiesCounter");

    candyCounter -= 20;
    chocoCounter++;
    chocoBuyCounterVar.innerHTML = chocoCounter;
    candiesBuyCounterVar.innerHTML = candyCounter;

    //Шоколад Show
    if (chocoFactor == true) {
      chocoFactor = false;
      let chocoDisplay = document.getElementById("chocoStat");
      chocoDisplay.style.display = "block";
    }
  } else if (candyCounter - 1 >= 200 && quantity == 10) {
    let candiesBuyCounterVar = document.getElementById("candiesCounter");

    candyCounter -= 200;
    chocoCounter += 10;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
    candiesBuyCounterVar.innerHTML = candyCounter;

    if (chocoFactor == true) {
      chocoFactor = false;
      let chocoDisplay = document.getElementById("chocoStat");
      chocoDisplay.style.display = "block";
    }
  } else {
    let chocoFew = document.getElementById("Few");

    chocoFew.style.opacity = "100";

    setTimeout(function () {
      chocoFew.style.opacity = "0";
    }, 1000);
  }

  if (chocoCounter >= 70 && chocoFarmFactor == true) {
    let chocoDisplay = document.getElementById("farmChoco1");
    chocoFarmFactor = false;
    chocoDisplay.style.display = "block";
  }
}

//леденцы
function buyFunLolli(quantity1) {
  if (candyCounter - 1 >= 40 && quantity1 !== 10) {
    let candiesBuyCounterVar = document.getElementById("candiesCounter");

    candyCounter -= 40;
    Lolli++;
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    lolliBuyCounterVar.innerHTML = Lolli;
    candiesBuyCounterVar.innerHTML = candyCounter;

    //Леденцы Show
    if (lolliFactor == true) {
      lolliFactor = false;
      let lolliStatDisplay = document.getElementById("lolliStat");
      lolliStatDisplay.style.display = "block";
    }
  } else if (candyCounter - 1 >= 400 && quantity1 == 10) {
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    let candiesBuyCounterVar = document.getElementById("candiesCounter");

    candyCounter -= 400;
    Lolli += 10;

    lolliBuyCounterVar.innerHTML = Lolli;
    candiesBuyCounterVar.innerHTML = candyCounter;

    if (lolliFactor == true) {
      lolliFactor = false;
      let lolliStatDisplay = document.getElementById("lolliStat");
      lolliStatDisplay.style.display = "block";
    }
  } else {
    let lolliFew = document.getElementById("Few");

    lolliFew.style.opacity = "100";

    setTimeout(function () {
      lolliFew.style.opacity = "0";
    }, 1000);
  }
}

//меч
let hunterLink = document.getElementById("hunterLink");

function buyFunSword() {
  if (candyCounter - 1 >= 550) {
    let swordBuyCounterVar = document.getElementById("swordCounter");
    let candiesBuyCounterVar = document.getElementById("candiesCounter");
    let pSword = document.getElementById("pSword"); // Строка с покупкой

    candyCounter -= 550;
    Sword = "Деревянный меч";

    pSword.style.display = "none";
    swordBuyCounterVar.innerHTML = Sword;
    candiesBuyCounterVar.innerHTML = candyCounter;

    hunterLink.style.display = "inline-block";

    //Меч show
    if (swordFactor == true) {
      swordFactor = false;
      let swordStatDisplay = document.getElementById("swordStat");
      swordStatDisplay.style.display = "block";
    }
  } else {
    let swordFew = document.getElementById("Few");

    swordFew.style.opacity = "100";

    setTimeout(function () {
      swordFew.style.opacity = "0";
    }, 1000);
  }
}

//сачок
function buyFunNet() {
  if (candyCounter - 1 >= 950) {
    let netBuyCounterVar = document.getElementById("netCounter");
    let candiesBuyCounterVar = document.getElementById("candiesCounter");
    let pNet = document.getElementById("pNet"); // Строка с покупкой

    factor = 2; // Увеличение дохода * 2
    candyCounter -= 950;
    Net = "Деревянный сачок";

    netBuyCounterVar.innerHTML = Net;
    candiesBuyCounterVar.innerHTML = candyCounter;
    pNet.style.display = "none";

    //NET
    if (netFactor == true) {
      netFactor = false;
      let netStatDisplay = document.getElementById("netStat");
      netStatDisplay.style.display = "block";
    }
  } else {
    let netFew = document.getElementById("Few");

    netFew.style.opacity = "100";

    setTimeout(function () {
      netFew.style.opacity = "0";
    }, 1000);
  }
}

//Счет конфет
let min = 9;
let max = 21;
let maxControl = max;
let minControl = min;
let minMaxControl = 0;
let candyIncomeCount = 0;
let maxCorrect = 1;
let contrOne = 1;
let contrTwo = 2;
let contrFive = 5;
let contrFour = 4;
let farmTime = 150000;

let contribution = 10;

//Ограничения по посадке которые потом можно будет контролить
let controlLimit1 = 500;
let controlLimit2 = 1000;
let controlLimit3 = 2000;
let controlLimit4 = 3500;
let controlLimit5 = 4500;
let controlLimit6 = 5000;
let controlLimit7 = 6500;
let controlLimit8 = 10000;
let controlLimit9 = 12000;

function changeFarm() {
  if (contribution === 10) {
    if (candyIncomeCount === 0) {
      let contributionCountsub = document.getElementById("contributionCountsub");
      let contributionCount = document.getElementById("contributionCount");
      let candyIncome = document.getElementById("candyIncome");
      contributionCount.innerHTML = "100";
      contributionCountsub.innerHTML = "100";
      contribution = 100;
      min *= 10;
      max *= 10;
      maxCorrect *= 10;
      contrFive *= 10;
      contrOne *= 10;
      contrTwo *= 10;
      contrFour *= 10;
      maxControl *= 10;
      minControl *= 10;
      candyIncome.innerHTML = min + " до " + (max - 10);
    } else {
      let FarmCandyFew = document.getElementById("FarmCandyFew");
      FarmCandyFew.style.display = "inline"; //Показывет окно
      setTimeout('FarmCandyFew.style.opacity = "1";', 1);

      setTimeout(function () {
        FarmCandyFew.style.opacity = "0";
        setTimeout('FarmCandyFew.style.display = "none"', 301);
      }, 1300);
    }
  } else if (contribution === 100) {
    if (candyIncomeCount === 0) {
      contributionCount.innerHTML = "10";
      contributionCountsub.innerHTML = "10";
      contribution = 10;
      min /= 10;
      max /= 10;
      maxCorrect /= 10;
      contrFive /= 10;
      contrOne /= 10;
      contrFour /= 10;
      contrTwo /= 10;
      maxControl /= 10;
      minControl /= 10;
      candyIncome.innerHTML = min + " до " + (max - 1);
    } else {
      FarmCandyFew.style.display = "inline"; //Показывет окно
      setTimeout('FarmCandyFew.style.opacity = "1";', 1);

      setTimeout(function () {
        FarmCandyFew.style.opacity = "0";
        setTimeout('FarmCandyFew.style.display = "none"', 301);
      }, 1300);
    }
  }
}

function CandyFarmInt() {
  if (candyFarmFactor == false) {
    //Хватает ли конфет +  значения
    if (candyCounter > contribution) {
      candyIncomeCount += contribution;
      //Show
      let candyIncomeCounter = document.getElementById("candyIncomeCounter");
      let candiesImcomeUpdate = document.getElementById("candiesCounter");
      candyIncomeCounter.innerHTML = candyIncomeCount + " шт"; //значиния при нажатии
      candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
    }

    //Main
    let candyIncome = document.getElementById("candyIncome");

    if (minMaxControl == controlLimit1 && candyCounter > contribution) {
      console.log(minMaxControl);
      min -= contrOne;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }

    if (minMaxControl == controlLimit2 && candyCounter > contribution) {
      max -= contrOne;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }
    if (minMaxControl == controlLimit3 && candyCounter > contribution) {
      max -= contrOne;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }

    if (minMaxControl == controlLimit4 && candyCounter > contribution) {
      min -= contrOne;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }

    if (minMaxControl == controlLimit5 && candyCounter > contribution) {
      max -= contrOne;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }

    if (minMaxControl == controlLimit6 && candyCounter > contribution) {
      min -= contrOne;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }

    if (minMaxControl == controlLimit7 && candyCounter > contribution) {
      max -= contrTwo;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }

    if (minMaxControl == controlLimit8 && candyCounter > contribution) {
      min -= contrTwo;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }

    if (minMaxControl == controlLimit9 && candyCounter > contribution) {
      min -= contrFour;
      max -= contrFive;
      candyIncome.innerHTML = min + " до " + (max - maxCorrect);
    }

    if (candyCounter > contribution) {
      minMaxControl += contribution;
      setTimeout(function () {
        minMaxControl -= contribution;
        candyIncomeCount = minMaxControl;
        let candyIncome = document.getElementById("candyIncome");
        let candiesImcomeCountUpdate = document.getElementById("candiesCounter");
        let random = Math.floor(Math.random() * (max - min)) + min;
        let candyIncomeCounter = document.getElementById("candyIncomeCounter");

        candyCounter += random;
        candiesImcomeCountUpdate.innerHTML = candyCounter - 1; //Обновить счет
        candyIncomeCounter.innerHTML = candyIncomeCount + " шт";
        //Интерактивное изменение счета
        console.log(min + "min");
        console.log(max + "max");
        if (minMaxControl == controlLimit9) {
          min = minControl - contrFour;
          max = maxControl - contrFive;
          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }

        if (minMaxControl == controlLimit8) {
          min += contrTwo;

          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }

        if (minMaxControl == controlLimit7) {
          max += contrTwo;
          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }

        if (minMaxControl == controlLimit6) {
          min += contrOne;
          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }

        if (minMaxControl == controlLimit5) {
          max += contrOne;
          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }

        if (minMaxControl == controlLimit4) {
          min += contrOne;
          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }

        if (minMaxControl == controlLimit3) {
          max += contrOne;
          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }

        if (minMaxControl == controlLimit2) {
          max += contrOne;
          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }

        if (minMaxControl == controlLimit1) {
          min = minControl;
          max = maxControl;
          candyIncome.innerHTML = min + " до " + (max - maxCorrect);
        }
      }, farmTime);
    } else {
      let candyFew = document.getElementById("Few"); //Few update
      candyFew.style.opacity = "100";
      setTimeout(function () {
        candyFew.style.opacity = "0";
      }, 1000);
    }
  }
  if (candyCounter > contribution) {
    candyCounter -= contribution;
    let candiesImcomeCountUpdate = document.getElementById("candiesCounter");
    candiesImcomeCountUpdate.innerHTML = candyCounter - 1; //Обновить счет
  }
}

//Шоколад фарм!- 1

//Счет конфет
let minCh = 10;
let maxCh = 15;
let minChControl = minCh;
let maxChControl = maxCh;
let minMaxChControl = 0;
let ChIncomeCount = 0;
let contributionCh = 10;
let maxChCorrect = 1;
let contrFourCh = 4;
let contrOneCh = 1;

//Ограничения по посадке которые потом можно будет контролить
let controlLimitCh1 = 200;
let controlLimitCh2 = 500;
let controlLimitCh3 = 900;
let controlLimitCh4 = 1200;
let controlLimitCh5 = 1600;
let controlLimitCh6 = 2000;
let controlLimitCh7 = 2500;
let controlLimitCh8 = 3000;
let controlLimitCh9 = 6000;

function changeChocoFarm() {
  if (contributionCh === 10) {
    if (ChIncomeCount === 0) {
      let contributionCountChsub = document.getElementById("contributionCountChsub");
      let contributionChCount = document.getElementById("contributionChCount");
      let chocoIncome = document.getElementById("chocoIncome");
      contributionChCount.innerHTML = "100";
      contributionCountChsub.innerHTML = "100";
      contributionCh = 100;
      minCh *= 10;
      maxCh *= 10;
      maxChCorrect *= 10;
      contrFourCh *= 10;
      contrOneCh *= 10;
      maxChControl *= 10;
      minChControl *= 10;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - 10);
    } else {
      let FarmChocoFew = document.getElementById("FarmChocoFew");
      FarmChocoFew.style.display = "inline"; //Показывет окно
      setTimeout('FarmChocoFew.style.opacity = "1";', 1);

      setTimeout(function () {
        FarmChocoFew.style.opacity = "0";
        setTimeout('FarmChocoFew.style.display = "none"', 301);
      }, 1300);
    }
  } else if (contributionCh === 100) {
    if (ChIncomeCount === 0) {
      contributionChCount.innerHTML = "10";
      contributionCountChsub.innerHTML = "10";
      contributionCh = 10;
      minCh /= 10;
      maxCh /= 10;
      maxChCorrect /= 10;
      contrFourCh /= 10;
      contrOneCh /= 10;
      maxChControl /= 10;
      minChControl /= 10;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - 1);
    } else {
      FarmChocoFew.style.display = "inline"; //Показывет окно
      setTimeout('FarmChocoFew.style.opacity = "1";', 1);

      setTimeout(function () {
        FarmChocoFew.style.opacity = "0";
        setTimeout('FarmChocoFew.style.display = "none"', 301);
      }, 1300);
    }
  }
}

function ChocoFarmInt() {
  if (chocoFarmFactor == false) {
    //Хватает ли конфет +  значения
    if (chocoCounter > contributionCh) {
      ChIncomeCount += contributionCh;
      //Show
      let chocoIncomeCounter = document.getElementById("chocoIncomeCounter");
      let chocoImcomeUpdate = document.getElementById("chocolateCounter");
      chocoIncomeCounter.innerHTML = ChIncomeCount + " шт"; //значиния при нажатии
      chocoImcomeUpdate.innerHTML = chocoCounter; // - chocoi] update
    }
    //Main
    let chocoIncome = document.getElementById("chocoIncome");

    if (minMaxChControl == controlLimitCh1 && chocoCounter > contributionCh) {
      minCh -= contrOneCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (minMaxChControl == controlLimitCh2 && chocoCounter > contributionCh) {
      maxCh -= contrOneCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (minMaxChControl == controlLimitCh3 && chocoCounter > contributionCh) {
      maxCh -= contrOneCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (minMaxChControl == controlLimitCh4 && chocoCounter > contributionCh) {
      minCh -= contrOneCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (minMaxChControl == controlLimitCh5 && chocoCounter > contributionCh) {
      maxCh -= contrOneCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (minMaxChControl == controlLimitCh6 && chocoCounter > contributionCh) {
      minCh -= contrOneCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (minMaxChControl == controlLimitCh7 && chocoCounter > contributionCh) {
      maxCh -= contrOneCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (minMaxChControl == controlLimitCh8 && chocoCounter > contributionCh) {
      minCh -= contrOneCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (minMaxChControl == controlLimitCh9 && chocoCounter > contributionCh) {
      minCh -= contrFourCh;
      maxCh -= contrFourCh;
      chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
    }

    if (chocoCounter > contributionCh) {
      minMaxChControl += contributionCh;

      setTimeout(function () {
        minMaxChControl -= contributionCh;
        ChIncomeCount = minMaxChControl;

        let chocoIncome = document.getElementById("chocoIncome");
        let chocolateImcomeCountUpdate = document.getElementById("chocolateCounter");
        let random1 = Math.floor(Math.random() * (maxCh - minCh)) + minCh;
        let chocoIncomeCounter = document.getElementById("chocoIncomeCounter");
        chocoCounter += random1;
        chocolateImcomeCountUpdate.innerHTML = chocoCounter; //Обновить счет
        chocoIncomeCounter.innerHTML = ChIncomeCount + " шт";
        //Интерактивное изменение счета

        if (minMaxChControl == controlLimitCh9) {
          minCh = minChControl - contrFourCh;
          maxCh = maxChControl - contrFourCh;
          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }

        if (minMaxChControl == controlLimitCh8) {
          minCh += contrOneCh;

          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }

        if (minMaxChControl == controlLimitCh7) {
          maxCh += contrOneCh;
          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }

        if (minMaxChControl == controlLimitCh6) {
          minCh += contrOneCh;
          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }

        if (minMaxChControl == controlLimitCh5) {
          maxCh += contrOneCh;
          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }

        if (minMaxChControl == controlLimitCh4) {
          minCh += contrOneCh;
          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }

        if (minMaxChControl == controlLimitCh3) {
          maxCh += contrOneCh;
          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }

        if (minMaxChControl == controlLimitCh2) {
          maxCh += contrOneCh;
          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }

        if (minMaxChControl == controlLimitCh1) {
          minCh = minChControl;
          maxCh = maxChControl;
          chocoIncome.innerHTML = minCh + " до " + (maxCh - maxChCorrect);
        }
      }, farmTime);
    } else {
      let chocoFewAlert = document.getElementById("chocoFew"); //Few update
      chocoFewAlert.style.display = "inline"; //Показывет окно
      setTimeout(function () {
        let chocoFewAlert = document.getElementById("chocoFew"); //Few update
        chocoFewAlert.style.opacity = "1";
      }, 1);

      setTimeout(function () {
        let chocoFewAlert = document.getElementById("chocoFew"); //Few update
        chocoFewAlert.style.opacity = "0";
        setTimeout(function () {
          let chocoFewAlert = document.getElementById("chocoFew"); //Few update
          chocoFewAlert.style.display = "none";
        }, 401);
      }, 1300);
    }
    if (chocoCounter > contributionCh) {
      chocoCounter -= contributionCh;
      let chocoImcomeUpdate = document.getElementById("chocolateCounter");
      chocoImcomeUpdate.innerHTML = chocoCounter - 1; // - chocoil update
    }
  }
}

//Модальное окно"Rules"

let myRules = document.getElementById("myRules");
let rulesBtn = document.getElementById("rulesBtn");
let rulesClose = document.getElementsByClassName("rulesClose")[0];
let startWindow = document.getElementById("startWindow");
//Переменные для смены блока
let rulesBody = document.getElementById("rulesBody");
let huntWindow = document.getElementById("huntWindow");
let huntWindow2 = document.getElementById("huntWindow2");
let shopWindow = document.getElementById("shopWindow");
let farmWindow = document.getElementById("farmWindow");
let incomeWindow = document.getElementById("incomeWindow");
let autoWindow = document.getElementById("autoWindow");
let feedbackWindow = document.getElementById("feedbackWindow");
let cardFirst = document.getElementById("cardFirst");
let gameFirst = document.getElementById("gameFirst");
let canvas = document.getElementById("canvas");
let windCoose = document.getElementById("windCoose");

// Поход
let mainHike = document.getElementById("mainHike");
let sityHike = document.getElementById("sityHike");
let bluepoisonHike = document.getElementById("bluepoisonHike");
let poisonHike = document.getElementById("poison");
let redPoisonHike = document.getElementById("redPoison");
let swordsHike = document.getElementById("swords");
let swords2Hike = document.getElementById("swords2");
let commonShopHike = document.getElementById("commonShop");
let commonShop2Hike = document.getElementById("commonShop2");
let gameSword = document.getElementById("gameSword");

let goHike = document.getElementById("goHike");
let hountHike = document.getElementById("hountHike");

let alertHike = document.getElementById("alertHike");
let cooseHike = document.getElementById("cooseHike");
let LastHike = document.getElementById("LastHike");
let backBtn = 0;

let bluePoison1ProductInfo = document.getElementById("bluePoison1ProductInfo");
let bluePoison2ProductInfo = document.getElementById("bluePoison2ProductInfo");
let bluePoison3ProductInfo = document.getElementById("bluePoison3ProductInfo");
let bluePoison4ProductInfo = document.getElementById("bluePoison4ProductInfo");
let bluePoison5ProductInfo = document.getElementById("bluePoison5ProductInfo");

let goodsBlue = document.getElementById("GoodsBlue");

let ARR = [bluepoisonHike, poisonHike, redPoisonHike, swordsHike, swords2Hike, commonShopHike, commonShop2Hike];

let alertRules = document.getElementById("alertRules"); // Для высвечивания сообщения "Вы уже на этой странице"
rulesBtn.onclick = function () {
  myRules.style.display = "block";
};
rulesClose.onclick = function () {
  //Закрытие руководства
  rulesBody.style.display = "block";
  myRules.style.display = "none";
  huntWindow2.style.display = "none";
  huntWindow.style.display = "none";
  incomeWindow.style.display = "none";
  startWindow.style.display = "none";
  farmWindow.style.display = "none";
  feedbackWindow.style.display = "none";
  shopWindow.style.display = "none";
  autoWindow.style.display = "none";
};

window.onclick = function (event) {
  //Закрытие 2 модальных окно
  if (event.target == myRules) {
    myRules.style.display = "none";
    huntWindow2.style.display = "none";
    startWindow.style.display = "none";
    huntWindow.style.display = "none";
    farmWindow.style.display = "none";
    incomeWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    rulesBody.style.display = "block";
    shopWindow.style.display = "none";
    autoWindow.style.display = "none";
  }
  if (event.target == myHike) {
    myHike.style.display = "none";

    goHike.innerHTML = "Идем в поход";
    mainHike.style.display = "block";
    sityHike.style.display = "none";
    hountHike.style.display = "none";
    bluepoisonHike.style.display = "none";
    commonShop2Hike.style.display = "none";
    commonShopHike.style.display = "none";
    swords2Hike.style.display = "none";
    swordsHike.style.display = "none";
    poisonHike.style.display = "none";
    bluepoisonHike.style.display = "none";
    redPoisonHike.style.display = "none";
    bluePoison1ProductInfo.style.display = "none";
    bluePoison2ProductInfo.style.display = "none";
    bluePoison3ProductInfo.style.display = "none";
    bluePoison5ProductInfo.style.display = "none";
    bluePoison4ProductInfo.style.display = "none";
  }
};

//Смена окон

function startRulesFun() {
  //Начало руководство
  rulesBody.style.display = "none";
  startWindow.style.display = "block";
}

function huntRulesFun() {
  //Охота1 руководство
  if (huntWindow.style.display === "block") {
    alertRules.style.display = "inline"; //Показывет окно
    setTimeout('alertRules.style.opacity = "1";', 1);

    setTimeout(function () {
      alertRules.style.opacity = "0";
      setTimeout('alertRules.style.display = "none"', 301);
    }, 1300); // Cкрывает через 1300 мс
  } else {
    huntWindow.style.display = "block";
    rulesBody.style.display = "none";
    feedbackWindow.style.display = "none";
    shopWindow.style.display = "none";
    incomeWindow.style.display = "none";
    farmWindow.style.display = "none";
    huntWindow2.style.display = "none";
    autoWindow.style.display = "none";
    startWindow.style.display = "none";
  }
}

function huntRulesFun2() {
  //Охота2 руководство
  huntWindow.style.display = "none";
  shopWindow.style.display = "none";
  farmWindow.style.display = "none";
  rulesBody.style.display = "none";
  huntWindow2.style.display = "block";
}

function mainRulesFun() {
  //Главная
  if (rulesBody.style.display !== "none") {
    alertRules.style.display = "inline"; //Показывет окно
    setTimeout('alertRules.style.opacity = "1";', 1);

    setTimeout(function () {
      alertRules.style.opacity = "0";
      setTimeout('alertRules.style.display = "none"', 301);
    }, 1300); // Cкрывает через 1300 мс
  } else {
    rulesBody.style.display = "block";
    huntWindow.style.display = "none";
    huntWindow2.style.display = "none";
    autoWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    incomeWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    farmWindow.style.display = "none";
    startWindow.style.display = "none";
    shopWindow.style.display = "none";
  } //Вы на этой же странице main
}

function shopRulesFun() {
  //Магазины и торговцы
  if (shopWindow.style.display === "block") {
    alertRules.style.display = "inline"; //Показывет окно
    setTimeout('alertRules.style.opacity = "1";', 1);

    setTimeout(function () {
      alertRules.style.opacity = "0";
      setTimeout('alertRules.style.display = "none"', 301);
    }, 1300); // Cкрывает через 1300 мс
  } else {
    shopWindow.style.display = "block";
    rulesBody.style.display = "none";
    huntWindow.style.display = "none";
    huntWindow2.style.display = "none";
    farmWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    autoWindow.style.display = "none";
    incomeWindow.style.display = "none";
    startWindow.style.display = "none";
    autoWindow.style.display = "none";
  }
}

function farmRulesFun() {
  //Фермы
  if (farmWindow.style.display === "block") {
    alertRules.style.display = "inline"; //Показывет окно
    setTimeout('alertRules.style.opacity = "1";', 1);

    setTimeout(function () {
      alertRules.style.opacity = "0";
      setTimeout('alertRules.style.display = "none"', 301);
    }, 1300); // Cкрывает через 1300 мс
  } else {
    farmWindow.style.display = "block";
    shopWindow.style.display = "none";
    rulesBody.style.display = "none";
    huntWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    incomeWindow.style.display = "none";
    huntWindow2.style.display = "none";
    startWindow.style.display = "none";
    autoWindow.style.display = "none";
  }
}
function incomeFarmRules() {
  //Доход руководство
  huntWindow2.style.display = "none";
  huntWindow.style.display = "none";
  shopWindow.style.display = "none";
  farmWindow.style.display = "none";
  rulesBody.style.display = "none";
  autoWindow.style.display = "none";
  incomeWindow.style.display = "block";
}

function autoFarmRules() {
  //авто Ферма руководство
  autoWindow.style.display = "block";
  huntWindow2.style.display = "none";
  huntWindow.style.display = "none";
  shopWindow.style.display = "none";
  farmWindow.style.display = "none";
  rulesBody.style.display = "none";
  feedbackWindow.style.display = "none";
  incomeWindow.style.display = "none";
}

function feedbackFarmRules() {
  //Обратная связь в руководстве
  feedbackWindow.style.display = "block";
  autoWindow.style.display = "none";
  huntWindow2.style.display = "none";
  huntWindow.style.display = "none";
  shopWindow.style.display = "none";
  farmWindow.style.display = "none";
  rulesBody.style.display = "none";
  incomeWindow.style.display = "none";
}

//Анимация "Идем в поход" переменные
let loadSpan1 = document.getElementById("loadSpan1id");
let loadSpan2 = document.getElementById("loadSpan2id");
let loadSpan3 = document.getElementById("loadSpan3id");

let myHike = document.getElementById("myHike");
let hikeBtn = document.getElementById("hikeBtn");

let hikeClose = document.getElementsByClassName("hikeClose")[0];

hikeBtn.onclick = function () {
  // if(hunterLink.style.display == 'inline-block'){ // !!!!!!!ВЕРНУТЬ

  myHike.style.display = "block";
  // }	// !!!!!!!ВЕРНУТЬ
};
hikeClose.onclick = function () {
  //Закрытие модального окна c походом
  myHike.style.display = "none";

  goHike.innerHTML = "Идем в поход";
  mainHike.style.display = "block";
  sityHike.style.display = "none";
  hountHike.style.display = "none";
  bluepoisonHike.style.display = "none";
  commonShop2Hike.style.display = "none";
  commonShopHike.style.display = "none";
  swords2Hike.style.display = "none";
  swordsHike.style.display = "none";
  poisonHike.style.display = "none";
  bluepoisonHike.style.display = "none";
  redPoisonHike.style.display = "none";
};

let flag = true;
function Animat() {
  //Анимация
  if (flag == true) {
    flag = false;
    setTimeout(function () {
      flag = true;
    }, 5601);
    setTimeout(function () {
      loadSpan1.style.opacity = "1";
    }, 100);
    setTimeout(function () {
      loadSpan2.style.opacity = "1";
    }, 600);
    setTimeout(function () {
      loadSpan3.style.opacity = "1";
    }, 1100);
    setTimeout(function () {
      loadSpan3.style.opacity = "0";
    }, 1600);
    setTimeout(function () {
      loadSpan2.style.opacity = "0";
    }, 2100);
    setTimeout(function () {
      loadSpan1.style.opacity = "0";
    }, 2600);
    setTimeout(function () {
      loadSpan1.style.opacity = "1";
    }, 3100);
    setTimeout(function () {
      loadSpan2.style.opacity = "1";
    }, 3600);
    setTimeout(function () {
      loadSpan3.style.opacity = "1";
    }, 4100);
    setTimeout(function () {
      loadSpan3.style.opacity = "0";
    }, 4600);
    setTimeout(function () {
      loadSpan2.style.opacity = "0";
    }, 5100);
    setTimeout(function () {
      loadSpan1.style.opacity = "0";
    }, 5600);
  }
}

function sityHikeWindow() {
  bluepoisonHike.style.display = "none";
  mainHike.style.display = "none"; //Кнопка 'Свернуть в город'
  sityHike.style.display = "block";
  goHike.innerHTML = "Находимся в городе";
  backBtn = 1;
}

function hountHikeWindow() {
  hountHike.style.display = "block"; // Пойти на охоту
  mainHike.style.display = "none";
  sityHike.style.display = "none";
  draw();
  backBtn = 9;
}

function mainHikeWindow() {
  //Кнопка "на главную"
  if (mainHike.style.display !== "block") {
    mainHike.style.display = "block";

    goHike.innerHTML = "Идем в поход";

    hountHike.style.display = "none";
    sityHike.style.display = "none";
    bluepoisonHike.style.display = "none";
    commonShop2Hike.style.display = "none";
    commonShopHike.style.display = "none";
    swordsHike.style.display = "none";
    swords2Hike.style.display = "none";
    poisonHike.style.display = "none";
    bluepoisonHike.style.display = "none";
    redPoisonHike.style.display = "none";
    bluePoison1ProductInfo.style.display = "none";
    bluePoison2ProductInfo.style.display = "none";
    bluePoison3ProductInfo.style.display = "none";
    bluePoison4ProductInfo.style.display = "none";
    bluePoison5ProductInfo.style.display = "none";

    backBtn = 0;
  } else {
    alertHike.style.display = "inline"; //Показывет окно
    setTimeout('alertHike.style.opacity = "1";', 1);

    setTimeout(function () {
      alertHike.style.opacity = "0";
      setTimeout('alertHike.style.display = "none"', 301);
    }, 1300);
  }
}

// Магазины
function bluePoisonWindow() {
  //Окно с голубым зльем
  bluepoisonHike.style.display = "block";
  hountHike.style.display = "none";
  mainHike.style.display = "none";
  sityHike.style.display = "none";
  redPoisonHike.style.display = "none";
  goodsBlue.style.display = "block";
  bluePoison1ProductInfo.style.display = "none";
  bluePoison2ProductInfo.style.display = "none";
  bluePoison3ProductInfo.style.display = "none";
  bluePoison5ProductInfo.style.display = "none";
  bluePoison4ProductInfo.style.display = "none";
  backBtn = 2;
}
function redPoisonWindow() {
  //Окно с голубым зльем
  redPoisonHike.style.display = "block";
  hountHike.style.display = "none";
  mainHike.style.display = "none";
  bluepoisonHike.style.display = "none";
  sityHike.style.display = "none";
  poisonHike.style.display = "none";
  backBtn = 3;
}
function PoisonWindow() {
  //Окно с голубым зльем
  poisonHike.style.display = "block";
  hountHike.style.display = "none";
  mainHike.style.display = "none";
  redPoisonHike.style.display = "none";
  sityHike.style.display = "none";
  swordsHike.style.display = "none";
  backBtn = 4;
}
function swordsWindow() {
  //Окно с голубым зльем
  swordsHike.style.display = "block";
  hountHike.style.display = "none";
  mainHike.style.display = "none";
  poisonHike.style.display = "none";
  sityHike.style.display = "none";
  swords2Hike.style.display = "none";
  backBtn = 5;
}
function swords2Window() {
  //Окно с голубым зльем
  swords2Hike.style.display = "block";
  hountHike.style.display = "none";
  mainHike.style.display = "none";
  swordsHike.style.display = "none";
  sityHike.style.display = "none";
  commonShopHike.style.display = "none";
  backBtn = 6;
}
function commonWindow() {
  //Окно с голубым зльем
  commonShopHike.style.display = "block";
  swords2Hike.style.display = "none";
  hountHike.style.display = "none";
  mainHike.style.display = "none";
  commonShop2Hike.style.display = "none";
  sityHike.style.display = "none";
  backBtn = 7;
}
function common2Window() {
  //Окно с голубым зльем
  commonShop2Hike.style.display = "block";
  hountHike.style.display = "none";
  commonShopHike.style.display = "none";
  mainHike.style.display = "none";
  sityHike.style.display = "none";
  backBtn = 8;
}

function bluePoison1ProductInfoWindow() {
  bluePoison1ProductInfo.style.display = "block";
  goodsBlue.style.display = "none";
}

function bluePoison2ProductInfoWindow() {
  bluePoison2ProductInfo.style.display = "block";
  goodsBlue.style.display = "none";
}
function bluePoison3ProductInfoWindow() {
  bluePoison3ProductInfo.style.display = "block";
  goodsBlue.style.display = "none";
}
function bluePoison4ProductInfoWindow() {
  bluePoison4ProductInfo.style.display = "block";
  goodsBlue.style.display = "none";
}
function bluePoison5ProductInfoWindow() {
  bluePoison5ProductInfo.style.display = "block";
  goodsBlue.style.display = "none";
}
// Кнопка назад
function backBtnHike() {
  //Кнопка назад

  switch (backBtn) {
    case 0:
      alertHikeFun();
      break;
    case 1:
      mainHikeWindow();
      break;
    case 2:
      sityHikeWindow();
      break;
    case 3:
      bluePoisonWindow();
      break;
    case 4:
      redPoisonWindow();
      break;
    case 5:
      PoisonWindow();
      break;
    case 6:
      swordsWindow();
      break;
    case 7:
      swords2Window();
      break;
    case 8:
      commonWindow();
      break;

    case 9:
      mainHikeWindow();
      break;
    default:
      alert("ERROR" + backBtn);
  }
}

// КНопка вперед
function forwardBtnHike() {
  if (backBtn < 9) {
    switch (backBtn) {
      case 0:
        alertChooseFun();
        break;
      case 1:
        bluePoisonWindow();
        break;
      case 2:
        redPoisonWindow();
        break;
      case 3:
        PoisonWindow();
        break;
      case 4:
        swordsWindow();
        break;
      case 5:
        swords2Window();
        break;
      case 6:
        commonWindow();
        break;
      case 7:
        common2Window();
        break;
      case 8:
        alertLastFun();
        break;

      default:
        alert("ERROR");
    }
  }

  if (backBtn >= 9) {
    switch (backBtn) {
      case 9:
        alert("Не готова!");
        break;
      default:
        alert("ERROR" + backBtn);
    }
  }
}

// Уже сдесь
function alertHikeFun() {
  alertHike.style.display = "inline"; //Показывет окно
  setTimeout('alertHike.style.opacity = "1";', 1);

  setTimeout(function () {
    alertHike.style.opacity = "0";
    setTimeout('alertHike.style.display = "none"', 301);
  }, 1300);
}

//Выберете куда пойти
function alertChooseFun() {
  cooseHike.style.display = "inline"; //Показывет окно
  setTimeout('cooseHike.style.opacity = "1";', 1);

  setTimeout(function () {
    cooseHike.style.opacity = "0";
    setTimeout('cooseHike.style.display = "none"', 301);
  }, 1300);
}

//Это последний торговец!
function alertLastFun() {
  LastHike.style.display = "inline"; //Показывет окно
  setTimeout('LastHike.style.opacity = "1";', 1);

  setTimeout(function () {
    LastHike.style.opacity = "0";
    setTimeout('LastHike.style.display = "none"', 301);
  }, 1300);
}

let flag1 = true;

function poisonEffectFarm1() {
  if (flag1 == true) {
    if (contribution == 10) {
      if (candyCounter >= 1700) {
        loose.play();
        alert("Успешно!");
        flag1 = false;
        min += 3;
        max += 3;
        minControl += 3;
        maxControl += 3;
        let candyIncome = document.getElementById("candyIncome");
        candyIncome.innerHTML = min + " до " + (max - 1);
        let candiesImcomeUpdate = document.getElementById("candiesCounter");
        candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
        setTimeout(function () {
          min -= 3;
          max -= 3;
          minControl -= 3;
          maxControl -= 3;
          let candyIncome = document.getElementById("candyIncome");
          candyIncome.innerHTML = min + " до " + (max - 1);
          flag1 = true;
        }, 240000);
      }
    }
    if (contribution == 100) {
      if (candyCounter >= 1700) {
        loose.play();
        alert("Успешно!");
        min += 30;
        max += 30;
        minControl += 30;
        maxControl += 30;
        let candyIncome = document.getElementById("candyIncome");
        candyIncome.innerHTML = min + " до " + (max - 10);
        let candiesImcomeUpdate = document.getElementById("candiesCounter");
        candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
        setTimeout(function () {
          min -= 30;
          max -= 30;
          minControl -= 30;
          maxControl -= 30;
          let candyIncome = document.getElementById("candyIncome");
          candyIncome.innerHTML = min + " до " + (max - 10);
        }, 240000);
      }
    }
    if (contributionCh == 10) {
      if (candyCounter >= 1200) {
        minCh += 2;
        maxCh += 2;
        minChControl += 2;
        maxChControl += 2;

        let candiesImcomeUpdate = document.getElementById("candiesCounter");
        candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
        let chocoIncome = document.getElementById("chocoIncome");
        chocoIncome.innerHTML = minCh + " до " + (maxCh - 1);

        setTimeout(function () {
          minCh -= 2;
          maxCh -= 2;
          minChControl -= 2;
          maxChControl -= 2;
          let chocoIncome = document.getElementById("chocoIncome");
          chocoIncome.innerHTML = minCh + " до " + (maxCh - 1);
        }, 240000);
      }
    }
    if (contributionCh == 100) {
      if (candyCounter >= 1700) {
        minCh += 20;
        maxCh += 20;
        minChControl += 20;
        maxChControl += 20;
        let candiesImcomeUpdate = document.getElementById("candiesCounter");
        candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
        let chocoIncome = document.getElementById("chocoIncome");
        chocoIncome.innerHTML = minCh + " до " + (maxCh - 10);

        setTimeout(function () {
          minCh -= 20;
          maxCh -= 20;
          minChControl -= 20;
          maxChControl -= 20;
          let chocoIncome = document.getElementById("chocoIncome");
          chocoIncome.innerHTML = minCh + " до " + (maxCh - 10);
        }, 240000);
      }
    }
    if (candyCounter >= 1700) {
      candyCounter -= 1700;
      let candiesImcomeUpdate = document.getElementById("candiesCounter");
      candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
    } else {
      let FewHike = document.getElementById("FewHike");
      FewHike.style.display = "inline"; //Показывет окно
      setTimeout('FewHike.style.opacity = "1";', 1);

      setTimeout(function () {
        FewHike.style.opacity = "0";
        setTimeout('FewHike.style.display = "none"', 301);
      }, 1300);
    }
  } else {
    alert("Error(Нельзя брать 2 зелья одного вида сразу)");
  }
}

let blue2flag = true;
function poisonEffectFarm2() {
  if (blue2flag == true) {
    if (candyCounter > 2400) {
      loose.play();
      alert("Успешно!");
      blue2flag = false;
      candyCounter -= 2400;
      let candiesImcomeUpdate = document.getElementById("candiesCounter");
      candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
      farmTime /= 5;
      setTimeout(function () {
        farmTime *= 5;
        blue2flag = true;
      }, 120000);
    } else {
      let FewHike = document.getElementById("FewHike");
      FewHike.style.display = "inline"; //Показывет окно
      setTimeout('FewHike.style.opacity = "1";', 1);
      setTimeout(function () {
        FewHike.style.opacity = "0";
        setTimeout('FewHike.style.display = "none"', 301);
      }, 1300);
    }
  } else {
    alert("Error(Нельзя брать 2 зелья одного вида сразу)");
  }
} //fun

let blue3Flag = true;
function poisonEffectFarm3() {
  if (blue3Flag == true) {
    if (candyCounter > 2000) {
      candyCounter -= 2000;
      blue3Flag = false;
      loose.play();
      alert("Успешно");
      let candiesImcomeUpdate = document.getElementById("candiesCounter");
      candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
      controlLimitCh1 += 500;
      controlLimitCh2 += 500;
      controlLimitCh3 += 500;
      controlLimitCh4 += 500;
      controlLimitCh5 += 500;
      controlLimitCh6 += 500;
      controlLimitCh7 += 500;
      controlLimitCh8 += 500;
      controlLimitCh9 += 500;
      controlLimit1 += 500;
      controlLimit2 += 500;
      controlLimit3 += 500;
      controlLimit4 += 500;
      controlLimit5 += 500;
      controlLimit6 += 500;
      controlLimit7 += 500;
      controlLimit8 += 500;
      controlLimit9 += 500;
      setTimeout(function () {
        controlLimitCh1 -= 500;
        controlLimitCh2 -= 500;
        controlLimitCh3 -= 500;
        controlLimitCh4 -= 500;
        controlLimitCh5 -= 500;
        controlLimitCh6 -= 500;
        controlLimitCh7 -= 500;
        controlLimitCh8 -= 500;
        controlLimitCh9 -= 500;
        controlLimit1 -= 500;
        controlLimit2 -= 500;
        controlLimit3 -= 500;
        controlLimit4 -= 500;
        controlLimit5 -= 500;
        controlLimit6 -= 500;
        controlLimit7 -= 500;
        controlLimit8 -= 500;
        controlLimit9 -= 500;
      }, 6000);
    } else {
      let FewHike = document.getElementById("FewHike");
      FewHike.style.display = "inline"; //Показывет окно
      setTimeout('FewHike.style.opacity = "1";', 1);
      setTimeout(function () {
        FewHike.style.opacity = "0";
        setTimeout('FewHike.style.display = "none"', 301);
      }, 1300);
    }
  } else {
    alert("Error(Нельзя брать 2 зелья одного вида сразу)");
  }
}

let blue4flag = true;
function poisonEffectFarm4() {
  if (blue4flag == true) {
    if (candyCounter > 500) {
      loose.play();
      alert("Успешно!");
      blue4flag = false;
      candyCounter -= 500;
      waitTime = 0;
      let candiesImcomeUpdate = document.getElementById("candiesCounter");
      candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
      setTimeout(function () {
        waitTime += 2000;
        blue4flag = true;
      }, 300000);
    } else {
      let FewHike = document.getElementById("FewHike");
      FewHike.style.display = "inline"; //Показывет окно
      setTimeout('FewHike.style.opacity = "1";', 1);
      setTimeout(function () {
        FewHike.style.opacity = "0";
        setTimeout('FewHike.style.display = "none"', 301);
      }, 1300);
    }
  } else {
    alert("Error(Нельзя брать 2 зелья одного вида сразу)");
  }
} //fun

let farmFlag5 = true;
function poisonEffectFarm5() {
  if (farmFlag5 == true) {
    if (candyCounter > 2000) {
      loose.play();
      alert("Успешно!");
      factor += 5;
      candyCounter -= 2000;
      farmFlag5 = false;
      setTimeout(function () {
        factor -= 5;
        farmFlag5 = true;
      }, 480000);
    } else {
      let FewHike = document.getElementById("FewHike");
      FewHike.style.display = "inline"; //Показывет окно
      setTimeout('FewHike.style.opacity = "1";', 1);
      setTimeout(function () {
        FewHike.style.opacity = "0";
        setTimeout('FewHike.style.display = "none"', 301);
      }, 1300);
    }
  } else {
    alert("Error(Нельзя брать 2 зелья одного вида сразу)");
  }
}

function FewNetShow() {
  let FewNet = document.getElementById("FewNet");
  FewNet.style.display = "inline"; //Показывет окно
  setTimeout('FewNet.style.opacity = "1";', 1);
  setTimeout(function () {
    FewNet.style.opacity = "0";
    setTimeout('FewNet.style.display = "none"', 301);
  }, 1300);
}

//Cачки
let netFlag1 = true;
function net1() {
  if (candyCounter > 1500 && Net == "Деревянный сачок" && netFlag1 == true) {
    loose.play();
    alert("Успешно");
    Net = "Конфетный сачок";
    candyCounter -= 1500;
    factor++;
    netFlag1 = false;
    let candiesImcomeUpdate = document.getElementById("candiesCounter");
    candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
  } else {
    FewNetShow();
  }
}

let netFlag2 = true;
function net2() {
  if (candyCounter > 5000 && Net == "Конфетный сачок" && netFlag2 == true) {
    loose.play();
    alert("Успешно");
    Net = "Шоколадный сачок";
    candyCounter -= 5000;
    factor++;
    netFlag2 = false;
    let candiesImcomeUpdate = document.getElementById("candiesCounter");
    candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
  } else {
    FewNetShow();
  }
}

let netFlag3 = true;
function net3() {
  if (candyCounter > 7000 && Net == "Шоколадный сачок" && netFlag3 == true) {
    loose.play();
    alert("Успешно");
    Net = "Леденцовый сачок";
    candyCounter -= 7000;
    factor++;
    netFlag3 = false;
    let candiesImcomeUpdate = document.getElementById("candiesCounter");
    candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
  } else {
    FewNetShow();
  }
}

let netFlag4 = true;
function net4() {
  if (candyCounter > 15000 && Net == "Леденцовый сачок" && netFlag4 == true) {
    loose.play();
    alert("Успешно");
    Net = "Керамический сачок";
    candyCounter -= 15000;
    factor++;
    netFlag4 = false;
    let candiesImcomeUpdate = document.getElementById("candiesCounter");
    candiesImcomeUpdate.innerHTML = candyCounter - 1; // - cadys update
  } else {
    FewNetShow();
  }
}

let netFlag5 = true;
function net5() {
  if (chocoCounter > 1500 && Net == "Керамический сачок" && netFlag5 == true) {
    loose.play();
    alert("Успешно");
    Net = "Оловянный сачок";
    chocoCounter -= 1500;
    factor++;
    netFlag5 = false;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
  } else {
    FewNetShow();
  }
}

let netFlag6 = true;
function net6() {
  if (chocoCounter > 2000 && Net == "Оловянный сачок" && netFlag6 == true) {
    loose.play();
    alert("Успешно");
    Net = "Медный сачок";
    chocoCounter -= 2000;
    factor++;
    netFlag6 = false;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
  } else {
    FewNetShow();
  }
}

let netFlag7 = true;
function net7() {
  if (chocoCounter > 3500 && Net == "Медный сачок" && netFlag7 == true) {
    loose.play();
    alert("Успешно");
    Net = "Магниевый сачок";
    chocoCounter -= 3500;
    factor++;
    netFlag7 = false;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
  } else {
    FewNetShow();
  }
}

let netFlag8 = true;
function net8() {
  if (chocoCounter > 5000 && Net == "Магниевый сачок" && netFlag8 == true) {
    loose.play();
    alert("Успешно");
    Net = "Свинцовый сачок";
    chocoCounter -= 5000;
    factor++;
    netFlag8 = false;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
  } else {
    FewNetShow();
  }
}

let netFlag9 = true;
function net9() {
  if (chocoCounter > 10000 && Net == "Свинцовый сачок" && netFlag9 == true) {
    loose.play();
    alert("Успешно");
    Net = "Железный сачок";
    chocoCounter -= 10000;
    factor += 2;
    netFlag9 = false;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
  } else {
    FewNetShow();
  }
}

let netFlag10 = true;
function net10() {
  if (chocoCounter > 15000 && Net == "Железный сачок" && netFlag10 == true) {
    loose.play();
    alert("Успешно");
    Net = "Латунный сачок";
    chocoCounter -= 15000;
    factor += 2;
    netFlag10 = false;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
  } else {
    FewNetShow();
  }
}

let netFlag11 = true;
function net11() {
  if (chocoCounter > 25000 && Net == "Латунный сачок" && netFlag11 == true) {
    loose.play();
    alert("Успешно");
    Net = "Алюминиевый сачок";
    chocoCounter -= 25000;
    factor += 2;
    netFlag11 = false;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
  } else {
    FewNetShow();
  }
}

let netFlag12 = true;
function net12() {
  if (Lolli > 10000 && Net == "Алюминиевый сачок" && netFlag12 == true) {
    loose.play();
    alert("Успешно");
    Net = "Композитный сачок";
    Lolli -= 10000;
    factor += 2;
    netFlag12 = false;
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    lolliBuyCounterVar.innerHTML = Lolli;
  } else {
    FewNetShow();
  }
}

let netFlag13 = true;
function net13() {
  if (Lolli > 15000 && Net == "Композитный сачок" && netFlag13 == true) {
    loose.play();
    alert("Успешно");
    Net = "Титановый сачок";
    Lolli -= 15000;
    factor += 2;
    netFlag13 = false;
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    lolliBuyCounterVar.innerHTML = Lolli;
  } else {
    FewNetShow();
  }
}

let netFlag14 = true;
function net14() {
  if (Lolli > 25000 && Net == "Титановый сачок" && netFlag14 == true) {
    loose.play();
    alert("Успешно");
    Net = "Цирконевый сачок";
    Lolli -= 25000;
    factor += 2;
    netFlag14 = false;
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    lolliBuyCounterVar.innerHTML = Lolli;
  } else {
    FewNetShow();
  }
}

let netFlag15 = true;
function net15() {
  if (Lolli > 35000 && Net == "Цирконевый сачок" && netFlag15 == true) {
    loose.play();
    alert("Успешно");
    Net = "Алмазный сачок";
    Lolli -= 35000;
    factor += 2;
    netFlag15 = false;
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    lolliBuyCounterVar.innerHTML = Lolli;
  } else {
    FewNetShow();
  }
}

let netFlag16 = true;
function net16() {
  if (Lolli > 50000 && Net == "Алмазный сачок" && netFlag16 == true) {
    loose.play();
    alert("Успешно");
    Net = "Волшебный сачок";
    Lolli -= 50000;
    factor += 2;
    netFlag16 = false;
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    lolliBuyCounterVar.innerHTML = Lolli;
  } else {
    FewNetShow();
  }
}

function changeFirst() {
  if (chocoCounter > 10) {
    loose.play();
    alert("Успешно!");
    chocoCounter -= 10;
    candyCounter += 190;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
    let candiesImcomeUpdate = document.getElementById("candiesCounter");
    candiesImcomeUpdate.innerHTML = candyCounter; // - cadys update
  } else {
    FewNetShow();
  }
}

function changeSecond() {
  if (chocoCounter > 10) {
    loose.play();
    alert("Успешно!");
    chocoCounter -= 10;
    Lolli += 5;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    lolliBuyCounterVar.innerHTML = Lolli;
  } else {
    FewNetShow();
  }
}

function changethird() {
  if (Lolli > 10) {
    loose.play();
    alert("Успешно!");
    Lolli -= 10;
    candyCounter += 390;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
    let candiesImcomeUpdate = document.getElementById("candiesCounter");
    candiesImcomeUpdate.innerHTML = candyCounter; // - cadys update
  } else {
    FewNetShow();
  }
}

function changefourth() {
  if (Lolli > 10) {
    loose.play();
    alert("Успешно!");
    Lolli -= 10;
    chocoCounter += 19;
    let chocoBuyCounterVar = document.getElementById("chocolateCounter");
    chocoBuyCounterVar.innerHTML = chocoCounter;
    let lolliBuyCounterVar = document.getElementById("lollipopCounter");
    lolliBuyCounterVar.innerHTML = Lolli;
  } else {
    FewNetShow();
  }
}

let cardFirstScip = true;
function cardFirstFun() {
  if (cardFirstScip == true) {
    cardFirstScip = false;
    windCoose.style.display = "none";
    cardFirst.style.display = "none";
    canvas.style.display = "block";
    gameFirst.style.display = "block";
    setTimeout(function () {
      cardFirstScip = true;
    }, 600000);
  } else {
    FewNetShow();
  }
}

let flag1Spd = true;
let flag2Spd = true;
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var player = new Image();
var bg = new Image();
var enemy = new Image();
var atack = new Image();
let PointCounter = 0;
let PointCounterShow = document.getElementById("PointCounter");
let attempt = 3;
let attemptShow = document.getElementById("attempt");
let FlagPipe = true;

player.src = "images/player.png";
bg.src = "images/FirstMap.png";
enemy.src = "images/enemy.png";
atack.src = "images/atack.png";

xPos = 140;
yPos = 130;
LostCount = 0;

let speedSpice = 2000;
let speed = 1;
// Звуковые файлы
let spice;

var pipe = [];
pipe[0] = {
  x: cvs.height,
  y: -40,
};

function draw() {
  if (gameFirst.style.display == "block" && hountHike.style.display == "block") {
    ctx.drawImage(bg, 0, 0, 300, 200);

    for (var i = 0; i < pipe.length; i++) {
      ctx.drawImage(atack, pipe[i].x, pipe[i].y, 20, 14);
      if (pipe[i].y <= 150) {
        pipe[i].y += speed;
      }
      if (pipe[i].y == 150) {
        PointCounter++;
        PointCounterShow.innerHTML = PointCounter;
      }
      if (PointCounter == 30) {
        speed = 2;
      }
      if (PointCounter == 60) {
        speed = 3;
      }

      if (FlagPipe == true) {
        gameSword.innerHTML = Sword;
        FlagPipe = false;
        spice = setInterval(function () {
          if (gameFirst.style.display == "none") {
            FlagPipe = true;
            clearInterval(spice);
            return;
          }
          console.error("ADD");
          pipe.push({
            x: Math.floor(Math.random() * 75) + 105,
            y: 0,
          });
        }, speedSpice);
      }

      if (PointCounter == 40 && flag1Spd == true) {
        flag1Spd = false;
        speedSpice = 1300;
        clearInterval(spice);
        FlagPipe = true;
      }

      if (PointCounter == 90 && flag2Spd == true) {
        flag2Spd = false;
        speedSpice = 900;
        clearInterval(spice);
        FlagPipe = true;
      }

      if (yPos < pipe[i].y + 10 && yPos > pipe[i].y - 13 && xPos < pipe[i].x + 17 && xPos > pipe[i].x - 17) {
        LostCount++;
        attempt--;
        yPos = 130;
        xPos = 140;
        speed = 1;
        attemptShow.innerHTML = attempt;
        PointCounter = 0;
        speedSpice = 2000;
        PointCounterShow.innerHTML = PointCounter;
        pipe[0] = {
          x: cvs.height,
          y: -40,
        };
        pipe = [];
      }

      if (attempt == -1) {
        myHike.style.display = "none";
        goHike.innerHTML = "Идем в поход";
        mainHike.style.display = "block";
        sityHike.style.display = "none";
        hountHike.style.display = "none";
        bluepoisonHike.style.display = "none";
        commonShop2Hike.style.display = "none";
        commonShopHike.style.display = "none";
        swords2Hike.style.display = "none";
        swordsHike.style.display = "none";
        poisonHike.style.display = "none";
        bluepoisonHike.style.display = "none";
        redPoisonHike.style.display = "none";
        windCoose.style.display = "block";
        cardFirst.style.display = "block";
        canvas.style.display = "none";
        gameFirst.style.display = "none";
        attempt = 4;
        speedSpice = 2000;
        PointCounter = 0;

        speed = 1;
      }
    } //end for cvs.height + 30  cvs.height - 45

    ctx.drawImage(player, xPos, yPos, 20, 14);
    ctx.drawImage(enemy, 140, 0, 20, 14);
    document.addEventListener("keydown", move);
  } else {
    yPos = 130;
    xPos = 140;
    pipe = [];
    pipe[0] = {
      x: cvs.height,
      y: -40,
    };
    attempt = 3;
    PointCounter = 29;
    speed = 1;
    speedSpice = 2000;
    windCoose.style.display = "block";
    cardFirst.style.display = "block";
    canvas.style.display = "none";
    gameFirst.style.display = "none";
    console.log("return");
    return;
  }
  requestAnimationFrame(draw);
}

function move(evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode;
  if ((charCode == "87" && yPos > 0) || (charCode == "38" && yPos > 0)) {
    yPos -= 5;
  }
  if ((charCode == "83" && yPos < 135) || (charCode == "40" && yPos < 135)) {
    yPos += 5;
  }
  if ((charCode == "65" && xPos > 110) || (charCode == "37" && xPos > 110)) {
    xPos -= 10;
  }
  if ((charCode == "68" && xPos < 175) || (charCode == "39" && xPos < 175)) {
    xPos += 10;
  }
}
