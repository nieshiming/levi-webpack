import React from 'react'
import { RouterContext } from './Router'

export const useHistory = () => React.useContext(RouterContext)!.history

export const useLocation = () => React.useContext(RouterContext)!.location
