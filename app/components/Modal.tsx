import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ActiveTabContextProvider from "../contexts/ActiveTabContextProvider";
import FilterForm from "./FilterForm";
import ModalTabs from "./ModalTabs";
import FormActionButtons from "./FormActionButtons";
import { filterSchema, filterType } from "../zod/schemas";

const Modal = () => {
  const { control, handleSubmit, reset, register, watch } = useForm<filterType>(
    {
      resolver: zodResolver(filterSchema),
      defaultValues: { product: { searchType: "NAME" } },
    }
  );

  const submitHandler = (data: filterType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-[600px] h-[400px] absolute inset-x-[265px] inset-y-52 w-full  z-20 rounded-md drop-shadow-lg border"
    >
      <div className="flex h-full">
        <ActiveTabContextProvider>
          <ModalTabs />
          <FilterForm control={control} watch={watch} register={register} />
        </ActiveTabContextProvider>
      </div>
      <FormActionButtons reset={reset} />
    </form>
  );
};

export default Modal;
