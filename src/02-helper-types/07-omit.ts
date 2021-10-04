enum CerealExtrasAsEnum {
  CHOCOLATE = '🍫',
  STRAWBERRIES = '🍓🍓🍓',
  WALNUTS = '🥜',
  RAISINS = '⌛️🍇',
}

type CerealExtra = keyof typeof CerealExtrasAsEnum
type SelectableCerealExtras = Record<CerealExtra, boolean>

// i can't be the only one
const YeetDezRaisins: Omit<SelectableCerealExtras, 'RAISINS'> = {
  WALNUTS: true,
  CHOCOLATE: true,
  STRAWBERRIES: true
}