import React from 'react'

function Todo(props) {
    return (
            <div class="my-4" style={{display:"flex"}}>
                <div class="card" style={{width: 400, display:"flex"}}>
                    <div class="card-body">
                        <h5 class="card-title">{props.text}</h5>
                        <p class="card-text">{props.text}</p>
                        <a href="#" class="btn btn-primary">Delete It</a>
                    </div>
                </div>
            </div>
    )
}

export default Todo
