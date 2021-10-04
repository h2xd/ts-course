enum CerealExtrasAsEnum {
  CHOCOLATE = '🍫',
  STRAWBERRIES = '🍓🍓🍓',
  WALNUTS = '🥜',
  RAISINS = '⌛️🍇',
}

// same as = type CerealExtra = "CHOCOLATE" | "STRAWBERRIES" | "WALNUTS" | "RAISINS"
type CerealExtra = keyof typeof CerealExtrasAsEnum
type SelectableCerealExtras = Record<CerealExtra, boolean>

// Did you say SHoCoLatE?!?!
// https://www.youtube.com/watch?v=7kkh22D6UQY
const ChocolateWithOrWithoutNuts:
  Pick<SelectableCerealExtras, 'CHOCOLATE'> &
  Partial<
    Pick<SelectableCerealExtras, 'WALNUTS'>
  > = {
  CHOCOLATE: true,
  WALNUTS: true
}