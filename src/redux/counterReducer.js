import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    add: (state, action) => {
      const productToAdd = action.payload;
      const isProductExists = state.value.some(product => product.id === productToAdd.id);
      if (!isProductExists) {
          state.value.push(productToAdd);
      }
  },
  remove: (state) => {
    state.value = []; // Set the value array to an empty array to remove all data.
  },
},
})


export const { add, remove } = counterSlice.actions

export default counterSlice.reducer