

// 01: Arrays


const quotes: string[] = [
  'Yer a wizard Harry. - Rubeus Hagrid',
  'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution. - Albus Dumbledore'
]





// 02: Loops and Autotypes
const magicNumbers: number[] = [7, 42, 420, 1337]
magicNumbers.forEach((value) => {
  console.log(value)
})

// 03: Boolean state map
const missionControl: boolean[] = [true, true, true, true, false, true, true, true, true]

const missionLaunch = missionControl.every((state) => !!state)
const missionAbort = missionControl.some((state) => !!state)

console.log(missionLaunch)
console.log(missionAbort)

// 04: Custom Types
type ChokolateBar = {
  name: string
  age: number
  rating: number
}

const Bars: ChokolateBar[] = []
Bars.push({
  name: 'Lion',
  age: 1,
  rating: 8.4
})


// 05: Array types in custom types
type ChokolateBarContainer = {
  name: string
  bars: ChokolateBar[]
}

const TwixContainer: ChokolateBarContainer = {
  name: 'Twix',
  bars: [
    {
      name: 'Left Twix',
      age: 12,
      rating: 7.5
    },
    {
      name: 'Right Twix',
      age: 13,
      rating: 7.8
    },
  ]
}

// 06: Use by signature
TwixContainer.bars.forEach(bar => {
  console.log(bar.rating)
})