import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  cards: {},
};

// Slice
const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        front,
        back,
      };
    },
  },
});

// Actions
export const { addCard } = cardsSlice.actions;

// Reducer
export default cardsSlice.reducer;