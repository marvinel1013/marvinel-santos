import { create } from "zustand";

interface ShowMobileMenu {
  isOpen: boolean;
  onOpen: () => void;
}

export const useShowMobileMenu = create<ShowMobileMenu>((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
