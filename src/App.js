import "./App.css";
import AddTeacher from "./AddTeacher";
import Dashboard from "./Dashboard";
import { useState } from "react";


function App() {
  const [teachers,setTeachers] = useState([]);
  const skills = [
    "HTML","CSS","jS","React","Angular","Node","C#","Phyton","OOP","SQL","Java","Django","C++"
  ]
  const add = (t)=>{
 setTeachers([...teachers,t]);
  }
  console.log(teachers)
  return (
    <div className="App">
      <h1>Teacher Application</h1>
      <div id="main">
        <AddTeacher skills={skills} addTeacherMethod={add}/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
