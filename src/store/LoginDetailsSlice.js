const { createSlice } = require("@reduxjs/toolkit");
const LoggedinuserDetails = createSlice({
  name: " LoggedinuserDetails",
  initialState: {
    email: "",
    username: "",
    fullname: "",
    address: "",
    zipcode: "",
    wallet: "",
    password : "",
  },
  reducers: {
    changeUser(state, action) {
      // console.log(state);
      state.email = action.payload.email;
      state.username = action.payload.username
      state.fullname = action.payload.fullname
      state.address = action.payload.address
      state.zipcode = action.payload.zipcode
      state.wallet = action.payload.wallet
      state.password = action.payload.password
    },
  },
});

export const { changeUser } = LoggedinuserDetails.actions;
export default LoggedinuserDetails.reducer;
