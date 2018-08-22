export function A() {
  console.log('module A')
  return 1 + 2
}

export function B() {
  console.log('module B')
  return 2 + 3
}

export default {
  A,
  B
}