import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import './LoginScreen.scss'

const LoginScreen = () => {

    const {login, error} = useAuthContext()

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
                    {error.email && <small className='text-danger'>{error.email}</small>}

                    <input
                        type={"password"} 
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        className="form-control my-4"
                        placeholder='Contraseña'
                    />
                    {error.password && <small className='text-danger'>{error.password}</small>}

                    <br/>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>

            </div>

        </div>
    )
}

export default LoginScreen  