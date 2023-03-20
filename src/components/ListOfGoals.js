import React from 'react'

const ListOfGoals = (props) => {
  return (
    <ul>
      {props.goals.map((goal, index) => {
        return (
          <li key={index}>
            <p>
              My goal is to {goal.goal}, by {goal.by}.
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default ListOfGoals
