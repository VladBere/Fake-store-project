import { create } from 'zustand'

type Store = {
  ids: string[]
    addId: (newId: string) => void
};

export const useStore = create<Store>((set) => ({
  ids:[],
  addId: (newId) =>
    set((state) => ({ ids: [...state.ids, newId] })),
}));
