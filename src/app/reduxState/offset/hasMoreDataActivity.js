import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: false }

const hasMoreActivityDataSlice = createSlice({
    name:"hasMoreActivityData",
    initialState,
    reducers:{
        noMoreData: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { noMoreData } = hasMoreActivityDataSlice.actions

export default hasMoreActivityDataSlice.reducer;