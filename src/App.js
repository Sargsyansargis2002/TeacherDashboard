import "./App.css";
import AddTeacher from "./AddTeacher";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";


function App() {
  useEffect(()=>{
  fetch("teacher.json")
  .then((r)=> r.json())
  .then(r=> {
    setTeachers(r.data)
    setResult(r.data)
  }

  )},[])
  const [teachers,setTeachers] = useState([]);
  const [result, setResult] = useState ([]);
  const skills = [
    "HTML","CSS","jS","React","Angular","Node","C#","Phyton","OOP","SQL","Java","Django","C++"
  ]
  const add = (t)=>{
 setTeachers([...teachers,t]);
  }
  console.log(teachers)
  return (
    <div className="App">
      <h1>Teachers  {teachers.length}</h1>
      <div id="main">
        <AddTeacher skills={skills} addTeacherMethod={add}/>
        <Dashboard skills = {skills} teachers = {result}/>
      </div>
    </div>
  );
}

export default App;
