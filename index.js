let input = document.querySelector(".calc-input");
let basicMode = document.querySelector(".basic-mode");
let complexMode = document.querySelector(".complex-mode");
let currentKey = "";

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let key = e.currentTarget.innerText;
    let btnContains = (item) => {
      return e.currentTarget.classList.contains(item);
    };
    if (btnContains("mode1")) {
      e.currentTarget.style.display = "none";
      e.currentTarget.nextElementSibling.style.display = "block";
      basicMode.style.display = "none";
      complexMode.style.display = "flex";
    } else if (btnContains("mode2")) {
      e.currentTarget.style.display = "none";
      e.currentTarget.previousElementSibling.style.display = "block";
      complexMode.style.display = "none";
      basicMode.style.display = "flex";
    } else if (
      !btnContains("mode1") &&
      !btnContains("mode2") &&
      key != "=" &&
      key != "C" &&
      key != "*" &&
      key != "/" &&
      key != "√" &&
      key != "x ²" &&
      key != "%" &&
      key != "←" &&
      key != "±" &&
      key != "sin" &&
      key != "cos" &&
      key != "tan" &&
      key != "log" &&
      key != "ln" &&
      key != "x^" &&
      key != "x !" &&
      key != "π" &&
      key != "e" &&
      key != "rad" &&
      key != "∘"
    ) {
      input.value = currentKey += key;
    } else if (key === "=") {
      equals();
    } else if (key === "C") {
      clear();
    } else if (key === "*") {
      multiply();
    } else if (key === "/") {
      divide();
    } else if (key === "±") {
      plusMinus();
    } else if (key === "←") {
      backspace();
    } else if (key === "%") {
      percent();
    } else if (key === "π") {
      pi();
    } else if (key === "x ²") {
      square();
    } else if (key === "√") {
      squareRoot();
    } else if (key === "sin") {
      sin();
    } else if (key === "cos") {
      cos();
    } else if (key === "tan") {
      tan();
    } else if (key === "log") {
      log();
    } else if (key === "ln") {
      ln();
    } else if (key === "x^") {
      exponent();
    } else if (key === "x !") {
      factorial();
    } else if (key === "e") {
      exp();
    } else if (key === "rad") {
      radians();
    } else if (key === "∘") {
      degrees();
    }
  });
});

function equals() {
  if (currentKey) {
    let base = currentKey.slice(0, currentKey.indexOf("^"));
    let exponent = currentKey.slice(currentKey.indexOf("^") + 1);
    currentKey.indexOf("^") > -1 ? (input.value = currentKey = eval("Math.pow(" + base + "," + exponent + ")")) : (input.value = currentKey = eval(currentKey));
  }
}

function clear() {
  input.value = currentKey = "";
}

function backspace() {
  input.value = currentKey = currentKey.toString().substring(0, currentKey.length - 1);
}

function multiply() {
  input.value = currentKey += "*";
}

function divide() {
  input.value = currentKey += "/";
}

function plusMinus() {
  if (currentKey.charAt(0) === "-") {
    input.value = currentKey = currentKey.slice(1);
  } else {
    input.value = currentKey = "-" + currentKey;
  }
}

function factorial() {
  var number = 1;
  if (currentKey === 0) {
    input.value = currentKey = "1";
  } else if (currentKey < 0) {
    input.value = currentKey = NaN;
  } else {
    var number = 1;
    for (var i = currentKey; i > 0; i--) {
      number *= i;
    }
    input.value = currentKey = number;
  }
}

function pi() {
  input.value = currentKey = currentKey * Math.PI;
}

function square() {
  input.value = currentKey = eval(currentKey * currentKey);
}

function squareRoot() {
  input.value = currentKey = Math.sqrt(currentKey);
}

function percent() {
  input.value = currentKey = currentKey / 100;
}

function sin() {
  input.value = currentKey = Math.sin(currentKey * (Math.PI / 180)).toFixed(8);
}

function cos() {
  input.value = currentKey = Math.cos(currentKey * (Math.PI / 180)).toFixed(8);
}

function tan() {
  input.value = currentKey = Math.tan(currentKey * (Math.PI / 180)) > 163312393531953 ? "∞" : Math.tan(currentKey * (Math.PI / 180)).toFixed(8);
}

function log() {
  input.value = currentKey = Math.log10(currentKey);
}

function ln() {
  input.value = currentKey = Math.log(currentKey);
}

function exponent() {
  input.value = currentKey += "^";
}

function exp() {
  input.value = currentKey = Math.exp(currentKey);
}

function radians() {
  input.value = currentKey = currentKey * (Math.PI / 180);
}

function degrees() {
  input.value = currentKey = currentKey * (180 / Math.PI);
}
