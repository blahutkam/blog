import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import blogReducer from "./blog/blog.reducer";
import commentsReducer from "./comments/comments.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "blog", "postComments"],
};

const rootReducer = combineReducers({
  user: userReducer,
  blog: blogReducer,
  postComments: commentsReducer,
});

export default persistReducer(persistConfig, rootReducer);
