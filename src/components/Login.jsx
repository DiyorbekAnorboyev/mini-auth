import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const existentUser = {
        name: "Oybek",
        password: "Oybek123"
    }

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const fillAllInputs = name.length < 1 || password.length < 1

    const handleSubmit = (e) => {
        e.preventDefault()
        if (existentUser.name === name && existentUser.password === password) {
            navigate("/hello")
        } else {
            fillAllInputs ? toast.error("Fill the all inputs") : toast.error("Not User")
        }
    }

    return (
        <>
            <div className='w-100 h-100vh d-flex align-items-center justify-content-center'>
                <ToastContainer />
                <form onSubmit={handleSubmit} className='w-45 justify-content-center gap-3 p-3 border border-2  bg-color-blue rounded-4'>
                    <input onChange={e => setName(e.target.value)} className="form-control form-control-lg mt-3" type="text" placeholder="Username" aria-label=".form-control-lg example" />
                    <input onChange={e => setPassword(e.target.value)} className="form-control form-control-lg mt-3" type="text" placeholder="Password" aria-label=".form-control-lg example" />
                    <div className='d-flex justify-content-center mt-3'>
                        <button type="submit" className='w-25 btn btn-outline-primary form-control-lg fs-5 fw-bold'>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login