import { useEffect, useState } from "react";
import {
  Control,
  Controller,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import { useActiveTab } from "../contexts/ActiveTabContextProvider";
import SearchBar from "./custom/SearchBar";
import { twMerge } from "tailwind-merge";
import { filterType } from "../zod/schemas";
import Dropdown from "./custom/Dropdown";
import { ScheduleData, ServiceType, Status } from "../Data/AppData";
import useWaitlistStore from "../store";
import {
  endOfMonth,
  endOfQuarter,
  endOfYear,
  format,
  startOfDay,
  startOfMonth,
  startOfQuarter,
  startOfYear,
  subMonths,
  subQuarters,
  subYears,
} from "date-fns";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

const FilterForm = ({
  register,
  control,
  watch,
  setValue,
}: {
  register: UseFormRegister<filterType>;
  control: Control<filterType>;
  watch: UseFormWatch<filterType>;
  setValue: UseFormSetValue<filterType>;
}) => {
  const { peopleData, servicesData, setFilter, filters } = useWaitlistStore();
  const [activeTab] = useActiveTab();
  const [personName, setPersonName] = useState("");
  const [filteredPeopleList, setFilteredPeopleList] = useState(peopleData);
  const [serviceName, setServiceName] = useState("");
  const [filteredServiceList, setFilteredServiceList] = useState<
    { name: string; type: string; status: string }[]
  >([]);

  const [dateRange, setDateRange] = useState<{
    preset: string;
    from: string;
    to: string;
  }>();

  const filterPeople = (term: string = "") => {
    setPersonName(term);
    setFilteredPeopleList([
      ...peopleData.filter((person) =>
        person.payer.toLowerCase().includes(term.toLowerCase())
      ),
    ]);
  };

  const filterService = (term: string = "") => {
    setServiceName(term);
    setFilteredServiceList([
      ...servicesData.filter((service) =>
        service.name.toLowerCase().includes(term.toLowerCase())
      ),
    ]);
  };

  useEffect(() => {
    const data = getDateRange(watch("schedule.preset"));
    setDateRange(data);
    setValue("schedule.from", data.from);
    setValue("schedule.to", data.to);
  }, [watch("schedule.preset")]);

  useEffect(() => {}, [watch("schedule.preset")]);
  return (
    <div className="bg-white p-2  sm:rounded-tr-md  sm:flex-1">
      {activeTab === "SCHEDULE" && (
        <div className="text-slate-700 flex-1 p-1 space-y-12">
          <div className="space-y-1">
            <label className="text-xs font-medium">Show orders for</label>
            <Controller
              name="schedule.preset"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <Dropdown
                    options={ScheduleData}
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
          </div>
          <div className="space-y-4  sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0">
            <div className="space-y-1 flex-1">
              <div>
                <div className="rounded-md border-2 border-zinc-200 flex items-center px-3 py-1.5 space-x-3 cursor-pointer shadow-sm">
                  <CalendarBlank size={20} />
                  <div className="text-sm font-medium">
                    {dateRange?.from
                      ? format(dateRange?.from, "dd MMM yyyy")
                      : "Pick a date"}
                  </div>
                  <input
                    type="date"
                    {...register("schedule.from")}
                    value={dateRange?.from}
                    className="hidden"
                  />
                </div>
                <div className="absolute z-30 top-[50%] left-[45%]"></div>
              </div>
            </div>
            <div className="space-y-1 flex-1">
              <div>
                <div className="rounded-md border-2 border-zinc-200 flex items-center px-3 py-1.5 space-x-3 cursor-pointer shadow-sm">
                  <CalendarBlank size={20} />
                  <div className="text-sm font-medium">
                    {dateRange?.from
                      ? format(dateRange?.to, "dd MMM yyyy")
                      : "Pick a date"}
                  </div>
                  <input
                    type="date"
                    {...register("schedule.to")}
                    value={dateRange?.to}
                    className="hidden"
                  />
                </div>
                <div className="absolute z-30 top-[50%] left-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "PEOPLE" && (
        <div className="flex-1 p-1 space-y-4 py-2">
          <SearchBar initialValue="" onSearch={filterPeople} />
          {filteredPeopleList.length > 0 && personName && (
            <p className="text-slate-700 text-xs font-normal">{`Showing  ${filteredPeopleList.length} results matching ‘${personName}’`}</p>
          )}
          <div>
            <ul
              className="space-y-2 overflow-y-auto max-h-[calc(450px-256px)] h-full sm:max-h-[calc(400px-80px)]"
              style={{
                scrollbarWidth: "thin",
              }}
            >
              {filteredPeopleList.map(({ payer, id, status }, index) => (
                <li key={id}>
                  <label
                    className="space-x-3 flex items-center cursor-pointer"
                    htmlFor={id}
                  >
                    <input
                      {...register("people")}
                      type="checkbox"
                      value={payer}
                      id={id}
                      className="checked:appearance-none w-4 h-4 bg-black rounded-sm"
                    />
                    <div className="font-normal text-gray-700 text-sm">
                      {payer}
                    </div>
                    <div className="bg-slate-100 rounded-[4px] text-[10px] py-[2px] px-[8px] font-medium">
                      {"Payer"}
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === "PRODUCT" && (
        <div className="flex-1 p-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-x-4 flex items-center">
              <input
                value={"NAME"}
                type="radio"
                id="product-name"
                className="h-4 w-4 checked:accent-black"
                {...register("product.searchType")}
              />
              <label htmlFor="product-name" className="text-sm">
                Search by name
              </label>
            </div>
            <div className="space-x-4 flex items-center">
              <input
                value={"TAGS"}
                type="radio"
                id="product-tag"
                className="h-4 w-4 checked:accent-black"
                {...register("product.searchType")}
              />
              <label htmlFor="product-tag" className="text-sm">
                Search by tags
              </label>
            </div>
          </div>
          {watch("product.searchType") === "NAME" && (
            <>
              <SearchBar initialValue="" onSearch={filterService} />
              {filteredServiceList.length > 0 && serviceName && (
                <p className="text-slate-700 text-sm font-normal">{`Showing  ${filteredServiceList.length} results matching ‘${serviceName}’`}</p>
              )}
              <div>
                <ul
                  className="space-y-2 overflow-y-auto max-h-[calc(450px-284px)] sm:max-h-[calc(400px-110px)]"
                  style={{
                    scrollbarWidth: "thin",
                  }}
                >
                  {filteredServiceList.map(({ name, status, type }, index) => (
                    <li key={name + index}>
                      <label
                        className="space-x-3 flex items-center cursor-pointer justify-between"
                        htmlFor={name + index}
                      >
                        <div className="flex items-center space-x-2">
                          <input
                            {...register("product.serviceName")}
                            type="checkbox"
                            value={name}
                            id={name + index}
                            className="checked:appearance-none w-4 h-4 bg-black rounded-sm"
                          />
                          <div className="font-normal text-gray-700 text-sm">
                            {name}
                          </div>
                        </div>
                        <div className="space-x-2 flex items-center">
                          <div className="bg-slate-100 rounded-[4px] text-[10px] py-[2px] px-[8px] font-medium capitalize">
                            {type}
                          </div>
                          <div
                            className={twMerge(
                              "bg-slate-100 rounded-[4px] text-[10px] py-[2px] px-[8px] font-medium capitalize",
                              status == "Private"
                                ? "text-amber-500"
                                : status == "Public"
                                ? "text-green-500"
                                : status == "Draft"
                                ? " text-violet-500"
                                : ""
                            )}
                          >
                            {status}
                          </div>
                        </div>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {watch("product.searchType") === "TAGS" && (
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-medium">Service Type</label>
                <Controller
                  name="product.serviceTypeTag"
                  control={control}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <Dropdown
                        options={ServiceType}
                        value={value}
                        onChange={onChange}
                      />
                    );
                  }}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium">Status</label>
                <Controller
                  name="product.serviceStatusTag"
                  control={control}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <Dropdown
                        options={Status}
                        value={value}
                        onChange={onChange}
                      />
                    );
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterForm;

type DateRangeOption =
  | "All"
  | "This month"
  | "Last month"
  | "This quarter"
  | "2 quarters ago"
  | "This year"
  | "Last Year";

function getDateRange(option: DateRangeOption) {
  const today = new Date();

  switch (option) {
    case "All":
      return {
        preset: option,
        from: format(
          startOfDay("1970-01-01T00:00:00.000Z").toString(),
          "yyyy-MM-dd"
        ),
        to: format(startOfDay(new Date()).toString(), "yyyy-MM-dd"),
      };
    case "This month":
      return {
        preset: option,
        from: format(startOfMonth(today).toString(), "yyyy-MM-dd"),
        to: format(endOfMonth(today).toString(), "yyyy-MM-dd"),
      };
    case "Last month":
      return {
        preset: option,
        from: format(
          startOfMonth(subMonths(today, 1)).toString(),
          "yyyy-MM-dd"
        ),
        to: format(endOfMonth(subMonths(today, 1)).toString(), "yyyy-MM-dd"),
      };
    case "This quarter":
      return {
        preset: option,
        from: format(startOfQuarter(today).toString(), "yyyy-MM-dd"),
        to: format(endOfQuarter(today).toString(), "yyyy-MM-dd"),
      };
    case "2 quarters ago":
      return {
        preset: option,
        from: format(
          startOfQuarter(subQuarters(today, 2)).toString(),
          "yyyy-MM-dd"
        ),
        to: format(
          endOfQuarter(subQuarters(today, 2)).toString(),
          "yyyy-MM-dd"
        ),
      };
    case "This year":
      return {
        preset: option,
        from: format(startOfYear(today).toString(), "yyyy-MM-dd"),
        to: format(endOfYear(today).toString(), "yyyy-MM-dd"),
      };
    case "Last Year":
      return {
        preset: option,
        from: format(startOfYear(subYears(today, 1)).toString(), "yyyy-MM-dd"),
        to: format(endOfYear(subYears(today, 1)).toString(), "yyyy-MM-dd"),
      };
    default:
      throw new Error("Invalid date range option");
  }
}
