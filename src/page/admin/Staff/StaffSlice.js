import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1
}

export const fetchCategoriesAsynk = createAsyncThunk(
    "categories/fetchCategoriesAsynk",
    async () => {
        const {data} = await getCategories();
        return data;
    }
)

export const StaffSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = 1 
    }
  },
  extraReducers : builder => {
    builder
    .addCase(fetchCategoriesAsynk.fulfilled, (state, action) =>{
        state.categories = action.payload;
    })
  }
})

export const { increment } = StaffSlice.actions

export default StaffSlice.reducer