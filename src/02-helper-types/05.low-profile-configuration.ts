const DEFAULT_OPTIONS = {
  hasChocolate: false,
  whiteCholate: false,
  kiloJoule: 0
}

type ChocolateBarConfig = typeof DEFAULT_OPTIONS

enum ChocolateBar {
  SNICKERS = 'snickers',
  RAIDER = 'twix'
}

const CHOCOLATE_BARS_CONFIG: Record<ChocolateBar, ChocolateBarConfig> = {
  [ChocolateBar.SNICKERS]: {
    ...DEFAULT_OPTIONS,
    hasChocolate: true
  },
  [ChocolateBar.RAIDER]: {
    ...DEFAULT_OPTIONS,
    hasChocolate: true
  }
}

const SnickersConfig = CHOCOLATE_BARS_CONFIG[ChocolateBar.SNICKERS]