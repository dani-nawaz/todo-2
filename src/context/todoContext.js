import React, { useContext, useEffect, useReducer } from 'react'
import {
  ADD_TO_LIST,
  ADD_TO_LIST_RESET,
  CLEAR_CART,
  EDITING_ITEM,
  EDITING_ITEM_RESET,
  REMOVE_ITEM,
} from '../Constants/constants'
import { reducer } from '../reducer/TodoListReducer'

const TodoContext = React.createContext()
const initialState = {
  title: '',
  isEditing: false,
  editId: null,
  adddingSuccess: false,
  editingSuccess: false,
  list: [],
  alert: { type: '', msg: '', show: false },
}
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToList = (name) => {
    dispatch({ type: ADD_TO_LIST, payload: name })
  }
  const clearList = () => {
    dispatch({ type: CLEAR_CART })
  }
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id })
  }

  const editItem = (id) => {
    dispatch({ type: EDITING_ITEM, payload: id })
    console.log('edit')
  }
  console.log(state.isEditing)
  useEffect(() => {
    dispatch({ type: EDITING_ITEM_RESET })
    console.log('re')
  }, [state.adddingSuccess])

  return (
    <TodoContext.Provider
      value={{ ...state, addToList, clearList, removeItem, editItem }}
    >
      {children}
    </TodoContext.Provider>
  )
}
export const useTodoContext = () => {
  return useContext(TodoContext)
}
// useEffect(() => {
//   dispatch({ type: EDITING_ITEM_RESET })
//   console.log('re')
// }, [state.editingSuccess])
