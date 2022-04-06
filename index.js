let cm1 = document.querySelector('.mode1')
let cm2 = document.querySelector('.mode2')
let bm = document.querySelector('.basic-mode')
let cm = document.querySelector('.complex-mode')
let input = document.querySelector('.input')

function toggleButton() {
  getCm1style = getComputedStyle(cm1).display
  geCm2style = getComputedStyle(cm2).display
  if (getCm1style == 'none') {
    cm1.style.display = 'flex'
    cm2.style.display = 'none'
    bm.style.display = 'flex'
    cm.style.display = 'none'
  } else {
    cm1.style.display = 'none'
    cm2.style.display = 'flex'
    bm.style.display = 'none'
    cm.style.display = 'flex'
  }
}

// buttonLength = document.querySelectorAll('.button').length
// let currentKey = ''
// for (let i = 0; i < buttonLength; i++) {
//   let button = document.querySelectorAll('.button')[i]
//   button.addEventListener('click', function (e) {
//     let key = e.target.innerText
//     if (
//       key != '=' &&
//       key != 'C' &&
//       key != '*' &&
//       key != '/' &&
//       key != '√' &&
//       key != 'x ²' &&
//       key != '%' &&
//       key != '←' &&
//       key != '±' &&
//       key != 'sin' &&
//       key != 'cos' &&
//       key != 'tan' &&
//       key != 'log' &&
//       key != 'ln' &&
//       key != 'x^' &&
//       key != 'x !' &&
//       key != 'π' &&
//       key != 'e' &&
//       key != 'rad' &&
//       key != '∘'
//     ) {
//       input.value = currentKey += key
//     } else if (key === '=') {
//       equals()
//     } else if (key === 'C') {
//       clear()
//     } else if (key === '*') {
//       multiply()
//     } else if (key === '/') {
//       divide()
//     } else if (key === '±') {
//       plusMinus()
//     } else if (key === '←') {
//       backspace()
//     } else if (key === '%') {
//       percent()
//     } else if (key === 'π') {
//       pi()
//     } else if (key === 'x ²') {
//       square()
//     } else if (key === '√') {
//       squareRoot()
//     } else if (key === 'sin') {
//       sin()
//     } else if (key === 'cos') {
//       cos()
//     } else if (key === 'tan') {
//       tan()
//     } else if (key === 'log') {
//       log()
//     } else if (key === 'ln') {
//       ln()
//     } else if (key === 'x^') {
//       exponent()
//     } else if (key === 'x !') {
//       factorial()
//     } else if (key === 'e') {
//       exp()
//     } else if (key === 'rad') {
//       radians()
//     } else if (key === '∘') {
//       degrees()
//     }
//   })
// }

let currentKey = ''
const buttons = document.querySelectorAll('.button') //Array like element

const buttonsArray = [...buttons] //Converted into array

buttonsArray.forEach(button => {
  button.addEventListener('click', function (e) {
    let key = e.target.innerText
    if (
      key != '=' &&
      key != 'C' &&
      key != '*' &&
      key != '/' &&
      key != '√' &&
      key != 'x ²' &&
      key != '%' &&
      key != '←' &&
      key != '±' &&
      key != 'sin' &&
      key != 'cos' &&
      key != 'tan' &&
      key != 'log' &&
      key != 'ln' &&
      key != 'x^' &&
      key != 'x !' &&
      key != 'π' &&
      key != 'e' &&
      key != 'rad' &&
      key != '∘'
    ) {
      input.value = currentKey += key
    } else if (key === '=') {
      equals()
    } else if (key === 'C') {
      clear()
    } else if (key === '*') {
      multiply()
    } else if (key === '/') {
      divide()
    } else if (key === '±') {
      plusMinus()
    } else if (key === '←') {
      backspace()
    } else if (key === '%') {
      percent()
    } else if (key === 'π') {
      pi()
    } else if (key === 'x ²') {
      square()
    } else if (key === '√') {
      squareRoot()
    } else if (key === 'sin') {
      sin()
    } else if (key === 'cos') {
      cos()
    } else if (key === 'tan') {
      tan()
    } else if (key === 'log') {
      log()
    } else if (key === 'ln') {
      ln()
    } else if (key === 'x^') {
      exponent()
    } else if (key === 'x !') {
      factorial()
    } else if (key === 'e') {
      exp()
    } else if (key === 'rad') {
      radians()
    } else if (key === '∘') {
      degrees()
    }
  })
})


function equals() {
  if (currentKey.indexOf('^') > -1) {
    let base = currentKey.slice(0, currentKey.indexOf('^'))
    let exponent = currentKey.slice(currentKey.indexOf('^') + 1)
    input.value = currentKey = eval('Math.pow(' + base + ',' + exponent + ')')
  } else {
    input.value = currentKey = eval(currentKey)
  }
}

function clear() {
  input.value = currentKey = ''
}

function backspace() {
  input.value = currentKey = currentKey.substring(0, currentKey.length - 1)
}

function multiply() {
  input.value = currentKey += '*'
}

function divide() {
  input.value = currentKey += '/'
}

function plusMinus() {
  if (currentKey.charAt(0) === '-') {
    input.value = currentKey = currentKey.slice(1)
  } else {
    input.value = currentKey = '-' + currentKey
  }
}

function factorial() {
  var number = 1
  if (currentKey === 0) {
    input.value = currentKey = '1'
  } else if (currentKey < 0) {
    input.value = currentKey = NaN
  } else {
    var number = 1
    for (var i = currentKey; i > 0; i--) {
      number *= i
    }
    input.value = currentKey = number
  }
}

function pi() {
  input.value = currentKey = currentKey * Math.PI
}

function square() {
  input.value = currentKey = eval(currentKey * currentKey)
}

function squareRoot() {
  input.value = currentKey = Math.sqrt(currentKey)
}

function percent() {
  input.value = currentKey = currentKey / 100
}

function sin() {
  input.value = currentKey = (Math.sin(currentKey*(Math.PI / 180))).toFixed(8)
}

function cos() {
  input.value = currentKey = (Math.cos(currentKey*(Math.PI / 180))).toFixed(8)
}

function tan() {
  input.value = currentKey = Math.tan(currentKey*(Math.PI / 180)) > 163312393531953 ? '∞' : (Math.tan(currentKey*(Math.PI / 180))).toFixed(8)
}

function log() {
  input.value = currentKey = Math.log10(currentKey)
}

function ln() {
  input.value = currentKey = Math.log(currentKey)
}

function exponent() {
  input.value = currentKey += '^'
}

function exp() {
  input.value = currentKey = Math.exp(currentKey)
}

function radians() {
  input.value = currentKey = currentKey * (Math.PI / 180)
}

function degrees() {
  input.value = currentKey = currentKey * (180 / Math.PI)
}