import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", (data) => {
    console.log(data)
    // const userData = await axios.post("/users/login")
    // console.log(userData)
  });




const userReducer = createReducer({}, {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLoginRequest.rejected]: (state, action) => action.payload,

    // [addToFavorites.fulfilled]: (state, action) => {
    //   state.favorites.push(action.payload);
    // },
    // [removeFromFavorites.fulfilled]: (state, action) => {
    //   state.favorites = state.favorites.filter(
    //     (fav) => fav.id !== action.payload.id
    //   );
    // },
  });
  
  export default userReducer;



//   import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
// import axios from "axios";

// export const setUser = createAsyncThunk("SET_USER", () => {
//   const localUser = JSON.parse(localStorage.getItem("user"));
//   if (localUser != null) {
//     return axios
//       .get("users/me")
//       .then((response) =>
//         localUser.id === response.data.id ? localUser : null
//       )
//       .catch((err) => console.log(err));
//   } else {
//     return null;
//   }
// });

// export const logOutUser = createAsyncThunk("LOG_OUT_USER", () => {
//   const localUser = JSON.parse(localStorage.setItem("user", null));
//   return null;
// });

// export const userReducer = createReducer(
//   {},
//   {
//     [setUser.fulfilled]: (state, action) =>
//       localStorage.setItem("user", JSON.stringify(action.payload)),
//     [setUser.rejected]: (state, action) => console.log("SET_USER rejected"),

//     [logOutUser.fulfilled]: (state, action) => action.payload,
//     [logOutUser.rejected]: (state, action) =>
//       console.log("LOG_OUT_USER rejected"),
//   }
// );