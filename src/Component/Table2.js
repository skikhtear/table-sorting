import React, { useState } from 'react';
import TableData from "../tableTestData.json"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';




const Table2 = () => {
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
                            <th onClick={() => sorting("")}><div className='flex'><h1 className='mr-2'>Name</h1> <div><FaArrowUp /><FaArrowDown /></div></div></th>
                            <th >Email Address</th>
                            <th >Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData &&
                            tableData.map(td => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="rounded w-18 h-18">
                                                <img src={td.person.avatar} alt="" className='rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{td.person.name}</div>
                                        </div>
                                    </div>
                                </td>                             
                                <td>{td.email}</td>
                                <td>{td.role}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table2;