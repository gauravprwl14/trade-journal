import React, { useContext, useState } from "react"


const AppContext = React.createContext()

export function useAppContext() {
    return useContext(AppContext)
}


export function AppProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    // const [loading, setLoading] = useState(true)




    function updateUser(user) {
        return setCurrentUser(user)
    }

    function getUser(user) {
        return currentUser
    }


    const value = {
        currentUser,
        updateUser,
        getUser
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
