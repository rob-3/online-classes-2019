const wff = "ksadjlfa"

let pointer = 0
let openParens = []

while(true) {
  switch(wff[pointer]) {
    case "(":
      openParens.append(pointer)
      pointer++
      continue
    case ")":
      openParens.pop()
  }
}
