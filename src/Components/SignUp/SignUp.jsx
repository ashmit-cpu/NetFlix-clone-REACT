import React, { useContext, useState } from 'react'
import '../../styles/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
// import { Firebase } from '../../Firebase/Config';
import { FirebaseContext } from '../../Store/FirebaseContext';

function SignUp() {
    const [username, setUsername] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { firebase } = useContext(FirebaseContext)
    const navigate = useNavigate();




    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePhonenoChange = (e) => {
        setPhoneno(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleSignUp = (e) => {
        e.preventDefault()
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((result) => {
                    result.user.updateProfile({ displayName: username })
                        .then(() => {
                            firebase.firestore().collection('users').add({
                                id: result.user.uid,
                                username: username,
                                phone: phoneno
                            })
                                .then(() => {
                                    navigate('/signin')

                                })
                                .catch((error) => {
                                    console.error('Error adding user data to Firestore:', error);
                                });
                        })
                        .catch((error) => {
                            console.error('Error updating user profile:', error);
                        });
                })
                .catch((error) => {
                    console.error('Error creating user:', error);
                });
        } catch (error) {
            console.error('Error during signup:', error);
        }

    };



    return (
        <div className='SignUp'>
            <div className="container">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

                </div>
                <div className="bg-overlay">

                </div>
                <div className="card">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="form-element">
                            <input type="text" name="username" id="username" value={username} placeholder='Username' onChange={handleUsernameChange} required />
                        </div>
                        <div className="form-element">
                            <input type="password" name="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange} required />
                        </div>
                        <div className="form-element">
                            <input type="email" name="email" id="email" value={email} placeholder='Email' onChange={handleEmailChange} required />
                        </div>
                        <div className="form-element">
                            <input type="text" name="phoneno" id="phoneno" value={phoneno} placeholder='Phone Number' onChange={handlePhonenoChange} required />
                        </div>
                        <button type='submit' className="btn-sign-in">Sign Up</button>
                    </form>
                    <div className="signin-section">
                        <p>Already have an account?
                            <a className='signup' href="/signin">Sign in</a>
                        </p>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp