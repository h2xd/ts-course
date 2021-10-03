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

function startTavernTravel(): Partial<Inventory> {

}


startTavernTravel()
console.log(AdventurerInventory)



