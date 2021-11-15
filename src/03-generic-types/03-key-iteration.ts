type TeaConfig = {
  selection: string
  honey: boolean
  milk: boolean
  sugar: boolean
  ginger: boolean
}

type TeaConfigMap = Record<string, TeaConfig>

const TEA_CONFIG_MAP: TeaConfigMap = {
  'BEE_STUNG_ENGLISH': {
    selection: 'Earl Grey',
    honey: true,
    milk: true,
    sugar: false,
    ginger: false
  },
  'COUGH_COUGH_IM_SICK': {
    selection: 'Simple Green',
    honey: false,
    milk: false,
    sugar: false,
    ginger: true
  },
}

export type PerpetuatedTeaSelection<Type> = {
  [Key in keyof Type]: {
    data: Readonly<Type[Key]>
    createdAt: Date
  }
}

function perpetuateMyTeaSelections<T extends TeaConfigMap>(teaConfigMap: T): PerpetuatedTeaSelection<T> {
  const teaKeys = Object.keys(teaConfigMap)

  return teaKeys.reduce((previousData, teaKey) => ({
    ...previousData,
    [teaKey]: {
      data: Object.freeze({...teaConfigMap[teaKey]}),
      createdAt: new Date()
    }
  }), {} as PerpetuatedTeaSelection<T>)
}

const foundIn1000Years = perpetuateMyTeaSelections(TEA_CONFIG_MAP)

console.log(foundIn1000Years)