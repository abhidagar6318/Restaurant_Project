import { createSlice } from '@reduxjs/toolkit';
import coffeedummydata from '../DummyData/Coffeedummydata';
import cakeDummyData from '../DummyData/cakeDummyData';
import FoodDummyData from '../DummyData/FoodDummyData';
import BurgerDummyData from '../DummyData/BurgerDummyData';


const initialState = {
    cart: [],
    items: coffeedummydata,
    fooditems: FoodDummyData,
    cakeitems: cakeDummyData,
    burgeritems: BurgerDummyData,
    totalQuantity: 0,
    totalPrice: 0,

};

export const CardSlice1 = createSlice({


    name: 'cart',
    initialState,
    reducers: {

        // addtocart : (state, action)=>{

        //    let find = state.cart.findIndex((item)=> item.id === action.payload.id);
        //    if (find >=0){
        //     state.cart[find].quantity += 1;
        //    }else{
        //     state.cart.push(action.payload);
        //    }
        // },
        addCoffeeToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id && item.type === 'coffee');
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, type: 'coffee', quantity: 1 });
            }
        },
        addFoodToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id && item.type === 'food');
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, type: 'food', quantity: 1 });
            }
        },

        addCakeToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id && item.type === 'cake');
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, type: 'cake', quantity: 1 });
            }
        },

        addBurgerToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id && item.type === 'burger');
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, type: 'burger', quantity: 1 });
            }
        },






        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.type === action.payload.type) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },

        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.type === action.payload.type) {
                    return { ...item, quantity: Math.max(item.quantity - 1, 1) };
                }
                return item;
            });
        },


    }
})


export const { addBurgerToCart, addCakeToCart, addCoffeeToCart, addFoodToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = CardSlice1.actions
// export const {addtocart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity} = CardSlice1.actions

export default CardSlice1.reducer