import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStoreType = {
  lng: string;
  setLng: (lng: string) => void;
};

export const useThemeStore = create<ThemeStoreType>()(
  persist(
    (set) => ({
      lng: "es",
      setLng: (lng: string) => set({ lng }),
    }),
    { name: "theme" }
  )
);
