import React, {useReducer, useState} from "react";
import axios from "axios";


function reducer(state, action) {
    console.log(action)
    if (action.type === 'Increment') {
        return {count: state.count + 1}
    } else if (action.type === 'Decrement') {
        return {count: state.count - 1}
    }
}

function ReducerComponent() {
    const fetchResults = () => {
        const data = axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data)[0]
        console.log(data)
    }

    return (
        <div>
            <button onClick={() => fetchResults()}>Fetch</button>
        </div>
    )
}


export default ReducerComponent;












