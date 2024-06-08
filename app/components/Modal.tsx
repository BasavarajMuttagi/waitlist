import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ActiveTabContextProvider from "../contexts/ActiveTabContextProvider";
import FilterForm from "./FilterForm";
import ModalTabs from "./ModalTabs";
import FormActionButtons from "./FormActionButtons";
import { filterSchema, filterType } from "../zod/schemas";
import useWaitlistStore from "../store";

const Modal = ({ setShowModal }: { setShowModal: (data: boolean) => void }) => {
  const { setFilter, filters } = useWaitlistStore();
  const {
    control,
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm<filterType>({
    resolver: zodResolver(filterSchema),
    defaultValues: filters,
  });

  const submitHandler = (data: filterType) => {
    setFilter(data);
    setShowModal(false);
  };

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full absolute inset-x-5  inset-y-[20%] z-20 rounded-md drop-shadow-lg border max-w-[320px] h-[450px] sm:max-w-[600px] sm:h-[400px] sm:inset-x-[265px] sm:inset-y-52"
    >
      <div className="flex flex-col sm:flex-row sm:h-full">
        <ActiveTabContextProvider>
          <ModalTabs />
          <FilterForm control={control} watch={watch} register={register} />
        </ActiveTabContextProvider>
      </div>
      <FormActionButtons reset={reset} setShowModal={setShowModal} />
    </form>
  );
};

export default Modal;
