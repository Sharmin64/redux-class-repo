import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type CounterType = {
    count: number
}
const initialState :CounterType= { count:0 }


 export const counterSlice = createSlice({
name:'counter',
initialState,
reducers:{
    incrementByValue:(state , action:PayloadAction<number>)=>{
        state.count +=action.payload
    },
    increment:(state )=>{
        state.count +=2
    },
    decrement: (state)=> {
        state.count -=2
    }
}
})

export const {increment, decrement,incrementByValue}= counterSlice.actions;

export default counterSlice.reducer;



