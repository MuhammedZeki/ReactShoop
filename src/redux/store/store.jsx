import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slicer/ProductSlicer";
import BasketReducer from "../slicer/BasketSlicer";

export const store = configureStore({
    reducer:{
        product:ProductReducer,
        basket:BasketReducer
    }
})