import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Render_Hydrate extends Component {
    // // Tutorial r PowerPoint Slide e ase--> Na dileo Pera hoy na
    // constructor(){
    //     super()
    //     this.reText = this.reText.bind(this)
    // }

    reText() {
        let container = document.getElementById('myID')
        let element = <h2>Change hoe gese hydrate e</h2>
        //CallBack r pore--> Element Change hocche
        let callBack = () => {
            alert('I am Call-back')
        }
        // ReactDOM.render(element, container, callBack)
        ReactDOM.hydrate(element, container, callBack)
    }

    render() {
        return (
            <div>
                <button onClick={this.reText} className="btn btn-danger mt-5">Render koro</button>
                <h1 id='myID'>Hi I'm Render Hydrate</h1>
            </div>
        )
    }
}

export default Render_Hydrate