import React, { InputHTMLAttributes } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { columnFilterSchema, columnFilterType } from "../zod/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import useWaitlistStore from "../store";

const HideColumnsModal = ({
  setShowModal,
}: {
  setShowModal: (data: boolean) => void;
}) => {
  const { columnFilters, setColumnFilter, resetColumnFilters } =
    useWaitlistStore();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<columnFilterType>({
    resolver: zodResolver(columnFilterSchema),
    defaultValues: columnFilters,
  });

  const submitHandler = (data: columnFilterType) => {
    setColumnFilter(data);
    setShowModal(false);
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-[300px] rounded-md space-y-4 absolute z-30 bg-white py-2 px-5 drop-shadow w-full top-[35%] right-5 sm:top-[30%]"
    >
      <div className="space-y-2">
        <div className="text-[16px] font-medium text-black">Edit Columns</div>
        <div className="text-sm font-normal text-slate-700">
          Select the columns to rearrange
        </div>
      </div>
      <EachRow text="Order Created On" name="CreatedOn" register={register} />
      <EachRow text="Payer" name="Payer" register={register} />
      <EachRow text="Status" name="Status" register={register} />
      <EachRow text="Email" name="Email" register={register} />
      <EachRow text="Payer Phone" name="Phone" register={register} />
      <EachRow text="Service" name="Service" register={register} />
      <EachRow text="Scheduled" name="Scheduled" register={register} />

      <div className="flex justify-between items-center">
        <button
          className="px-2 py-1 rounded-md border border-slate-200 text-slate-950"
          onClick={() => {
            resetColumnFilters(), setShowModal(false);
          }}
        >
          Reset to Default
        </button>
        <button
          type="submit"
          className="px-2 py-1 rounded-md text-white bg-black"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

export default HideColumnsModal;

const EachRow = (
  props: InputHTMLAttributes<HTMLInputElement> & {
    text: string;
    register: UseFormRegister<columnFilterType>;
    name:
      | "CreatedOn"
      | "Payer"
      | "Status"
      | "Email"
      | "Phone"
      | "Service"
      | "Scheduled";
  }
) => {
  const { text, register, name } = props;

  return (
    <div className="flex items-center space-x-2">
      <input
        {...register(name)}
        type="checkbox"
        className="h-4 w-4 rounded-md checked:accent-black"
      />
      <div className="p-2 rounded-md border border-slate-200 text-sm font-medium text-slate-700 w-full">
        {text}
      </div>
    </div>
  );
};
