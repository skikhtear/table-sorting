import React, { useState } from 'react';
import TableData from "../tableTestData.json"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';




const Table4 = () => {
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
        <div className='my-20'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-3/4">
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th onClick={() => sorting("city")} ><div className='flex'><h1 className='mr-2'>City</h1> <div><FaArrowUp /><FaArrowDown /></div></div></th>
                            <th >Joining Date</th>
                            <th onClick={() => sorting("role")}><div className='flex'><h1 className='mr-2'>Role</h1> <div><FaArrowUp /><FaArrowDown /></div></div></th>
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
                                <td>{td.city}</td>
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

export default Table4;