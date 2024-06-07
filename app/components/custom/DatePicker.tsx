"use client";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { useState } from "react";
import { RefCallBack } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const DateGrid = ({
  name,
  onChange,
  value,
  ref,
  onBlur,
}: {
  name: string;
  onChange: (data: Date) => void;
  value: Date;
  ref?: RefCallBack;
  onBlur?: () => void;
}) => {
  let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(value);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  console.log(firstDayCurrentMonth);
  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div
      id={name}
      ref={ref}
      onBlur={onBlur}
      className="w-72  rounded-md border-2 border-slate-200 p-2 bg-white shrink-0"
    >
      <div className="flex justify-between items-center">
        <div className="p-3 border rounded-lg w-fit">
          <CaretLeft
            size={20}
            onClick={previousMonth}
            className="cursor-pointer"
          />
        </div>
        <div>
          <p className="font-semibold">{format(currentMonth, "MMMM yyyy")}</p>
        </div>
        <div className="p-3 border rounded-lg w-fit">
          <CaretRight
            size={20}
            onClick={nextMonth}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="text-gray-500 grid grid-cols-7 mt-10 text-center">
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <div className="grid grid-cols-7 mt-3 text-sm gap-y-2">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={twMerge(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "py-1.5"
            )}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedDay(day), onChange(day);
              }}
              className={clsx(
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-900",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
                !isEqual(day, selectedDay) && "hover:bg-gray-200",
                (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-md"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateGrid;
