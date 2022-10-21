import React, { useEffect, useState } from "react";
import { useOutlet, useOutletContext, useParams } from "react-router";
import { Link } from "react-router-dom";
import editForm from "./editPost";
const ProfilePost = () => {
    const contextData = useOutletContext();

    const data = contextData[1];
    const depPost = contextData[3];
    const setDepPost = contextData[4];
   
    console.log('data', depPost)
    // console.log('data', data)
    const { id } = useParams();
    useEffect(() => {
        async function findPostId () {
        try {
            const [specPost] = await data.posts.filter((element) => element._id == id)
            setDepPost(specPost)
            // console.log(specPost)
        } catch (error) {
            console.log(error)
        }
        }
        findPostId();
    }, [])

        const [selling, setSelling] = useState();
        const [info, setInfo] = useState();
        const [amount, setAmount] = useState();
      async function EditPost (event)  {
        event.preventDefault();
        try {
            const fetchData = await fetch(`http://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    post: {
                        title: selling,
                        description: info,
                        price: amount
                    }
                })
            })
            // console.log(`fetchData`, fetchData)
            const newData = await fetchData.json();
            console.log('new data', newData)
        } catch (error) {
            console.log(error)
        }
      }
      EditPost();
       


    return(

        <div>
            {
            
              depPost && Object.keys(depPost).length ? <div className="postDiv">
                <p className="p mainItem">{depPost.title}</p>
                <p className="p price">$ {depPost.price}</p>
                <p className="p">{depPost.description}</p>
                <p className="p createTime"> Created at: {depPost.createdAt}</p>

            </div>: <p>Nothing</p>
            }
            {/* <button onClick={() => {
                <editForm />
            }}>
                <label>Edit</label>
            </button> */}
            <br></br>
            <p>Use this form if you wish to change this item</p>
            <form onSubmit={EditPost}>
            <label>Title</label>
            <input type='text' value={selling} onChange={(event) => {
                console.log(event.target.value)
                setSelling(event.target.value)
            }}></input>
            <br></br>
            <label>Description</label>
            <input type='text' value={info} onChange={(event) => {
                console.log(event.target.value)
                setInfo(event.target.value)
            }}></input>
            <br></br>
            <label>Price</label>
            <input type='text' value={amount} onChange={(event) => {
                console.log(event.target.value)
                setAmount(event.target.value)
            }}></input>
            <br></br>
            <input type='submit'></input>
            </form>

        </div>
    )
}

export default ProfilePost;