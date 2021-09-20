import React from 'react'
import List from '../container/List'
import { useTodoContext } from '../context/todoContext'

const ListContainer = () => {
  const { list, clearList, removeItem, editItem } = useTodoContext()
  return (
    <div className='grocery-container'>
      <List items={list} removeItem={removeItem} editItem={editItem} />
      <button className='clear-btn' onClick={clearList}>
        clear items
      </button>
    </div>
  )
}

export default ListContainer
