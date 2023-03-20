import React, { useState } from 'react'

const GoalForm = ({ onAddGoal }) => {
  const [formData, setFormData] = useState({
    goal: '',
    by: '',
  })

  const submitHandler = (e) => {
    e.preventDefault()
    const newGoal = { goal: formData.goal, by: formData.by }
    onAddGoal(newGoal)
    setFormData({ goal: '', by: '' })
  }
  const changeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  return (
    <>
      <h1>My Goals</h1>
      <form on onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal..."
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default GoalForm
