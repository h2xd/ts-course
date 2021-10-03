// okayyy 🤷
type BooleanConfiguration = {
  [index: string]: boolean
}

const CerealConfiguration: BooleanConfiguration = {
  raisins: true,
  chocolate: true,
  strawberries: true,
  iron: true,
}

// better 🙆
// seven characters less to write 👍
type BetterBooleanConfiguration = Record<string, boolean>

const BetterCerealConfiguration: BetterBooleanConfiguration = {
  raisins: true,
  chocolate: true,
  strawberries: true,
  iron: true,
}