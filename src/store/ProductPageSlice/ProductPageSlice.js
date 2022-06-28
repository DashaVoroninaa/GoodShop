import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { getProductById } from "api";
import { LOAD_STATUSES, PRODUCT_PAGE } from "store/constants";

export const fetchProductPage = createAsyncThunk(`${PRODUCT_PAGE}/getProductPage`, async (id) => {
    const productPage = await getProductById(id)
    return productPage.items
})

export const {actions, reducer} = createSlice ({
    name: PRODUCT_PAGE,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductPage.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING
        })
        builder.addCase(fetchProductPage.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR
        })
        builder.addCase(fetchProductPage.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED
            state.data = action.payload
        })
    }
})
