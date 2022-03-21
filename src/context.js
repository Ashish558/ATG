import React, { useContext, useState } from 'react'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <AppContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, isModalOpen, setIsModalOpen }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
