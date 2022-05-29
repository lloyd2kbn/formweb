import React from 'react'
import { Link} from 'react-router-dom';
function TableItem({button,studentId,name,birthday}) {
  return (
                    <tr>
                        <td><button><Link to="/detail">{button}</Link></button></td>
                            <td><input type="checkbox" /></td>
                            <td>{studentId}</td>
                            <td>{name}</td>
                            <td>{birthday}</td>
                        </tr>
  )
}

export default TableItem