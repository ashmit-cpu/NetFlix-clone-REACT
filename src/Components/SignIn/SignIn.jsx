import React, { useState, useContext } from 'react'
import '../../styles/SignIn.css'
import { useNavigate, Link } from 'react-router-dom';
import { FirebaseContext } from '../../Store/FirebaseContext';


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrormessage] = useState('')
    const [loading, setLoading] = useState(false);
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate();


    const handleEmailChange = (e) => {
        setEmail(e.target.value.replace(/\s/g, ''));
        // console.log("email changing")

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // console.log("password changing")
    }
    const handleSignin = (e) => {
        e.preventDefault();
        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
                navigate("/home")

            })
            .catch((error) => {
                console.log(error);
                setErrormessage('Oops! The email or password you entered is incorrect. Please try again.')
            })
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <div className='SignIn'>
            <div className="container">
                <div className="logo">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                </Link>

                </div>
                <div className={loading?'loader active':'loader'}>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="bg-overlay">

                </div>
                <div className="card">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSignin}>
                        {errormessage && <p className='error-message'>{errormessage}
                        </p>}

                        <div className="form-element">
                            <input type="text" name="username" value={email} placeholder='Email ' onChange={handleEmailChange} id="username" required />
                        </div>
                        <div className="form-element">
                            <input type="password" name="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange} required />
                        </div>
                        <button type='submit' className="btn-sign-in">Sign In</button>
                        <div className="forgot-password">
                            <label for="checkboxId">
                                <input type="checkbox" id="checkboxId" />
                                Remember Me
                            </label>
                            <p>Need Help?</p>
                        </div>
                    </form>
                    <div className="signup-section">
                        <p>New to NetFlix
                            <Link className='signup' to="/signup">Sign up</Link>

                        </p>
                        <p className='learn-more'>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            <a href="#/" className='learn'>Learn more</a>

                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn