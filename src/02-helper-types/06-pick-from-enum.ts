enum CerealExtrasAsEnum {
  CHOCOLATE = '🍫',
  STRAWBERRIES = '🍓🍓🍓',
  WALNUTS = '🥜',
  RAISINS = '⌛️🍇',
}

type CerealExtra = keyof typeof CerealExtrasAsEnum
type SelectableCerealExtras = Record<CerealExtra, boolean>

// Did you say SHoCoLatE?!?!
// https://www.youtube.com/watch?v=7kkh22D6UQY
const ChocolateWithOrWithoutNuts: SelectableCerealExtras = {
  CHOCOLATE: true,
}