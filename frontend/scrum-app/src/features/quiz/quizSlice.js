import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    value: 0,
  },
  reducers: {
    rightAnswer: state => {
      state.value += 1;

      // state.push({
      //   id: action.payload.id,
      //   question: action.payload.question,
      //   answer: action.payload.answer,
      //   completed: true,
      // });
    },
    wrongAnswer: state => {
      state.value -= 1;
    },
  },
});

export const { rightAnswer, wrongAnswer } = quizSlice.actions;
export default quizSlice.reducer;
