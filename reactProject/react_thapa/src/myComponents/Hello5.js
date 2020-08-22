import React from 'react'

function Hello5(props) {

    function clickAlert(a) {
        alert('your Button has Clicked')
        console.log(a);
    }
    return (
        <div>
            <h1>
                <pre>Name: {props.name}<br></br> Job: {props.baal}<br></br>C/No: {props.roll}</pre>
            </h1>
            <button onClick={clickAlert.bind(this, "Hello I am form para.....")}>Click Me</button>
        </div>
    )
}

export default Hello5