import { createSlice, CreateSliceOptions, PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from '../store'

export interface CounterState {
    value : number
}


const initialDetails : CounterState = {
  value : 2,
}


export const counterSlice = createSlice({
  name : 'counter',
  initialState : initialDetails,
  reducers: {
    increment : (state) => {
      state.value+=1
    },
    decrement : (state) => {
      state.value-=1
    },
    incrementByAmount : (state, action : PayloadAction<number> ) => {
      state.value+=action.payload
    }
  }
})

export const {increment, decrement} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter

export default counterSlice.reducer
