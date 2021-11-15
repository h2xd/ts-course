type Timestamped<T> = {
  frozenData: Readonly<T>
  createdAt: Date
}

const PANCAKE_CONFIG = {
  eggs: 3,
  wheat: 500,
  sugar: 20,
  blueberries: 10,
  skyr: true,
}

function timestampData<T>(data: T): Timestamped<T> {
  return {
    frozenData: {...data},
    createdAt: new Date()
  }
}

const timestampedPancake = timestampData(PANCAKE_CONFIG)

// skyr is readonly
timestampedPancake.frozenData.skyr = false

console.log(timestampedPancake)
