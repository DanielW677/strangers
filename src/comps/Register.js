import React, { useState } from 'react';

const RegisterForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function formSubmit(event) {
        event.preventDefault(); 
    try {
        const fetchResponse = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }
        
        )
        const fetchData = await fetchResponse.json();
        console.log('this is translated data', fetchData)
        localStorage.setItem('token', fetchData.data.token)
    } catch (error) {
        console.log(error)
    }}
    return (
        <div>
            <h3 className='head'>Welcome to Stragners things! Register to the site to use cool features :D</h3>
            <div className='flexBox'>
                <form onSubmit={formSubmit}>
                    <label>New Username:</label>
                    <input type='text' value={username} onChange={(event) => {
                        console.log(event.target.value)
                        setUsername(event.target.value)
                    }}></input>
                    <br></br>
                    <label>New Password:</label>
                    <input type='text' value={password} onChange={(event) => {
                        console.log(event.target.value)
                        setPassword(event.target.value)
                    }}></input>
                    <br></br>
                    <input type='submit'></input>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;