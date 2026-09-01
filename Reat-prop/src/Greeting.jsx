import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h3>Good Afternoon {props.name}</h3>
      <h3>{props.name}'s age is {props.age}</h3>
       <h3>{props.name}'s learning skill is {props.target}</h3>

       <ul>
            {props.skills.map((skills, index) =>(

                <li key={index}>{skills}</li>
            ))}
       </ul>
    </div>
  )
}
