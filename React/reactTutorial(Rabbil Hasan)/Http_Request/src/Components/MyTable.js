import React, { Component } from 'react'
import ReactTable from "react-table";

export default class MyTable extends Component {
    render() {
        const tableData = [
            { name: 'Naheen', age: 16 },
            { name: 'Mahi', age: 12 },
            { name: 'Raian', age: 14 }
        ]
        const tableColumns = [ { Header: 'Names', accessor: 'name' }, { Header: 'Ages', accessor: 'age' } ]

        return (
            <div>
                <ReactTable
                    data={tableData}
                    columns={tableColumns}
                    defaultPageSize={2}
                    pageSizeOptions={[ 2, 4, 6, 8 ]}
                />
            </div>
        )
    }
}
