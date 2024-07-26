import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { status } from "../../utils/Status";
import axios from "axios";
import { baseURL } from "../../api/BaseURL";

const initialState ={
    products:[],
    categories:[],
    selectedProduct:{},
    status:status.idle
}
export const getAllProducts = createAsyncThunk("getAllProducts",async()=>{
    const response = await axios.get(baseURL.BASE_URL)
    return response.data
})
export const getAllCategories= createAsyncThunk("getAllCategories",async()=>{
    const response = await axios.get(baseURL.CATEGOTİES_URL)
    return response.data 
})
export const selectedCategoryy = createAsyncThunk("selectedCategory",async(category)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    return response.data
})
export const filterSort = createAsyncThunk("filterProducts",async(filter)=>{
    const response = await axios.get(`https://fakestoreapi.com/products?sort=${filter}`)
    return response.data
})
export const selectedProductt = createAsyncThunk("selectedProduct",async(id)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
})
export const ProductSlicer =  createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getAllProducts.pending,(state)=>{
                state.status=status.loading
            })
            .addCase(getAllProducts.fulfilled,(state,action)=>{
                state.status=status.success
                state.products=action.payload
            })
            .addCase(getAllProducts.rejected,(state)=>{
                state.status=status.error
            })
            .addCase(getAllCategories.pending,(state)=>{
                state.status=status.loading
            })
            .addCase(getAllCategories.fulfilled,(state,action)=>{
                state.status=status.success
                state.categories=action.payload
            })
            .addCase(getAllCategories.rejected,(state)=>{
                state.status=status.error
            })
            .addCase(selectedCategoryy.pending,(state)=>{
                state.status=status.loading
            })
            .addCase(selectedCategoryy.fulfilled,(state,action)=>{
                state.status=status.success
                state.products=action.payload
            })
            .addCase(selectedCategoryy.rejected,(state)=>{
                state.status=status.error
            })
            .addCase(selectedProductt.pending,(state)=>{
                state.status=status.loading
            })
            .addCase(selectedProductt.fulfilled,(state,action)=>{
                state.status=status.success
                state.selectedProduct=action.payload
            })
            .addCase(selectedProductt.rejected,(state)=>{
                state.status=status.error
            })
    }
})
export default ProductSlicer.reducer