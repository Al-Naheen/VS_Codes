import React, { Component } from 'react';

class List extends Component {
    render() {
        const mylist = [ 'naheen', 'kuddus', 'hola' ]
        const newArray = mylist.map((elem) => {
            return <option>{elem}</option>
        })

        return (
            <div>
                <select>
                    {newArray}
                </select>
            </div>
        );
    }
}

export default List;