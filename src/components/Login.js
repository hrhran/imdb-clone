import { useRef } from "react"
import { useNavigate } from "react-router"

const Login = ({state, dispatch}) => {

    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()

  

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
        const email = emailRef.current.value
        const password = passwordRef.current.value
        if (email === 'test' && password === 'test') {
            dispatch({type:'LOGIN'})
            navigate('/', { replace: false })
        } else {
            console.log("BAD")
        }
    }


    return (
        <>
            <div className="login-page">
                <div className="container">
                    <div className="main-logo">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" alt="IMDb.com logo" />
                    </div>
                    <div className="login-card">
                        <span className="login-title">Sign in</span>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="label">Email</div>
                                <input ref={emailRef} type="text" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <div className="label-group">
                                    <div className="label">Password</div>
                                    <span className="forgot-pw">Forgot your password?</span>
                                </div>
                                <input ref={passwordRef} type="password" id="password" name="password" autoComplete="off" />
                            </div>
                            <button className="login-btn">Sign-In</button>
                            <div className="check-group">
                                <input type="checkbox" id="signed" name="signed" />
                                <div className="signed">Keep me signed in.</div>
                            </div>
                        </form>
                        <span className="new-account">
                            <span className="new-account-text">New to IMDb?</span>
                        </span>
                        <button className="create-btn">Create your IMDb account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login