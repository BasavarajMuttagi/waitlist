import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
import { filterType } from "./zod/schemas";

type waitListStoreType = {
  filter: filterType;
  setFilter: (newFilter: filterType) => {};
};
const storageModule: PersistOptions<waitListStoreType> = {
  name: "waitlist-storage",
  storage: createJSONStorage(() => sessionStorage),
  skipHydration: true,
};

const creator = (set: any, get: any) => ({
  filter: {} as filterType,
  setFilter: (newFilter: filterType) =>
    set(() => ({
      filter: newFilter,
    })),
});

const useWaitlistStore = create<waitListStoreType>()(
  persist(creator, storageModule)
);
export default useWaitlistStore;
