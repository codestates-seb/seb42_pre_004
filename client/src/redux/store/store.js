import { configureStore } from '@reduxjs/toolkit';
import getQViewSlice from '../slice/getQView';
import getAnswerSlice from '../slice/getAnswer';
import getTopQListSlice from '../slice/getTopQListSlice';
import getTagsSLice from '../slice/getTags';
import viewEditSlice from '../slice/viewEditSlice';
import getQuestionSlice from '../slice/getQuestionSlice';
import getAllQuesionSlice from '../slice/getAllQuestionSlice';

const store = configureStore({
  reducer: {
    getTopQList: getTopQListSlice.reducer,
    getQView: getQViewSlice.reducer,
    getAnswer: getAnswerSlice.reducer,
    getTags: getTagsSLice.reducer,
    viewEdit: viewEditSlice.reducer,
    getQuestion: getQuestionSlice.reducer,
    getAllQuestion: getAllQuesionSlice.reducer,
  },
});

export default store;
