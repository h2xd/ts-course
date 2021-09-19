// 01: Assigment
const isActive = false
let isModified = true
let isModifiedDirect: boolean = true

// 02: Reassignment
isModified = false
isModifiedDirect = false

// 03: Error casing
isModified = 1
isModifiedDirect = 'I bin aber eine Zahl'

console.log(isModified)

