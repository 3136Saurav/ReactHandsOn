import React, {useContext} from "react";
import ThemeContext from "../context/themeContext";
import UserContext from "../context/userContext";

function MovieRow() {
    const userContext = useContext(UserContext)
    const themeContext = useContext(ThemeContext)
    

    return (
        <div>
            Movie Row: {userContext.currentUser.name}
            <button onClick={() => userContext.onLogOut()}>Logout</button>

            <button onClick={() => themeContext.onSwitchMode()}>Switch to Dark Mode</button>
        </div>
    )
}

export default MovieRow