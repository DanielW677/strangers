import React from "react";
import { useOutletContext, Link, useParams } from "react-router-dom";


const Posts = () => {
    const itemSell = useOutletContext();
    // console.log('this is )

    const sell = itemSell[0];
    // console.log('this is sell', sell)
    return (
         sell ? sell.map((indivPost, idx) => {
            // console.log('this is indivpost', indivPost)
            return (
                <div className="postDiv" key={idx}>
                    
                    <div>
                        <p className="mainItem p">Item: {indivPost.title}</p>
                    </div>
                    <div>
                        <p className="p price">Price: {indivPost.price}</p>
                    </div>
                    <div>
                        <button className="linkButton blue">
                             <Link className="linkInButton link" to={`/posts/${idx}`}>More Info</Link>
                        </button>
                    </div>
                </div>
            ) 
        }):<p>Nothing to show</p>
        
    )
}
{/* <button>
                    <Link to={`/profile/newpost`} >Create New Post</Link>
                </button> */}
export default Posts;