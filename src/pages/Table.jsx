import React from 'react'
import TableItem from '../components/TableItem';
import '../css/table.css';
function Table() {

    const data=[
        {
            "button":"Edit",
            "studentId":"0908381645",
            "name":"Luu Van An",
            "date":"06/05/2000"
        },
        {
            "button":"Edit",
            "studentId":"0908381645",
            "name":"Nguyen Hoang Minh",
            "date":"06/05/2000"
        },
        {
            "button":"Edit",
            "studentId":"0908381645",
            "name":"Nguyen Dang Thien",
            "date":"06/05/2000"
        }
    ]
  return (
    <>
            <div className='table'>
                    <div className='table-title'><p>Student List </p><p className='count'>(4)</p></div>
                    <div className='buttons'>
                        <button>New...</button>
                        <button disabled>Delete</button>
                    </div>
                    <table>
                        <tr>
                            <th>Edit</th>
                            <th>Selected</th>
                            <th>StudentID</th>
                            <th>Name</th>
                            <th>Birthday</th>
                        </tr>
                        {
                            data.map((item,index)=>{
                                return  <TableItem 
                                button={item.button} 
                                studentId={item.studentId}
                                name={item.name}
                                birthday={item.date}
                                />
                            })
                        }
                    </table>
                    
            </div>
    </>
  )
}

export default Table