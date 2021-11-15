type SicknessProduct = {
  name: string
  duration: number
}

type HairProduct = {
  color: string
}

// if (T === 'cough')
type Condition<T extends string> = T extends 'cough' ? SicknessProduct : HairProduct

const data: Condition<'cough'> = {
  name: 'Influenza',
  duration: 12
}

const otherData: Condition<'My eyes burn'> = {
  color: 'red'
}