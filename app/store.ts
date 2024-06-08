import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
import { columnFilterType, filterType } from "./zod/schemas";
import { PeopleData, ServicesData } from "./Data/AppData";
import { startOfDay } from "date-fns";
type Service = {
  id: string;
  name: string;
  type: string;
  status: string;
};

export type Person = {
  id: string;
  createdOn: string;
  payer: string;
  status: string;
  email: string;
  payerPhone: string;
  services: string;
  scheduled: string;
  serviceType: string;
  serviceStatus: string;
};

type waitListStoreType = {
  filters: filterType;
  columnFilters: columnFilterType;
  peopleData: Person[];
  servicesData: Service[];
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
  schedule: {
    preset: "All",
    from: startOfDay("1970-01-01T00:00:00.000Z"),
    to: startOfDay(new Date()),
  },
  people: [],
  product: {
    searchType: "NAME",
    serviceName: [],
    serviceStatusTag: "",
    serviceTypeTag: "",
  },
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
  peopleData: PeopleData,
  servicesData: ServicesData,
  setFilter: (newFilter: filterType) =>
    set(() => ({
      filters: newFilter,
    })),

  setColumnFilter: (newFilter: columnFilterType) =>
    set(() => ({
      columnFilters: newFilter,
    })),

  removeNameChip: (name: string) => {
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
