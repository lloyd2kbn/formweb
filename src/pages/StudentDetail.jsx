import React from 'react'
import { useLocation } from 'react-router-dom';
import '../css/student.css';
function StudentDetail() {
  // const location=useLocation();
  // const {studentId,name,birthday}=location.state;
  // console.log(studentId,name,birthday)
  return (
      <div className='studentDetailContainer'>
    <h1>Student Detail</h1>
    <div className='studentDetail'>
        <div className='studentDetailLeft'>
                <div>StudentID</div>
                <div>Name</div>
                <div>Male</div>
                <div>BirthDay</div>
                <div>PlaceOfBirth</div>
                <div>Address</div>
                <div>Department</div>
                
            
        </div>
            <div className='studentDetailRight'>
                    <div className='studentId'>aaa</div>
                    <div className='name'>aaa</div>
                    <input type="checkbox" />
                    <div className='birthDay'>aa</div>
                    <div className='placeOfBirth'>Hà Nội</div>
                    <div className='address'>45 ký con</div>
                    <div className='department'>Anh Văn</div>
           
            </div>   
        <div>        
        </div>     
    </div>
    <div><button>Student List</button><button>Edit...</button></div>
      </div>
  )
}

export default StudentDetail