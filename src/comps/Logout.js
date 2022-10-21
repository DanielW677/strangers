import React from "react";

const Logout = () => {
     function logout () {
        localStorage.removeItem('token')
    }

    return (
        <div className="flexBox logout">
             <button onClick={() => {
                logout();
             }}>
                <label>Logout</label>
            </button>
        </div>
    )
}

export default Logout;