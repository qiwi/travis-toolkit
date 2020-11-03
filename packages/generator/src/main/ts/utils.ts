export function unCapitalize(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function normalizeName(name: string) {
  return unCapitalize(name.replace(/[\s(),.`-]/g, ''))
}

export function toCamelCase(str: string) {
  const splited = str.split(' ')
  return normalizeName(splited.map(capitalize).join(' '))
}
