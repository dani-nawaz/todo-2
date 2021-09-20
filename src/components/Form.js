import React, { useState } from 'react'
import { useTodoContext } from '../context/todoContext'
import { Alerts } from './Alert'

const Form = () => {
  const { addToList, alert, isEditing, title } = useTodoContext()
  const [name, setName] = useState(title)
  const submitHandlder = (e) => {
    e.preventDefault()
    addToList(name)
    setName('')
  }

  return (
    <form className='grocery-form' onSubmit={submitHandlder}>
      {alert && <Alerts alert={alert} />}
      <h3>To-Do List</h3>
      <div className='form-control'>
        <input
          type='text'
          className='grocery'
          placeholder='e.g. eggs'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className='submit-btn'>
          {isEditing ? 'Edit' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default Form
