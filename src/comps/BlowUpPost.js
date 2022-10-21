import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const BigPost = () => {
    const postData = useOutletContext();
    // console.log('we are in detailed post', postData)

    const { id } = useParams();
    // console.log(useParams())
    // console.log(id)
    // console.log('this is itemsell', itemSell)
    
    const outParams = useParams().id;
    // console.log('this is params', useParams())
    console.log('other params', id)
    
    const specificPost = postData[id];
    console.log('this is post', specificPost);
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
        </div>
    )
}

export default BigPost;