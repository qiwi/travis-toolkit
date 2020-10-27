export function unCapitalize(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export function normalizeName(name: string) {
  return unCapitalize(name.replace(/[\s,./`-]/g, ''))
}
