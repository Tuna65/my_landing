import { RootState } from "@/lib/store";

export const themeSelector = (state: RootState) => state.theme.theme;
