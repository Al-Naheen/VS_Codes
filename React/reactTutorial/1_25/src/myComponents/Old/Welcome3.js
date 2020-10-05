import React, { Component } from 'react'

class Welcome3 extends Component {

    Click2(a, b, c, d) {
        alert("tmi Click korso Class er moddhe.....");
        console.log(a, b);
        console.log(c, d);
    }


    render() {

        function clickClass() {
            let prom = prompt("Are you Mental...?")
            document.write(prom)
        }

        return <h2>
            <button onClick={this.Click2.bind(this, "1st para", '2nd para', '3rd', '4th')}>This keyWord Button</button>

            <pre>No.{this.props.num} channel is {this.props.name}</pre>
            <button onClick={clickClass}>Class Click Me</button>
        </h2>
    }
}

export default Welcome3