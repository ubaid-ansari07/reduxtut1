const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name:'master',
    initialState:{
        value:{
            productList:[{
                productName:'Shoes',
                productPrice:5000,
                productQty:20
            },
            {
                productName:'Bag',
                productPrice:2000,
                productQty:15
            },
            {
                productName:'Tv',
                productPrice:75000,
                productQty:8
            },
            {
                productName:'Ac',
                productPrice:95000,
                productQty:20
            },
            {
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
        },
        save:(state,action)=>{
            state.value.productList.push(action.payload)
        },
        update:(state,action)=>{
            let index = action.payload.index;
            let obj = action.payload.obj;
            state.value.productList.splice(index,1,obj);
        }
    }
});
export const {remove,save,update} = slice.actions;
export default slice.reducer