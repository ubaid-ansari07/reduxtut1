const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name:'master',
    initialState:{
        value:{
            productList:[{
                id:1,
                productName:'Shoes',
                productPrice:5000,
                productQty:20
            },
            {
                id:2,
                productName:'Bag',
                productPrice:2000,
                productQty:15
            },
            {
                id:3,
                productName:'Tv',
                productPrice:75000,
                productQty:8
            },
            {
                id:4,
                productName:'Ac',
                productPrice:95000,
                productQty:20
            },
            {
                id:5,
                productName:'Car',
                productPrice:5000000,
                productQty:2
            },
        ]
        }
    },
    reducers:{
        remove:(state,action)=>{
            let index = action.payload;
            state.value.productList.splice(index,1);
        }
    }
});
export const {remove} = slice.actions;
export default slice.reducer