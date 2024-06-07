import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
import { filterType } from "./zod/schemas";

type waitListStoreType = {
  filters: filterType;
  setFilter: (newFilter: filterType) => void;
  resetStore: () => void;
  removeNameChip: (name: string) => void;
};
const storageModule: PersistOptions<waitListStoreType> = {
  name: "waitlist-storage",
  storage: createJSONStorage(() => sessionStorage),
  skipHydration: true,
};

const initialState: filterType = {
  schedule: { preset: "All" },
  people: [],
  product: { searchType: "NAME" },
};

const creator = (set: any, get: any) => ({
  filters: initialState as filterType,
  setFilter: (newFilter: filterType) =>
    set(() => ({
      filters: newFilter,
    })),
  removeNameChip: (name: string) => {
    console.log(get().filters);
    const people = get().filters.people.filter(
      (eachPerson: string) => eachPerson != name
    );
    console.log(people);
    console.log({
      ...get().filters,
      people,
    });
    set(() => ({
      filters: { ...get().filters, people },
    }));
  },
  resetStore: () => set(() => ({ filters: initialState })),
});

const useWaitlistStore = create<waitListStoreType>()(
  persist(creator, storageModule)
);
export default useWaitlistStore;
