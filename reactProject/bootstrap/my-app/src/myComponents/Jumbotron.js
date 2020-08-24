import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Blink=(a)=>{
    console.log(a);
}

const Jumbotron = (props)=>{
    return (
        <div class="jumbotron container">
  <h1 class="display-3">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"></hr>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a onClick={Blink.bind(this, props.greet)} class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
    )
}

export default Jumbotron