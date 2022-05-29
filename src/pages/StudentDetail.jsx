import React from 'react'
import '../css/student.css';
function StudentDetail() {
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
                    <div className='studentId'>090838</div>
                    <div className='name'>Nguyễn Hoàng Minh</div>
                    <input type="checkbox" />
                    <div className='birthDay'>1972-05-02</div>
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