import React from 'react'

function TableItem({button,studentId,name,birthday}) {
  return (
                    <tr>
                        <td><button>{button}</button></td>
                            <td><input type="checkbox" /></td>
                            <td>{studentId}</td>
                            <td>{name}</td>
                            <td>{birthday}</td>
                        </tr>
  )
}

export default TableItem