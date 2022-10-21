import React, { useEffect, useState } from 'react';
import {  Link, useOutletContext } from 'react-router-dom';



const Profile = () => {
    const contextData = useOutletContext();
    console.log(contextData)
    const profile = contextData[1];
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
    async function deletePost() {
        try {
            fetch(`https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/`)
        } catch (error) {
            
        }
        
    }
        return (
            <div>
                <h4 className='center'>Here you can view all your posts</h4>
                <div>
                    {
                        profile.username.length ? <div> {profile.username}</div>:<p>NOthing</p>
                    }
                 {
                    profile.posts.length  ? profile.posts.map((indivPost, idx) => {

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
                                  <button>
                                    <label>Delete</label>
                                    <input type='submit'></input>
                                 </button>
                              </div>
                        )
                    }) :<p>Nothing</p>
                }
                </div>
                <button>
                    <Link to={`/profile/newpost`} >Create New Post</Link>
                </button>
            </div>
        )
}
export default Profile;