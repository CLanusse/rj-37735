import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import './LoginScreen.scss'

const LoginScreen = () => {

    const {login} = useAuthContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        <div className="login-screen">
            <div className="login-container">
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                        type={"email"} 
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        className="form-control my-4"
                        placeholder='Email de usuario'
                    />

                    <input
                        type={"password"} 
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        className="form-control my-4"
                        placeholder='Contraseña'
                    />

                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>

            </div>

        </div>
    )
}

export default LoginScreen  