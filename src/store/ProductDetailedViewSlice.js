const {createSlice} = require("@reduxjs/toolkit")
const ProductDetailedViewSlice = createSlice({
    name: 'productDetailedView',
    initialState: {
        id:0,
        name:"",
        rating:0.0,
        endDate : '',
        baseprice: 0,
        currPrice: 0,
        Topbidder : "",
        image:"",
        images: [
            "",
            "",
            "",
            "",
          ],
          description:"",
    },
    reducers:{
        changeDetailedView(state,action){
            // console.log(state)
            state.id= action.payload.id
            state.name=action.payload.name
            state.rating =action.payload.rating
            state.endDate =action.payload.endDate
            state.baseprice =action.payload.baseprice
            state.currPrice =action.payload.currPrice
            state.image =action.payload.image
            state.images = [...action.payload.images]
            state.Topbidder = action.payload.Topbidder
            state.description = action.payload.description
        },
    }
})

export const {changeDetailedView} = ProductDetailedViewSlice.actions ;
export default ProductDetailedViewSlice.reducer ;