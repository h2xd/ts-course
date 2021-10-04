type Debts = {
  innkeeper: number
  city: number
  cobbler: number
  others: number[]
}

const AdventurerDebts: Debts = {
  innkeeper: 1_500,
  city: 3_000_000,
  cobbler: 500, // no shoes, no life
  others: [422]
}

function writeInsolvencyLetter(): Readonly<Debts> {
  // ... Hopefully Peter Zwegart won't notice that action
  return Object.freeze(AdventurerDebts)
}

const AdventurerInsolvency = writeInsolvencyLetter()

// throws an error since the property is read-only
AdventurerInsolvency.city = 1000
AdventurerInsolvency.others.push(1000)

/**
 * TODO: you forgot it!
 * It's me Andrej from the past!
 * I just realized that you should explain `ReadonlyArray`
 */