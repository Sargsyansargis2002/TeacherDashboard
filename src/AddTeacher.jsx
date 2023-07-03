import React from 'react'
import { useState } from 'react';
export default function AddTeacher({skills,addTeacherMethod}) {
  const [teacher,setTeacher] = useState({name: "", age: "", skills:[]})
  const [error,setError] = useState("");
  const addSkill = (name)=> {
    let skills = teacher.skills;
    if(!skills.includes(name)){
      skills.push(name);
    }
    setTeacher({...teacher,skills});

  }
  const addNewTeacher = (e)=>{
  e.preventDefault();
  if(!teacher.name.trim()  || ! teacher.age.trim()){
    setError ("Please write all spaces")
  }else if(teacher.skills.length === 0){
    setError("select tecknologies")
  }else if(teacher.age <=15 || teacher.age >=80){
    setError("Please write correct age")
  }else{
    setError("");
    addTeacherMethod(teacher);
    setTeacher({name: "", age: "", skills:[]})
  }
  }
  return (
    <div>
      <h3>Add Teacher</h3>
      <p className='error'>{error}</p>
      <form className='form' onSubmit={addNewTeacher}>
        <div>
          <label>Name</label>
          <input type='text' value={teacher.name} onChange={(e)=> setTeacher({...teacher,name:e.target.value})}/>
        </div>
        <div>
          <label>Age</label>
          <input type='number' value={teacher.age} onChange={(e)=> setTeacher({...teacher,age:e.target.value})}/>
        </div>
        <div>
          <label>Skils</label>
          <select onChange={(e) => addSkill(e.target.value)}>
        {
          skills.map((elm,index)=>{
        return <option key={index}>{elm}</option>
          })
        }
          </select>
          <ul>
            {
              teacher.skills.map((elm,index)=>{
            return <li key={index}>{elm}</li>
              })
            }
          </ul>
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}
