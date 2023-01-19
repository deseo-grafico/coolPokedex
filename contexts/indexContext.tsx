import { createContext, useState, useContext } from "react"
import React from 'react'

export const IndexContext = createContext

const IndexContextProvider = ({ children }:any) => {
    const [isFiltersActive, setIsFiltersActive] = useState(false)

    const value={
        isFiltersActive
    }

    return (
        <IndexContext.Provider value={value}>
            {children}
        </IndexContext.Provider>
    )
}

export default IndexContextProvider