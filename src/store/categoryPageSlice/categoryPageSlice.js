import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { getCategoriesById } from "api";
import { LOAD_STATUSES, CATEGORY_PAGE } from "store/constants";

export const fetchCategoryPage = createAsyncThunk(`${CATEGORY_PAGE}/getCategoryPage`, async (categoryTypeId) => {
    const categoryPage = await getCategoriesById(categoryTypeId)
    return categoryPage.items
})

export const {actions, reducer} = createSlice ({
    name: CATEGORY_PAGE,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryPage.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING
        })
        builder.addCase(fetchCategoryPage.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR
        })
        builder.addCase(fetchCategoryPage.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED
            state.data = action.payload
        })
    }
})
