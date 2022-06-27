import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { getPopularCategories } from "api";
import { LOAD_STATUSES, POPULAR_CATEGORIES } from "store/constants";

export const fetchPopularCategories = createAsyncThunk(`${POPULAR_CATEGORIES}/getPopularCategories`, async () => {
    const popularCategories = await getPopularCategories()
    return popularCategories
})

export const {actions, reducer} = createSlice ({
    name: POPULAR_CATEGORIES,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPopularCategories.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING
        })
        builder.addCase(fetchPopularCategories.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR
        })
        builder.addCase(fetchPopularCategories.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED
            state.data = action.payload
        })
    }
})
