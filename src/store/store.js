import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as registrationReducer } from "./registrationSlice/registrationSlice";
import { reducer as popularCategoriesReducer } from './popularCategorySlice/popularCategorySlice'
import { reducer as categoriesReducer}  from './categorySlice/categorySlice'
import { reducer as categoryPageReducer } from './categoryPageSlice/categoryPageSlice'
import { reducer as productPageReducer } from './ProductPageSlice/ProductPageSlice' 

const rootReducer = combineReducers({
  registration: registrationReducer,
  popularCategories: popularCategoriesReducer,
  categories: categoriesReducer,
  categoryPage: categoryPageReducer,
  productPage: productPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
