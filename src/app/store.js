import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transaction/transactionSlice";
import searchReducer from "../features/search/searchSlice";
import filterReducer from "../features/filter/filterSlice";
import paginationReducer from "../features/pagination/paginationSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        search: searchReducer,
        filter: filterReducer,
        pagination: paginationReducer,
    },
});
