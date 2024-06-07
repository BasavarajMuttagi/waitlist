import ActiveTabContextProvider from "../contexts/ActiveTabContextProvider";
import FilterForm from "./FilterForm";
import ModalTabs from "./ModalTabs";

const Modal = () => {
  return (
    <div className="max-w-[600px] h-[400px] absolute inset-x-[265px] inset-y-52 w-full  z-20 rounded-md drop-shadow-lg border">
      <div className="flex h-full">
        <ActiveTabContextProvider>
          <ModalTabs />
          <FilterForm />
        </ActiveTabContextProvider>
      </div>
      <FormActionButtons />
    </div>
  );

  function FormActionButtons() {
    return (
      <div className="flex items-center justify-end p-2  border-t border-slate-200 bg-white rounded-b-md">
        <div className="flex items-center space-x-4">
          <button className="text-[14px] font-medium text-zinc-950 bg-zinc-100 rounded-md drop-shadow px-3 py-2">
            Reset to Default
          </button>
          <button
            className="text-[14px] font-medium text-white bg-black rounded-md drop-shadow px-4 py-2"
            type="submit"
          >
            Apply
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
