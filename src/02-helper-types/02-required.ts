type Debts = {
  innkeeper?: number
  city?: number
  cobbler?: number
}

const AdventurerDebts: Debts = {
  innkeeper: 2000
}

function wowThatAdventurerLostHisMind(): Required<Debts> {

}

wowThatAdventurerLostHisMind()

console.log(AdventurerDebts)