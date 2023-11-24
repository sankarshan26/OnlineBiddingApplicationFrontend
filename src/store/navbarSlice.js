const {createSlice} = require("@reduxjs/toolkit")
const navbarSlice = createSlice({
    name: 'navbarstate',
    initialState: {value:"home"},
    reducers:{
        change(state,action){
            state.value= action.payload
        },
    }
})

export const {change} = navbarSlice.actions ;
export default navbarSlice.reducer ;