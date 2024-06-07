import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
import { columnFilterType, filterType } from "./zod/schemas";

type waitListStoreType = {
  filters: filterType;
  columnFilters: columnFilterType;
  setFilter: (newFilter: filterType) => void;
  resetStore: () => void;
  removeNameChip: (name: string) => void;
  resetColumnFilters: () => void;
  setColumnFilter: (newFilter: columnFilterType) => void;
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

const columnFiltersInitialState: columnFilterType = {
  CreatedOn: true,
  Email: true,
  Payer: true,
  Phone: true,
  Scheduled: true,
  Service: true,
  Status: true,
};

const creator = (set: any, get: any) => ({
  filters: initialState,
  columnFilters: columnFiltersInitialState,
  setFilter: (newFilter: filterType) =>
    set(() => ({
      filters: newFilter,
    })),

  setColumnFilter: (newFilter: columnFilterType) =>
    set(() => ({
      columnFilters: newFilter,
    })),

  removeNameChip: (name: string) => {
    console.log(get().filters);
    const people = get().filters.people.filter(
      (eachPerson: string) => eachPerson != name
    );

    set(() => ({
      filters: { ...get().filters, people },
    }));
  },
  resetStore: () => set(() => ({ filters: initialState })),
  resetColumnFilters: () =>
    set(() => ({ columnFilters: columnFiltersInitialState })),
});

const useWaitlistStore = create<waitListStoreType>()(
  persist(creator, storageModule)
);
export default useWaitlistStore;
