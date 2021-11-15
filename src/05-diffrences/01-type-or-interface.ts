/**
 * Diffrences between types and interfaces
 * ---
 * More info:
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 */

// --- Interfaces ---

interface HumanInterface {
  name: string
}

/**
 * New fields can be added by redeclaring the
 * interface a second time
 */
interface HumanInterface {
  age: number
}

/**
 * Since interfaces have an OOP background
 * they can be extended by other interfaces
 */
interface WizardInterface extends HumanInterface {
  // name: number
  knownSpells: number
}

/**
 * Interfaces can be bound to Objects just like Types
 */
const Harry: WizardInterface = {
  name: 'Potter',
  age: 23,
  knownSpells: 0
}

// --- Types ---
type HumanType = {
  name: string
}

/**
 * With types you can overwrite a
 * given field from another type
 */
type WizardType = HumanType & {
  // name: number
  knownSpells: number
}

const Hermione: WizardType = {
  name: "Granger",
  knownSpells: 1001
}

/**
 * Types a bit more versatile since they can combine
 * primitive and custom types
 */
type Ghost = HumanType | WizardType | boolean

// --- Class bindings ---
interface Human {
  makeASound(): string
}

class Clown implements Human {
  makeASound(): string {
    return "Hi Georgie";
  }
}

type Insect = {
  makeASound(): string
}

class Bee implements Insect {
  makeASound(): string {
    return "Zuumm!"; // good sound
  }
}


