import { createContext, useContext, useState } from "react"

const mockUsers = [
    {email: 'conrado@lanusse.com', pass: 'coderhouse'},
    {email: 'john@doe.com', pass: '123456'},
    {email: 'abc@abc.com', pass: 'asdf'},
]



export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        loggedIn: false,
        userId: null
    })

    const [error, setError] = useState({})

    // console.log(auth)

    const login = (values) => {
        const {email, password} = values
        
        setError({})

        const match = mockUsers.find((user) => user.email === email)

        if (match) {
            if (match.pass === password) {
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else {
                setError({
                    password: "Password incorrecto"
                })
            }
        } else {
            setError({
                email: "Usuario no encontrado"
            })
        }

    }

    const logout = () => {
        setAuth({
            loggedIn: false,
            userId: null
        })
    }


    return (
        <AuthContext.Provider value={{auth, error, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}