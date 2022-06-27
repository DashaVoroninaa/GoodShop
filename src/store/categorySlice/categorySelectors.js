import { LOAD_STATUSES } from "store/constants";

export const getCategoriesSelector = (state) => state.categories.data;

export const getLoadStatus = (state) => state.categories.loadStatus;

export const isLoading = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADED;
