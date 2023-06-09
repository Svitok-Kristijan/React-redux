import {combineReducers} from "redux";
import {userReducer} from "./user/user-reducer";
import {categoriesReducer} from "./category/categories.reducer";
import {cardReducer} from "./card/card.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  card: cardReducer,
});
