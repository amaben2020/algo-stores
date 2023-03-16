import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UserInfoPayload, UserState } from "~/app/models/user";

const initialState: UserState = {
  user: {} as UserInfoPayload,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state: UserState,
      action: PayloadAction<NonNullable<UserInfoPayload>>,
    ) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user.email = "";
      state.user.name = "";
      state.user.image = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
