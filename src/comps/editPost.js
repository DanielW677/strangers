import React, { useState } from "react";
import { useOutletContext } from "react-router";

const editForm = () => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const contextData = useOutletContext();

  
    return (
        <form>
            <label>Title</label>
            <input type='text'></input>
            <br></br>
            <label>Description</label>
            <input type='text'></input>
            <br></br>
            <label>Price</label>
            <input type='text'></input>
            <br></br>
        </form>
    )

}

export default editForm;