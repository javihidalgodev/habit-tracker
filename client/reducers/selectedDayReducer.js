import { createSlice } from "@reduxjs/toolkit";

const selectedDayReducer = createSlice({
  name: 'selectedDay',
  initialState: new Date().toDateString(),
  reducers: {
    setSelectedDay (state, action) {
      return action.payload
    }
  }
})

export const { setSelectedDay } = selectedDayReducer.actions

export default selectedDayReducer.reducer