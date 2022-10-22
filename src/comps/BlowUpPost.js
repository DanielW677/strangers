import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BigPost = () => {
    const postData = useOutletContext();
    const bigData = postData[0];
    // console.log('we are in detailed post', postData)

    const { id } = useParams();
    // console.log(useParams())
    // console.log(id)
    // console.log('this is itemsell', itemSell)
    
    // const outParams = useParams().id;
    // console.log('this is params', useParams())
    // console.log('other params', id)

    
    const specificPost = bigData[id];
    const [message, setMessage] = useState();
   async function MessageUser (event) {
    event.preventDefault();
        try {
        
 
            const fetchReq =  await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${specificPost._id}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    message: {
                        content: message
                    }
                })
            })
            const fetchedData = await fetchReq.json();
            console.log('fetched data', fetchedData)
          }  catch (error) {
        console.log(error)
         }}
    MessageUser();
    // console.log('this is post', specificPost);
    return (
        <div>
            <div>
                <h4 className="p">Item for sell: {specificPost.title}</h4>
                <p className="p">{specificPost.description}</p>
                <p className="p">Price: {specificPost.price}</p>
            </div>
            <div>
            <p className="p">Post Created By: {specificPost.author.username}</p>
            <h6 className="p">Post Created at: {specificPost.createdAt}</h6>
            <h5 className="p">Located at {specificPost.location}</h5>
             </div>
             <form onSubmit={MessageUser}>
                <label> Msg User</label>
                <input type='text' onChange={(event) => {
                    console.log(event.target.value)
                    setMessage(event.target.value)
                }}></input>
                <input type='submit'></input>
             </form>
        </div>
    )
}

export default BigPost