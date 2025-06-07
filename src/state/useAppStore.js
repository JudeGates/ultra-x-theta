import { create } from "zustand";

export const useAppStore = create((set) => ({
  connected: false,
  balance: 1250.55,
  connect: () => set({ connected: true }),
}));
