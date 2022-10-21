import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const MakePostForm = () => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const Navigate = useNavigate();
    async function postSubmit(event) {
        event.preventDefault();
        try {
          
            const fetchResponse = fetch('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: desc,
                        price: price,
                    }
                })
            })
        } catch (error) {
            
        }
    }

    return (
        <div>
        <h1 className="center">Make a new post</h1>
        <div className="flexBox makePost">
            <form onSubmit={postSubmit}>
                <label>Title:</label>
                <input type='text' value={title} onChange={(event) => {
                    console.log(event.target.value)
                    setTitle(event.target.value)
                }}></input>
                <br></br>
                <label>Description:</label>
                <input type='text' value={desc} onChange={(event) => {
                    console.log(event.target.value)
                    setDesc(event.target.value)
                }}></input>
                <br></br>
                <label>Price:</label>
                <input type='text' value={price} onChange={(event) => {
                    console.log(event.target.value)
                    setPrice(event.target.value)
                }}></input>
                <br></br>
                <input type='submit'></input>
            </form>
        </div>
        </div>
    )
}

export default MakePostForm;