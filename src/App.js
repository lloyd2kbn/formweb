
import Table from './pages/Table';
import StudentDetail from './pages/StudentDetail';
import Forms from './pages/FormNewStudent';
import "./App.css";
import { Route,Routes } from 'react-router-dom';
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import FormUpdate from './pages/FormUpdate';


function App() {
  return (
 
      <Routes>
          <Route path='/' element={<Table/>}/>
          <Route path='/detail' element={<StudentDetail/>}/>
          <Route path='/edit' element={<FormUpdate/>}/>
          <Route path='/formNewStudent' element={<Forms/>}/>
      </Routes>
  
 
  );
}

export default App;
