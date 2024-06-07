import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Dropdown from "./custom/DropDown";
import { useActiveTab } from "../contexts/ActiveTabContextProvider";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { format } from "date-fns";
import SearchBar from "./custom/SearchBar";
import { twMerge } from "tailwind-merge";

const PeopleData = [
  { name: "John Doe", tag: "Payer" },
  { name: "Jane Smith", tag: "Attendee" },
  { name: "Michael Johnson", tag: "Payer" },
  { name: "Emily Davis", tag: "Attendee" },
  { name: "Robert Wilson", tag: "Payer" },
  { name: "Sophia Anderson", tag: "Attendee" },
  { name: "David Taylor", tag: "Payer" },
  { name: "Olivia Thomas", tag: "Attendee" },
  { name: "Joseph Moore", tag: "Payer" },
  { name: "Emma Martin", tag: "Attendee" },
  { name: "William Thompson", tag: "Payer" },
  { name: "Isabella Garcia", tag: "Attendee" },
  { name: "Daniel Martinez", tag: "Payer" },
  { name: "Ava Rodriguez", tag: "Attendee" },
  { name: "Matthew Hernandez", tag: "Payer" },
  { name: "Mia Gonzalez", tag: "Attendee" },
  { name: "Andrew Perez", tag: "Payer" },
  { name: "Abigail Sanchez", tag: "Attendee" },
  { name: "Joshua Ramirez", tag: "Payer" },
  { name: "Avery Torres", tag: "Attendee" },
];

const ServicesData = [
  { name: "Yoga Retreat", type: "Facility", status: "Public" },
  { name: "Photography Workshop", type: "ClassAppointment", status: "Private" },
  {
    name: "Fitness Center Membership",
    type: "PackMembership",
    status: "Public",
  },
  { name: "Art Supplies Bundle", type: "General", status: "Draft" },
  { name: "Cooking Masterclass", type: "Class", status: "Disable" },
  { name: "Wellness Spa Package", type: "PackMembership", status: "Private" },
  { name: "Outdoor Adventure Gear", type: "General", status: "Public" },
  {
    name: "Language Learning Course",
    type: "ClassAppointment",
    status: "Draft",
  },
  { name: "Meditation Studio", type: "Facility", status: "Private" },
  {
    name: "Personal Training Sessions",
    type: "ClassAppointment",
    status: "Public",
  },
  { name: "DIY Crafting Supplies", type: "General", status: "Disable" },
  { name: "Dance Studio Membership", type: "PackMembership", status: "Draft" },
  { name: "Music Production Workshop", type: "Class", status: "Private" },
  { name: "Luxury Retreat Center", type: "Facility", status: "Public" },
  { name: "Productivity App Subscription", type: "General", status: "Public" },
];

const FilterForm = () => {
  const [activeTab] = useActiveTab();
  const [personName, setPersonName] = useState("");
  const [filteredPeopleList, setFilteredPeopleList] =
    useState<{ name: string; tag: string }[]>(PeopleData);
  const [serviceName, setServiceName] = useState("");
  const [filteredServiceList, setFilteredServiceList] = useState<
    { name: string; type: string; status: string }[]
  >([]);

  const scheduleSchema = z.object({
    schedule: z.object({
      preset: z.string(),
      from: z.date(),
      to: z.date(),
    }),

    people: z.string().array(),

    product: z.object({
      searchType: z.string(),
      serviceName: z.string().array(),
      serviceTypeTag: z.string(),
      serviceStatusTag: z.string(),
    }),
  });

  type scheduleType = z.infer<typeof scheduleSchema>;

  const { control, handleSubmit, reset, register, getValues, watch } =
    useForm<scheduleType>({
      resolver: zodResolver(scheduleSchema),
      defaultValues: { product: { searchType: "NAME" } },
    });

  const submitHandler = (data: scheduleType) => {
    console.log(data);
  };

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
              render={({ field: { value, onBlur, onChange, ref } }) => {
                return (
                  <Dropdown
                    options={[
                      "All",
                      "This month",
                      "Last month",
                      "This quarter",
                      "2 quarter ago",
                      "This year",
                      "Last Year",
                    ]}
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    onBlur={onBlur}
                  />
                );
              }}
            />
          </div>
          <div className="flex items-center justify-between space-x-2 relative">
            <div className="space-y-1 flex-1">
              <label className="text-xs font-medium">From</label>
              <div className="rounded-md border-2 border-zinc-200 flex items-center px-3 py-1.5 space-x-3 cursor-pointer shadow-sm">
                <CalendarBlank size={20} />
                <div className="text-sm font-medium">
                  {"" ? format("", "dd MMMM yyyy") : "Pick a date"}
                </div>
              </div>
              {/* <Controller
                name="schedule.from"
                control={control}
                render={({ field: { name, value, onBlur, onChange, ref } }) => {
                  return (
                    <DatePicker
                      name={name}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  );
                }}
              /> */}
            </div>
            <div className="space-y-1 flex-1">
              <label className="text-xs font-medium">To</label>
              <div className="rounded-md border-2 border-zinc-200 flex items-center px-3 py-1.5 space-x-3 cursor-pointer shadow-sm">
                <CalendarBlank size={20} />
                <div className="text-sm font-medium">
                  {"" ? format("", "dd MMMM yyyy") : "Pick a date"}
                </div>
              </div>
              {/* <Controller
                name="schedule.to"
                control={control}
                render={({ field: { name, value, onBlur, onChange, ref } }) => {
                  return (
                    <DatePicker
                      name={name}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  );
                }}
              /> */}
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
                  render={({ field: { value, onBlur, onChange, ref } }) => {
                    return (
                      <Dropdown
                        options={[
                          "Show all service type",
                          "Class",
                          "Appointment",
                          "Facility",
                          "Class Pack",
                          "Membership",
                          "General items",
                        ]}
                        value={value}
                        onChange={onChange}
                        ref={ref}
                        onBlur={onBlur}
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
                  render={({ field: { value, onBlur, onChange, ref } }) => {
                    return (
                      <Dropdown
                        options={[
                          "Show all",
                          "Public",
                          "Private",
                          "Disable",
                          "Draft",
                        ]}
                        value={value}
                        onChange={onChange}
                        ref={ref}
                        onBlur={onBlur}
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
