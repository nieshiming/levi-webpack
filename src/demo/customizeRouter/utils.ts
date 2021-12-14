export interface Path {
  hash: string
  search: string
  pathname: string
}

export function parsePath(path: string) {
  const partialPath = {} as Path
  const pathname = path

  if (path) {
    const hashIndex = path.indexOf('#')
    if (hashIndex >= 0) {
      partialPath.hash = path.substr(hashIndex)
      pathname = path.substr(0, hashIndex)
    }

    const searchIndex = path.indexOf('?')
    if (searchIndex >= 0) {
      partialPath.search = path.substr(searchIndex)
      pathname = path.substr(0, searchIndex)
    }

    if (path) {
      partialPath.pathname = pathname
    }
  }

  return partialPath
}
