import { history, Location } from './history'
import React, { useState, useEffect } from 'react'

interface RouterContextProps {
  location: Location
  history: typeof history
}

export const RouterContext = React.createContext<RouterContextProps | null>(null)

export const Router: React.FC = ({ children }) => {
  const [location, setLocation] = useState(history.location)

  useEffect(() => {
    const unlisten = history.listen((newLocation) => {
      setLocation(newLocation)
    })
    return unlisten
  }, [])

  return <RouterContext.Provider value={{ history, location }}>{children}</RouterContext.Provider>
}
