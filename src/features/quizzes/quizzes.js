import { createSlice } from '@reduxjs/toolkit';
import { addQuizToTopic } from './topics';

// Initial state
const initialState = {
  quizzes: {},
};

// Slice
const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        name,
        topicId,
        cardIds,
      };
    },
  },
});

// Selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Actions
export const { addQuiz } = quizzesSlice.actions;


// Thunk Action Creator
export const createQuiz = (quizData) => (dispatch) => {
  const { id, name, topicId, cardIds } = quizData;

  dispatch(addQuiz(quizData));
  dispatch(addQuizToTopic({ quizId: id, topicId }));
};

// Reducer
export default quizzesSlice.reducer;