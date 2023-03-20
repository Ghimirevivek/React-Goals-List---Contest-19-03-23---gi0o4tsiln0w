import React, { useState } from 'react'
import '../styles/App.css'
import GoalForm from './GoalForm'
import ListOfGoals from './ListOfGoals'

const App = () => {
  const [allGoals, setAllGoals] = useState([])
  const addGoals = (newGoal) => {
    setAllGoals((prev) => [...prev, newGoal])
  }
  return (
    <div id="main">
      <GoalForm onAddGoal={addGoals} />
      <ListOfGoals goals={allGoals} />
    </div>
  )
}

export default App
