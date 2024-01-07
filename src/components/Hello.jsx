import { useNavigate } from "react-router-dom"

const Hello = () => {

    const navigate = useNavigate()

    const logOut = () => {
        navigate("/")
    }

    return (
        <>
            <div className="w-100 d-flex justify-content-between px-5 my-5">
                <h1>Hello Oybek</h1>
                <h3 onClick={() => logOut()} className="btn btn-outline-danger text-center">Log out</h3>
            </div>

        </>
    )
}

export default Hello