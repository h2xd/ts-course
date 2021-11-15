type VillagePeople<Y, M, C, A> = {
  first: Y,
  second: M,
  third: C,
  fourth: A,
  inOrder: [Y, M, C, A]
}

const DANCE_YOU_FOOL: VillagePeople<11, 12, boolean, 'cheese' | '🐇'> = {
  first: 11,
  second: 12,
  third: true,
  fourth: "cheese",
  inOrder: [11, 12, false, '🐇']
}
