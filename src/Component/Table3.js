import React, { useState } from 'react';
import TableData from "../tableTestData.json"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';




const Table3 = () => {
    const [tableData, setTableData] = useState(TableData);
    const [order, setOrder] = useState("ASC")
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...tableData].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setTableData(sorted);
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...tableData].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setTableData(sorted);
            setOrder("ASC")
        }
    }

    return (
        <div className='mt-20'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-2/4">
                    <thead>
                        <tr>
                            <th>Email Address</th>
                            <th onClick={() => sorting("joiningDate")}><div className='flex'><h1 className='mr-2'>Joining Date</h1> <div><FaArrowUp /><FaArrowDown /></div></div></th>
                            <th onClick={() => sorting("role")}><div className='flex'><h1 className='mr-2'>Role</h1> <div><FaArrowUp /><FaArrowDown /></div></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData &&
                            tableData.map(td => <tr>
                                <td>{td.email}</td>
                                <td>{td.joiningDate}</td>
                                <td>{td.role}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table3;