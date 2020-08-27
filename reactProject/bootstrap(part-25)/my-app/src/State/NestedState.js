import React, { Component } from 'react'

class NestedState extends Component {
    constructor() {
        super()
        let obj = {
            name: 'al naheen',
            roll: [ 5841, [ 136, 'baaaaaal', 'mor' ], 543 ],
            kaj: {
                tutorial: 'wed, javascript, backend & react',
                project: "vanilla, CWH, React(CP)",
                expert: [ 5841, [ 136, 'baaaaaal', 'mor', {
                    nameAgain: 'Al Naheen',
                    age: [16, 18, 20]
                } ],
                    543 ],
            }
        }

        this.state = obj
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.roll[ 1 ][ 2 ]}</h1>
                <h1>{this.state.kaj.expert[ 1 ][ 3 ].age[1]}</h1>
            </div>
        )
    }
}

export default NestedState