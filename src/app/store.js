import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../app/features/topics";

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
`;