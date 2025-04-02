import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: "dark" | "light";
}

const initialState: ThemeState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
