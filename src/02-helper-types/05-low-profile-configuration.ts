export enum CerealFlakes {
  CRUNCHY= 'crunchy',
  BIO = 'bio',
  WHOLE_GRAIN = 'whole grain'
}

export enum CerealFluid {
  MILK = '🐄|🐐|🐀 milk',
  YOGHURT = 'yo!ghurt',
  SKIR = '🏝 yo!ghurt',
  OAT_MILK = '🌾 milk',
  WATER = '🚰' // may the lord save you 🙏
}

export enum CerealExtra {
  CHOCOLATE = '🍫',
  STRAWBERRIES = '🍓🍓🍓',
  WALNUTS = '🥜',
  RAISINS = '⌛️🍇',
}

// create a type that contains all cerial components 🥣
type CerealConfiguration = {
  flakes: CerealFlakes,
  fluid: CerealFluid,
  extras: CerealExtra[]
}

// create a default that can be extended 🧩
const DEFAULT_CEREAL_CONFIGURATION: CerealConfiguration = {
  flakes: CerealFlakes.CRUNCHY,
  fluid: CerealFluid.OAT_MILK,
  extras: [CerealExtra.CHOCOLATE]
}

function configurateCereal(config: Partial<CerealConfiguration>): CerealConfiguration {
  return {
    ...DEFAULT_CEREAL_CONFIGURATION,
    ...config,
  }
}

// plEaSe StoP, i cAn'T tAKe iT anY mOrE 🚓👮
console.log(configurateCereal({
  fluid: CerealFluid.WATER,
  extras: [CerealExtra.RAISINS] // you will hate them too: https://www.youtube.com/watch?v=jyn_MFPkAds
}))


// better, because less maintenance
const LOW_MAINTENANCE_CONFIGURATION = {
  flakes: CerealFlakes.BIO,
  fluid: CerealFluid.OAT_MILK,
  extras: [CerealExtra.RAISINS] as CerealExtra[]
}

type LowMaintenanceConfig = typeof LOW_MAINTENANCE_CONFIGURATION

function betterConfigurateCereal(config: Partial<LowMaintenanceConfig>): LowMaintenanceConfig {
  return {
    ...LOW_MAINTENANCE_CONFIGURATION,
    ...config,
  }
}

console.log(betterConfigurateCereal({
  fluid: CerealFluid.WATER,
  extras: [] // you will hate them too: https://www.youtube.com/watch?v=jyn_MFPkAds
}))