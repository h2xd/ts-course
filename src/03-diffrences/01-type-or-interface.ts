interface HumanInterface {
  name: string
}


interface WizardInterface extends HumanInterface {
  // name: number
  knownSpells: number
}


const Harry: WizardInterface = {
  name: 'Potter',
  knownSpells: 0
}




///////////////////////////////////////////////////////////////////////////////////////////////


type HumanType = {
  name: string
}

type WizardType = HumanType & {
  // name: number
  knownSpells: number
}

// Alias
type Ghost = HumanType | WizardType


const Hermione: WizardType = {
  name: "Granger",
  knownSpells: 1001
}


