 import React from 'react'
 import './login.css'
 import user from './user.jpg'
 import back from './backimg.jpg'

const Login = () => {
    return (
        <div className="back">
        <img src={back} className="back-img" />
            <div className="loginbox" >
                <img src={user} className="user" />
                    <h1>Login</h1>
                    <form action="/">
                        <p>Username</p>
                        <input type="text" name="" placeholder="Enter your name" />
                        <p>Password</p>
                        <input type="password" name="" placeholder="Enter your password" />
                        <input type="submit" value="login" />
                    </form>
            </div>
        </div>
    );
}

export default Login