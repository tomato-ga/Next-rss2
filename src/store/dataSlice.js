import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    totalCount: 0,
    page: 1,
    limit: 10
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    }
  }
});

export const { setData } = dataSlice.actions;

export const selectData = (state) => state.data.data;
export const selectTotalCount = (state) => state.data.totalCount;
export const selectPage = (state) => state.data.page;
export const selectLimit = (state) => state.data.limit;

export default dataSlice.reducer;
