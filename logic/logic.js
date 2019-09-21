const process = require("process")
const readline = require("readline")

const preprocess = wff => {
  // strip all whitespace
  wff = wff.replace(/\s+/g, "")
  // wrap/remove parens if necessary
  if(wff[0] === "(" && wff.slice(-1) === ")" && wff.length > 1) {
    // remove extra parens
    while(wff[0] === wff[1] && wff.slice(-1) === wff.slice(-2, -1)) {
      wff = wff.slice(1, -1)
    }
  } else {
    // this processor needs the wrapping parentheses
    wff = "(" + wff + ")"
  }
  return wff
}

const surroundingParens = (index, wff) => {
  let openParenBefore = 0
  let closeParenBefore = 0
  for(const char of wff.slice(0, index)) {
    if(char === "(") {
      openParenBefore++
    } else if(char === ")") {
      closeParenBefore++
    }
  }

  const unclosedOpens = openParenBefore - closeParenBefore
  return unclosedOpens
}

const getIndexOfMainOperator = wff => {
  // handle negation case
  // there will be either 2 or 4 chars ie (~T)
  if(wff.length === 2 || wff.length === 4) {
    return wff.indexOf("~")
  }
  const operators = ["≡", "∨", "⊃", "∙"]
  const expression = wff.split("")
  let leastWrapping = 1000 // higher could be used
  let indexOfMainOperator
  for(const [index, char] of expression.entries()) {
    if(operators.includes(char) && surroundingParens(index, wff) < leastWrapping) {
      indexOfMainOperator = index
      leastWrapping = surroundingParens(index, wff)
    }
  }
  return indexOfMainOperator
}

const getOperator = (() => {
  const conjunction = (truthValue1, truthValue2) => truthValue1 && truthValue2
  const conditional = (truthValue1, truthValue2) => !(truthValue1 === true && truthValue2 === false)
  const disjunction = (truthValue1, truthValue2) => truthValue1 || truthValue2
  const biconditional = (truthValue1, truthValue2) => truthValue1 === truthValue2
  const negation = truthValue => !truthValue
  return (operator) => {
    switch(operator) {
      case "⊃":
        return conditional
      case "∨":
        return disjunction
      case "∙":
        return conjunction
      case "≡":
        return biconditional
      case "~":
        return negation
      default:
        console.log(operator)
        throw "Not an operator!"
    }
  }
})()

const logic = wff => {
  if(wff.length === 1) {
    return wff[0] === "T"
  }
  const index = getIndexOfMainOperator(wff)
  const operator = getOperator(wff[index])
  // slice from 1 because we want to omit the outer parentheses
  const leadingExpression = wff.slice(1, index)
  // slice one from end because we want to omit the outer parentheses
  const trailingExpression = wff.slice(index + 1, -1)

  //console.log(`Evaluating "${leadingExpression}${wff[index]}${trailingExpression}" to get ${operator(logic(leadingExpression), logic(trailingExpression))}`)

  return operator(logic(leadingExpression), logic(trailingExpression))
}

// Start
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Enter a well-formed formula: ", wff => {
  // clean up some common simplifications so the parser can understand
  const cleanWff = preprocess(wff)
  console.log(logic(cleanWff))
  rl.close()
})

//console.log(logic("(((T≡(T∨F))∙(F∨T))⊃F)"))
