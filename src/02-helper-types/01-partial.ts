type Inventory = {
  weapons: string[]
  cloths: string[]
  money: number
}

const AdventurerInventory: Inventory = {
  weapons: ['dagger', 'bow'],
  cloths: ['hat', 'shoe', 'shoe', 'shirt', 'pants'],
  money: 1_000_000
}

type PartialInventory = Partial<Inventory>

function startTavernTravel(): PartialInventory {
  return {
    money: 1000
  }
}

startTavernTravel()
console.log(AdventurerInventory)



