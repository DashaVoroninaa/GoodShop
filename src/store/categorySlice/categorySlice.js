import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { getCategories } from "api";
import { LOAD_STATUSES, CATEGORIES } from "store/constants";

export const fetchCategories = createAsyncThunk(`${CATEGORIES}/getCategories`, async () => {
    const categories = await getCategories()
    return categories.categories
})

export const {actions, reducer} = createSlice ({
    name: CATEGORIES,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING
        })
        builder.addCase(fetchCategories.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED
            state.data = action.payload
        })
    }
})
