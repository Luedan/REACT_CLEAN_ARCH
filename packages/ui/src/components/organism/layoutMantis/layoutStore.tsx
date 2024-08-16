import { create } from "zustand";
import { TLayoutStore } from "./types";

export const useLayoutStore = create<TLayoutStore>((set) => ({
    drawerStatus: false,
    handleDrawer: (open: boolean) => set(() => ({ drawerStatus: open })),
}))