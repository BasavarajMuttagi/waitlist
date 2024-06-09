"use client";
import ColumnHeader from "./ColumnHeader";
import {
  Calendar,
  Circle,
  Dot,
  Hash,
  User,
} from "@phosphor-icons/react/dist/ssr";
import StatusBadge from "./StatusBadge";
import { motion } from "framer-motion";
import useWaitlistStore, { Person } from "../store";
import { useEffect, useState } from "react";
import Pagination from "./custom/Pagination";
import { format } from "date-fns";

const WaitListTable = () => {
  const { columnFilters, peopleData, filters, servicesData } =
    useWaitlistStore();
  const [filteredPeopleList, setFilteredPeopleList] = useState(peopleData);
  const getInitialColumnState = (isColumnVisible: boolean) => ({
    opacity: isColumnVisible ? 1 : 0,
    width: isColumnVisible ? 1 : 0,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = filteredPeopleList.length;

  function getItemsForPage<T>(
    items: T[],
    currentPage: number,
    itemsPerPage: number
  ): T[] {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }

  const filterTableData = () => {
    const { schedule, people, product } = filters;
    let result: Person[] = peopleData;

    if (schedule.preset !== "All") {
      result = result.filter((eachPerson) => {
        const current = new Date(eachPerson.createdOn);
        if (
          current >= new Date(schedule.from!) &&
          current <= new Date(schedule.to!)
        ) {
          return true;
        }

        return false;
      });
    }
    if (people?.length! > 0) {
      result = result.filter((eachPerson) => {
        if (people?.includes(eachPerson.payer)) {
          return eachPerson;
        }
      });
    }

    if (
      product.searchType == "NAME" &&
      product.serviceName &&
      product.serviceName.length > 0
    ) {
      result = result.filter((eachPerson) => {
        if (product.serviceName?.includes(eachPerson.services)) {
          return eachPerson;
        }
      });
    }

    if (
      product.searchType == "TAGS" &&
      product.serviceStatusTag !== "Show all" &&
      product.serviceTypeTag !== "Show all service type"
    ) {
      result = result.filter(
        (eachPerson) =>
          eachPerson.serviceType == product.serviceTypeTag &&
          eachPerson.serviceStatus == product.serviceStatusTag
      );
    }

    setFilteredPeopleList(result);
  };
  const itemsOnPage = getItemsForPage(
    filteredPeopleList,
    currentPage,
    itemsPerPage
  );

  useEffect(() => {
    filterTableData();
  }, [filters]);

  return (
    <div>
      <div
        className="border border-slate-200 rounded-md  h-[50vh] overflow-x-auto"
        style={{ scrollbarWidth: "thin" }}
      >
        <table className="w-full">
          <thead className="bg-slate-100 border-b border-slate-200 sticky top-0 z-10">
            <tr className="text-nowrap">
              <motion.th className="p-2 text-left">
                <motion.input
                  type="checkbox"
                  className="h-4 w-4 checked:appearance-none  bg-slate-500 rounded-sm"
                />
              </motion.th>
              <motion.th
                initial={getInitialColumnState(columnFilters.CreatedOn!)}
                animate={getInitialColumnState(columnFilters.CreatedOn!)}
                className="p-2"
              >
                <ColumnHeader>
                  <Calendar size={18} />
                  <span>Created On</span>
                </ColumnHeader>
              </motion.th>
              <motion.th
                initial={getInitialColumnState(columnFilters.Payer!)}
                animate={getInitialColumnState(columnFilters.Payer!)}
                className="p-2 text-left"
              >
                <ColumnHeader>
                  <User size={18} />
                  <span>Payer</span>
                </ColumnHeader>
              </motion.th>
              <motion.th
                initial={getInitialColumnState(columnFilters.Status!)}
                animate={getInitialColumnState(columnFilters.Status!)}
                className="p-2 text-left"
              >
                <ColumnHeader>
                  <div className="relative">
                    <Circle size={18} />
                    <Dot
                      weight="bold"
                      size={18}
                      className="absolute top-0 left-0"
                    />
                  </div>
                  <span>Status</span>
                </ColumnHeader>
              </motion.th>
              <motion.th
                initial={getInitialColumnState(columnFilters.Email!)}
                animate={getInitialColumnState(columnFilters.Email!)}
                className="p-2 text-left"
              >
                <ColumnHeader>
                  <Hash size={18} />
                  <span>Email</span>
                </ColumnHeader>
              </motion.th>
              <motion.th
                initial={getInitialColumnState(columnFilters.Phone!)}
                animate={getInitialColumnState(columnFilters.Phone!)}
                className="p-2 text-left"
              >
                <ColumnHeader>
                  <Hash size={18} />
                  <span>Payer Phone</span>
                </ColumnHeader>
              </motion.th>
              <motion.th
                initial={getInitialColumnState(columnFilters.Service!)}
                animate={getInitialColumnState(columnFilters.Service!)}
                className="p-2 text-left"
              >
                <ColumnHeader>
                  <Hash size={18} />
                  <span>Services</span>
                </ColumnHeader>
              </motion.th>
              <motion.th
                initial={getInitialColumnState(columnFilters.Scheduled!)}
                animate={getInitialColumnState(columnFilters.Scheduled!)}
                className="p-2 text-left"
              >
                <ColumnHeader>
                  <Calendar size={18} />
                  <span>Scheduled</span>
                </ColumnHeader>
              </motion.th>
            </tr>
          </thead>

          <tbody className="text-slate-700 font-medium text-xs">
            {itemsOnPage.map(
              (
                {
                  id,
                  createdOn,
                  email,
                  payer,
                  payerPhone,
                  scheduled,
                  services,
                  status,
                },
                key
              ) => {
                return (
                  <tr
                    key={id}
                    className="border-b border-slate-200 text-nowrap"
                  >
                    <motion.td initial={true} className="p-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 checked:appearance-none  bg-slate-500 rounded-sm"
                      />
                    </motion.td>
                    <motion.td
                      initial={getInitialColumnState(columnFilters.CreatedOn!)}
                      animate={getInitialColumnState(columnFilters.CreatedOn!)}
                      className="p-2"
                    >
                      {createdOn}
                    </motion.td>
                    <motion.td
                      initial={getInitialColumnState(columnFilters.Payer!)}
                      animate={getInitialColumnState(columnFilters.Payer!)}
                      className="p-2"
                    >
                      {payer}
                    </motion.td>
                    <motion.td
                      initial={getInitialColumnState(columnFilters.Status!)}
                      animate={getInitialColumnState(columnFilters.Status!)}
                      className="p-2"
                    >
                      <StatusBadge type={status} />
                    </motion.td>
                    <motion.td
                      initial={getInitialColumnState(columnFilters.Email!)}
                      animate={getInitialColumnState(columnFilters.Email!)}
                      className="p-2"
                    >
                      {email}
                    </motion.td>
                    <motion.td
                      initial={getInitialColumnState(columnFilters.Phone!)}
                      animate={getInitialColumnState(columnFilters.Phone!)}
                      className="p-2"
                    >
                      {payerPhone}
                    </motion.td>
                    <motion.td
                      initial={getInitialColumnState(columnFilters.Service!)}
                      animate={getInitialColumnState(columnFilters.Service!)}
                      className="p-2"
                    >
                      {services}
                    </motion.td>
                    <motion.td
                      initial={getInitialColumnState(columnFilters.Scheduled!)}
                      animate={getInitialColumnState(columnFilters.Scheduled!)}
                      className="p-2"
                    >
                      {format(new Date(scheduled), "EEE, dd MMM yyyy h:mm a")}
                    </motion.td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default WaitListTable;
