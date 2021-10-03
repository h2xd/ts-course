type Debts = {
  innkeeper: number
  city: number
  cobbler: number
}

const AdventurerDebts: Debts = {
  innkeeper: 1_500,
  city: 3_000_000,
  cobbler: 500, // no shoes, no life
}


function writeInsolvencyLetter(): Readonly<Debts> {
  // ... Hopefully Peter Zwegart won't notice that action
}

const AdventurerInsolvency = writeInsolvencyLetter()