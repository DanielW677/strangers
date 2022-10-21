import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Homepage = () => {
    const [ itemSell, setItemSell] = useState();
    useEffect(() => {
       async function sellData () {
            try{
            const fetchData = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts')
            const responseData = await fetchData.json();
            // console.log(responseData.data.posts)
            setItemSell(responseData.data.posts)
            } catch (error){
                console.log(error)
         }
       }
       sellData();
    }, [])
    const [ profile, setProfile ] = useState();
    useEffect(() => { 
    async function getProfData () {
        console.log('profile hook')
        try {
            const fetchProfile = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            console.log(fetchProfile)
            const newData = await fetchProfile.json();
            console.log('This is translateted data', newData.data)
            setProfile(newData.data)
            console.log('This is useState', profile)
        } catch (error) {
            console.log(error) 
        }
    }
    getProfData();
}, [])


    return (
        <div>
            <Navbar />
            <div>
                <Outlet context={[itemSell, profile]} />
            </div>
        </div>
    )
}

export default Homepage;
// For editing or deleting --> 
            // Send another fetch request to regrab the new posts data collection
            // Reset my state with the newly updated posts collection by using your setter method
