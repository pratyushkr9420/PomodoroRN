import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullTime : 40,
}

const timerSlice = createSlice({
    name:'timer',
    initialState,
    reducers: {
        changeFullTimer:(state : any, action : any) => {
            state.fullTime = action.payload
        }
    }
})

export const { changeFullTimer } = timerSlice.actions;

export default timerSlice.reducer;