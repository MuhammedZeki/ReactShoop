import { createSlice } from "@reduxjs/toolkit"
const getFromLocalStorageToBasketProduct=()=>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}

const initialState={
    basketProduct:getFromLocalStorageToBasketProduct(),
    totalAmount:0
}
const writeFromLocalStorageToBasketProduct=(getAction)=>{
    localStorage.setItem("basket",JSON.stringify(getAction))
}
export const BasketSlicer = createSlice({
    name:"basket",
    initialState,
    reducers:{
        getAllBasket:(state,action)=>{
            const basket = state.basketProduct.find((bas)=>bas.id == action.payload.id)
            if(basket){
                const find = state.basketProduct.filter((bul)=>bul.id !== basket.id)
                basket.count += action.payload.count
                state.basketProduct=[...find,basket]
                writeFromLocalStorageToBasketProduct(state.basketProduct)
            }else{
                state.basketProduct=[...state.basketProduct,action.payload]
                writeFromLocalStorageToBasketProduct(state.basketProduct)
            }            
        },
        getAmount:(state)=>{
            state.basketProduct?.map((basket)=>{
                return state.totalAmount += basket.price * basket.count
            })
        },
        getDelete:(state,action)=>{
            state.basketProduct =[...state.basketProduct.filter((basket)=> basket.id !== action.payload.id)]
            writeFromLocalStorageToBasketProduct(state.basketProduct)
        }
    }
})
export const { getAllBasket ,getAmount ,getDelete}=BasketSlicer.actions
export default BasketSlicer.reducer