import { useState } from "react";
import {
  Control,
  Controller,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import { useActiveTab } from "../contexts/ActiveTabContextProvider";
import SearchBar from "./custom/SearchBar";
import { twMerge } from "tailwind-merge";
import DatePickerWithLabel from "./DatePickerWithLabel";
import DatePicker from "./custom/DatePicker";
import { filterType } from "../zod/schemas";
import Dropdown from "./custom/Dropdown";
import {
  PeopleData,
  ScheduleData,
  ServicesData,
  ServiceType,
  Status,
} from "../Data/AppData";

const FilterForm = ({
  register,
  control,
  watch,
}: {
  register: UseFormRegister<filterType>;
  control: Control<filterType>;
  watch: UseFormWatch<filterType>;
}) => {
  const [activeTab] = useActiveTab();
  const [personName, setPersonName] = useState("");
  const [filteredPeopleList, setFilteredPeopleList] =
    useState<{ name: string; tag: string }[]>(PeopleData);
  const [serviceName, setServiceName] = useState("");
  const [filteredServiceList, setFilteredServiceList] = useState<
    { name: string; type: string; status: string }[]
  >([]);

  const filterPeople = (term: string = "") => {
    setPersonName(term);
    setFilteredPeopleList([
      ...PeopleData.filter((person) =>
        person.name.toLowerCase().includes(term.toLowerCase())
      ),
    ]);
  };

  const filterService = (term: string = "") => {
    setServiceName(term);
    setFilteredServiceList([
      ...ServicesData.filter((service) =>
        service.name.toLowerCase().includes(term.toLowerCase())
      ),
    ]);
  };

  return (
    <div className="bg-white p-2 flex-1 rounded-tr-md">
      {activeTab === "SCHEDULE" && (
        <div className="text-slate-700 flex-1 p-1 space-y-12">
          <div className="space-y-1">
            <label className="text-xs font-medium">Show orders for</label>
            <Controller
              name="schedule.preset"
              control={control}
              defaultValue="This month"
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
          <div className="flex items-center justify-between space-x-2">
            <div className="space-y-1 flex-1">
              <DatePickerWithLabel
                label="From"
                value={watch("schedule.from") as Date}
              >
                <Controller
                  name="schedule.from"
                  control={control}
                  render={({ field: { name, value, onChange } }) => {
                    return (
                      <DatePicker
                        name={name}
                        value={value}
                        onChange={onChange}
                      />
                    );
                  }}
                />
              </DatePickerWithLabel>
            </div>
            <div className="space-y-1 flex-1">
              <DatePickerWithLabel
                label="To"
                value={watch("schedule.to") as Date}
              >
                <Controller
                  name="schedule.to"
                  control={control}
                  render={({ field: { name, value, onChange } }) => {
                    return (
                      <DatePicker
                        name={name}
                        value={value}
                        onChange={onChange}
                      />
                    );
                  }}
                />
              </DatePickerWithLabel>
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
              className="space-y-2 overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
                maxHeight: "calc(400px - 80px)",
              }}
            >
              {filteredPeopleList.map(({ name, tag }, index) => (
                <li key={name + index}>
                  <label
                    className="space-x-3 flex items-center cursor-pointer"
                    htmlFor={name + index}
                  >
                    <input
                      {...register("people")}
                      type="checkbox"
                      value={name}
                      id={name + index}
                      className="checked:appearance-none w-4 h-4 bg-black rounded-sm"
                    />
                    <div className="font-normal text-gray-700 text-sm">
                      {name}
                    </div>
                    <div className="bg-slate-100 rounded-[4px] text-[10px] py-[2px] px-[8px] font-medium">
                      {tag}
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
                  className="space-y-2 overflow-y-auto"
                  style={{
                    scrollbarWidth: "thin",
                    maxHeight: "calc(400px - 110px)",
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
                  defaultValue="Show all service type"
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
                  defaultValue="Show all"
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
