import React from "react";

const LoginForm = () => {
    return(
        <div>
            <h3 className="head">Welcome to the Login page, enjoy the site</h3>
            <div className="flexBox">
                <form>
                    <label>Username:</label>
                    <input type='text'></input>
                    <br></br>
                    <label>Password:</label>
                    <input type='text'></input>
                    <br></br>
                    <input type='submit'></input>
            </form>
            </div>
        </div>
    )
}

export default LoginForm