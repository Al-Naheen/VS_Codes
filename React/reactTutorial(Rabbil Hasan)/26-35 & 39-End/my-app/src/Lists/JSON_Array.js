import React, { Component } from 'react';

class JSON_Array extends Component {

    option = (elem) => {
        return <option>{elem.name}</option>
    }
    option_2 = (elem) => {
        return <option>{elem.fourth_subject}</option>
    }


    render() {
        const jsonArray = [
            {
                name: 'Naheen',
                fourth_subject: "biology"
            },
            {
                name: 'Mahi',
                fourth_subject: "higher math"
            },
            {
                name: 'Raian',
                fourth_subject: "biology"
            },
        ]

        const new_jsonArray = jsonArray.map(this.option)
        const new_jsonArray_2 = jsonArray.map(this.option_2)

        return (
            <div>
                <select>
                    {new_jsonArray}
                </select>
                <select>
                    {new_jsonArray_2}
                </select>
                <h2>{jsonArray.length}</h2>
            </div>
        );
    }
}
export default JSON_Array;