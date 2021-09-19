// TODO: Find a good example for enums

// 01: How to write them
enum Direction {
  NORTH = 'north',
  EAST = 'east',
  SOUTH = 'south',
  WEST = 'west'
}

enum Continent {
  EUROPE = 'europe',
  ASIA = 'asia',
  AFRICA =  'africa',
  NORTH_AMERICA = 'na',
  SOURTH_AMERICA = 'sa',
  OCEANIA = 'australia-and-friends',
  ANTARCTICA = 'antarctica',
}


type Country = {
  continents: Continent[],
  direction: Direction
}

const russia: Country = {
  continents: [Continent.EUROPE, Continent.ASIA],
  direction: Direction.EAST,
}

const australia: Country = {
  continents: [Continent.OCEANIA],
  direction: []
}

enum Weekday {
  SUNDAY = 'SUNDAY',
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
}


// 02: Extract and loop
Object.keys(Direction).forEach((direction) => console.log(direction))
Object.values(Weekday).forEach((direction) => console.log(direction))