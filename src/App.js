import "./App.css";
import AddTeacher from "./AddTeacher";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { searchBySkills } from "./Lib";


function App() {
  const [result, setResult] = useState([]);
  const [teachers,setTeachers] = useState([]);
  const updateList = (list)=>{
    list = list.filter(a=>a.active).map(a=> a.title);
    let data = searchBySkills(teachers,list);
    setResult(data);
  }
  useEffect(()=>{
  fetch("teachers.json")
  .then((r)=> r.json())
  .then((r)=> {
    setTeachers(r.data)
    setResult(r.data)
  }

  )},[])
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
        <Dashboard  fn={updateList} skills = {skills} teachers = {result}/>
      </div>
    </div>
  );
}

export default App;
