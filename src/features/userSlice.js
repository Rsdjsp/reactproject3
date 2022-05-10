import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../api";

export const validateUser = createAsyncThunk("user/validate", async (data) => {
  const response = await get("/api/auth/validate");
  return response.data;
});
export const loginUser = createAsyncThunk("user/login", async (data) => {
  const response = await post("/api/auth/login", {
    email: data.email,
    password: data.password,
  });
  return response.data.user;
});
export const logOutUser = createAsyncThunk("user/logout", async () => {
  const response = await post("/api/auth/logout");
  return response.data;
});
export const registerUser = createAsyncThunk("user/login", async (data) => {
  const response = await post("/api/auth/signup", {
    name: `${data.firstname} ${data.lastname}`,
    email: data.email,
    password: data.password,
  });
  return response.data.user;
});
export const userCart = createAsyncThunk("user/cart", async () => {
  const response = await get("/api/cart");
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    logged: false,
    userId: "",
    name: "",
    email: "",
    cartId: "",
    cart: [],
    loading: false,
    error: false,
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.logged = true;
        state.userId = action.payload._id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.cartId = action.payload.cart;
        state.loading = false;
      })
      .addCase(validateUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(validateUser.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(validateUser.fulfilled, (state, action) => {
        state.logged = true;
        state.userId = action.payload._id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        
        state.cartId = action.payload.cart;
        state.loading = false;
      })
      .addCase(logOutUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.logged = false;
        state.loading = false;
      })
      .addCase(userCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userCart.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(userCart.fulfilled, (state, action) => {
        state.logged = true;
        state.loading = false;
        state.cart = action.payload;
      });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
