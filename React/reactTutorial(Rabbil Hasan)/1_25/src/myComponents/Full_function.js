import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


// ES6 Props Style
const Full_function=({ name, number, alertHo, bootButton })=>{

    const onChangeHandler=a=>alert(a);
    
    return (
        <div>
            <h2>I am the {number} function</h2>
            <h2>I'm {name}</h2>

            <button className={bootButton} onClick={onChangeHandler.bind(this, alertHo)}>Click to Change</button>
        </div>
    )
}

export default Full_function