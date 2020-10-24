import React, { Component } from 'react';

class JSON extends Component {

    myDataChild = (elem) => {
        return <option>{elem.language}</option>
    }

    render() {
        const listJson = [ {
            language: 'JavaScript',
            position: '2nd'
        },
        {
            language: 'Python',
            position: '1st'
        },
        {
            language: 'Java',
            position: '3rd'
        }
        ]


        const language = listJson.map(this.myDataChild)

        const position = listJson.map((elem) => {
            return <option>{elem.position}</option>
        })
        return (
            <div>
                <select>{language}</select>
                <select>{position}</select>
            </div>
        );
    }
}

export default JSON;