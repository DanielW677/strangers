import React, { useEffect, useState } from 'react';
import {  Link, useOutletContext } from 'react-router-dom';



const Profile = () => {
    const contextData = useOutletContext();
    // console.log(contextData)
    const profile = contextData[1];
    console.log('this is profile', profile)
//     const [ profile, setProfile ] = useState();
//     useEffect(() => { 
//     async function getProfData () {
//         console.log('profile hook')
//         try {
//             const fetchProfile = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me', {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${localStorage.getItem('token')}`
//                 },
//             })
//             console.log(fetchProfile)
//             const newData = await fetchProfile.json();
//             console.log('This is translateted data', newData.data)
//             setProfile(newData.data)
//             console.log('This is useState', profile)
//         } catch (error) {
//             console.log(error) 
//         }
//     }
//     getProfData();
// }, [])
    // ?
    const [postId, setPostId] = useState();
    async function deletePost(){
        try {
         const deleteFetch = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${postId} `, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(deleteFetch)
            const betterData =  await deleteFetch.json()
            console.log(betterData)

        } catch (error) {
            console.log(error)
        }
    }
    deletePost();


        return (

            <div>
                <h4 className='center'>Here you can view all your posts</h4>
                <div>
                    {
                        profile.username.length ? <div> {profile.username}</div>:<p>NOthing</p>
                    }
                 {
                    profile.posts  ? profile.posts.map((indivPost, idx) => {
                        
                        return(
                            <div className='postDiv' key={idx}>
                                <div>
                                    <p className='mainItem p'>Item: {indivPost.title}</p>
                                </div>
                                <div>
                                    <p className='p price'>Price: {indivPost.price}</p>
                                 </div>
                                 <div>
                                    <p className='p'>Description: {indivPost.description}</p>
                                 </div>
                                  <button onClick={() => {
                                    setPostId(indivPost._id)
                                    deletePost
                                    // console.log(postId)
                                  }}>
                                    <label typeof='submit'>Delete</label>
                                 </button>
                                 {/* {console.log(indivPost._id)} */}
                              </div>
                        )
                    }) :<p>You have no posts to show, get selling now!</p>
                }
                </div>
                <button>
                    <Link to={`/profile/newpost`} >Create New Post</Link>
                </button>
                
            </div>

        )
}
export default Profile;