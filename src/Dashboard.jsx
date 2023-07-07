import React from 'react'
import Teacher from './Teacher'
import Filter from './Filter'

export default function Dashboard ({teachers, skills, fn}) {
  return (
    <div>
    <h1>Dashboard</h1>
    <Filter fn={fn} skills = {skills}/>
    <div className='teachers'>
     {
      teachers.map((teach,i)=>{
    return <Teacher key={i} {...teach}/>
      })
     }
    </div>
    </div>
  )
}
