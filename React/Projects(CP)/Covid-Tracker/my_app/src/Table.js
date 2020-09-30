import React from 'react'
import './Table.css'

function Table({ countries, cases }) {
    return (
        <div className='table'>
            {countries.map(country => (
                <tr>
                    <td>{country}</td>
                    <td> <strong>{cases}</strong></td>
                </tr>
            ))}
        </div>
    )
}

export default Table
