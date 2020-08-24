import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const clickme=(a)=>{
    console.log(a);
}

const ArrowBoot=props=>{
    return(
        <button onClick={clickme.bind(this, `Heellllo my ${props.name} booooyyy`)} className='btn btn-danger m-5'>Click {props.name}</button>

    )
}

export default ArrowBoot