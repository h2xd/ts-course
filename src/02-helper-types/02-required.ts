type Debts = {
  innkeeper?: number
  city?: number
  cobbler?: number
}

const AdventurerDebts: Debts = {
  innkeeper: 2000
}

type RequiredDebts = Required<Debts>

function wowThatAdventurerLostHisMind(): RequiredDebts {
  return {
    city: 1000,
    cobbler: 8000,
    innkeeper: 1_000_000
  }
}

wowThatAdventurerLostHisMind()

console.log(AdventurerDebts)