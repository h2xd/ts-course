type ChokolateBar = {
  name: string
  age: number
}

const Snikers: ChokolateBar = {
  name: "Snikers",
  age: 90
}

const MilkyWay: ChokolateBar = {
  name: "MilkyWay",
  age: 19 * 10 ** 10
}


// 02: Parameter
function killTheBug(withForce = false, level = 1) {
  if (withForce) {
    return 'It shall burn in hell!!!'
  }

  return 'Begone unwanted feature :)'
}

console.log(killTheBug())


// 03: Return types
function cashOut(): number {
  console.log('Door is open!')
  return false
}


