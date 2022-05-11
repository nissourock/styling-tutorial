import { createSlice, configureStore } from '@reduxjs/toolkit'



const INITIAL_STATE = []


export {INITIAL_STATE}


const basketSlice = createSlice({
    name: 'basket',
    
    initialState: INITIAL_STATE,
    reducers: {
      add: (state, action) => {
          if (state.find(item => item.id === action.payload.id)) {
            let vartochange =  state.find(item => item.id === action.payload.id)
            vartochange.quantity +=1
           }
           else { return [...state, {...action.payload, quantity: 1}]}
         
      },
      remove: (state, action) => {
        if (state.find(item => item.id === action.payload.id)) {
        let vartochange =  state.find(item => item.id === action.payload.id)
        if  (vartochange.quantity>1){ vartochange.quantity -=1}
          else {return state.filter(item => item.id !== action.payload.id)}
      }

      
      },
      
      deleteitem: (state,action) => {return state.filter(item => item.id !== action.payload.id)}
        
      }
    
  })
export const store = configureStore({ reducer: basketSlice.reducer })

  export const { add, remove, deleteitem} = basketSlice.actions
  export { basketSlice }
