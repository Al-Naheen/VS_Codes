import React, { Component } from 'react';

class List extends Component {

    newArray=(elem)=>{
        return <option>{elem}</option>
    }



    render() {
        let extentions = ['py', 'html', 'js', 'jsx', 'css', 'scss']
        let newArr = extentions.map(this.newArray)

        return (
            <div>
                <select>{newArr}</select>
            </div>
        );
    }
}

export default List;