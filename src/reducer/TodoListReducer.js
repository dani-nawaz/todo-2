// import {
//   ADD_TO_LIST,
//   ADD_TO_LIST_RESET,
//   CLEAR_CART,
//   EDITING_ITEM,
//   EDITING_ITEM_RESET,
//   REMOVE_ITEM,
// } from '../Constants/constants'

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_LIST:
//       if (action.payload) {
//         const newItem = {
//           id: new Date().getTime().toString(),
//           title: action.payload,
//         }
//         return {
//           ...state,
//           list: [...state.list, newItem],
//           adddingSuccess: true,
//           alert: { type: 'success', msg: 'Item Added', show: true },
//         }
//       } else {
//         return {
//           ...state,
//           adddingSuccess: true,
//           alert: { type: 'error', msg: 'please Enter the value', show: true },
//         }
//       }
//     case ADD_TO_LIST_RESET:
//       return {
//         ...state,
//         addingSuccess: false,
//       }
//     case CLEAR_CART:
//       return {
//         ...state,
//         alert: { type: 'success', msg: 'List Cleared', show: true },
//         list: [],
//       }
//     case REMOVE_ITEM:
//       const newList = state.list.filter((item) => item.id !== action.payload)
//       return {
//         successRemove: true,
//         list: newList,
//         alert: { type: 'success', msg: 'Item Removed', show: true },
//       }
//     case EDITING_ITEM:
//       const specificItem = state.list.find((item) => item.id === action.payload)

//       return {
//         list: [...state.list, newItem],
//         isEditing: true,
//         editingSuccess: true,
//       }

//     case EDITING_ITEM_RESET:
//       return { ...state, name: '', isEditing: false, editingSuccess: false }
//     default:
//       throw new Error(`No matching ${action.type}`)
//   }
// }
