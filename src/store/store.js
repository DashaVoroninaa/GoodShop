import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as registrationReducer } from "./registrationSlice/registrationSlice";
import {reducer as popularCategoriesReducer} from './popularCategorySlice/popularCategorySlice'

const rootReducer = combineReducers({
  registration: registrationReducer,
  popularCategories: popularCategoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
